import { useState } from "react";
import { app_logo } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header=()=>{
    const [loginvariable,setloginvariable]=useState("Login");
       const onlineStatus=useOnlineStatus();
    const cartItems=useSelector((store)=>store.cart.items);
    
    return (
        <div className="flex justify-between bg-pink-200 shadow-2xl mb-0.5 ">
            <div className="">
                <img className="w-28" src={app_logo}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-10 m-1">
                    <li className="px-4">OnlineStatus:{onlineStatus ? "✅":"❌"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4" ><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems.length} items)</Link></li>
                    <button className="px-4" onClick={()=>{
                        loginvariable==="Login"?setloginvariable("Logout"):setloginvariable("Login");
                  }}>{loginvariable}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header;