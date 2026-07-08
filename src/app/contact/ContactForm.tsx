"use client";

import { useState } from "react";

/**
 * Accessible contact form. There is no backend yet, so submitting only shows a
 * confirmation note. Wire this to an email service or API route later.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const fieldClass =
    "mt-2 w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-navy-800 placeholder:text-navy-300 focus-visible:border-navy-500";

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="text-navy-800 text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-navy-800 text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-navy-800 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="bg-navy-800 hover:bg-navy-700 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
      >
        Send message
      </button>

      {submitted ? (
        <p
          role="status"
          className="border-gold-200 bg-gold-50 text-navy-700 rounded-lg border px-4 py-3 text-sm"
        >
          Thanks! This form is not connected to a backend yet, so nothing was
          sent. Please call or email us in the meantime.
        </p>
      ) : null}
    </form>
  );
}
