"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Mail,
  MapPin,
  Clock,
  Phone,
  User,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://barberlinkbackend-production.up.railway.app";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  service: string;
  message: string;
};

type ContactResponse = {
  success: boolean;
  message: string;
  data?: unknown;
};

type ContactFormProps = {
  variant?: "full" | "compact";
  showServiceSelect?: boolean;
  onSuccess?: () => void;
};

const SERVICES = [
  {
    value: "web-development",
    label: "Web Development",
    description: "Modern, high-performance websites.",
  },
  {
    value: "app-development",
    label: "App Development",
    description: "Native and cross-platform mobile applications.",
  },
  {
    value: "ai-services",
    label: "AI Development and Services",
    description: "Machine learning and automation solutions.",
  },
  {
    value: "digital-marketing",
    label: "Digital Marketing",
    description: "Strategic marketing campaigns to grow your brand online.",
  },
  {
    value: "seo",
    label: "Search Engine Optimization",
    description: "Improve rankings & organic traffic.",
  },
];

const SUBJECTS = [
  "General Inquiry",
  "Sales Question",
  "Technical Support",
  "Partnership Opportunity",
  "Billing Issue",
  "Feature Request",
  "Other",
];

export function ContactForm({
  variant = "full",
  showServiceSelect = false,
  onSuccess,
}: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>();

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ContactResponse = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setStatus("success");
      setOpen(true);
      reset();

      if (onSuccess) {
        onSuccess();
      }

      setTimeout(() => {
        setOpen(false);
        setStatus("idle");
      }, 3000);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again later."
      );
    }
  };

  if (variant === "compact") {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-500"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-500"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {showServiceSelect && (
            <Select
              value={selectedService}
              onValueChange={(value) => setValue("service", value)}
            >
              <SelectTrigger className="h-12 bg-zinc-950 border-zinc-800 text-white">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                {SERVICES.map((s) => (
                  <SelectItem
                    key={s.value}
                    value={s.value}
                    className="focus:bg-zinc-800 focus:text-white"
                  >
                    <span className="font-medium">{s.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <Textarea
            rows={5}
            placeholder="Tell us about your project..."
            {...register("message", { required: "Message is required" })}
            className="bg-zinc-950 border-zinc-800 text-white placeholder:text-gray-500 resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
              <AlertCircle size={16} />
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full h-12 bg-amber-400 hover:bg-amber-500 text-black font-bold"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2" size={18} />
              </>
            )}
          </Button>
        </form>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md text-center">
            <DialogHeader>
              <DialogTitle className="flex flex-col items-center gap-4">
                <CheckCircle size={52} className="text-green-500" />
                Message Sent!
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground">
              Thanks for reaching out. We'll contact you shortly.
            </p>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-8 md:px-10 py-6">
        <p className="text-muted-foreground mb-10 max-w-lg italic">
          Have questions or need support? Our team is ready to help. Drop us a
          message, and we'll get back to you shortly.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="bg-background"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="bg-background"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", { required: "Phone is required" })}
                className="bg-background"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <Input
                placeholder="Company Name"
                {...register("company", { required: "Company is required" })}
                className="bg-background"
              />
              {errors.company && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.company.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Input
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className="bg-background"
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>

          {showServiceSelect && (
            <Select
              value={selectedService}
              onValueChange={(value) => setValue("service", value)}
            >
              <SelectTrigger className="h-12 text-left bg-background text-foreground border-input">
                <SelectValue placeholder="Select a Service" />
              </SelectTrigger>
              <SelectContent className="bg-background text-foreground border-border">
                {SERVICES.map((s) => (
                  <SelectItem
                    key={s.value}
                    value={s.value}
                    className="focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{s.label}</span>
                      <span className="text-xs text-muted-foreground">
                        {s.description}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <Textarea
            rows={5}
            placeholder="Tell us about your project..."
            {...register("message", { required: "Message is required" })}
            className="bg-background h-40 resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}

          {errorMessage && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-lg">
              <AlertCircle size={16} />
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="h-12 w-full sm:w-auto px-10 bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2" size={18} />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export function ContactInfo() {
  return (
    <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl h-full shadow-lg flex flex-col justify-between">
      <div className="space-y-8 divide-y divide-border/20">
        <h3 className="text-xl font-semibold pb-5">Contact Information</h3>

        <div className="pt-6 space-y-6">
          <InfoItem
            icon={<Phone />}
            title="Phone"
            value="+92 309 7325208"
            link="tel:+923097325208"
          />
          <InfoItem
            icon={<Mail />}
            title="Email"
            value="zeemalik0110@gmail.com"
            link="mailto:zeemalik0110@gmail.com"
          />
          <InfoItem
            icon={<MapPin />}
            title="Address"
            value="House 4/5, Street 62 , near Sharief Park Multan Road Lahore"
          />
          <InfoItem
            icon={<Clock />}
            title="Working Hours"
            value="Mon – Fri, 9am – 6pm CET"
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-10">
        We usually respond within 24 hours.
      </p>
    </div>
  );
}

function InfoItem({
  icon,
  title,
  value,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="text-primary">{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        {link ? (
          <a href={link} className="font-medium hover:text-primary">
            {value}
          </a>
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}