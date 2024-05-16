import RemoveBtn from '@/components/RemoveBtn'
import { HiPencilAlt } from 'react-icons/hi';
import Link from 'next/link' 
export default function TopcsList(){



    return (
<div>

<div>


<h1>Topic1</h1>

<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestias reiciendis qui maiores explicabo fugit doloremque, expedita earum soluta asperiores consequuntur quo labore sint dolore. Fugit ut doloremque earum error.</div>
</div>
<div>

<RemoveBtn />
<Link href={"editTopic/123"} >  <HiPencilAlt size={24}/></Link>
</div>

</div>
       


    );
    
   






    
}