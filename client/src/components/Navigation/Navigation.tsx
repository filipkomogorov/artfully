import React from "react";
import NavItem from "./NavItem";

interface NavItemProps {
  name: string;
  link: string;
}

const navigationItems: Array<NavItemProps> = [
  {
    name: "Стикери",
    link: "/stikeri",
  },
  {
    name: "За Дома",
    link: "/zadoma",
  },
  {
    name: "Други",
    link: "/drugi",
  },
  {
    name: "Услуги",
    link: "/uslugi",
  },
];

const Navigation = () => {
  return (
    <div className="w-full flex">
      {navigationItems.map((el: NavItemProps, key: number) => (
        <React.Fragment key={key}>
          <NavItem name={el.name} link={el.link} />
          {key < navigationItems.length - 1 && (
            <div className="w-1" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navigation;
