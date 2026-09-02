export type LogLevel = "debug" | "info" | "warn" | "error";
type LogContext = Readonly<Record<string, unknown>>;

function write(level: LogLevel, message: string, context: LogContext = {}): void {
  const serialized = JSON.stringify({ timestamp: new Date().toISOString(), level, message, ...context });
  switch (level) {
    case "error": console.error(serialized); break;
    case "warn": console.warn(serialized); break;
    case "debug": console.debug(serialized); break;
    case "info": console.info(serialized); break;
  }
}

export const logger = {
  debug: (message: string, context?: LogContext) => write("debug", message, context),
  info: (message: string, context?: LogContext) => write("info", message, context),
  warn: (message: string, context?: LogContext) => write("warn", message, context),
  error: (message: string, context?: LogContext) => write("error", message, context)
} as const;
