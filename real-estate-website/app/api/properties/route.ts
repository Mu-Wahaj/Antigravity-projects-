import { NextResponse } from 'next/server';
import { listProperties, createProperty } from '@/lib/controllers/propertyController';
import { propertyCreateSchema } from '@/lib/validations';
import { requireAdmin } from '@/lib/auth';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const region = url.searchParams.get('region') ?? undefined;
  const type = url.searchParams.get('type') ?? undefined;
  const status = url.searchParams.get('status') ?? undefined;
  const search = url.searchParams.get('search') ?? undefined;
  const minPrice = url.searchParams.get('minPrice');
  const maxPrice = url.searchParams.get('maxPrice');

  const properties = await listProperties({
    region,
    type,
    status,
    search,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
  });

  return NextResponse.json(properties);
}

export async function POST(req: Request) {
  try {
    requireAdmin(req);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const parsed = propertyCreateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const property = await createProperty(parsed.data);
  return NextResponse.json(property, { status: 201 });
}
