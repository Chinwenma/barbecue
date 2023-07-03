import React, { useState } from 'react';
import { data } from '../constants';

const MenuCard = ({ item: { pic, title, price } }) => (
  <div className="flex flex-col items-center mb-8">
    <img src={pic} alt="item" className="w-20 h-20 mb-2" />
    <div>
      <p className="text-lg font-bold">{title}</p>
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
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
      <div className="flex flex-row items-center justify-center mb-4">
        <ul className="flex flex-row text-base items-baseline w-full md:w-auto mb-4 md:mb-0 md:flex-col">
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
              activeMenu === 'Turkeys' ? 'font-bold' : ''
            }`}
            onClick={() => handleMenuClick('Turkeys')}
          >
            Turkeys
          </li>
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
              activeMenu === 'Fishes' ? 'font-bold' : ''
            }`}
            onClick={() => handleMenuClick('Fishes')}
          >
            Fishes
          </li>
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
              activeMenu === 'Drinks' ? 'font-bold' : ''
            }`}
            onClick={() => handleMenuClick('Drinks')}
          >
            Drinks
          </li>
          <li
            className={`mr-4 md:mr-0 md:mb-4 font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
              activeMenu === 'Barbeques' ? 'font-bold' : ''
            }`}
            onClick={() => handleMenuClick('Barbeques')}
          >
            Barbeques
          </li>
        </ul>
        <div className="h-8 bg-gray-300 w-5 md:hidden" />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {getMenuData().map((item, index) => (
          <MenuCard item={item} key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <ul className="flex items-center space-x-2">
          {getMenuData().map((_, index) => (
            <li
              key={index}
              className={`w-4 h-4 rounded-full bg-gray-400 ${
                index === 0 ? 'bg-gray-800' : ''
              }`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;






































// import React, { useState } from 'react';
// import { data } from '../constants';

// const MenuCard = ({ item: { pic, title, price } }) => (
//   <div className="flex items-center mb-4">
//     <img src={pic} alt="item" className="w-20 h-20 mr-4" />
//     <div>
//       <p className="text-lg font-bold">{title}</p>
//       <p className="text-gray-500">{price}</p>
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
//       <h1 className="text-3xl font-bold mb-4 text-left">Our Menu</h1>
//       <div className="flex flex-row items-center justify-center mb-4">
//         <ul className="flex flex-row  text-base items-baseline w-full md:w-auto mb-4 md:mb-0 md:flex-col">
//           <li
//             className={`mr-4 md:mr-0 md:mb-4  font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 cursor-pointer ${
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
//         <div className="h-8 bg-gray-300 w-5  md:hidden" />
//         <div className="flex flex-wrap w-full">
//           {getMenuData().map((item, index) => (
//             <MenuCard item={item} key={index} />
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <ul className="flex items-center space-x-2">
//           {Array.from({ length: Math.ceil(getMenuData().length / 4) }).map((_, index) => (
//             <li
//               key={index}
//               className={`w-4 h-4 rounded-full bg-gray-400 ${
//                 index === 0 ? 'bg-gray-800' : ''
//               }`}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Menu;
