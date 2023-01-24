import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../components/navbar.js'
import CarouselComponent from '../../../components/carousel-component.js'

import classical_woman_and_man from '../../../public/sculpture/classical/classical_woman_and_man.jpg'
import classical_woman_unfinished_torso from '../../../public/sculpture/classical/classical_woman_unfinished_torso.jpg'
import classical_woman from '../../../public/sculpture/classical/classical_woman.jpg'
import classical_woman_unfinished_right_side from '../../../public/sculpture/classical/classical_woman_unfinished_right_side.jpg'
import classical_woman_back from '../../../public/sculpture/classical/classical_woman_back.jpg'
import classical_alabaster_bust from '../../../public/sculpture/classical/classical_alabaster_bust.jpg'
import classical_woman_unfinished_three_quarters from '../../../public/sculpture/classical/classical_woman_unfinished_three_quarters.jpg'


const imagesArray = [classical_woman_and_man,
classical_alabaster_bust,
classical_woman,
classical_woman_back,
classical_woman_unfinished_torso,
classical_woman_unfinished_right_side,
classical_woman_unfinished_three_quarters]

const sculptureDetails = [
  {
    link:'/works/exhibitions/palazzo-installation',
    src:classical_alabaster_bust,
    alt: 'tk',
    title: 'Woman, ',
    details: '2013, Palermo,',
    material: 'Plaster,',
    size: '40  x 40 cm'
  },
]


export default function PalazzoInstallation() {
    return (
      <>
        <Navbar/>
        <main className="px-2.5 md:px-0">
          <div className="hidden md:block text-base  md:text-main mt-4 md:m-0 pt-12 md:pl-20 md:pb-10 md:pt-24">
            {sculptureDetails.map(image =>
              <div className="flex flex-row flex-wrap space-x-2">
                  <div><span className="italic">{image.title}</span></div>
                  <div>{image.details}</div>
                  <div>{image.material}</div>
                  <div>{image.size}</div>
              </div>
            )}
          </div>
          <div className="pt-12 md:pt-0 md:px-8 md:mx-48">
            <CarouselComponent
            imagesArray={imagesArray}
            />
          </div>
          <div className="md:hidden text-base md:px-28 md:text-main mt-4 md:m-0 ">
            {sculptureDetails.map(image =>
              <div className="flex flex-row flex-wrap space-x-2">
                  <div><span className="italic">{image.title}</span></div>
                  <div>{image.details}</div>
                  <div>{image.material}</div>
                  <div>{image.size}</div>
              </div>
            )}
          </div>
        </main>
      </>
    );
  }
