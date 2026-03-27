import { prisma } from '@/lib/prisma';

interface ListPropertiesOptions {
  region?: string;
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  status?: string;
  search?: string;
}

export async function listProperties(options: ListPropertiesOptions = {}) {
  const where: Record<string, any> = {};

  if (options.region) {
    where.region = { contains: options.region, mode: 'insensitive' };
  }

  if (options.type) {
    where.type = options.type;
  }

  if (options.status) {
    where.status = options.status;
  }

  if (options.minPrice !== undefined || options.maxPrice !== undefined) {
    where.price = {};
    if (options.minPrice !== undefined) {
      where.price.gte = options.minPrice;
    }
    if (options.maxPrice !== undefined) {
      where.price.lte = options.maxPrice;
    }
  }

  if (options.search) {
    where.OR = [
      { title: { contains: options.search, mode: 'insensitive' } },
      { description: { contains: options.search, mode: 'insensitive' } },
      { location: { contains: options.search, mode: 'insensitive' } },
      { agentName: { contains: options.search, mode: 'insensitive' } },
    ];
  }

  return prisma.property.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
}

export async function getProperty(id: string) {
  return prisma.property.findUnique({
    where: { id },
  });
}

export async function createProperty(data: any) {
  return prisma.property.create({
    data,
  });
}

export async function updateProperty(id: string, data: any) {
  return prisma.property.update({
    where: { id },
    data,
  });
}

export async function deleteProperty(id: string) {
  return prisma.property.delete({
    where: { id },
  });
}
