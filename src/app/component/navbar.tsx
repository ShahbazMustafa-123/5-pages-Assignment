import Link from "next/link"

export default function Navbar() {
    return(
        <div className="text-center font-bold underline"> <hr /> <br />
           <Link href="/">Overview Page</Link>
           <br />
           <Link href="/About">About Page</Link> 
           <br />
           <Link href="/Home">Home Page</Link>
           <br />
           <Link href="/Jobs">Jobs Page</Link>
           <br />
           <Link href="/Contact">Contact Page</Link>
           <br />
           <hr />
        </div>
    )
}