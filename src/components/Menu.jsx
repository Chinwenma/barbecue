
import React from 'react'

const Menu = () => {
  return (
    <div>
      
    </div>
  )
}

export default Menu





















































































// import React, { useState } from 'react';
// import data from './data';

// const MenuSection = () => {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const handleMenuClick = (menu) => {
//     setActiveMenu(menu);
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold text-center my-4">Our Menu</h1>

//       {/* List of different menus */}
//       <ul className="flex justify-center my-4">
//         <li className="mr-2">
//           <button
//             className={`px-3 py-2 rounded-lg bg-blue-500 text-white ${activeMenu === 'fish' ? 'bg-blue-700' : ''}`}
//             onClick={() => handleMenuClick('fish')}
//           >
//             Fish
//           </button>
//         </li>
//         <li className="mr-2">
//           <button
//             className={`px-3 py-2 rounded-lg bg-blue-500 text-white ${activeMenu === 'turkey' ? 'bg-blue-700' : ''}`}
//             onClick={() => handleMenuClick('turkey')}
//           >
//             Turkey
//           </button>
//         </li>
//         <li className="mr-2">
//           <button
//             className={`px-3 py-2 rounded-lg bg-blue-500 text-white ${activeMenu === 'chicken' ? 'bg-blue-700' : ''}`}
//             onClick={() => handleMenuClick('chicken')}
//           >
//             Chicken
//           </button>
//         </li>
//         <li className="mr-2">
//           <button
//             className={`px-3 py-2 rounded-lg bg-blue-500 text-white ${activeMenu === 'pizza' ? 'bg-blue-700' : ''}`}
//             onClick={() => handleMenuClick('pizza')}
//           >
//             Pizza
//           </button>
//         </li>
//         <li className="mr-2">
//           <button
//             className={`px-3 py-2 rounded-lg bg-blue-500 text-white ${activeMenu === 'shawarma' ? 'bg-blue-700' : ''}`}
//             onClick={() => handleMenuClick('shawarma')}
//           >
//             Shawarma
//           </button>
//         </li>
//       </ul>

//       {/* Display menu data as a slider */}
//       <div className={`md:flex md:flex-wrap md:-mx-2 ${activeMenu ? 'block' : 'hidden'}`}>
//         {data
//           .filter((item) => item.category === activeMenu)
//           .map((item) => (
//             <div key={item.id} className="md:w-1/4 sm:w-1/2 lg:w-1/4 px-2 mb-4">
//               <div className="bg-gray-100 rounded-lg shadow-lg p-4">
//                 <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-2" />
//                 <h2 className="text-lg font-bold">{item.name}</h2>
//                 <p className="text-gray-600">${item.price}</p>
//               </div>
//             </div>
//           ))}
//       </div>

//       {/* Pagination centered at the bottom */}
//       <div className={`flex justify-center my-4 ${activeMenu ? 'block' : 'hidden'}`}>
//         <button className="px-3 py-2 rounded-lg bg-blue-500 text-white mx-1">1</button>
//         <button className="px-3 py-2 rounded-lg bg-blue-500 text-white mx-1">2</button>
//         <button className="px-3 py-2 rounded-lg bg-blue-500 text-white mx-1">3</button>
//       </div>
//     </div>
//   );
// };

// export default MenuSection;












// import CEO from "../assets/ceo.png"

// export default function Menu() {
//     return (
//         <div className="bg-gray-300  h-96 w-full">
//             <h1>OUR MENU</h1>
//             <div>
//                 <ul>
//                     <li>Turkey</li>
//                     <li>Fish</li>
//                     <li>Barbeque</li>
//                     <li>Drinks</li>
//                 </ul>
//                 <div className="grid grid-cols-4">
//                     <div>
//                         <img src={CEO} alt="" className="w-24 h-24" />
//                         <p>Olusegun</p>
//                         <p>2500</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }