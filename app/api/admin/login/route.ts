import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { password } = await request.json();

  // This checks if the typed password matches the one in .env.local
  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = await cookies();
    
    // Create a secure cookie to remember the login
    cookieStore.set("admin_auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // Lasts for 1 day
      path: "/",
    });
    
    return NextResponse.json({ success: true });
  }

  // If password is wrong, return an error
  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}