"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function editTopicForm({id,title,description}){

const [newTitle,setNewTitle]=useState(title);
const [newDescription,setNewDescription]=useState(description);
const router = useRouter();
const handleSubmit=async(e)=>{

e.preventDefault();
try {
    

    const res=await fetch(`http://localhost:3000/API/topics/${id}`,{

method:'PUT',
headers:{
    "Content-type":"application/json",
},
body:JSON.stringify({newTitle,newDescription})

    });
    if(!res.ok){
        throw new Error('failed to update topic');


    }
    router.push('/')
} catch (error) {
    console.log(error);
}

}

    return(

<>

<form action="" onSubmit={handleSubmit}>


<input type="text" onChange={(e)=>setNewTitle(e.target.value)} value={newTitle} placeholder="ajouter titre" />
<input type="text" onChange={(e)=>setNewDescription(e.target.value)} value={newDescription}  placeholder="ajouter contenu" />
<button type="submit">appliquer les modifications</button>
</form>




</>



    );
}