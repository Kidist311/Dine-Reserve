import { ChevronRight } from "lucide-react";
import MenuWo from "../components/MenuWo.jsx";
//import Swiper from "../components/SwiperComponent.jsx";
import SwiperComponent from "../components/SwiperComponent.jsx";

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
                            src="/icons/burger.png"
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
                <a className="" href="https://www.ubereats.com/"><img src="/icons/uber.svg" alt="Uber Eats" className="w-35 h-35" /></a>
                <a className="" href="https://www.doordash.com/"><img src="/icons/door.svg" alt="Uber Eats" className="w-50 h-50" /></a>
                <a className="" href="https://postmates.com/"><img src="/icons/post.svg" alt="Uber Eats" className="w-35 h-35" /></a>
                <a className="" href="https://www.rappi.com.mx/"><img src="/icons/Rappi.svg" alt="Uber Eats" className="w-35 h-35" /></a>
                <a className="" href="https://www.grubhub.com/"><img src="/icons/guhu.svg" alt="Uber Eats" className="w-35 h-35" /></a>
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
       <div className=" w-full max-w-[1300px] h-[2400px] md:h-[1000px]  bg-orange-50  ">
          <div className="flex flex-col md:flex-row-reverse gap-6 p-5 ">
             <div className="bg-orange-50 mt-28 md:ml-20 md:h-[400px]  md:p-2 md:mt-60 ">
                        <h1 className="text-3xl font-bold">About us</h1>
                        <p className="mt-7 text-left text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam 
                        diam vitae velit bibendum elementum eget non vivamus volutpat odio cras 
                        vestibulum purus aliquam.
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum 
                        sed et aliquet aliquet risus tempor semper odio egestas id pulvinar 
                        consectetur elit tortor non hac pellentesque lacus donec accumsan quisque
                        ultricies adipiscing mauris tortor cras est eu accumsan mauris.
                        </p>

                        <div className="flex gap-4  py-10 justify-start">
                            <button className="h-15 px-10 text-xl text-white border rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                              About Us 
                            </button>
                            <button className="h-14 px-8 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                            Join Our team
                            </button>
                        </div>
                  </div>

                  <div className="bg-white h-[480px] w-[500px] md:h-[700px] md:w-[550px] rounded-2xl md:mt-30 ">
                    <img 
                      src="/k/fries.png"
                      alt="About us image"
                      className="absolute h-[480px] w-[500px] md:h-[700px] md:w-[550px] rounded-2xl  "
                    />
                    <div className="relative bg-white  w-[340px] h-[320px] mt-52 ml-56 rounded-2xl md:mt-96 md:w-[400px] md:h-[360px] md:ml-48 shadow-lg">
                        <div className="flex flex-col gap-4 p-4 text-left px-5 ">
                            <h1 className="font-bold text-2xl text-center mt-5">Come and visit us</h1>
                            <p className="flex mt-3 text-gray-700 "><img src="/k/location.png" alt="location" className="w-10 h-9 rounded-full px-2" />
                                  837 W. Marshall Lane
                                  Marshalltown, 
                                  IA 50158, Los Angeles
                            </p>
                            <p className="flex ">
                              <img src="/k/phone.png" alt="phone" className="w-10 h-9 rounded-full px-2" />
                              <span className="text-gray-600">(641) 752-1234</span>
                            </p>
                            <p className="flex text-gray-700 "><img src="/k/email.png" alt="email" className="w-10 h-9 rounded-full px-2"/>
                              WowBurger@gmail.com
                            </p>
                        </div>
                    </div>
                    
                  </div>
          </div>
       </div>

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
              <img src="/k/burger.png" alt="phone" className="w-full h-full object-cover" />

          </div>
      </div>
{/* order kind */}
<div className="w-full max-w-[1300px] h-[1000px] md:h-[1000px] bg-white  mb-60">
  
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
  <div className=" w-full max-w-[1300px] h-[2400px] md:h-[1000px]  bg-white ">
    <div className="flex flex-col justify-start gap-3 items-start px-10 md:flex-row md:justify-between md:items-center  mt-auto mb-14 ">
      <h1 className="font-bold text-3xl">Our articles</h1>
      <button className="className=h-14 px-9 py-5 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">Browse our article</button>
    </div>
    
    <div className="flex flex-col md:flex-row gap-4 p-3 justify-center items-center ">
    <div class="bg-white border border-gray-300 mb-0 w-[450px] h-[400px] rounded-2xl md:w-[590px] md:h-[800px] flex flex-col justify-start items-start">
        <div class="w-full h-[250px] md:h-[500px] overflow-hidden rounded-t-2xl bg-amber-600">
            <img 
                src="/icons/burger.png"
                alt="Burger"
                class="w-full h-full object-cover"
            />
        </div>

        <div class="p-6 mt-5">
            <p className="text-left ">September 1</p>
            <h2 class="font-bold text-4xl mt-2 text-left mb-2">Lorem ipsum dolor sit amet consectetur</h2>
            <p class="mt-2 text-gray-700 text-left">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.
            </p>
        </div>
    </div>

        

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

{/* Card 1 */}
<div className="bg-green-300 w-[450px] h-[400px] rounded-2xl md:w-[280px] md:h-[390px] flex flex-col justify-start items-start">
  <div className="w-full h-[250px] overflow-hidden rounded-t-2xl bg-amber-600">
    <img 
      src="/icons/burger.png"
      alt="Burger"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-6">
    <p className="text-left">September 1</p>
    <h2 className="font-bold text-xl mt-2 text-left mb-2">
      Lorem ipsum dolor sit amet consectetur
    </h2>
    <p className="mt-2 text-gray-700 text-left">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="bg-green-300 w-[450px] h-[400px] rounded-2xl md:w-[280px] md:h-[390px] flex flex-col justify-start items-start">
  <div className="w-full h-[250px] overflow-hidden rounded-t-2xl bg-amber-600">
    <img 
      src="/icons/burger.png"
      alt="Burger"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-6">
    <p className="text-left">September 1</p>
    <h2 className="font-bold text-xl mt-2 text-left mb-2">
      Lorem ipsum dolor sit amet consectetur
    </h2>
    <p className="mt-2 text-gray-700 text-left">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </p>
  </div>
</div>

{/* Card 3 (copied structure) */}
<div className="bg-green-300 w-[450px] h-[400px] rounded-2xl md:w-[280px] md:h-[390px] flex flex-col justify-start items-start">
  <div className="w-full h-[250px] overflow-hidden rounded-t-2xl bg-amber-600">
    <img 
      src="/icons/burger.png"
      alt="Burger"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-6">
    <p className="text-left">September 1</p>
    <h2 className="font-bold text-xl mt-2 text-left mb-2">
      Lorem ipsum dolor sit amet consectetur
    </h2>
    <p className="mt-2 text-gray-700 text-left">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </p>
  </div>
</div>

{/* Card 4 (copied structure) */}
<div className="bg-green-300 w-[450px] h-[400px] rounded-2xl md:w-[280px] md:h-[390px] flex flex-col justify-start items-start">
  <div className="w-full h-[250px] overflow-hidden rounded-t-2xl bg-amber-600">
    <img 
      src="/icons/burger.png"
      alt="Burger"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-6">
    <p className="text-left">September 1</p>
    <h2 className="font-bold text-xl mt-2 text-left mb-2">
      Lorem ipsum dolor sit amet consectetur
    </h2>
    <p className="mt-2 text-gray-700 text-left">
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </p>
  </div>
</div>

</div>


    </div>

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
  