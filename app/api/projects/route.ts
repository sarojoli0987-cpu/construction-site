import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, category, imageUrl } = body;

    if (!title || !description || !category || !imageUrl) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("wdc");
    
    await db.collection("projects").insertOne({
      title: String(title),
      description: String(description),
      category: String(category),
      imageUrl: String(imageUrl),
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error saving project:", error);
    return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("wdc");
    
    const projects = await db.collection("projects").find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}