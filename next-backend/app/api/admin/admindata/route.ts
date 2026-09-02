import { NextRequest, NextResponse } from "next/server";
import db from "@/utils/db";
import bcrypt from "bcrypt";

// Ensure admin table exists
async function ensureTable() {
    await db.query(`
        CREATE TABLE IF NOT EXISTS admin (
            id INT AUTO_INCREMENT PRIMARY KEY,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            status TINYINT DEFAULT 1,
            superadmin TINYINT DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `);
}

// GET: Fetch all admins (except soft-deleted)
export async function GET() {
    try {
        await ensureTable();
        const [rows]: any[] = await db.query(
            `SELECT id, email, status, superadmin, created_at 
             FROM admin 
             WHERE status != -1 
             ORDER BY created_at DESC`
        );
        return NextResponse.json(rows);
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Error fetching admin data" },
            { status: 500 }
        );
    }
}

// POST: Add new admin or reactivate soft-deleted admin
export async function POST(req: NextRequest) {
    try {
        const { email, password, superadmin = 0 } = await req.json();
        if (!email || !password)
            return NextResponse.json(
                { success: false, message: "Email and password required" },
                { status: 400 }
            );

        await ensureTable();

        // Check if admin already exists
        const [existingAdmins]: any[] = await db.query(
            `SELECT id, status FROM admin WHERE email = ?`,
            [email]
        );

        if (existingAdmins.length > 0) {
            const admin = existingAdmins[0];
            if (admin.status === 1) {
                // Already active, cannot create
                return NextResponse.json(
                    { success: false, message: "Admin with this email already exists" },
                    { status: 400 }
                );
            } else if (admin.status === -1) {
                // Reactivate soft-deleted admin
                const hashedPassword = await bcrypt.hash(password, 10);
                await db.query(
                    `UPDATE admin SET password = ?, status = 1 WHERE id = ?`,
                    [hashedPassword, admin.id]
                );
                return NextResponse.json({
                    success: true,
                    message: "Admin reactivated successfully",
                });
            }
        }

        // Insert new admin if not exists
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query(
            `INSERT INTO admin (email, password, status, superadmin) VALUES (?, ?, ?, ?)`,
            [email, hashedPassword, 1, superadmin]
        );

        return NextResponse.json({ success: true, message: "Admin added successfully" });
    } catch (err) {
        console.error("POST /admin/admindata error:", err);
        return NextResponse.json(
            { success: false, message: "Error adding admin" },
            { status: 500 }
        );
    }
}

// PUT: Update admin email/password
export async function PUT(req: NextRequest) {
    try {
        const { id, email, password } = await req.json();
        if (!id || (!email && !password))
            return NextResponse.json(
                { success: false, message: "Invalid request" },
                { status: 400 }
            );

        const fields: string[] = [];
        const values: any[] = [];

        if (email) {
            fields.push("email = ?");
            values.push(email);
        }
        if (password) {
            const hashed = await bcrypt.hash(password, 10);
            fields.push("password = ?");
            values.push(hashed);
        }

        values.push(id);
        await db.query(`UPDATE admin SET ${fields.join(", ")} WHERE id = ?`, values);

        return NextResponse.json({ success: true, message: "Admin updated successfully" });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Error updating admin" },
            { status: 500 }
        );
    }
}

// PATCH: Toggle status or soft delete
export async function PATCH(req: NextRequest) {
    try {
        const { id, status, softDelete } = await req.json();

        if (!id)
            return NextResponse.json(
                { success: false, message: "ID is required" },
                { status: 400 }
            );

        if (softDelete) {
            // Soft delete: hide from UI
            await db.query(`UPDATE admin SET status = -1 WHERE id = ?`, [id]);
            return NextResponse.json({ success: true, message: "Admin hidden from UI" });
        }

        if (typeof status === "undefined")
            return NextResponse.json(
                { success: false, message: "Status is required" },
                { status: 400 }
            );

        await db.query(`UPDATE admin SET status = ? WHERE id = ?`, [status, id]);
        return NextResponse.json({ success: true, message: `Admin status updated to ${status}` });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Failed to update status" },
            { status: 500 }
        );
    }
}

// DELETE: Hard delete (optional, direct DB removal)
export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        if (!id)
            return NextResponse.json(
                { success: false, message: "Admin ID is required" },
                { status: 400 }
            );

        await db.query(`DELETE FROM admin WHERE id = ?`, [id]);
        return NextResponse.json({ success: true, message: "Admin deleted from DB" });
    } catch (err) {
        return NextResponse.json(
            { success: false, message: "Error deleting admin" },
            { status: 500 }
        );
    }
}
