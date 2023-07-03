import React, { useEffect, useState, useRef } from "react";
import Nav from "../../molecules/nav/Nav";
import SelectedLanguage from "../../molecules/selected/SelectedLanguage";
import ButtonWithBackground from "../../atomes/button/ButtonWithBackground";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobilNav from "../../molecules/nav/MobilNav";
import { gsap } from "gsap";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const logoRef = useRef(null);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const languageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      [logoRef.current, navRef.current, buttonRef.current, languageRef.current],
      {
        translateY: 200,
        opacity: 0,
      },
      {
        translateY: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power1.out",
      }
    );

    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openMenu]);

  return (
    <header
      className={`w-full max-w-[1450px] mx-auto ${
        openMenu ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <div className="lg:flex hidden justify-between items-end px-3 xs:px-6 lg:px-32 py-5">
        <a href="/" className="cursor-pointer">
          <img ref={logoRef} src="/img/logos/logo.png" className=" opacity-0" />
        </a>
        <div
          ref={navRef}
          className="flex items-center xl:w-5/12 w-6/12 justify-between opacity-0"
        >
          <Nav />
          <div ref={buttonRef} className="opacity-0">
            <ButtonWithBackground />
          </div>
          <div ref={languageRef} className="opacity-0">
            <SelectedLanguage />
          </div>
        </div>
      </div>
      <div className={`lg:hidden flex items-start relative`}>
        {!openMenu ? (
          <div className=" px-3 xs:px-6 lg:px-8 py-5 w-full flex justify-between">
            <a href="/" className="cursor-pointer">
              <img src="/img/logos/logo.png" className="w-7 object-contain" />
            </a>
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
