import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  name: string,
  link: string
}

const NavItem = ({...props}:NavItemProps) => {
  return (

    <div className='navItem skewedDiv bg-darkBlue text-white'>
        <div className="navLink">
        <Link className="z-10 py-5 px-24 " to={`${props.link}`}>{props.name}</Link>
        </div>
    </div>

  );
};

export default NavItem;
