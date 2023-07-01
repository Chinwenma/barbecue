import React from 'react';
import CEO from "../assets/ceo.png"

const About = () => {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 w-full py-8">
            <h1 className="text-3xl text-center leading-9 font-extrabold pl-6 text-white sm:text-4xl  md:text-center lg:text-start sm:leading-10">
                About Bigk Grills
            </h1>
            <div className="container flex flex-col justify-center items-center px-6 mx-auto mt-6 space-y-0 md:space-y-6 md:flex-row sm:px-6 lg:px-8 ">


                <div className="flex  flex-col justify-between items-center text-right mt-12 gap-8   lg:gap-36 md:flex-row">
                    <div className="flex flex-col items-center  bg-white w-64  space-x-4 text-center justify-center">
                        <img
                            className=" w-34  object-cover px-4 py-4"
                            src={CEO}
                            alt="Profile"
                        />
                        <p className="  mt-4 text-lg leading-tight font-semibold tracking-tight text-start ">Olusegun Obasanjo</p>
                        <p className="mt-2 text-gray-600 text-2xl leading-tight tracking-tighter text-start" >C. E. O</p>

                    </div>
                    <div className='hidden md:flex bg-white' style={{ width: "1px", height: "300px" }}></div>
                    <div>
                        <p className="text-white text-justify max-w-sm md:max-w-md lg:max-w-lg md:text-start md:text-xl ">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                            elit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.elit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.elit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.elit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


// export default function About() {
//     return (
//         <div className="bg-gradient-to-br from-orange-500 to-red-500 w-full">
//             <h1 className="font-butler font-bold  tracking-tighter text-white capitalize mx-24 md: text-5xl sm:items-left " >
//
//             </h1>
//             <div>
//                 <div className="bg-white w-64 text-center justify-center items-center">
//                     <img src={CEO} alt="ceo" className="px-4 py-4" />
//                     <p className=" text-2xl leading-tight tracking-tighter ">Olusegun Obasanjo</p>
//                     <p className=" text-2xl leading-tight tracking-tighter" >C. E. O</p>
//                 </div>
//                 <div>

//                 </div>
//             </div>
//         </div>
//     )
// }