"use client";

import { FormEvent, useMemo, useState } from "react";
import { FiRefreshCw, FiSend } from "react-icons/fi";

const challenges = [
  {
    question: "What is 5 + 3?",
    answer: "8",
    choices: ["7", "5", "9", "8"],
  },
  {
    question: "What is 4 + 6?",
    answer: "10",
    choices: ["8", "10", "12", "9"],
  },
  {
    question: "What is 9 - 2?",
    answer: "7",
    choices: ["6", "7", "8", "5"],
  },
] as const;

export default function ContactSection() {
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [status, setStatus] = useState("");

  const challenge = challenges[challengeIndex];
  const mailSubject = useMemo(
    () => encodeURIComponent("BarberzLink contact request"),
    []
  );

  function resetChallenge() {
    setChallengeIndex((current) => (current + 1) % challenges.length);
    setSelectedAnswer("");
    setStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please complete all fields before sending.");
      return;
    }

    if (selectedAnswer !== challenge.answer) {
      setStatus("Please choose the correct verification answer.");
      return;
    }

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    setStatus("Opening your email app so you can send the message.");
    window.location.href = `mailto:contact@barberzlink.com?subject=${mailSubject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-background px-5 py-20 text-foreground">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-1.5 text-[11px] font-bold uppercase text-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.22)] dark:text-amber-400">
            <FiSend />
            Get In Touch
          </div>
          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Get in <span className="text-amber-400">Touch</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-sm sm:p-8"
        >
          <div className="space-y-7">
            <label className="block">
              <span className="text-sm font-bold">Your Name</span>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="mt-3 h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-amber-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold">Email Address</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-3 h-12 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-amber-400"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold">Your Message</span>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="mt-3 min-h-28 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-gray-500 focus:border-amber-400"
              />
            </label>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold">Human Verification</p>
                <button
                  type="button"
                  onClick={resetChallenge}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-zinc-800 hover:text-white"
                  aria-label="Refresh verification question"
                >
                  <FiRefreshCw />
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                What is <span className="font-bold text-white">{challenge.question.replace("What is ", "")}</span>
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {challenge.choices.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => {
                      setSelectedAnswer(choice);
                      setStatus("");
                    }}
                    className={`min-h-10 rounded-lg border px-4 text-sm font-bold transition-colors ${
                      selectedAnswer === choice
                        ? "border-amber-400 bg-amber-400 text-black"
                        : "border-zinc-800 bg-zinc-900 text-white hover:border-amber-400"
                    }`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {status ? (
            <p className="mt-5 text-center text-sm font-medium text-gray-400">
              {status}
            </p>
          ) : null}

          <button
            type="submit"
            className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-amber-400 px-6 text-sm font-bold text-black transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-amber-400/40"
          >
            Send Message
            <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}
