export default function Article() {
    return (
      <div className="w-full max-w-[1300px] min-h-screen bg-orange-50 py-10 mx-auto">
        {/* Header section */}
        <div className="flex flex-col justify-start gap-3 items-start px-10 md:flex-row md:justify-between md:items-center mb-14">
          <h1 className="font-bold text-3xl">Our articles</h1>
          <button className="h-14 px-9 py-5 text-xl rounded-full text-gray-900 bg-white border border-gray-300 hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
            Browse our article
          </button>
        </div>
        
        {/* Articles container */}
        <div className="flex flex-col md:flex-row gap-6 px-6 justify-center items-start">
          {/* Featured article */}
          <div className="bg-white border border-gray-300 rounded-2xl w-full md:w-[590px] md:h-[800px] flex flex-col justify-start items-start">
            <div className="w-full h-[250px] md:h-[500px] overflow-hidden rounded-t-2xl">
              <img 
                src="/icons/burger.png"
                alt="Burger"
                className="w-full h-full object-cover"
              />
            </div>
  
            <div className="p-6 mt-5">
              <p className="text-left">September 1</p>
              <h2 className="font-bold text-4xl mt-2 mb-2 text-left">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <p className="mt-2 text-gray-700 text-left">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.
              </p>
            </div>
          </div>
  
          {/* Grid of 4 articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-gray-300 rounded-2xl w-full md:w-[280px] md:h-[390px] flex flex-col justify-start items-start">
                <div className="w-full h-[250px] overflow-hidden rounded-t-2xl">
                  <img 
                    src="/icons/burger.png"
                    alt="Burger"
                    className="w-full h-full object-cover"
                  />
                </div>
  
                <div className="p-6">
                  <p className="text-left">September 1</p>
                  <h2 className="font-bold text-xl mt-2 mb-2 text-left">
                    Lorem ipsum dolor sit amet consectetur
                  </h2>
                  <p className="mt-2 text-gray-700 text-left">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  