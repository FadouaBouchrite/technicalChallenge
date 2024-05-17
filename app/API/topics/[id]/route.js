import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topics";

export async function PUT(request, { params }) {
    try {
        const { id } = params; // Destructure to get the id directly
        const { newTitle: title, newDescription: description } = await request.json();

        await connectMongoDB();

        const updatedTopic = await Topic.findByIdAndUpdate(id, { title, description }, { new: true });

        if (!updatedTopic) {
            return NextResponse.json({ message: 'Topic not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Update successful', topic: updatedTopic }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
    }
}

export async function GET(request, { params }) {
   
        await connectMongoDB(); // Connexion à MongoDB

        // Si un ID est fourni dans les paramètres, recherchez le sujet correspondant
      try {
           const topic = await Topic.findOne({ _id: params.id });
           return NextResponse.json({ topic }, { status: 201 });
      } catch (error) {
        console.log('hi');
        const topics = await Topic.find({
            $or: [
                { title: { $regex: params.id, $options: "i" } }, // Recherche dans le titre
                { description: { $regex: params.id, $options: "i" } } // Recherche dans la description
            ]
        });
        
        console.log(topics);
        

    
        return NextResponse.json({ topics }, { status: 200 });
      }
         

            
       
    
}