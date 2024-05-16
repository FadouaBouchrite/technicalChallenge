import Link from 'next/link' 
export default function Navbar(){


    return (

<nav className='flex justify-between items-center px-8 py-3 bg-slate-800'>
<Link className='bg-white' href={"/addTopic"}>Add Topic</Link>

</nav>

    )
} 