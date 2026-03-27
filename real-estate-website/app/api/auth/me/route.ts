import { NextResponse } from 'next/server';
import { getAuthPayload } from '@/lib/auth';

export async function GET(req: Request) {
  const payload = getAuthPayload(req);
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ user: payload });
}
