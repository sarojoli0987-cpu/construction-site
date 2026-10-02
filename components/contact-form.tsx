"use client";

import { useState } from "react";

const field =
  "w-full rounded-md border border-[#1B2530]/30 bg-white px-3 py-2 outline-none focus:border-[#1F4E79] focus:ring-2 focus:ring-[#1F4E79]/30";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Your name
        </label>
        <input id="name" name="name" required className={field} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          Phone or email
        </label>
        <input id="phone" name="contact" required className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={field}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-[#1F4E79] px-7 py-3.5 font-semibold text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "sent" && (
        <p className="text-green-700">Message sent. We will contact you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-700">
          The message was not sent. Check your connection and try again.
        </p>
      )}
    </form>
  );
}
