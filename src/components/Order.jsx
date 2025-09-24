export default function Order(){
    return(
        <div className="w-full max-w-[1300px] h-[1500px] md:h-[900px] bg-white  ">
            <hr className="w-full  border-gray-300" />
            <h1 className="text-6xl font-bold text-center mt-35">Order via app</h1>
            <p className=" text-gray-500 mt-6 text-center mb-20">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br/>
            dolore eu fugiat nulla pariatur occaecat cupidatat
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white place-items-center mt-10 mx-6">
                <a 
                    className=" shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://www.ubereats.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/uber2.svg" alt="Uber Eats" className="h-25 w-30" /> 
                </a>

                <a 
                    className="shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://www.doordash.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/door.svg" alt="DoorDash" className="h-45 w-55" />
                </a>

                <a 
                    className="shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://postmates.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/post.svg" alt="Postmates" className="h-25 w-30" />
                </a>

                <a 
                    className="shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://www.rappi.com.mx/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/Rappi.svg" alt="Rappi" className="h-30 w-35" />
                </a>
                <a 
                    className="shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://www.ubereats.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/uber2.svg" alt="Uber Eats" className="h-25 w-30" /> 
                </a>

                <a 
                    className="shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://www.doordash.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/door.svg" alt="DoorDash" className="h-45 w-55" />
                </a>

                <a 
                    className="shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://postmates.com/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/post.svg" alt="Postmates" className="h-25 w-30" />
                </a>

                <a 
                    className="shadow w-full h-[100px] rounded-2xl flex justify-center items-center
                        transform transition-transform duration-200 hover:scale-105 active:scale-95" 
                    href="https://www.rappi.com.mx/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src="/icons/Rappi.svg" alt="Rappi" className="h-30 w-35" />
                </a>


            </div>

            <hr className="w-full mt-50 border-gray-300" />
        </div>
    );
}