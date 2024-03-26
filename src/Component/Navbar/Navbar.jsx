import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Search } from "@mui/icons-material";
import Searchbar from "../Searchbar/Searchbar";
function Navbar() {
  const navlist = (
    <ul className="flex space-x-6 text-white font-medium text-lg px-5">
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">All products</li>
      <li className="cursor-pointer">signup</li>
      <li className="cursor-pointer">
        <Badge badgeContent={0} color="secondary" className="text-pink-600">
          <ShoppingCartIcon className="text-white" />
        </Badge>
      </li>
      <li className="cursor-pointer">user</li>
    </ul>
  );
  return (
    <nav className="bg-pink-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex justify-between items-center py-4 px-4">
        {/* logo */}
        <div className="py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              TopDwell
            </h2>
          </Link>
        </div>
        {/* search bar */}
        <div className="mb-4 lg:mb-0">
          <Searchbar></Searchbar>
        </div>
        {/* menu */}
        <div className="flex justify-center">{navlist}</div>
      </div>
    </nav>
  );
}

export default Navbar;
