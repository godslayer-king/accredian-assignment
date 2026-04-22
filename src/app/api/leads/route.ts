import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  fullName?: string;
  workEmail?: string;
  company?: string;
  teamSize?: string;
};

const leads: Array<LeadPayload & { id: string; createdAt: string }> = [];

export async function POST(request: NextRequest) {
  const body = (await request.json()) as LeadPayload;

  if (!body.fullName || !body.workEmail || !body.company || !body.teamSize) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const record = {
    id: crypto.randomUUID(),
    fullName: body.fullName,
    workEmail: body.workEmail,
    company: body.company,
    teamSize: body.teamSize,
    createdAt: new Date().toISOString(),
  };

  leads.push(record);

  return NextResponse.json({ success: true, lead: record }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
