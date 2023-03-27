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
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="flex justify-end items-center w-full">
          <div className="flex-shrink-0 flex-row">
            <Search />
          </div>
          {/* TODO - Make the icons functionality */}
          <div className="mx-4 flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          {/* <p className="ml-4">Text here</p> */}
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
