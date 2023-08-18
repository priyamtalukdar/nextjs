'use client'
import { useRouter } from "next/navigation";

const About =()=>{
    const router = useRouter();

return(
    <div>about

        <button onClick ={()=>router.push("/about/about1")}>go to about1</button>
        <button onClick ={()=>router.push("/about/about2")}>go to about2</button>
    </div>
    
)
}
export default About;