import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ImageArray = ( {imageObject }) => {

  return(
    imageObject.map((image, i) =>
      <div className="content block"
          key={i}
      >
        <div className="mb-16">
          <Link href={image.link}>
          {i === 0 &&
            <Image
              src={image.src}
              alt={image.alt}
              priority
            />
          }
          {i !== 0 &&
            <Image
              src={image.src}
              alt={image.alt}
            />
          }
          </Link>
          <div className="text-base mt-4 md:m-0 md:pt-4">
            <div className="pictureCaptionMobile">
              <div className="md:hidden">
                <div><span className="italic">{image.title}</span>{image.details}</div>
              </div>
              <div className="md:hidden">
                <div>{image.material} {image.size}</div>
              </div>
            </div>
            <div className="pictureCapitionComputer">
              <div className="hidden md:block ">
                  <div><span className="italic">{image.title}</span>{image.details} {image.material}</div>
              <div>{image.size}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
  export default ImageArray;
