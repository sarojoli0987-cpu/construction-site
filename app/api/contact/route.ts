import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

export async function POST(req: Request) {
  try {
    console.log("Contact API hit!"); // DEBUG LOG

    const { name, contact, message } = await req.json();

    if (!name || !contact || !message) {
      console.log("Missing fields:", { name, contact, message }); // DEBUG LOG
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db("wdc");
    const collection = db.collection("messages");

    await collection.insertOne({
      name: String(name).slice(0, 100),
      contact: String(contact).slice(0, 100),
      message: String(message).slice(0, 2000),
      createdAt: new Date(),
    });

    await client.close();

    console.log("Message saved successfully!"); // DEBUG LOG
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error saving message:", error); // DEBUG LOG
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}