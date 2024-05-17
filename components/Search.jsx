"use client";

import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import RemoveBtn from '@/components/RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import topicOne from '@/components/topicOne'

const getTopicsByKeyword = async (keyword) => {
    try {
        const res = await fetch(`http://localhost:3000/API/topics/${keyword}`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }
       
        return res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default function Search() {

    const [keyword, setKeyword] = useState('');
    const [topics, setTopics] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (keyword.trim() === '') {
            return;
        }
        const { topics } = await getTopicsByKeyword(keyword);
        setTopics(topics);
    };

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline" onSubmit={handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setKeyword(e.target.value)} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            <div>
            {topics.map((topic) => (
    <div key={topic._id}>
        <topicOne id={topic._id} /> 
    </div>
))}

            </div>
        </div>
    );
}
