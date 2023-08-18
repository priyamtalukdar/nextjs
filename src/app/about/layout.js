'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({children}){
    const pathName = usePathname(); //  it basically gives the link of the webpage  . it is used to show what common links to show
return(
    <div>
       { 
       pathName !== "/about/about1" ?
       <ul>
            <li><Link href="/about">go to about page</Link></li>
             <li><Link href="/about/about1">go to about1 page</Link></li>
             <li><Link href="/about/about2">go to about page</Link></li>

       </ul>
       : <Link href="/about">go to about page</Link>
}
{children}
</div>
)
}