import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Logo from '../assets/logo.png';
import "../custom.css"


const NavBar = () => {


  const [toggleMenu, SetToggleMenu] = useState(false);
  return (

    <nav className='app__navbar'>
      <div className='ml-6'>
        <img src={Logo} alt=" app logo"  className=" w-12 h-12 md:w-20 md:h-20"/>
      </div>
      <ul className='app__navbar-links'>
        <li className=' font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300'><a href='#home'>Home</a> </li>
        <li className=' font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300'><a href='#about'>About</a> </li>
        <li className=' font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300'><a href='#menu'>Menu</a> </li>
        <li className=' font-dm text-lg hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300 '><a href='#contact'>Contact</a> </li>
              </ul>
                
       <div className=" hidden md:flex justify-center md:justify-start w-34 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg rounded-md focus:outline-none"><a href="#home" className="p-3 px-6 pt-2 text-white text-lg rounded-none baseline md:block" hrefLang='/'>Order Now</a>
        </div>
      
      <div className='app__navbar-smallscreen' >
        <GiHamburgerMenu className=' text-orange-600 ' fontSize={27}  backGround= "black"onClick={() => SetToggleMenu(true)}  />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu  fontSize={27} className=' text-orange-600 overlay__close' onClick={() => SetToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Home</a> </li>
              <li className='p__opensans'><a href='#about'>About</a> </li>
              <li className='p__opensans'><a href='#menu'>Menu</a> </li>
              <li className='p__opensans'><a href='#contact'>Contact</a> </li>
            </ul>
          </div>
        )}
      </div>
    </nav >
  )
};

export default NavBar;






























// import React, { useState } from 'react';

// import { FiMenu, FiX } from 'react-icons/fi';
// import { CSSTransition } from 'react-transition-group';

// import Logo from '../assets/logo.png';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="container mx-auto p-6 py-4 space-x-6 px-8">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-white font-bold text-xl pt-2">
//           <img src={Logo} alt="logo" className="w-20 h-20" />
//         </div>

//         {/* Hamburger Menu */}
//         <div className="md:hidden">
//           {isMenuOpen ? (
//             <FiX className="text-black cursor-pointer text-2xl" onClick={toggleMenu} />
//           ) : (
//             <FiMenu className="text-black cursor-pointer text-2xl" onClick={toggleMenu} />
//           )}
//         </div>

//         {/* Navigation Links */}
//         <CSSTransition
//           in={isMenuOpen}
//           timeout={300}
//           classNames="slide-down"
//           unmountOnExit
//         >
//           <ul className=" hidden md:flex items-center justify-center space-x-10 font-semibold text-black cursor-pointer md:space-x-6 md:text-lg">
//             <li className="font-dm hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300">
//               Home
//             </li>
//             <li className="font-dm hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300">
//               Gallery
//             </li>
//             <li className="font-dm hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300">
//               About
//             </li>
//             <li className="font-dm hover:text-orange-600 hover:border-b-2 hover:border-orange-500 transition-all duration-300">
//               Contact
//             </li>
//           </ul>
//         </CSSTransition>

//         {/* Login Button */}
//         <div className=" hidden md:flex justify-center md:justify-start w-34 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg rounded-md focus:outline-none">
//           <a href="#home" className="p-3 px-6 pt-2 text-white text-lg rounded-none baseline md:block">
//             Order Now
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;






// import React from 'react'

// import Logo from '../assets/logo.png';
// const NavBar = () => {
//     return (

//         <nav className=" container mx-auto p-6 py-4 space-x-6 px-8" >
//             <div className="flex items-center justify-between">
//                 {/* Logo */}
//                 <div className="text-white font-bold text-xl pt-2">
//                     <img src={Logo} alt='logo' className='w-12 h-12' />
//                 </div>

//                 {/* Navigation Links */}
//                 <ul className=" hidden  md:flex items-center justify-center space-x-10 font-semibold text-black cursor-pointer ">
//                     <li className=' font-dm text-lg font-bold hover:text-orange-600  hover:border-b-2 hover:border-orange-500  '>Home</li>
//                     <li className='font-dm text-lg font-bold hover:text-orange-600  hover:border-b-2 hover:border-orange-500  ' >Gallery</li>
//                     <li className='font-dm text-lg font-bold hover:text-orange-600  hover:border-b-2 hover:border-orange-500 ' >About</li>
//                     <li className='font-dm text-lg font-bold hover:text-orange-600  hover:border-b-2 hover:border-orange-500  ' >Contact</li>
//                 </ul>


//                 {/* Login Button */}
             
//                 <div class="flex justify-center md:justify-start w-34 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600
//               shadow-lg rounded-md focus:outline-none ">
//                     <a href="#home"
//                         className=" p-3 px-6 pt-2 text-white  text-lg rounded-none baseline md:block">Order Now</a>

//                 </div>
//             </div>
//         </nav>



//     );
// };

// export default NavBar











// import React, { useState } from 'react';
// import { FiMenu, FiX } from 'react-icons/fi'; // Import hamburger menu and close icons

// import Logo from '../assets/logo.png';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="container mx-auto p-6 py-4 space-x-6 px-8">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-white font-bold text-xl pt-2">
//           <img src={Logo} alt="logo" className="w-20 h-20" />
//         </div>

//         {/* Hamburger Menu */}
//         <div className="md:hidden">
//           {isMenuOpen ? (
//             <FiX className="text-black cursor-pointer text-2xl" onClick={toggleMenu} />
//           ) : (
//             <FiMenu className="text-black cursor-pointer text-2xl" onClick={toggleMenu} />
//           )}
//         </div>

//         {/* Navigation Links */}
//         <ul className={`md:flex items-center justify-center space-x-10 font-semibold text-black cursor-pointer ${isMenuOpen ? 'block' : 'hidden'}`}>
//           <li className="font-dm text-lg font-bold hover:text-orange-600 hover:border-b-2 hover:border-orange-500">Home</li>
//           <li className="font-dm text-lg font-bold hover:text-orange-600 hover:border-b-2 hover:border-orange-500">Gallery</li>
//           <li className="font-dm text-lg font-bold hover:text-orange-600 hover:border-b-2 hover:border-orange-500">About</li>
//           <li className="font-dm text-lg font-bold hover:text-orange-600 hover:border-b-2 hover:border-orange-500">Contact</li>
//         </ul>

//         {/* Login Button */}
//         <div className="hidden md:flex justify-center md:justify-start w-34 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg rounded-md focus:outline-none">
//           <a href="#home" className="p-3 px-6 pt-2 text-white text-lg rounded-none baseline md:block">
//             Order Now
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

