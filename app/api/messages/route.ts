import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Use the cached connection!
    const client = await clientPromise;
    const db = client.db("wdc");
    
    const messages = await db
      .collection("messages")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(messages, { 
      status: 200,
      headers: { 'Cache-Control': 'no-store, max-age=0' }
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}