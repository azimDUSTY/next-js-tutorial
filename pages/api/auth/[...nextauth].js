import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  adapter: PrismaAdapter(prisma),
});
