import { Outlet, Link, NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
export default function Home() {

    return (
        <>
              <Navbar/>
              <Outlet/>
        </>
    );
}