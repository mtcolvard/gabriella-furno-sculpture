import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ExhibitionArray = ( { imageObject }) => {
const regular = {maxWidth: '100%'}
const medium = {display: 'block', width: '66%', marginLeft: 'auto', marginRight: 'auto'}
const skinny = {display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto'}

  return(
    imageObject.map((image, i) =>
    <div className="hidden md:block text-base  md:text-main mt-4 md:m-0 pt-12 md:pl-20 md:pb-10 md:pt-24">
      <div className="flex flex-row flex-wrap space-x-2">
        <div><span className="italic">{image.title}</span></div>
        <div>{image.details}</div>
        <div>{image.material}</div>
        <div>{image.size}</div>
      </div>
      <div className="content "
          key={i}
      >
        <div className="mb-16">
          <Link href={image.link}>
          {i === 0 && image.style === 'regular' &&
            <Image
              src={image.src}
              alt={image.alt}
              style={regular}
              priority
            />
          }
          {i === 0 && image.style === 'medium' &&
            <Image
              src={image.src}
              alt={image.alt}
              style={medium}
              priority
            />
          }
          {i === 0 && image.style === 'skinny' &&
            <Image
              src={image.src}
              alt={image.alt}
              style={skinny}
              priority
            />
          }
          {i !== 0 && image.style === 'regular' &&
            <Image
              src={image.src}
              alt={image.alt}
              style={regular}
            />
          }
          {i !== 0 && image.style === 'medium' &&
            <Image
              src={image.src}
              alt={image.alt}
              style={medium}
            />
          }

          {i !== 0 && image.style === 'skinny' &&
            <Image
              src={image.src}
              alt={image.alt}
              style={skinny}
            />
          }
          </Link>
        </div>
      </div>
    </div>
    )
  )
}
  export default ExhibitionArray;
