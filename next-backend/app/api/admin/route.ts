import { NextResponse } from "next/server";
import db from "@/utils/db"; // centralized DB pool

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM users ORDER BY created_at DESC");
    return NextResponse.json(rows);
  } catch {
    return NextResponse.json(
      { success: false, message: "Error fetching users" },
      { status: 500 }
    );
  }
}
