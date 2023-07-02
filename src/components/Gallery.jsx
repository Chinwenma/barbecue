










import React from 'react';
import { useState } from 'react';
import image1 from '../assets/Rectangle 10.png';
import image2 from '../assets/Rectangle 11.png';
import image3 from '../assets/Rectangle 12.png';
import image4 from '../assets/Rectangle 13.png';
import image5 from '../assets/Rectangle 15.png';
import image6 from '../assets/Rectangle 14@2x.png';

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image5,
    image3,
    image6,
  ];

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const toggleShowLess = () => {
    setShowMore(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="flex justify-start mb-4 text-3xl text-center leading-9 font-extrabold pl-6  sm:text-4xl  md:text-center lg:text-start sm:leading-10">Gallery</h1>
      <div className="flex flex-wrap">
        {galleryImages.slice(0, showMore ? galleryImages.length : 6).map((image, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 md:mb-3 lg:mb-4 transition-transform duration-300 transform hover:scale-105"
          >
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        ))}
      </div>
      {!showMore && (
        <button
          className="block mx-auto mt-4 md:hidden w-36 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-bold py-2 px-4 rounded-lg text-white- focus:outline-none focus:shadow-outline"
          onClick={toggleShowMore}
        >
          See More
        </button>
      )}
      {showMore && (
        <button
          className="block mx-auto mt-4 md:hidden w-36 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          onClick={toggleShowLess}
        >
          See Less
        </button>
      )}
    </div>
  );
};

export default Gallery;

























// import React from 'react';
// import { useState } from 'react';
// import image1 from '../assets/Rectangle 10.png';
// import image2 from '../assets/Rectangle 11.png';
// import image3 from '../assets/Rectangle 12.png';
// import image4 from '../assets/Rectangle 13.png';
// import image5 from '../assets/Rectangle 15.png';
// import image6 from '../assets/Rectangle 14@2x.png';

// const Gallery = () => {
//   const [showMore, setShowMore] = useState(false);

//   const galleryImages = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image3,
//     image6,
//   ];

//   const toggleShowMore = () => {
//     setShowMore((prevShowMore) => !prevShowMore);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="flex justify-start text-2xl font-bold mb-4">Gallery</h1>
//       <div className="flex flex-wrap">
//         {galleryImages.slice(0, showMore ? galleryImages.length : 6).map((image, index) => (
//           <div
//             key={index}
//             className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4 md:mb-3 lg:mb-4 transition-transform duration-300 transform hover:scale-105"
//           >
//             <img src={image} alt="" className="w-full h-auto" />
//           </div>
//         ))}
//       </div>
//       {!showMore && (
//         <button
//           className="block mx-auto mt-4 md:hidden bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={toggleShowMore}
//         >
//           See More
//         </button>
//       )}
//     </div>
//   );
// };

// export default Gallery;





// import React from 'react';
// import { useState } from 'react';
// import image1 from '../assets/Rectangle 10.png';
// import image2 from '../assets/Rectangle 11.png';
// import image3 from '../assets/Rectangle 12.png';
// import image4 from '../assets/Rectangle 13.png';
// import image5 from '../assets/Rectangle 15.png';
// import image6 from '../assets/Rectangle 14@2x.png';

// const Gallery = () => {
//   const [showMore, setShowMore] = useState(false);

//   const galleryImages = [image1, image2, image3, image4, image5, image6,  image1, image2, image3, image4, image5, image3, image6];

//   const toggleShowMore = () => {
//     setShowMore((prevShowMore) => (!prevShowMore));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="flex justify-start text-2xl font-bold mb-4">Gallery</h1>
//       <div className="flex flex-wrap ">
//         {galleryImages.slice(0, showMore ? galleryImages.length : 6).map((image, index) => (
//           <div
//             key={index}
//             className="w-full md:w-1/4 px-2 mb-4 md:mb-3 transition-transform duration-300 transform hover:scale-105"
//           >
//             <img src={image} alt="" className="w-full h-auto" />
//           </div>
//         ))}
//       </div>
//       {!showMore && (
//         <button
//           className="block mx-auto mt-4 md:hidden bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={toggleShowMore}
//         >
//           See More
//         </button>
//       )}
//     </div>
//   );
// };

// export default Gallery;




































// import React from 'react';
// import { useState } from 'react';
// import image1 from '../assets/Rectangle 10.png';
// import image2 from '../assets/Rectangle 11.png';
// import image3 from '../assets/Rectangle 12.png';
// import image4 from '../assets/Rectangle 13.png';
// import image5 from '../assets/Rectangle 15.png';
// import image6 from '../assets/Rectangle 14@2x.png';

// const Gallery = () => {
//   const [showMore, setShowMore] = useState(false);

//   const galleryImages = [image1, image2, image3, image4, image5, image6, image4,image5,image6,image1,image2, image3,image4,image5,image6];

//   const toggleShowMore = () => {
//     setShowMore((prevShowMore) => !prevShowMore);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="flex justify-start text-2xl font-bold mb-4">Gallery</h1>
//       <div className="flex flex-wrap">
//         {galleryImages.slice(0, showMore ? galleryImages.length : 4).map((image, index) => (
//           <div
//             key={index}
//             className="w-full md:w-1/4 px-2 mb-4 md:mb-0 transition-transform duration-300 transform hover:scale-105"
//           >
//             <img src={image} alt="" className="w-full h-auto" />
//           </div>
//         ))}
//       </div>
//       {!showMore && (
//         <button
//           className="block mx-auto mt-4 md:hidden bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={toggleShowMore}
//         >
//           See More
//         </button>
//       )}
//     </div>
//   );
// };

// export default Gallery;
