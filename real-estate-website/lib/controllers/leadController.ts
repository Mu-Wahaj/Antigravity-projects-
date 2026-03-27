import { prisma } from '@/lib/prisma';

export async function createLead(data: any) {
  return prisma.lead.create({
    data,
  });
}

export async function listLeads() {
  return prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
  });
}
