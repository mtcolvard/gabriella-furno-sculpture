import Image from 'next/image'
import Link from 'next/link'


const ImageArray = ( { imageObject }) => {
const regular = {maxWidth: '100%'}
const medium = {display: 'block', width: '66%', marginLeft: 'auto', marginRight: 'auto'}
const skinny = {display: 'block', width: '50%', marginLeft: 'auto', marginRight: 'auto'}

  return(
    imageObject.map((image, i) =>
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
