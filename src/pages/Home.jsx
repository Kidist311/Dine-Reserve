import { ChevronRight } from "lucide-react";
import MenuWo from "../components/MenuWo.jsx";
//import Swiper from "../components/SwiperComponent.jsx";
import SwiperComponent from "../components/SwiperComponent.jsx";
import Footer from "../components/Footer.jsx";
import Article from "../components/Article.jsx"
import BookTable from "../components/BookTable.jsx";
import About from "./About.jsx";
import Reservation from "../components/Reservation.jsx";



export default function Home() {
    return (
      <div className="relative w-full max-w-[1300px] h-[5000px] bg-white  ">
        <div className="  top-0 left-0 w-full max-w-[1300px] h-[1000px] md:h-[570px] bg-yellow-200 relative ">
        
        <div className="w-full  h-[600px] md:h-[570px]  bg-gray-50 md:w-full ">
            <div className="flex flex-col md:flex-row gap-9 px-3 md:px-5 py-3 ">
                <div className="bg-gray-50 p-4 md:p-4 h-[400px] md:h-[550px]   md:flex-1 ">
                    <h1 className="text-5xl  text-left font-bold mt-12 md:mt-14 md:justify-center">The best place to eat <br /> 
                    <span className="text-orange-500">burgers in Bole</span>.
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
                
                <div className="bg-transparent  p-4 md:p-0  h-[450px] md:h-[550px] md:flex-1 relative  -mb-40 z-20 flex justify-center items-center">

                        <img
                      
                            src={`${import.meta.env.BASE_URL}icons/burger.png`}
                            alt="logo"
                            className="w-[470px] h-[460px] md:h-[500px] md:w-[500px] object-contain rounded-lg rotate-[-2deg] shadow-lg transition-transform duration-500 hover:scale-108 hover:rotate-0"
                        />
                </div> 
            </div>
        </div>
        
        <div className=" absolute bottom-0 md:top-0  md:right-0 w-full h-[480px] md:h-[570px]  bg-orange-500  md:w-[20px]"></div>
        </div>

        {/* payment section */}
        
        <div className="  top-0 left-0 w-full max-w-[1300px] h-[300px]  bg-white relative ">
            <p className="flex justify-center font-bold text-2xl py-32 ">Order from your favorite app today!</p>
            <div className="flex justify-center gap-3 md:gap-10 flex-wrap bg-white items-center -mt-20">
                <a className="" href="https://www.ubereats.com/"><img src={`${import.meta.env.BASE_URL}/icons/uber.svg`} alt="Uber Eats" className="w-35 h-35" /></a>
                <a className="" href="https://www.doordash.com/"><img src={`${import.meta.env.BASE_URL}/icons/door.svg`}  alt="Uber Eats" className="w-50 h-50" /></a>
                <a className="" href="https://postmates.com/"> <img src={`${import.meta.env.BASE_URL}/icons/post.svg`} alt="Uber Eats" className="w-35 h-35" /></a>
                <a className="" href="https://www.rappi.com.mx/"><img src={`${import.meta.env.BASE_URL}/icons/Rappi.svg`}  alt="Uber Eats" className="w-35 h-35" /></a>
                <a className="" href="https://www.grubhub.com/"><img src={`${import.meta.env.BASE_URL}/icons/guhu.svg`} alt="Uber Eats" className="w-35 h-35" /></a>
            </div>
            <hr className="mr-5 ml-5 mt-15 border-gray-500" />
        </div>

        {/* Browse our menu */}
        <div className="  w-full max-w-[1300px] h-[2350px] md:h-[1000px]  bg-white  ">
          <p className="flex justify-center font-bold text-2xl py-96 md:py-72 md:mb-15 ">Browse our menu</p>
              <div className="flex flex-col md:flex-row justify-center items-center -mt-80 gap-5 md:p-5">
                    <div className="w-[500px] h-[400px] border rounded-2xl border-gray-300 items-center flex flex-col justify-evenly p-3
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        
                        <img src="/icons/post.svg" alt="Uber Eats" className="w-30 h-30   rounded-full " />
                        <h3 className="font-bold text-2xl -mt-4">Breakfast</h3>
                        <p className="text-gray-500 -mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipiscing </p>
                        <button className="text-orange-500 font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
                          Explore menu <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="w-[500px] h-[400px] border rounded-2xl border-gray-300 items-center flex flex-col justify-evenly p-3
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        
                        <img src="/icons/post.svg" alt="Uber Eats" className="w-30 h-30  rounded-full " />
                        <h3 className="font-bold text-2xl -mt-4">Main Dishes</h3>
                        <p className="text-gray-500 -mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipiscing </p>
                        <button className="text-orange-500 font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
                          Explore menu <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="w-[500px] h-[400px] border rounded-2xl border-gray-300 items-center flex flex-col justify-evenly p-3
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        
                        <img src="/icons/post.svg" alt="Uber Eats" className="w-30 h-30 rounded-full " />
                        <h3 className="font-bold text-2xl -mt-4">Drinks</h3>
                        <p className="text-gray-500 -mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipiscing </p>
                        <button className="text-orange-500 font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
                          Explore menu <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="w-[500px] h-[400px] border rounded-2xl border-gray-300 items-center flex flex-col justify-evenly p-3
                        transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        
                        <img src="/icons/post.svg" alt="Uber Eats" className="w-30 h-30   rounded-full " />
                        <h3 className="font-bold text-2xl -mt-4">Desserts</h3>
                        <p className="text-gray-500 -mt-4 text-center">Lorem ipsum dolor sit amet consectetur adipiscing </p>
                        <button className="text-orange-500 font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
                          Explore menu <ChevronRight size={18} />
                        </button>
                    </div>
                    
              </div>
          <div>

          </div>
          <div className="flex gap-4  py-10 justify-center">
                        <button className="h-15 px-10 text-xl text-white border rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                           Order Online 
                        </button>
                        <button className="h-14 px-8 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                        Book Table
                        </button>
                   </div>

        </div>
        
       {/* About us */}
       <About />

       {/* menu */}
       <MenuWo />

       {/* order kind */}
       <div className="w-full max-w-[1300px] h-[800px] md:h-[700px] bg-orange-500 flex flex-col md:flex-row ">
       
          <div className="flex-1 p-4 ">
              <div className="flex flex-col mt-10 md:mt-36 h-[300px] md:h-[400px] p-4 ">
                    <hr className="bg-white h-0.5 w-36 border-0" />

                    <h1 className="font-bold text-3xl text-white text-left mt-8">Taste the most delicious burger in <br/>Los Angeles, CA</h1>
                    <p className="text-left text-white mt-5 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ugue <br/>
                    quam diam vitae velit bibendum elementum.
                    </p>
                    <div className="flex gap-4  py-10 justify-start">
                            <button className="h-14 px-8 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Order Online
                            </button>
                            <button className="h-15 px-10 text-xl text-white border rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                              Book Table
                            </button>
                            
                        </div>
              </div> 
          </div>

          <div className="flex-1 bg-red-400 ">
              <img src={`${import.meta.env.BASE_URL}/k/burger.png`}  alt="phone" className="w-full h-full object-cover" />

          </div>
      </div>
{/* order kind */}
<div className="w-full max-w-[1300px] h-[1000px] md:h-[800px] bg-white  mb-60">
  
    <div className="pt-40 px-19 pb-10 flex flex-col justify-center items-center bg-white ">
      <h1 className=" font-bold text-2xl py-5 ">What our clients say</h1>
      <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue <br/>
        quam diam vitae velit bibendum elementum</p>
    </div>
    <div className="px-4">
        <SwiperComponent />
    </div>
    <div className="flex gap-4  py-10 justify-center">
              <button className="h-15 px-10 text-xl text-white border rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                  Order Online 
                </button>
                <button className="h-14 px-8 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                        Book Table
                </button>
      </div>

       
   
      


      
    
   
</div>

{/* Our articles */}
      <Article />
      <BookTable />
      
      <Reservation />
      <Footer />

      

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
  