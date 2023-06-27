import React from "react";

const Nav = () => {
  return (
    <nav>
      <div>
        <ul className="flex lg:flex-row flex-col text-dark text-xl lg:text-sm">
          <li className="flex lg:mb-0 mb-5">
            <a href="/">Nos biens en gestion</a>
            <div className="lg:flex hidden h-full w-0.5 bg-dark mx-4"></div>
          </li>
          <li>
            <a href="/a-propos">Nos services</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
