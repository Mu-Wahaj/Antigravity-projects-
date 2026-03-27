import { NextResponse } from 'next/server';
import { deleteProperty, getProperty, updateProperty } from '@/lib/controllers/propertyController';
import { propertyUpdateSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/auth';

interface Params {
  params: { id: string };
}

export async function GET(_req: Request, { params }: Params) {
  const property = await getProperty(params.id);
  if (!property) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  }

  return NextResponse.json(property);
}

export async function PATCH(req: Request, { params }: Params) {
  try {
    requireAdmin(req);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const parsed = propertyUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const property = await updateProperty(params.id, parsed.data);
  return NextResponse.json(property);
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    requireAdmin(_req);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await deleteProperty(params.id);
  return NextResponse.json({ success: true });
}
