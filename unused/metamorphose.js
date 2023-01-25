// import Link from 'next/link'
// import Image from 'next/image'
// import Navbar from '../../../components/navbar.js'
// import CarouselComponent from '../../../components/carousel-component.js'
//
// import metamorphose_right from '../../../public/sculpture/metamorphose/metamorphose_right.jpg'
// import metamorphose_three_quarters from '../../../public/sculpture/metamorphose/metamorphose_three_quarters.jpg'
//
// const imagesArray = [metamorphose_three_quarters, metamorphose_right]
//
// const sculptureDetails = [{
//   link:"/works/sculpture/metamorphose",
//   src:metamorphose_three_quarters,
//   alt:"Metamorphose: a 36 cm tall sparklely green gray black resin sculpture of the head of a Nigerian man",
//   title: 'Metamorphose, ',
//   details: '2017, Palermo,',
//   material: 'Cast Resin,',
//   size: '36 x 36 cm'
// }
//
// ]
//
// export default function Metamorphose() {
//   return (
//     <>
//       <Navbar/>
//       <main className="px-2.5 md:px-0">
//         <div className="hidden md:block text-base  md:text-main mt-4 md:m-0 pt-12 md:pl-20 md:pb-10 md:pt-24">
//           {sculptureDetails.map(image =>
//             <div className="flex flex-row flex-wrap space-x-2">
//                 <div><span className="italic">{image.title}</span></div>
//                 <div>{image.details}</div>
//                 <div>{image.material}</div>
//                 <div>{image.size}</div>
//             </div>
//           )}
//         </div>
//         <div className="pt-12 md:pt-0 md:px-8 md:mx-48">
//           <CarouselComponent
//           imagesArray={imagesArray}
//           />
//         </div>
//         <div className="md:hidden text-base md:px-28 md:text-main mt-4 md:m-0 ">
//           {sculptureDetails.map(image =>
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
