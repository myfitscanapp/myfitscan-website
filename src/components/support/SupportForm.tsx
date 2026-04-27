"use client";
import { useState } from "react";

interface SupportFormProps {
  dict: {
    formTitle: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formSubjects: string[];
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
    formSuccess: string;
  };
}

export default function SupportForm({ dict }: SupportFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending — in production, connect to an API or email service
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = data.get("subject") as string;
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    // Open mailto as fallback
    const mailtoUrl = `mailto:support@myfitscan.com?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
    window.open(mailtoUrl, "_blank");

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-glass-border p-6 sm:p-8 text-center">
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-success/10 text-success mb-4">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-lg font-medium text-text">{dict.formSuccess}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-glass-border p-6 sm:p-8">
      <h2 className="font-heading text-xl font-bold text-text">{dict.formTitle}</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">{dict.formName}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={dict.formNamePlaceholder}
              className="w-full rounded-xl border border-glass-border px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">{dict.formEmail}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={dict.formEmailPlaceholder}
              className="w-full rounded-xl border border-glass-border px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text mb-1.5">{dict.formSubject}</label>
          <select
            id="subject"
            name="subject"
            required
            defaultValue=""
            className="w-full rounded-xl border border-glass-border px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors appearance-none bg-white"
          >
            <option value="" disabled>{dict.formSubjectPlaceholder}</option>
            {dict.formSubjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">{dict.formMessage}</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={dict.formMessagePlaceholder}
            className="w-full rounded-xl border border-glass-border px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-dark transition-colors disabled:opacity-50"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          {dict.formSubmit}
        </button>
      </form>
    </div>
  );
}
