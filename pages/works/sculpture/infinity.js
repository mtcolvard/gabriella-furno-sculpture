import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../components/navbar.js'
import CarouselComponent from '../../../components/carousel-component.js'

import infinity_back_full from '../../../public/sculpture/infinity/infinity_back_full.jpg'
import infinity_back_three_quarters from '../../../public/sculpture/infinity/infinity_back_three_quarters.jpg'
import infinity_back_torso from '../../../public/sculpture/infinity/infinity_back_torso.jpg'
import infinity_full from '../../../public/sculpture/infinity/infinity_full.jpg'
import infinity_torso from '../../../public/sculpture/infinity/infinity_torso.jpg'

const imagesToDisplay = [infinity_back_full, infinity_back_three_quarters, infinity_back_torso, infinity_full, infinity_torso]

const sculptureDetails = [{
  link:"/works/sculpture/infinity",
  src:infinity_back_three_quarters,
  alt:"Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched",
  title: 'Infinity, ',
  details: '2014, ',
  material: 'Cast Aluminum,',
  size: '218 x 200 cm'
}

]

export default function Infinity() {
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
