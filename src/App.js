import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
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
    </>
  );
}

export default App;
