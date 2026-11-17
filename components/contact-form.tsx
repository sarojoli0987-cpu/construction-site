"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState(""); // NEW: State for project details
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setError("");

    if (/[a-zA-Z@.]/.test(rawValue)) {
      setContactInfo(rawValue);
      return;
    }

    const numericValue = rawValue.replace(/[^0-9]/g, "");
    if (numericValue.length <= 10) {
      setContactInfo(numericValue);
    }
  };

  const validateContactInfo = () => {
    if (contactInfo.length === 0) return;
    const hasLetters = /[a-zA-Z]/.test(contactInfo);

    if (hasLetters) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactInfo)) {
        setError("Please enter a valid email address");
      } else {
        setError("");
      }
    } else {
      if (contactInfo.length > 0 && contactInfo.length < 10) {
        setError("The number cannot be less than 10 digits");
      } else if (contactInfo.length === 10) {
        setError("");
      }
    }
  };

  // UPDATED: Now actually sends data to the API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (contactInfo.length === 0) {
      setError("This field is required");
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(contactInfo);
    if (hasLetters) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactInfo)) {
        setError("Please enter a valid email address");
        return;
      }
    } else {
      if (contactInfo.length !== 10) {
        setError("The number must be exactly 10 digits");
        return;
      }
    }

    setError("");
    
    try {
      // Send data to the backend API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          contact: contactInfo,
          message: message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setTimeout(() => {
          setIsSubmitted(false);
          setName("");
          setContactInfo("");
          setMessage("");
        }, 5000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message.");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex w-full flex-col gap-6 bg-[#F2F1ED] p-8 md:p-12"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-[1.1rem] text-[#1B2530]">
          Your name
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)} // Connect to state
          className="w-full rounded-lg border border-[#1B2530]/30 bg-white px-4 py-3 text-[#1B2530] outline-none transition-colors focus:border-[#1F4E79]"
        />
      </div>

      <div>
        <label htmlFor="contact" className="mb-2 block text-[1.1rem] text-[#1B2530]">
          Phone or email
        </label>
        <input
          type="text" 
          id="contact"
          value={contactInfo}
          onChange={handleContactChange}
          onBlur={validateContactInfo}
          required
          className={`w-full rounded-lg border bg-white px-4 py-3 text-[#1B2530] outline-none transition-colors focus:border-[#1F4E79] ${
            error ? "border-red-500" : "border-[#1B2530]/30"
          }`}
        />
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block text-[1.1rem] text-[#1B2530]">
          Project details
        </label>
        <textarea
          id="details"
          rows={6}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Connect to state
          className="w-full resize-y rounded-lg border border-[#1B2530]/30 bg-white px-4 py-3 text-[#1B2530] outline-none transition-colors focus:border-[#1F4E79]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-2 w-fit rounded-lg bg-black px-6 py-3 text-[1.1rem] text-white transition-opacity hover:opacity-80"
      >
        Send message
      </button>

      {isSubmitted && (
        <p className="mt-2 text-[1.1rem] text-green-700">
          Message sent. We will contact you soon.
        </p>
      )}
    </form>
  );
}