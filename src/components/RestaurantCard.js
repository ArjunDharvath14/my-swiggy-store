import { CDN_URL } from "../utils/constant";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {name,cuisines,cloudinaryImageId,avgRating,costForTwo}=resData?.info;
    const{deliveryTime}=resData?.info.sla;
    return(
        <div className="p-4 m-2 w-[288px] h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>CostForTwo:{costForTwo}</h4>
            <h4>Rating:{avgRating}</h4>
            <h4>DeliveryTime:{deliveryTime}min</h4>

        </div>
    )
}
export const withpromotedlabel=(RestaurantCard)=>
{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;