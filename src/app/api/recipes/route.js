import { connectToDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectToDB();
    const recipes = await db.collection("recipes").find().toArray();

    return NextResponse.json(recipes);
  } catch (error) {
    console.error("❌ Error fetching recipes:", error);
    return NextResponse.json({ message: "Failed to fetch recipes" }, { status: 500 });
  }
}
