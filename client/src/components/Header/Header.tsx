import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Search from "../SearchBar/Search";
import logoSmall from "/src/assets/logoSmall.png";

const Header = () => {
  return (
    <div className="w-screenWidthLarge mx-auto mt-8 flex flex-row">
      <div>
        <Link to="/">
          <img src={logoSmall} alt="logo of artfully" className="w-60" />
        </Link>
      </div>
      <div className="flex">
        <Navigation />
      </div>

      <Search />
    </div>
  );
};

export default Header;
