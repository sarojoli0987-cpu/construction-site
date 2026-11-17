import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI as string;

// DELETE: Remove a specific project by ID
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await the params (Next.js 15+ requirement)
    const { id } = await params;

    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("wdc");
    const collection = db.collection("projects");

    // Delete the project from the database
    await collection.deleteOne({ _id: new ObjectId(id) });

    await client.close();

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}