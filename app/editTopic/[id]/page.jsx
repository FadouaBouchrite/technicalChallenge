import EditTopicForm from "@/components/EditTopicForm";
import { log } from "console";

const getTopicById=async(id)=>{

try {
    const res=await fetch(`http://localhost:3000/API/topics/${id}`,{

    cache:'no-store'
    })
    if(!res.ok){

        throw new Error('failed to fetch topic');
    }
    return res.json();
} catch (error) {
    
}

}

export default async function editTopic({params}) {

const {id}=params;
const {topic}=await getTopicById(id); 
console.log('oui');
const{title,description}=topic;
    return <EditTopicForm id={id} description={description} title={title} />
}