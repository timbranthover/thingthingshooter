import { z } from "zod";

const serverEnvSchema = z.object({
  APP_ENV: z.enum(["development", "preview", "production", "test"]).optional(),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).default("info"),
  VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).optional()
});

export type AppEnvironment = "development" | "preview" | "production" | "test";
export type ServerEnvironment = z.infer<typeof serverEnvSchema> & { appEnvironment: AppEnvironment };

function resolveAppEnvironment(env: z.infer<typeof serverEnvSchema>): AppEnvironment {
  if (env.APP_ENV) return env.APP_ENV;
  if (env.VERCEL_ENV) return env.VERCEL_ENV;
  if (env.NODE_ENV === "test") return "test";
  if (env.NODE_ENV === "production") return "production";
  return "development";
}

export function getServerEnvironment(source: NodeJS.ProcessEnv = process.env): ServerEnvironment {
  const parsed = serverEnvSchema.parse(source);
  return { ...parsed, appEnvironment: resolveAppEnvironment(parsed) };
}
