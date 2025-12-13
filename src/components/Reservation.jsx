export default function Reservation() {
    return(
        <div className=" w-full max-w-[1300px] h-[1700px] md:h-[1600px] bg-orange-50">
            <div className="relative w-full max-w-[1300px] h-[1700px] md:h-[1700px] flex flex-col md:flex-row">
                    <div
                className="
                    absolute 
                    top-96
                    left-1/2 -translate-x-1/2
                    md:top-30 md:right-25 md:left-auto md:translate-x-0 
                    w-[90%] md:w-[550px]
                    bg-white z-10
                    p-6 rounded-3xl shadow-lg border-gray-400
                "
                >
                <form className="flex flex-col space-y-8 ">
                    
                    <div className="flex flex-col gap-2">
                    <label className="mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 rounded-3xl border border-gray-300"
                    />
                    </div>

                    <div className="flex flex-col  gap-2">
                    <label className="mb-1 font-medium">Email Address</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 rounded-3xl border border-gray-300"
                    />
                    </div>

                    <div className="flex flex-col  gap-2">
                    <label className="mb-1 font-medium">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="Your Phone Number"
                        className="w-full p-4 rounded-3xl border border-gray-300"
                    />
                    </div>

                    <div className="flex flex-col  gap-2">
                    <label className="mb-1 font-medium">Location</label>
                    <input
                        type="text"
                        placeholder="Location"
                        className="w-full p-4 rounded-3xl border border-gray-300"
                    />
                    </div>

                    <div className="flex flex-col  gap-2">
                    <label className="mb-1 font-medium">Date</label>
                    <input
                        type="date"
                        className="w-full p-4 rounded-3xl border border-gray-300"
                    />
                    </div>

                    <div className="flex flex-col  gap-2">
                    <label className="mb-1 font-medium">Schedule</label>
                    <input
                        type="time"
                        className="w-full p-4 rounded-3xl border border-gray-300"
                    />
                    </div>

                    <div className="flex flex-col  gap-2">
                    <label className="mb-1 font-medium">Add a note</label>
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-4 rounded-3xl border border-gray-300 resize-none"
                        rows={3}
                    />
                    </div>

                    <button
                    type="submit"
                    className="
                        w-[200px]
                        mt-2
                        p-3
                        justify-center
                        self-center
                        font-semibold
                        rounded-3xl
                        bg-orange-500
                        text-white
                        hover:bg-orange-600
                        transition-colors
                        duration-300
                    "
                    >
                    Reserve Now
                    </button>

                </form>
                </div>


                <div className="w-full md:w-[57%] bg-white h-[700px] md:h-[1300px]">
                    <div className="flex flex-col gap-6 p-10 mt-25">
                        <h1 className="text-4xl font-bold ">Book your table now</h1>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> ugue quam diam vitae velit bibendum elementum.</p>
                        <div className="flex items-start gap-3">
                            <img src={`${import.meta.env.BASE_URL}reserve/location.png`} alt="location" className="w-6 h-6  rounded-full mt-1" />
                            <p className="text-gray-600 text-xl">
                                837 W. Marshall Lane<br />
                                Marshalltown, IA 50158, Los Angeles
                            </p>
                            </div>

                            <div className="flex items-center gap-3">
                            <img src={`${import.meta.env.BASE_URL}reserve/phone.png`} alt="phone" className="w-6 h-6 rounded-full" />
                            <p  className="text-gray-600 text-xl">(414) 857 - 0107</p>
                            </div>

                            <div className="flex items-center gap-3">
                            <img src={`${import.meta.env.BASE_URL}reserve/email.png`} alt="email" className="w-6 h-6 rounded-full" />
                            <p  className="text-gray-600 text-xl">losangeles@restaurantex.com</p>
                            </div>

                        </div>

                </div>
                <div className="w-full md:w-[43%] bg-orange-500 h-[1200px]  md:h-[1300px]"></div>
            </div>
        </div>
    );
}