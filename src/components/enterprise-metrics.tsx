"use client";

import { useEffect, useState } from "react";

type Metric = {
  label: string;
  value: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type EnterpriseContent = {
  metrics: Metric[];
  testimonial: Testimonial;
};

type EnterpriseMetricsProps = {
  showTestimonial?: boolean;
};

export function EnterpriseMetrics({ showTestimonial = false }: EnterpriseMetricsProps) {
  const [data, setData] = useState<EnterpriseContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch("/api/enterprise-content");
        if (!response.ok) {
          throw new Error("Could not fetch enterprise content");
        }

        const result: EnterpriseContent = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unexpected error");
      }
    }

    fetchContent();
  }, []);

  if (error) {
    return <p className="mt-6 text-sm text-red-600">{error}</p>;
  }

  if (!data) {
    return <p className="mt-6 text-sm text-slate-500">Loading outcomes...</p>;
  }

  if (showTestimonial) {
    return (
      <article className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-base leading-8 text-slate-700">“{data.testimonial.quote}”</p>
        <p className="mt-6 text-sm font-semibold text-slate-900">{data.testimonial.name}</p>
        <p className="text-xs text-slate-500">{data.testimonial.role}</p>
      </article>
    );
  }

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {data.metrics.map((item) => (
        <article
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
        >
          <p className="text-3xl font-bold text-[#2a73db]">{item.value}</p>
          <p className="mt-2 text-sm text-slate-600">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
