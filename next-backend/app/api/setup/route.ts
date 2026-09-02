import { NextResponse } from "next/server";
import db from "@/utils/db";

export async function GET() {
  try {
    // Create Database (only runs if db not exists)
    await db.query(`CREATE DATABASE IF NOT EXISTS registerwithus`);

    // Switch DB
    await db.query(`USE registerwithus`);

    // Create users table
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_name VARCHAR(255) NOT NULL,
        user_phone VARCHAR(20) NOT NULL,
        user_email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Ensure `form_type` column exists
    const [columns] = await db.query(`SHOW COLUMNS FROM users LIKE 'form_type'`);
    if ((columns as any[]).length === 0) {
      await db.query(
        `ALTER TABLE users ADD COLUMN form_type VARCHAR(50) DEFAULT 'Quick Contact' AFTER message`
      );
    }

    return NextResponse.json({ success: true, message: "DB & Table setup complete ✅" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "DB setup failed", error: String(err) },
      { status: 500 }
    );
  }
}
