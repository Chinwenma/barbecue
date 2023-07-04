// import React, { useState } from 'react';
// import { data } from '../constants';

// const MenuCard = ({ item: { pic, title, subTiltle, price } }) => (
//   <div className="flex flex-col items-center mb-8 p-4 bg-white shadow">
//     <img src={pic} alt="item" className="w-20 h-20 mb-2" />
//     <div>
//       <p className="text-lg font-bold">{title}</p>
//       <p className="text-gray-500">{price}</p>
//       <p className="text-gray-700">{subTiltle}</p>
//     </div>
//   </div>
// );

// const Menu = () => {
//   const [activeMenu, setActiveMenu] = useState('Turkeys');

//   const handleMenuClick = (menu) => {
//     setActiveMenu(menu);
//   };

//   const getMenuData = () => {
//     switch (activeMenu) {
//       case 'Turkeys':
//         return data.Turkeys;
//       case 'Fishes':
//         return data.Fishes;
//       case 'Drinks':
//         return data.Drinks;
//       case 'Barbeques':
//         return data.Barbeques;
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
//       <div className="flex flex-row items-center justify-between mb-4">
//         <div className='flex mt-0'>
//         <ul className="flex flex-row text-base w-full md:w-auto mb-4 md:mb-0 md:flex-col">
//           <li
//             className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
//               activeMenu === 'Turkeys' ? 'font-bold' : ''
//             }`}
//             onClick={() => handleMenuClick('Turkeys')}
//           >
//             Turkeys
//           </li>
//           <li
//             className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
//               activeMenu === 'Fishes' ? 'font-bold' : ''
//             }`}
//             onClick={() => handleMenuClick('Fishes')}
//           >
//             Fishes
//           </li>
//           <li
//             className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
//               activeMenu === 'Drinks' ? 'font-bold' : ''
//             }`}
//             onClick={() => handleMenuClick('Drinks')}
//           >
//             Drinks
//           </li>
//           <li
//             className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
//               activeMenu === 'Barbeques' ? 'font-bold' : ''
//             }`}
//             onClick={() => handleMenuClick('Barbeques')}
//           >
//             Barbeques
//           </li>
//         </ul>
//         </div>
//         <div
//           className="hidden md:flex bg-gray-700"
//           style={{ width: '1px', height: '300px' }}
//         ></div>

//       <div className="flex flex-wrap justify-center gap-4 md:w-1/2 lg:w-3/4">
//         {getMenuData().map((item, index) => (
//           <MenuCard item={item} key={index} />
//         ))}
//       </div>

//       </div>

//       <div className="flex justify-center mt-8">
//         <ul className="flex items-center space-x-2">
//           {Array.from({ length: 4 }).map((_, index) => (
//             <li
//               key={index}
//               className={`w-4 h-4 p-3 rounded-full text-center bg-gray-400 ${
//                 index === 0 ? 'bg-gray-800' : ''
//               } cursor-pointer`}
//               onClick={() => handleMenuClick(Object.keys(data)[index])}
//             >
//               {index + 1}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Menu;













































import React, { useState } from 'react';
import { data } from '../constants';

const MenuCard = ({ item: { pic, title, subTitle, price } }) => (
  <div className="flex flex-col items-start mb-6 p-2 bg-gray-100 shadow  text-left md:w-1/4">
    <img src={pic} alt="item" className="w-18 h-18 mb-2" />
    <div>
      <p className="text-lg font-bold">{title}</p>
      <p className='text-gray-700'>{subTitle}</p>
      <p className="text-gray-500">{price}</p>
      
    </div>
  </div>
);

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState('Turkeys');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const getMenuData = () => {
    switch (activeMenu) {
      case 'Turkeys':
        return data.Turkeys;
      case 'Fishes':
        return data.Fishes;
      case 'Drinks':
        return data.Drinks;
      case 'Barbeques':
        return data.Barbeques;
      default:
        return [];
    }
  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <div className="flex flex-col items-center justify-center mb-4 md:flex-row md:gap-4 md:relative">
        <div className='md:absolute top-0 left-4 '>
        <ul className="flex flex-row text-base w-full md:w-auto mb-4 md:mb-0 md:flex-col sm:flex-row">
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${activeMenu === 'Turkeys' ? 'font-bold' : ''
              }`}
            onClick={() => handleMenuClick('Turkeys')}
          >
            Turkeys
          </li>
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer  ${activeMenu === 'Fishes' ? ' active:text-orange-600' : ''
              }`}
            onClick={() => handleMenuClick('Fishes')}
          >
            Fishes
          </li>
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${activeMenu === 'Drinks' ? 'font-bold' : ''
              }`}
            onClick={() => handleMenuClick('Drinks')}
          >
            Drinks
          </li>
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${activeMenu === 'Barbeques' ? 'font-bold' : ''
              }`}
            onClick={() => handleMenuClick('Barbeques')}
          >
            Barbeques
          </li>
        </ul>
        <div className='hidden md:flex bg-gray-700 md:absolute top-0 left-24 ' style={{ width: "1px", height: "300px" }}></div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {getMenuData().map((item, index) => (
            <MenuCard item={item} key={index} />
          ))}
        </div>

      </div>
      <div className="flex justify-center mt-8">
  <ul className="flex items-center space-x-2">
    {Array.from({ length: 4 }).map((_, index) => (
      <li
        key={index}
        className={`w-6 h-6 pb-3 rounded-full text-center bg-gray-400 ${
          index === 0 ? 'bg-orange-500' : ''
        } cursor-pointer`}
        onClick={() => handleMenuClick(Object.keys(data)[index])}
      >
      {index + 1}
      </li>
    ))}
  </ul>
</div>

      {/* <div className="flex justify-center mt-8">
        <ul className="flex items-center space-x-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className={`w-4 h-4 p-3 rounded-full text-center bg-gray-400 ${index === 0 ? 'bg-gray-800' : ''
                } cursor-pointer`}
              onClick={() => handleMenuClick(Object.keys(data)[index])}
            >
              {index + 1}
            </li>
          ))}         </ul>
      </div> */}
     
    </div>
  );
};

export default Menu;