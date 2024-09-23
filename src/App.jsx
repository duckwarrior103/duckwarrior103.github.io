import { Outlet, Link, NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
export default function App() {

    return (
        <>    
            <div tabIndex={0} className="min-h-screen flex flex-col">
              <Navbar/>
              <Outlet/>
            </div>  
              
        </>
    );
}