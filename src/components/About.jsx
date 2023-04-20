export default function About() {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 absolute h-96 w-full  rounded-none">
            <h1 className="font-butler font-bold  tracking-tighter text-white capitalize mx-24 md: text-5xl sm:items-left " >
                About Bigk Grills
            </h1>
            <div>
                <div className="bg-white ml-24 w-72 h-72 text-center justify-center items-center">
                    <img src="./images/ceo.png" alt="ceo" className="px-4 py-4" />
                    <p className=" text-2xl leading-tight tracking-tighter ">Olusegun Obasanjo</p>
                    <p className=" text-2xl leading-tight tracking-tighter" >C. E. O</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}