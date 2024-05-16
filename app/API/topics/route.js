
import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Topic from "../../../models/topics";
export async function POST (request){

const {title,description}=request.json();

await connectMongoDB();
await Topic.create({title,description});
return NextResponse.json({message :"topic created"},{status:201});
}