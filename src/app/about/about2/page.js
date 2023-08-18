'use client'
import { useRouter } from "next/navigation";

const About1 =()=>{
    const router = useRouter();

return(
    <div> <h1>Welcome to about2</h1>

        <button onClick ={()=>router.push("/about")}>go to about page</button>
    </div>
    
)
}
export default About1;