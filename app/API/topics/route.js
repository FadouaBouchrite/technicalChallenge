import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topics";

export async function POST(request) {
    const { title, description } = await request.json();

    if (!title || !description) {
        console.log(description);
        return NextResponse.json({ message: "Missing title or description" }, { status: 400 });
    } else {
        await connectMongoDB();
        await Topic.create({ title, description });
        return NextResponse.json({ message: "Topic created" }, { status: 201 });
    }
}
