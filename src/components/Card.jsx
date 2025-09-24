export default function Card(props) {
    return (
        <div className="flex flex-col justify-start items-center bg-white w-[550px] md:w-[280px] mt-2 md:mt-0 relative">
            <div className="relative w-full">
                <img
                    src={props.image}
                    alt="food"
                    className="w-[550px] md:w-[280px] h-[250px] md:h-[250px] object-cover rounded-4xl"
                />
                <button className="absolute top-2 right-2 text-lg font-bold text-gray-500 bg-white px-3 py-1 rounded-full shadow-lg">
                    {props.price}
                </button>
            </div>

            <div className="flex flex-col items-center p-4 h-[150px]">
                <h1 className="text-2xl font-bold text-center">{props.name}</h1>
                <p className="text-gray-500 mt-2 text-center mb-10">{props.description}</p>
            </div>
        </div>
    );
}
