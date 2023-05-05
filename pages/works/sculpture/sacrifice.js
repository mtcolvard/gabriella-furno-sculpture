import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../components/navbar.js'
import CarouselComponent from '../../../components/carousel-component.js'

import sacrifice_back_torso from '../../../public/sculpture/sacrifice/sacrifice_back_torso.jpg'
import sacrifice_back from '../../../public/sculpture/sacrifice/sacrifice_back.jpg'
import sacrifice_full_three_quarters from '../../../public/sculpture/sacrifice/sacrifice_full_three_quarters.jpg'
import sacrifice_full from '../../../public/sculpture/sacrifice/sacrifice_full.jpg'
import sacrifice_main_torso_three_quarters from '../../../public/sculpture/sacrifice/sacrifice_main_torso_three_quarters.jpg'
import sacrifice_torso from '../../../public/sculpture/sacrifice/sacrifice_torso.jpg'

const imagesToDisplay = [sacrifice_back, sacrifice_full_three_quarters, sacrifice_full, sacrifice_main_torso_three_quarters, sacrifice_torso, sacrifice_back_torso]

const sculptureDetails = [{
  link:"/works/sculpture/sacrifice",
  src:sacrifice_main_torso_three_quarters,
  alt:"Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched",
  title: 'Sacrifice,',
  details: '2013, ',
  material: 'Cast Aluminum,',
  size: '186 x 186 cm'
}]

export default function Sacrifice() {
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
          imagesToDisplay={imagesToDisplay}
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
