import { Car } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/card.jsx";
import foods from "../foods.js";
import Order from "../components/Order.jsx";
export default function Menu() {

    function createCard(food){
        return(
            <Card
            
            name={food.name}
            image={food.image}
            price={food.price}
            description={food.description}
            key={food.id}
            
            />
        );
    }
    //const breakfastFoods = foods.filter(food => food.category === "breakfast");

    return (
        <div className="relative w-full max-w-[1300px] h-[5000px] bg-white"> {/* bg-gray*/}
            <div className="w-full max-w-[1300px] h-[340px] bg-white flex flex-col items-center">
                <h1 className="text-7xl font-bold text-center mt-20">Our menu</h1>
                <p className="text-center text-gray-500 mt-4 px-20">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam <br />
                    diam vitae velit bibendum elementum dolor.
                </p>

                <div className="flex flex-wrap gap-3 py-7 justify-center w-full">
                    <Link to="/menu" className="h-11 px-6 text-xl text-white rounded-full bg-orange-500 hover:scale-105 hover:shadow-xl transition-transform duration-200 whitespace-nowrap">
                        All
                    </Link>
                    <Link to="/category/breakfast" className="h-11 px-4 text-xl rounded-full text-gray-500 bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                        Breakfast
                    </Link>
                    <Link to="/category/maindish" className="h-11 px-4 text-xl rounded-full text-gray-500 bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                        Main dish
                    </Link>
                    <Link to="/category/drinks" className="h-11 px-4 text-xl rounded-full text-gray-500 bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                        Drinks
                    </Link>
                    <Link to="/category/dessert" className="h-11 px-4 text-xl rounded-full text-gray-500 bg-white hover:bg-orange-500 hover:text-white transition-colors duration-300 whitespace-nowrap">
                        Dessert
                    </Link>
                </div>
            </div>

            <div className="w-full max-w-[1300px]  bg-white grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center pb-40">
            {foods.map(createCard)}

            </div>
            
            <Order />

        </div>
    );
}
