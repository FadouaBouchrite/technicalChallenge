import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topics";
import { json } from "stream/consumers";
import { request } from "http";

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
export async function GET(){

await connectMongoDB();
const topics = await Topic.find();
return NextResponse.json({topics});

}

export async function DELETE(request){
    const id=request.nextUrl.searchParams.get("id");
await connectMongoDB();

await Topic.findByIdAndDelete(id);
return NextResponse.json({message :"request deleted"},{status:200})


}

