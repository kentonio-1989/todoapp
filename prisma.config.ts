import { config } from "dotenv";
import { defineConfig } from "prisma/config";

// Next.js uses .env.local; load it for Prisma CLI commands
config({ path: ".env.local" });
config(); // fallback to .env

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
