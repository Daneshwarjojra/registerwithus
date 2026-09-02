import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password required" },
        { status: 400 }
      );
    }

    // Fetch admin by email
    const [rows] = await db.query(
      "SELECT * FROM admin WHERE email = ? AND status = 1",
      [email]
    );
    const admin = (rows as any[])[0];

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials or inactive account" },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ Generate JWT tokens
    const accessToken = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      { id: admin.id },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // ✅ Set cookies
    const res = NextResponse.json({
      success: true,
      message: "JWT Generated Successfully",
      accessToken, // 👈 send access token for alert
    });

    res.cookies.set("access_token", accessToken, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 15, // 15 min
    });

    res.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
