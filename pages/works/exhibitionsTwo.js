// // import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import Navbar from '../../components/navbar.js'
// import Footer from '../../components/footer.js'
// import ExhibitionArray from '../../components/exhibition-array.js'
//
// import metamorphose_three_quarters from '../../public/sculpture/metamorphose/metamorphose_three_quarters.jpg'
// import classical_woman_and_man from '../../public/sculpture/classical/classical_woman_and_man.jpg'
//
// export default function Exhibitions() {
//
//   const imageObject = [
//     {
//       link:'/works/exhibitions/museo-del-mare',
//       src:metamorphose_three_quarters,
//       alt: 'tk',
//       title: 'Recent Works, ',
//       details: '2022, Museo del Mare, Pantelleria',
//       material: '',
//       size: '',
//       style: 'medium',
//       width: '100%'
//     },
//     {
//       link:'/works/exhibitions/palazzo-installation',
//       src:classical_woman_and_man,
//       alt: 'tk',
//       title: 'Palazzo Installation, ',
//       details: '2013, Palermo',
//       material: '',
//       size: '',
//       style: 'medium',
//       width: '80%'
//     }
//   ]
//
//   return (
//     <div>
//
//         <Navbar/>
//         <main className="flex-[1_0_auto] px-2.5 md:px-8 text-xl md:text-3xl">
//           <div className="leadImageContainer">
//             // <div className="featured md:px-52">
//             //   <ExhibitionArray imageObject={imageObject.slice(0,1)}/>
//             // </div>
//           </div>
//             <div className="content md:px-52">
//               <ExhibitionArray imageObject={imageObject.slice(1)}/>
//             </div>
//         <Footer />
//         </main>
//       </div>
//
//     )
//   }
