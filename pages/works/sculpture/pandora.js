import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../../../components/navbar.js'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import pandora_back_torso from '../../../public/sculpture/pandora/pandora_back_torso.jpg'
import pandora_back_three_quarters from '../../../public/sculpture/pandora/pandora_back_three_quarters.jpg'
import pandora_back from '../../../public/sculpture/pandora/pandora_back.jpg'
import pandora_full_three_quarters from '../../../public/sculpture/pandora/pandora_full_three_quarters.jpg'
import pandora_head from '../../../public/sculpture/pandora/pandora_head.jpg'
import pandora_left_full from '../../../public/sculpture/pandora/pandora_left_full.jpg'
import pandora_left_torso from '../../../public/sculpture/pandora/pandora_left_torso.jpg'
import pandora_right from '../../../public/sculpture/pandora/pandora_right.jpg'

const images = [pandora_right, pandora_back_torso, pandora_back_three_quarters, pandora_back, pandora_full_three_quarters, pandora_head, pandora_left_full, pandora_left_torso]

export default function Pandora() {
  return (
    <>
      <Navbar/>
      <div className="px-2.5 pt-12 md:px-8 md:pt-24 md:mx-48">
        <Carousel
          axis="horizontal"
          infiniteLoop={false}
          autoPlay={false}
          swipeable={true}
          renderIndicator={false}
          dynamicHeight={true}
          renderThumbs={() =>
            images.map((img, idx) => (
              <div key={idx} className="w-full h-20 relative">
                <Image
                  src={img}
                  layout="fill"
                  objectFit="contain"
                  alt="logo"
                ></Image>
              </div>
            ))
          }
        >
          {images.length !== 0 &&
            images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`${images.title} preview ${idx}`}
                layout="responsive"
                width={650}
                height={650}
                priority={idx === 0}
              ></Image>
            ))}
        </Carousel>
        <div className="homepageContentCaption text-base md:text-main mt-4 md:m-0 md:pt-5">
          <div>
            <span className="headerTitle">
              <h2>
              <span className="italic">Sacrifice, </span>
                2013, Palermo, Italy, Cast Aluminum</h2>
              <h2>186 x 186 cm</h2>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
