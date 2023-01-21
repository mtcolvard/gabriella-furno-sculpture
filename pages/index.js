// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import contentFeatured from '../public/content_featured.jpg'
import infinityBackThreeQuarters from '../public/sculpture/infinity/infinity_back_three_quarters.jpg'
import pandoraBackThreeQuarters from '../public/sculpture/pandora/pandora_back_three_quarters.jpg'
import classicalAlabasterBust from '../public/sculpture/classical/classical_alabaster_bust.jpg'
import classicalWomanAndMan from '../public/sculpture/classical/classical_woman_and_man.jpg'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

// <div className="headerLeft flex-[1_1_50%] items-baseline"></div>
// <h1 className="headerTitle text-base md:text-lg relative z-[3] text-center flex-[0_0_auto] select-none">Gabriella Furno</h1>
// <div className="flex min-h-screen flex-col items-center justify-center py-24">


// <button className="navButton flex relative justify-start items-start z-10 p-2.5 -mt-2.5 -ml-2.5 md:m-0" aria-label="Open navigation">
// <div className="navIcon w-5 md:w-6 h-3.5 md:h-4 relative block">
// <FontAwesomeIcon icon={faBars} size={`${burgerSize}`} />

// --font-family-serif: "Starling","Times New Roman",serif;
//   --color-grey: #a6a6a6;
//   --color-grey-light: #eee;
//   --gutter: 30px;
//   --margin-x-small: 20px;
//   --margin-small: 40px;
//   --margin-mid: 60px;
//   --margin-large: 80px;
//   --margin-x-large: 120px;
//   --margin-xx-large: 210px;
//   --sm-gutter: 10px;
//   --sm-margin-x-small: 15px;
//   --sm-margin-small: 20px;
//   --sm-margin-mid: 30px;
//   --sm-margin-large: 70px;
//   --sm-margin-x-large: 150px;
//   --sm-font-size-large: 19px;
//   --sm-font-size-body: 14px;
//   --sm-font-size-caption: 12px;

//   --md-font-size-large: 19px;
//   --md-font-size-body: 15px;
//   --md-font-size-caption: 12px;

//   --lg-font-size-large: 22px;
//   --lg-font-size-body: 18px;
//   --lg-font-size-caption: 15px;

//   --font-size-large: 19px;
//   --font-size-body: 15px;
//   --font-size-caption: 12px;

//   --line-height-body: 1.4;
//   --header-height: 90px;
//   --sm-header-height: 45px;

//   --square-frame: calc((100vw - (var(--gutter) * 2) - var(--margin-large)) / 2);
//   --page-width: 36.8em;
//   --wide-page-width: 44.6666666em;

const Home = () => {
  return (
    <div>
      <Head>
        <title>Gabriella Furno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="site min-h-screen flex flex-col pt-12 md:pt-24 text-zinc-500">
        <Navbar/>
        <main className="flex-[1_0_auto] px-2.5 md:px-8 text-xl md:text-3xl">
          <div className="leadImageContainer"></div>
            <div className="content md:px-44">
              <div className="content block">
                <div className="featured mb-8 md:mb-16">
                  <Link href="/works/sculpture/sacrifice">
                    <Image

                      src={contentFeatured}
                      alt="Sacrifice: a 186cm tall aluminium sculpture of a strong, beautiful woman with her hands outstretched"
                      priority
                    />
                  </Link>
                  <div className="homepageContentCaption text-base mt-4 md:m-0 md:pt-5">
                    <div>
                      <span className="headerTitle">
                        <h2><span className="italic">Sacrifice, </span>2013, Palermo, Cast Aluminum</h2>
                        <h2>186 x 186 cm</h2>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content block">
                <div className="mb-16">
                  <Link href="/works/sculpture/infinity">
                    <Image

                      src={infinityBackThreeQuarters}
                      alt="Infinity: a 218 cm tall aluminium sculpture of a Nigerian man crouching with hands outstretched"
                    />
                  </Link>
                  <div className="homepageContentCaption text-base mt-4 md:m-0 md:pt-5">
                    <div>
                      <span className="headerTitle">
                        <h2><span className="italic">Infinity, </span>
                          2014, Palermo, Cast Aluminum
                        </h2>
                        <h2>218 x 200 cm</h2>

                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content block">
                <div className="mb-16">
                  <Link href="/works/sculpture/pandora">
                    <Image

                      src={pandoraBackThreeQuarters}
                      alt="Pandora: a 230 cm tall cast aluminium sculpture of a beautiful African woman, contrapposto with hands framing her head"
                    />
                  </Link>
                  <div className="homepageContentCaption text-base mt-4 md:m-0 md:pt-5">
                    <h2><span className="italic">Pandora, </span>
                      2013, Palermo, Cast Aluminum
                    </h2>
                    <h2>123 x 230 cm</h2>
                  </div>
                  </div>
                </div>
              </div>
              <div className="content block">
                <div className="mb-16">
                  <Link href="/works/sculpture/palazzo-installation">
                    <Image

                      src={classicalAlabasterBust}
                      alt="tk"
                    />
                  </Link>
                  <div className="homepageContentCaption text-base mt-4 md:m-0 md:pt-5">
                    <div>
                      <span className="headerTitle">
                        <h2><span className="italic">Woman, </span>
                        2013, Palermo, Plaster</h2>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
        <Footer />
        </main>
      </div>
    </div>
    )
  }

export default Home
