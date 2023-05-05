import Link from 'next/link'
import Image from 'next/image'
import gabriellaCarving from '../public/contact/gabriella-carving.webp'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
{/* <div className="px-2.5 pt-12 md:px-8 md:pt-24 md:mx-48 "> */}


export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="px-2.5 pt-12 md:px-8 md:pt-24 md:mx-48 object-center">
        <Image
          src={gabriellaCarving}
          alt="Gabriella shaping a large sculpture's head"
          height="500"
        />
        <h1 className="pt-6 text-lg">Studio Berlin</h1>
          <div>
            <p>Grossgorschenstrasse 7</p>
            <p>10827 Berlin</p>
          </div>

        <h1 className="pt-6 text-lg">Studio Palermo</h1>
          <div>
            <p>Via Pacini, 113</p>
            <p>90143 Palermo</p>
          </div>

        <div className="pt-6 ">
          <a href="tel:+393493267015">+39 349 3267015</a>
        </div>
        <div>
          <a href="mailto:gabriellafurno.gf@gmail.com">gabriellafurno.gf@gmail.com</a>
        </div>
        <Footer/>
      </div>
    </>
  )
}
