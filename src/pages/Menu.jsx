export default function Menu(){
    return(
        <div className="relative w-full max-w-[1300px] h-[5000px] bg-gray-300  ">
            {/* Our menu section */}
            <div className="w-full max-w-[1300px] h-[800px] bg-white flex flex-col flex-wrap  items-center">
                
                    <h1 className="text-7xl font-bold text-center mt-20 ">Our menu</h1>
                    <p className="text-center text-gray-500 mt-4 px-20 ">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam <br/>
                    diam vitae velit bibendum elementum dolor.
                    </p>

                    <div className="flex flex-wrap gap-3 py-7 justify-center w-full">
                        <button className="h-11 px-6 text-xl text-white  rounded-full  bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                            All
                            
                        </button>
                        <button className="h-11 px-4 text-xl rounded-full  text-gray-500 bg-white  hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Breakfast
                        </button>
                        <button className="h-11 px-4 text-xl rounded-full text-gray-500 bg-white  hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Main dish
                        </button>
                        <button className="h-11 px-4 text-xl rounded-full text-gray-500 bg-white  hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Drinks
                        </button>
                        <button className="h-11 px-4 text-xl rounded-full text-gray-500 bg-white  hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Dessert
                        </button>
                    </div>

                
               
            </div>

        </div>
    )
}