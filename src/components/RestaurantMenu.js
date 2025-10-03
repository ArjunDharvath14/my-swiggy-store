import { useState,useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import { MENU_API_URL, MENUAPI_URL } from "../utils/constant";
import ResCategory from "./ResCategory";
const RestaurantMenu=()=>  
{
    const [resInfo,setResInfo]=useState(null);
    const [showIndex,setShowIndex]=useState(null);
    const {ID}=useParams();
    useEffect(()=>{fetchMenu();},[]);
        const fetchMenu=async ()=>{
            const data = await fetch(MENUAPI_URL+ID);

            const json= await data.json();
            setResInfo(json.data);
            
        }
  if(resInfo===null) return <Shimmer/>;
        const {itemCards}=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
        const {name,cuisines,costForTwoMessage}=resInfo?.cards[2].card?.card?.info;
        const categories=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        
    return(
        <div className="text-center">
            
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}- {costForTwoMessage}</p>
            {categories.map((category, index) => (
            <ResCategory
                key={category.card?.card?.title}
                data={category.card?.card}
                showItems={index === showIndex}
                setShowIndex={() => setShowIndex(index)}
            />
        ))}
        </div>
    )
}
export default RestaurantMenu;