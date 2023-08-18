'use client'
export default function Student({params}){
    return (
        <div>
         <h1>student details</h1>
         <p> {params.student} </p>
        </div>
    )
}