import Link from "next/link";

export default function Profile() {
  return(
	<div className="profile inline-flex items-center">
	  <h1>Batlbot@12345</h1>
	  <Link href="/"><img className="w-[50px] rounded-full" src="/data.png" alt="logo" /></Link>
	</div>
  )
}