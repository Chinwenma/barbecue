export default function Hero() {
    return (
        <div style={{ backgroundImage: `url(/images/bg-img.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: `100vh` }}>
            <div className="flex items-center justify-between w-100 p-4  ">
                <div className="flex-start items-center ml-12 ">
                    < img src="./images/logo.png" alt="bar" className="w-12" />

                </div>
                <ul className="flex items-center justify-center space-x-6 font-semibold text-black">
                    <li ><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="w-28 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
              shadow-lg rounded-md focus:outline-none">
                    <a href="#home"
                        className=" hidden p-3 px-8 pt-2 text-white   rounded-none baseline md:block">Login</a>
                </div>

            </div>
            <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-6 space-y-0 md:space-y-0">
                <div className="flex flex-col mb-23 space-y-6 md:w-1/2 sm:1/2">
                    <p className="max-w-sm font-medium text-base  tracking-tighter text-orange-500 font-dm-sans md:text-left">BIGK Grills</p>
                    <h1 className="max-w-md text-3xl font-bold  md:text-5xl md:text-left">Enjoy the special place of Bar and Grill</h1>
                    <p className="max-w-sm  text-slate-400 md:text-left">We are  a fast food restaurant. That sells: : Turkey, Fish, Barbecue, Drinks, Shawarma. Located at Ikoyo Avenue, off shell road, Sapele, Delta state.</p>
                    <div class="flex justify-center md:justify-start w-36 bg-gradient-to-br from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 
              shadow-lg rounded-md focus:outline-none ">
                        <a href="#home"
                            className=" p-3 px-6 pt-2 text-white  rounded-none baseline md:block">Order Now</a>

                    </div>
                </div>
                {/* <div className="w-36 bg-gradient-to-r from-orange-500 to-orange-700  hover:from-orange-500 hover:to-yellow-500">
                    <a href="#home"
                        className=" hidden p-3 px-8 pt-2 text-white   rounded-none baseline md:block">Order Now</a>
                </div> */}
                <div>
                    < img src="./images/group 27.png" alt="bar" className="float-right w-96 h-2/4    " />
                </div>
            </div>
        </div>
    );
}