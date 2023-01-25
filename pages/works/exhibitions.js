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
//
//   return (
//     <>
//       <Navbar/>
//       <main className="px-2.5 md:px-0">
//         <div className="hidden md:block text-base  md:text-main mt-4 md:m-0 pt-12 md:pl-20 md:pb-10 md:pt-24">
//           {imageObject.map(image =>
//             <div className="flex flex-row flex-wrap space-x-2">
//                 <div><span className="italic">{image.title}</span></div>
//                 <div>{image.details}</div>
//                 <div>{image.material}</div>
//                 <div>{image.size}</div>
//             </div>
//           )}
//         </div>
//         <div className="featured md:px-52">
//           <ExhibitionArray imageObject={imageObject}/>
//         </div>
//         <div className="md:hidden text-base md:px-28 md:text-main mt-4 md:m-0 ">
//           {imageObject.map(image =>
//             <div className="flex flex-row flex-wrap space-x-2">
//                 <div><span className="italic">{image.title}</span></div>
//                 <div>{image.details}</div>
//                 <div>{image.material}</div>
//                 <div>{image.size}</div>
//             </div>
//           )}
//         </div>
//       </main>
//     </>
//   );
// }
