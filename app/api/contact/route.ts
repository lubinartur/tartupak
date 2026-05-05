import { NextResponse } from "next/server";

/**
 * Lead endpoint — accepts submissions; persistence and email TBD.
 * See docs/09_contact_form_logic.md.
 */
export async function POST(req: Request) {
  try {
    await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body" },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Received.",
  });
}
