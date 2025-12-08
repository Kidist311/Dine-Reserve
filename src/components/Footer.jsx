export default function Footer() {
    return (
      <footer className="bg-white w-full py-10 mt-14">
        <div className="mx-auto px-8 gap-8">
          {/* Main footer content in a row layout */}
          <div className="flex flex-col md:flex-row justify-evenly gap-8 md:gap-12">
            
            {/* Left section: Brand */}
            <div className="md:w-2/5 flex-shrink-0">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={`${import.meta.env.BASE_URL}icons/logo.png`}
                      alt="Restaurante X Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-4xl font-extrabold">Restaurante X</h1>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-orange-500 text-sm">★</span>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Middle section: Pages */}
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold mb-6">Pages</h2>
              <div className="grid grid-cols-2 gap-1 text-gray-600">
                <p><a href="#" className="hover:text-orange-500 transition">Home</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">About</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Menu</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Blog</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Blog Post</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Contact</a></p>
              </div>
            </div>
  
            {/* Right section: Utility pages */}
            <div className="md:w-1/3">
              <h2 className="text-xl font-semibold mb-6">Utility Pages</h2>
              <div className="space-y-3 text-gray-600">
                <p><a href="#" className="hover:text-orange-500 transition">Start Here</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Styleguide</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Password Protected</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">404 Not Found</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Licenses</a></p>
                <p><a href="#" className="hover:text-orange-500 transition">Changelog</a></p>
              </div>
            </div>
  
            {/* Far-right section: Instagram */}
            <div className="md:w-1/5 flex-shrink-0">
              <h2 className="text-xl font-semibold mb-4">Follow us on Instagram</h2>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition">
                <img 
                  src={`${import.meta.env.BASE_URL}icons/logo.png`}
                  alt="Instagram Logo"
                  className="w-10 h-10 object-cover"
                />
              </a>
            </div>
          </div>
  
          {/* Bottom line */}
          <div className="mt-10 pt-8 text-center text-gray-500 border-t border-gray-200 ">
            <p>© {new Date().getFullYear()} Restaurante X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  