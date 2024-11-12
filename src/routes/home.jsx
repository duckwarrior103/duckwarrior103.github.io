import { Outlet, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import MyThree from "../components/MyThree";
export default function Home() {
  return (
    <>
      <div w-full h-full tabIndex={0}>
        <h1>Hello World</h1>
      </div>
      <MyThree />
    </>
  );
}
