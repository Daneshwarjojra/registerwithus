import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET() {
  try {
    // ✅ Fetch all users (including experts)
    const [rows] = await db.query(`SELECT * FROM users ORDER BY created_at DESC`);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("❌ Error fetching data:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user_name, user_phone, user_email, message, form_type } = body;

    if (!user_name || !user_phone || !user_email || !form_type) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9+]{1,13}$/;

    if (!nameRegex.test(user_name)) {
      return NextResponse.json({ success: false, message: "Invalid name" }, { status: 400 });
    }

    if (!phoneRegex.test(user_phone)) {
      return NextResponse.json({ success: false, message: "Invalid phone" }, { status: 400 });
    }

    // ✅ Insert into users table for both contact & expert forms
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        user_phone VARCHAR(20) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        message TEXT,
        form_type VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // For expert forms, we can leave message empty
    // Expert forms ke liye agar message empty hai, to slug se generate hua message use karo
const msg = message && message.trim() !== "" ? message : form_type.toLowerCase() === "expert" || form_type === "talk to expert" ? "Generated from slug or frontend" : message;

    await db.query(
      `INSERT INTO users (user_name, user_phone, user_email, message, form_type) VALUES (?, ?, ?, ?, ?)`,
      [user_name, user_phone, user_email, msg, form_type]
    );

    return NextResponse.json({ success: true, message: "Data saved ✅" });

  } catch (err) {
    console.error("❌ Error saving data:", err);
    return NextResponse.json({ success: false, message: "Failed to save data", error: String(err) }, { status: 500 });
  }
}
