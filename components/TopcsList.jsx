import RemoveBtn from '@/components/RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link';

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/API/topics', { cache: "no-store" });
        if (!res.ok) {
        
            throw new Error("Failed to fetch topics");
        }
       
        const data = await res.json();
        // Ensure data is an array
     
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default async function TopcsList() {
    const {topics} = await getTopics();
    console.log(topics);
    return (
        <>
            {topics.map(t => (
                <div key={t._id}>
                    <div>
                        <h1>{t.title}</h1>
                        <div>{t.description}</div>
                    </div>
                    <div>
                        <RemoveBtn id={t._id}/>
                        <Link href={`editTopic/${t._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
