import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Nav from "./Nav";
import ButtonWithBackground from "../../atomes/button/ButtonWithBackground";
import SelectedLanguage from "../selected/SelectedLanguage";

const MobilNav = (props) => {
  const { openMenu, setOpenMenu } = props;
  useEffect(() => {
    if (openMenu) {
      console.log("openMenu", openMenu);
    }
  }, [openMenu]);
  return (
    <div
      onMouseLeave={() => setOpenMenu((openMenu) => false)}
      className="absolute left-0 top-0 z-30 w-screen min-h-screen px-3 xs:px-6 lg:px-8 py-5 bg-white "
    >
      <div>
        <div className="w-full flex justify-between">
          <a href="/" className="cursor-pointer">
            <img
              src="/img/logos/littleLogo.png"
              className="w-7 object-contain"
            />
          </a>
          <XMarkIcon
            onClick={() => setOpenMenu((openMenu) => !openMenu)}
            className="w-10 text-dark"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col items-start mt-14 min-h-[220px] justify-between">
          <Nav />
          <ButtonWithBackground />
          <SelectedLanguage />
        </div>
      </div>
    </div>
  );
};

export default MobilNav;
