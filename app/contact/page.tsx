import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Support | BarberzLink Help Center",
  description:
    "Need help? Contact BarberzLink Support for assistance with your account, services, or technical issues. Our team responds within 24–48 business hours.",
  keywords:
    "BarberzLink support, contact support, help center, customer service, technical support, SMS consent help, account assistance",
};

export default function ContactPage() {
  return <ContactClient />;
}
