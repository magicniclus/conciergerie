import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Nav from "./Nav";
import ButtonWithBackground from "../../atomes/button/ButtonWithBackground";
import SelectedLanguage from "../selected/SelectedLanguage";

const MobilNav = (props) => {
  const { openMenu, setOpenMenu } = props;
  return (
    <div className="absolute left-0 top-0 w-screen min-h-screen px-6 lg:px-8 py-5 bg-white z-50">
      <div>
        <div className="w-full flex justify-between">
          <img src="/img/logos/littleLogo.png" className="w-7 object-contain" />
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
