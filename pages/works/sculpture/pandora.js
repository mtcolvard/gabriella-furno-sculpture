import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../components/navbar.js'
import CarouselComponent from '../../../components/carousel-component.js'

import pandora_back_torso from '../../../public/sculpture/pandora/pandora_back_torso.jpg'
import pandora_back_three_quarters from '../../../public/sculpture/pandora/pandora_back_three_quarters.jpg'
import pandora_back from '../../../public/sculpture/pandora/pandora_back.jpg'
import pandora_full_three_quarters from '../../../public/sculpture/pandora/pandora_full_three_quarters.jpg'
import pandora_head from '../../../public/sculpture/pandora/pandora_head.jpg'
import pandora_left_full from '../../../public/sculpture/pandora/pandora_left_full.jpg'
import pandora_left_torso from '../../../public/sculpture/pandora/pandora_left_torso.jpg'
import pandora_right from '../../../public/sculpture/pandora/pandora_right.jpg'

const imagesArray = [pandora_right, pandora_back_torso, pandora_back_three_quarters, pandora_back, pandora_full_three_quarters, pandora_head, pandora_left_full, pandora_left_torso]

const sculptureDetails = [{
  link:"/works/sculpture/pandora",
  src:pandora_back_three_quarters,
  alt:"Pandora: a 230 cm tall cast aluminium sculpture of a beautiful African woman, contrapposto with hands framing her head",
  title: 'Pandora, ',
  details: '2013, Palermo,',
  material: 'Cast Aluminum,',
  size: '123 x 230 cm'
}]

export default function Pandora() {
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
