import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient | undefined;
}

const createPrismaClient = () =>
  new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    }),
  });

const prisma = global.cachedPrisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.cachedPrisma = prisma;
}

export const prismaClient = prisma;
