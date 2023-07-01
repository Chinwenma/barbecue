import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <div className='backGround'>
        <NavBar />
        <Hero />
      </div>
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;





// import Hero from './components/Hero';
// import About from './components/About';
// import Menu from './components/Menu';
// import NavBar from './components/NavBar';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
// import Footer from './components/Footer';


// import './App.css';

// function App() {
//   return (
//     <div>
//       <div className='backGround'>
//         <NavBar />
//         <Hero />
//       </div>
//       <About />
//       <Menu />
//       <Gallery />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;
