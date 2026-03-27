import { compare } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { signJwt } from '@/lib/auth';

export async function authenticateAdmin(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return null;
  }

  const isValid = await compare(password, user.password);
  if (!isValid || user.role !== 'ADMIN') {
    return null;
  }

  return {
    token: signJwt({
      userId: user.id,
      email: user.email,
      role: user.role,
    }),
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      fullName: user.fullName,
    },
  };
}
