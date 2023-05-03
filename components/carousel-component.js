import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function CarouselComponent({ imagesToDisplay }) {
  return (
    <Carousel
      axis="horizontal"
      infiniteLoop={false}
      autoPlay={false}
      swipeable={true}
      renderIndicator={false}
      dynamicHeight={true}
      renderThumbs={() =>
        imagesToDisplay.map((img, idx) => (
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
      {imagesToDisplay.length !== 0 &&
        imagesToDisplay.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${imagesToDisplay.title} preview ${idx}`}
            layout="responsive"
            width={'50%'}
            priority={idx === 0}
          ></Image>
        ))}
    </Carousel>
  )
}
