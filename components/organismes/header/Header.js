import React, { useState } from "react";
import Nav from "../../molecules/nav/Nav";
import SelectedLanguage from "../../molecules/selected/SelectedLanguage";
import ButtonWithBackground from "../../atomes/button/ButtonWithBackground";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobilNav from "../../molecules/nav/MobilNav";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className={`w-full max-w-[1450px] mx-auto`}>
      <div className="lg:flex hidden justify-between items-end px-3 xs:px-6 lg:px-8 py-5">
        <img src="/img/logos/logo.png" className="w-96" />
        <div className="flex items-center xl:w-5/12 w-6/12 justify-between">
          <Nav />
          <ButtonWithBackground />
          <SelectedLanguage />
        </div>
      </div>
      <div className={`lg:hidden flex items-start relative`}>
        {!openMenu ? (
          <div className=" px-3 xs:px-6 lg:px-8 py-5 w-full flex justify-between">
            <img
              src="/img/logos/littleLogo.png"
              className="w-7 object-contain"
            />
            <Bars3Icon
              onClick={() => setOpenMenu((openMenu) => !openMenu)}
              className="w-10 text-dark z-50"
              aria-hidden="true"
            />
          </div>
        ) : (
          <MobilNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
