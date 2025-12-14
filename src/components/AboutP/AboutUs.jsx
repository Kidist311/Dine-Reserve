
export default function AboutUs() {
    return (
      <div className="w-full max-w-[1300px]  bg-orange-50 mx-auto ">
       
        <div className="flex flex-col md:flex-row-reverse gap-6 p-5">
          
          {/* Text section */}
          <div className="bg-orange-50 mt-28 md:ml-20 md:h-[400px] md:p-2 md:mt-60">
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
  
            <div className="flex gap-4 py-10 justify-start">
              <button className="h-15 px-10 text-xl text-white border rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                About Us 
              </button>
              <button className="h-14 px-8 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                Join Our Team
              </button>
            </div>
          </div>
  
          {/* Image section */}
          <div className="bg-white h-[480px] w-[500px] md:h-[700px] md:w-[550px] rounded-2xl md:mt-30 relative">
            <img 
              src={`${import.meta.env.BASE_URL}/k/fries.png`}
              
              alt="About us image"
              className="absolute h-[480px] w-[500px] md:h-[700px] md:w-[550px] rounded-2xl"
            />
            <div className="relative bg-white w-[340px] h-[320px] mt-52 ml-56 rounded-2xl md:mt-96 md:w-[400px] md:h-[360px] md:ml-48 shadow-lg">
              <div className="flex flex-col gap-4 p-4 text-left px-5">
                <h1 className="font-bold text-2xl text-center mt-5">Come and visit Us</h1>
                <p className="flex mt-3 text-gray-700">
                  <img src="/k/location.png" alt="location" className="w-10 h-9 rounded-full px-2" />
                  837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles
                </p>
                <p className="flex">
                  <img src="/k/phone.png" alt="phone" className="w-10 h-9 rounded-full px-2" />
                  <span className="text-gray-600">(641) 752-1234</span>
                </p>
                <p className="flex text-gray-700">
                  <img src="/k/email.png" alt="email" className="w-10 h-9 rounded-full px-2" />
                  WowBurger@gmail.com
                </p>
              </div>
            </div>
          </div>
  
        </div>
        <div className="h-80"></div>
       
      </div>
      
    );
  }
  