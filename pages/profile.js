import Link from 'next/link'
import Image from 'next/image'
import gabriellaPhotograph from '../public/profile/gabriella-photograph.webp'
import Navbar from '../components/navbar.js'


export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="px-2.5 pt-12 md:px-8 md:pt-24 md:mx-48 leading-tight">
      <Image
        src={gabriellaPhotograph}
        alt="Photograph of the artist Gabriella Furno"
        height="500"
      />
        <p className="mt-6 mb-6">Working on large forms is a necessity in itself. I think my drive or desire for creating these large works, connects me to a particular emotion hidden inside me; it’s an urge, a necessity, like feeling hungry.
        </p>
        <p className="mb-6">What is the meaning of where we come from? The space around us, the universe, feels like an empty place without answers. But the rhythm that we have every day is the fact that time passes whatever happens. The empty space contrasts to the speed surrounding us. This particular tension is the search for movement in forms. Sculpture gives the emotion of anxiety about what is really happening around us.
        </p>
        <p className="mb-6">The human body, for me, is an incredible source of infinity of movement. It’s the connection to rhythm that inspires color for me, according to each unique shape. It can be abstract or figurative, it doesn’t matter, what is important for me, is to find the energy of the subject and materials, and to set these free in my work. Its a bit of a mystic approach.
        </p>
        <p className="mb-6">When I work with a model, I like to expose the true beauty of my subject, often hidden by society’s norms, creating an object that will express the desires and confidence of the subject and break down society’s constrictive beliefs. In the end the object is the result of a performance of a life experiment. Desire is fundamental, as it is the force of life and this is actually what I am looking to express when I am about to create a new piece.
        </p>
        <p className="mb-6">I see a heroic figure in my African models. After centuries of Western oppression, I want to show their true power, resistance and dynamics, to return the dignity they may not feel in that moment. Like an athlete that pushes himself to the limit, I like to push the possibility of the sculpture to a physical aspect.
        </p>
        <p className="mb-6">The adrenaline I feel to succeed in expressing this as a performance is vital to release the energy boiling inside my subject. They become a sort of spiritual object looking at the world. Looking at tension is like giving birth to a feeling and vision that take place in the space. Sculptures are forms that are trying to come out from inside and connect to each other like a new language; this idea has to always stay up.
        </p>
        <p className="mb-6">I like the fact that Sculpture reminds us how small we are in the universe. It’s very important for me to work on the impact that it has on the viewer, so we understand ourselves more, avoiding the borders that society creates around us.
        </p>
        <p className="mb-6">Gabriella Furno
        </p>
      </div>
    </>
  )
}
