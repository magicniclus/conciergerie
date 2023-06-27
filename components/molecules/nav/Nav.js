import React from "react";

const Nav = () => {
  return (
    <nav>
      <div>
        <ul className="flex md:flex-row flex-col sm:font-semibold text-dark text-xl sm:text-sm">
          <li className="flex md:mb-0 mb-5">
            <a href="/">Nos biens en gestion</a>
            <div className="md:flex hidden h-full w-0.5 bg-dark mx-4"></div>
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
