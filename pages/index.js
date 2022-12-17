// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import contentFeatured from '../public/content_featured.jpg'

// <div className="headerLeft flex-[1_1_50%] items-baseline"></div>
// <h1 className="headerTitle text-base md:text-lg relative z-[3] text-center flex-[0_0_auto] select-none">Gabriella Furno</h1>


// const Home: NextPage = () => {
const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-24">
      <Head>
        <title>Gabriella Furno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header fixed h-11 md:h-24 px-2.5 md:px-8 top-0 left-0 w-full z-10 flex items-center">
        <div className="headerContainer flex leading-5 w-full items-baseline justify-between">
          <div className="headerLeft flex flex-[1_1_50%] items-baseline">
            <button className="navButton flex relative justify-start items-start z-10 p-2.5 -mt-2.5 -ml-2.5 md:m-0" aria-label="Open navigation">
              <div className="navIconWrap block">
                <div className="navIcon w-5 md:w-6 h-3.5 md:h-4 relative block">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
          </div>
          <h1 className="headerTitle flex-[0_0_auto] text-base md:text-lg relative z-[3] text-center select-none">Gabriella Furno</h1>
          <div className="headerRight flex-[1_1_50%] items-baseline justify-end">&nbsp;</div>
        </div>
      </header>

      <main className="flex-[1_0_auto] px-2.5 md:px-8">
        <div className="leadImageContainer">
        </div>
        <div className="content block">
          <div className="featured mb-16">
            <Image
              src={contentFeatured}
              alt="The Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched"
            />
            <div className="homepageContentCaption mt-4 md:m-0 md:pt-5">
              <div>
                <span className="headerTitle">
                  <h2>The Sacrifice, Gabriella Furno, Palermo, Italy</h2>
                </span>
              </div>
            </div>
          </div>
        </div>


      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

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
