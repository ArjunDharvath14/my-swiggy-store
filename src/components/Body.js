import { withpromotedlabel } from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [listofRes,setlistofRes]=useState([]);
    const [fillistofRes,setfillistofRes]=useState([]);
    const[searchtext,setsearchtext]=useState("");
    const Withpromotedlabel1=withpromotedlabel(RestaurantCard);
    useEffect(()=>{fetchdata();},[]);
    const fetchdata=async ()=>{
        const data=await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4316448&lng=78.552339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        const restaurants =json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistofRes(restaurants);
        setfillistofRes(restaurants);
    }
    const onlineStatuss=useOnlineStatus();
    if(onlineStatuss===false)
    {
        return (<h1>OOPS You are Offline Chech Your Internet Connection</h1>);
    }
    return listofRes.length===0 ?(<Shimmer/>) :(
        <div className="body" >
            <div className="filter flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchtext}onChange={(e)=>{setsearchtext(e.target.value)}}/>
                    <button  className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"onClick={()=>{
                    const filteredres=listofRes.filter((res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                    setfillistofRes(filteredres);
                    
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-green-100 rounded-lg cursor-pointer" onClick={()=>{
                    const filList=listofRes.filter((res)=>res.info.avgRating>4);
                    setfillistofRes(filList);
                }}>Top Rated Restaurants</button>

                </div>
                
            </div>
            <div className="flex flex-wrap" >
                {fillistofRes.map((rests)=> (
                    <Link key={rests.info.id} to={"/restaurant/"+rests.info.id}>
                        <RestaurantCard resData={rests} /> </Link>))}
                
            </div>
        </div>
    );
}
export default Body;