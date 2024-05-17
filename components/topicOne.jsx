import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RemoveBtn from '@/components/RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/API/topics/${id}`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch topic');
        }
        return res.json();
    } catch (error) {
        console.error(error);
        return null; // Retourne null en cas d'erreur
    }
};

export default function TopicOne({ id }) {
    const [topic, setTopic] = useState(null);

    useEffect(() => {
        const fetchTopic = async () => {
            const { topic } = await getTopicById(id);
            setTopic(topic);
        };
        fetchTopic();
    }, [id]);

    if (!topic) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div key={topic._id}>
                <div>
                    <h1>{topic.title}</h1>
                    <div>{topic.description}</div>
                </div>
                <div>
                    <RemoveBtn id={topic._id} />
                    <Link href={`/editTopic/${topic._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        </>
    );
}
