import Link from 'next/link'
import Image from 'next/image'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import infinityBackThreeQuarters from '../../../public/infinity/infinity_back_three_quarters.jpg'
import pandoraBackThreeQuarters from '../../../public/pandora/pandora_back_three_quarters.jpg'
import classicalAlabasterBust from '../../../public/classical/classical_alabaster_bust.jpg'
import classicalWomanAndMan from '../../../public/classical/classical_woman_and_man.jpg'

const images = [infinityBackThreeQuarters, pandoraBackThreeQuarters, classicalAlabasterBust, classicalWomanAndMan]

export default function Sacrifice() {
  return (
    <>
      <h1>Sacrifice</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Carousel
        axis="horizontal"
        infiniteLoop={true}
        autoPlay={true}
        swipeable={true}
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
    </>
  );
}
