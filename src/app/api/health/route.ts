import { NextResponse } from "next/server";
import { getServerEnvironment } from "@/platform/config/env";

export const dynamic = "force-dynamic";

export function GET(): NextResponse {
  const environment = getServerEnvironment();
  return NextResponse.json(
    { status: "ok", environment: environment.appEnvironment, timestamp: new Date().toISOString() },
    { status: 200, headers: { "Cache-Control": "no-store" } }
  );
}
