import React from 'react';
import CEO from "../assets/ceo.png"

const About = () => {
  return (
    <div className="bg-gradient-to-br from-orange-500 to-red-500 w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
          About Bigk Grills
          </h1>
        </div>
        <div className="felx mt-12  gap-8 ">
          <div className="flex flex-col items-center bg-white w-64 text-center justify-center">
            <img
              className=" w-34  object-cover px-4 py-4"
              src={CEO}
              alt="Profile"
            />
            <h3 className="mt-6 text-xl leading-9 font-extrabold text-gray-900">
              Olusegun Obasanjo
            </h3>
            <p className="mt-2 text-gray-600">
        C.E.O
            </p>
          </div>
          <div className='bg-slate-950' style={{width: "1px", height:"300px"}}></div>
          <div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget mauris velit. Morbi tempor lectus felis. Curabitur ac enim
              fermentum, interdum turpis at, accumsan mi. Donec egestas ligula
              non nunc interdum, nec feugiat lectus consectetur.
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