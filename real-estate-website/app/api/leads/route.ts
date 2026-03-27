import { NextResponse } from 'next/server';
import { createLead, listLeads } from '@/lib/controllers/leadController';
import { leadCreateSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    requireAdmin(req);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const leads = await listLeads();
  return NextResponse.json(leads);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = leadCreateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const lead = await createLead(parsed.data);
  return NextResponse.json(lead, { status: 201 });
}
