import Link from 'next/link'
import Navbar from 'components/navbar.js'

export default function SculptureMain() {
  return (
    <div>
      <Navbar/>
      <div className="mt-24 mx-24 text-2xl text-blue-500">
        <div className="mt-12">
          <Link href="/works/sculpture/sacrifice">Sacrifice</Link>
        </div>
        <div className="mt-12">
          <Link href="/works/sculpture/infinity">Infinity</Link>
        </div>
        <div className="mt-12">
          <Link href="/works/sculpture/pandora">Pandora</Link>
        </div>
      </div>
    </div>
  )
}
