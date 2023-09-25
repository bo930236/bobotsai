import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prismaClient =
  global.prisma ||
  new PrismaClient({
    // log: ['query'],
  });
