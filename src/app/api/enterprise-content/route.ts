import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    metrics: [
      { value: "250+", label: "Enterprise Clients" },
      { value: "10L+", label: "Learners Upskilled" },
      { value: "95%", label: "Program Satisfaction" },
    ],
    testimonial: {
      quote:
        "Accredian helped us move from scattered training requests to a focused, role-based capability roadmap with visible impact in one quarter.",
      name: "Ananya Verma",
      role: "Head of Learning, Digital Commerce Enterprise",
    },
  });
}
