export default function Home() {
    return (
      <div className="relative w-full max-w-[1300px] h-[1800px] bg-gray-300  ">
        <div className="  top-0 left-0 w-full max-w-[1300px] h-[1000px] md:h-[570px] bg-yellow-200 relative ">
        
        <div className="w-full  h-[600px] md:h-[570px]  bg-gray-50 md:w-full ">
            <div className="flex flex-col md:flex-row gap-9 px-3 md:px-5 py-3 z-10">
                <div className="bg-gray-50 p-4 md:p-4 h-[400px] md:h-[550px]   md:flex-1 ">
                    <h1 className="text-5xl  text-left font-bold mt-12 md:mt-14 md:justify-center">The best place to eat <br /> 
                    <span className="text-orange-500">burgers in LA</span>.
                      </h1>
                    <p className="text-gray-600 mt-8">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</p>
                    
                    <div className="flex gap-4 mt-8">
                        <button className="h-15 px-10 text-xl text-white border rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                            Reservate
                        </button>
                        <button className="h-14 px-8 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Order Online
                        </button>
                   </div>
                </div>
                
                <div className="bg-gray-50  p-4 md:p-0  h-[450px] md:h-[550px] md:flex-1 relative  -mb-40 z-20 flex justify-center items-center">

                        <img
                            src="/icons/burger.png"
                            alt="logo"
                            className="w-[470px] h-[460px] md:h-[500px] md:w-[500px] object-contain rounded-lg rotate-[-2deg] shadow-lg transition-transform duration-500 hover:scale-108 hover:rotate-0"
                        />
                </div> 
            </div>
        </div>
        
        <div className=" absolute bottom-0 md:top-0  md:right-0 w-full h-[480px] md:h-[570px]  bg-orange-500  md:w-[20px]"></div>
        </div>

        
        

      </div>
    );
  }
  /*<div className="grid grid-cols-2 gap-4">
  <div className="bg-red-300 p-4 h-10">Column 1</div>
  <div className="bg-blue-300 p-4 flex justify-center items-center">
  <img
    src="/icons/logo.png"
    alt="logo"
    className="w-40 h-40 object-contain rounded-lg rotate-[-2deg] shadow-lg transition-transform duration-500 hover:scale-105 hover:rotate-0"
  />
</div>

</div>*/
  