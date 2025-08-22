import { connectToDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await connectToDB();
    const products = await db.collection("recipes").find().toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ message: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, cuisine, photo, time, description } = body;

    if (!title || !cuisine) {
      return NextResponse.json({ message: "Title and Cuisine are required" }, { status: 400 });
    }

    const db = await connectToDB();
    const newProduct = await db.collection("recipes").insertOne({
      title,
      cuisine,
      photo: photo || "",
      time: time || "",
      description: description || "",
      createdAt: new Date(),
    });

    return NextResponse.json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json({ message: "Failed to add product" }, { status: 500 });
  }
}
