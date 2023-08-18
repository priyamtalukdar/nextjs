'use client'
import Link from 'next/link';
import React, {useState} from 'react'
import {useRouter} from 'next/navigation'


export default function Page(){
    const router = useRouter();

    const[name,setName] = useState("rahul");
const namee =(()=>{
    setName("priyam")
});

const change = (()=>{
    router.push("/login")
})
const change1 = ((props)=>{
    router.push(props)
})


  return (
    <main>
    <div>
        <p>{name}</p>
        <button onClick={()=>namee()}>click me </button>
    </div>
    <Link href = "/login">go to login page</Link>
    <Link href = "/about">go to login page</Link>
    <button onClick={()=>change()}>route to another page</button>
    <button onClick={()=>change1("/about")}>route to about page</button>
    <button onClick={()=>change1("/login")}>route to llogin page</button>
    </main>
  )
}

