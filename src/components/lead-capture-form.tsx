"use client";

import { FormEvent, useState } from "react";

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      workEmail: String(formData.get("workEmail") || ""),
      company: String(formData.get("company") || ""),
      teamSize: String(formData.get("teamSize") || ""),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Could not submit your request");
      }

      event.currentTarget.reset();
      setMessage("Thanks! Our team will contact you shortly.");
    } catch {
      setMessage("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold text-slate-900">Book a consultation</h3>
      <p className="mt-2 text-sm text-slate-600">
        Tell us your learning goals and we’ll design a suitable upskilling plan.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm text-slate-600">
          Full name
          <input
            name="fullName"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-200 focus:ring"
          />
        </label>
        <label className="text-sm text-slate-600">
          Work email
          <input
            type="email"
            name="workEmail"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-200 focus:ring"
          />
        </label>
        <label className="text-sm text-slate-600">
          Company
          <input
            name="company"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-200 focus:ring"
          />
        </label>
        <label className="text-sm text-slate-600">
          Team size
          <select
            name="teamSize"
            required
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-indigo-200 focus:ring"
          >
            <option value="" disabled>
              Select team size
            </option>
            <option value="1-50">1-50</option>
            <option value="51-200">51-200</option>
            <option value="201-1000">201-1000</option>
            <option value="1000+">1000+</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Submitting..." : "Request callback"}
      </button>

      {message ? <p className="mt-4 text-sm text-slate-600">{message}</p> : null}
    </form>
  );
}
