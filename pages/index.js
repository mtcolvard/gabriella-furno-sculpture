// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import contentFeatured from '../public/content_featured.jpg'
import infinityBackThreeQuarters from '../public/infinity/infinity_back_three_quarters.jpg'
import pandoraBackThreeQuarters from '../public/pandora/pandora_back_three_quarters.jpg'
import classicalAlabasterBust from '../public/classical/classical_alabaster_bust.jpg'
import classicalWomanAndMan from '../public/classical/classical_woman_and_man.jpg'
import Navbar from '../components/navbar.js'

// <div className="headerLeft flex-[1_1_50%] items-baseline"></div>
// <h1 className="headerTitle text-base md:text-lg relative z-[3] text-center flex-[0_0_auto] select-none">Gabriella Furno</h1>
// <div className="flex min-h-screen flex-col items-center justify-center py-24">


// const Home: NextPage = () => {
const Home = () => {
  return (
    <div>
      <Head>
        <title>Gabriella Furno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>


      <main className="flex-[1_0_auto] px-2.5 md:px-8 text-xl md:text-3xl">
        <div className="leadImageContainer mt-16 md:mt-24"></div>
          <div className="content">
            <div className="content block">
              <div className="featured mb-8 md:mb-16">
                <Link href="/works/sacrifice">
                  <Image
                    src={contentFeatured}
                    alt="Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched"
                    priority
                  />
                </Link>
                <div className="homepageContentCaption text-base md:text-2xl mt-4 md:m-0 md:pt-5">
                  <div>
                    <span className="headerTitle">
                      <h2>
                      <span className="italic">Sacrifice, </span>
                        2013, Palermo, Italy, Cast Aluminum, 186 x 186 cm</h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content block">
              <div className="mb-16">
                <Link href="/works/infinity">
                  <Image
                    src={infinityBackThreeQuarters}
                    alt="Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched"
                  />
                </Link>
                <div className="homepageContentCaption text-base md:text-2xl mt-4 md:m-0 md:pt-5">
                  <div>
                    <span className="headerTitle">
                      <h2><span className="italic">Infinity, </span>
                        2014, Palermo, Italy, Cast Aluminum, 218 x 200 cm
                      </h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="content block">
              <div className="mb-16">
                <Link href="/works/pandora">
                  <Image
                    src={pandoraBackThreeQuarters}
                    alt="Pandora: a 230 cm tall cast aluminium sculpture of a beautiful African woman, contrapposto with hands framing her head"
                  />
                </Link>
                <div className="homepageContentCaption text-base md:text-2xl mt-4 md:m-0 md:pt-5">
                  <h2><span className="italic">Pandora, </span>
                    2013, Palermo, Italy, Cast Aluminum, 123 x 230 cm
                  </h2>
                </div>
                </div>
              </div>
            </div>
            <div className="content block">
              <div className="mb-16">
                <Link href="/works/palazzo-installation">
                  <Image
                    src={classicalAlabasterBust}
                    alt="tk"
                  />
                </Link>
                <div className="homepageContentCaption text-base md:text-2xl mt-4 md:m-0 md:pt-5">
                  <div>
                    <span className="headerTitle">
                      <h2><span className="italic">Woman, </span>
                      2013, Palermo, Italy, Plaster</h2>
                    </span>
                  </div>
                </div>
              </div>
            </div>

        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"

          >
            Copyright Gabriella Furno, 2023 {' '}

          </a>
        </footer>
      </div>
    )
  }

export default Home

// href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// target="_blank"
// rel="noopener noreferrer"
// <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

// <h1 className="text-6xl font-bold">
//   Welcome to{' '}
//   <a className="text-blue-600" href="https://nextjs.org">
//     Next.js!
//   </a>
// </h1>
//
// <p className="mt-3 text-2xl">
//   Get started by editing{' '}
//   <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
//     pages/index.tsx
//   </code>
// </p>
//
// <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
//   <a
//     href="https://nextjs.org/docs"
//     className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Find in-depth information about Next.js features and its API.
//     </p>
//   </a>
//
//   <a
//     href="https://nextjs.org/learn"
//     className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Learn &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Learn about Next.js in an interactive course with quizzes!
//     </p>
//   </a>
//
//   <a
//     href="https://github.com/vercel/next.js/tree/canary/examples"
//     className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Examples &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Discover and deploy boilerplate example Next.js projects.
//     </p>
//   </a>
//
//   <a
//     href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//     className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
//   >
//     <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
//     <p className="mt-4 text-xl">
//       Instantly deploy your Next.js site to a public URL with Vercel.
//     </p>
//   </a>
// </div>
