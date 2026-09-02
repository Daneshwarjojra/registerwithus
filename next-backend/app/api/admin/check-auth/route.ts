import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/utils/db"; // make sure this points to your MySQL connection
import { RowDataPacket } from "mysql2"; // import type

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("access_token")?.value;
    if (!token) {
      return NextResponse.json({ authenticated: false });
    }

    // Verify JWT token
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    // Fetch superadmin from DB using admin id from token
    const [rows] = await db.query<RowDataPacket[]>(
      "SELECT superadmin FROM admin WHERE id = ?",
      [decoded.id]
    );

    const admin = Array.isArray(rows) && rows.length ? rows[0] : null;

    if (!admin) {
      return NextResponse.json({ authenticated: false });
    }

    return NextResponse.json({
      authenticated: true,
      superadmin: admin.superadmin, // TypeScript now knows this exists
      user: decoded
    });
  } catch (err) {
    return NextResponse.json({ authenticated: false });
  }
}
