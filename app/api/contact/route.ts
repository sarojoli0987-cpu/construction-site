import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { name, contact, message } = await req.json();

    if (!name || !contact || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    await client
      .db("wdc")
      .collection("messages")
      .insertOne({
        name: String(name).slice(0, 100),
        contact: String(contact).slice(0, 100),
        message: String(message).slice(0, 2000),
        createdAt: new Date(),
      });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
