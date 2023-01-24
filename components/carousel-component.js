import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function CarouselComponent({ imagesArray }) {
  return (
    <Carousel
      axis="horizontal"
      infiniteLoop={false}
      autoPlay={false}
      swipeable={true}
      renderIndicator={false}
      dynamicHeight={true}
      renderThumbs={() =>
        imagesArray.map((img, idx) => (
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
      {imagesArray.length !== 0 &&
        imagesArray.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${imagesArray.title} preview ${idx}`}
            layout="responsive"
            width={'50%'}
            priority={idx === 0}
          ></Image>
        ))}
    </Carousel>
  )
}
