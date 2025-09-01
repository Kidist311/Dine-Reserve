export default function NavSocial(){
    return(
        <nav className=" flex justify-between items-center w-[1600px] h-[35px] bg-gray-400">
            <ul className="flex gap-4 p-2 ml-36 ">
                 <li className="flex items-center gap-1 text-white">
                    <img src="/icons/call.png" alt="Phone" className="w-5 h-5 " />
                    (080) 453-2435
                </li>

                <li className="flex items-center gap-1 text-white">
                    <img src="/icons/gmail.svg" alt="email" className="w-5 h-5 " />
                    Bri@gmail.com
                </li>
            </ul>

            <ul className="flex gap-4 p-2 justify-end mr-20">
                <li className="flex justify-end items-center gap-1">
                    <img src="/icons/insta.png" alt="email" className="w-5 h-5 " />
                    
                </li>

                <li className="flex justify-end items-center gap-1">
                    <img src="/icons/faceb.svg" alt="email" className="w-5 h-5 " />
                    
                </li>

                <li className="flex justify-end items-center gap-1">
                    <img src="/icons/twitter.png" alt="email" className="w-5 h-5 " />
                    
                </li>

            </ul>
        </nav>
    )
}