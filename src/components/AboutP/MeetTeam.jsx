export default function MeetTeam(){
    return(
        <div className=" w-full max-w-[1300px]  bg-orange-50">
             
             {/* Story Section */}
                <div className="relative w-full md:h-[500px]  flex flex-col md:flex-row bg-gray-50 px-4">
                     {/* Text Content */}
                    <div className="md:w-[60%] w-full bg-gray-50 flex-col justify-center items-center p-10 mt-25 md:mt-10 h-[200px] md:h-[400px] mb-10 md:mb-5  ">
                        <h1 className="text-7xl font-bold">Our story started back in <span className="text-orange-500">1984</span>.</h1>
                        <p className="mt-5 text-gray-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            <br />dolore eu fugiat nulla pariatur occaecat cupidatat non ut enim ad minim
                            <br /> veniam, quis nostrud exercitation sit</p>
                    </div>

                    <div className="relative md:absolute md:top-20 md:right-12 md:w-[40%] w-full bg-pink-300 md:h-[500px] h-[400px] md:mt-0 overflow-hidden rounded-2xl">
                        <img
                            src={`${import.meta.env.BASE_URL}story/burger1.png`}
                            alt="location"
                            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    <div className="relative md:absolute md:-bottom-72 -bottom-14 md:left-20 md:w-[45%] w-full md:h-[350px] h-[400px] bg-pink-950 md:mt-0 overflow-hidden rounded-2xl">
                        <img
                            src={`${import.meta.env.BASE_URL}story/burger2.png`}
                            alt="location"
                            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        />
                    </div>

                    </div>

                 {/* Two Column Section */}
                <div className="md:w-full h-[300px] md:h-[400px] flex " >
                    <div className="w-[70%] bg-orange-500"></div>
                    <div className="w-[30%] bg-gray-50"></div>
                </div>

            
        </div>
        
    );
}