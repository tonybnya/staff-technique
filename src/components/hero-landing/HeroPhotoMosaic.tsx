// import HeroImageCard from "./HeroImageCard";

// export interface ImageProps {
//   src: string;
//   alt: string;
//   className?: string;
// }

// export interface HeroPhotoMosaicProps {
//   images: ImageProps[];
// }

// const HeroPhotoMosaic = ({ images }: HeroPhotoMosaicProps) => {
//   return (
//     <div className="md:w-1/2 aspect-square">
//       <div
//         className="grid w-full h-full gap-4"
//         style={{
//           gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
//           gridTemplateRows: "repeat(auto-fit, minmax(0, 1fr))",
//           gridAutoRows: "1fr",
//           gridAutoColumns: "1fr",
//         }}
//       >
//         {images.map((image, index) => (
//           <HeroImageCard
//             key={index}
//             {...image}
//             className="w-full h-full rounded-2xl object-cover"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroPhotoMosaic;

import HeroImageCard from "./HeroImageCard";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface HeroPhotoMosaicProps {
  images: ImageProps[];
  className?: string;
}

const HeroPhotoMosaic = ({ images, className }: HeroPhotoMosaicProps) => {
  return (
    <div className={`md:w-1/2 aspect-square ${className || ''}`}>
      <div className="grid grid-cols-2 gap-4 h-full">
        {images.map((image, index) => (
          <HeroImageCard 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            className={image.className}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroPhotoMosaic;