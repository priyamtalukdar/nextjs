import Link from "next/link";

export default function studentList(){
    return (
    <div>
        <ul>
            <li><Link href= "/studentList/1">1</Link></li>
            <li><Link href= "/studentList/2">2</Link></li>
            <li><Link href= "/studentList/3">3</Link></li>
            <li><Link href= "/studentList/4">4</Link></li>
        </ul>
    </div>
    )
}