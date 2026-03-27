import { NextResponse } from 'next/server';
import { authenticateAdmin } from '@/lib/controllers/authController';
import { loginSchema } from '@/lib/validations';

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const authResult = await authenticateAdmin(parsed.data.email, parsed.data.password);
  if (!authResult) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  return NextResponse.json(authResult);
}
