
import Link from 'next/link'

export default function Home(){
  console.log("page");
  
  return (<div>
    <header>
      <Link href='/home'>Home</Link>
  
    </header>
  </div>
  )
}
