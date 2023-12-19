"use client";
import { useIsMobile } from "@/hooks";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const navigation = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Skills",
      link: "/#skills",
    },
    {
      title: "Work",
      link: "/#work",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
  ];

  const { isMobile } = useIsMobile();
  const [showNav, setShowNav] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const setBodyOverflow = (value: boolean) => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = value ? "unset" : "hidden";
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setShowNav(false);
    }
  }, [isMobile]);

  useEffect(() => {
    setShowBorder(showNav);

    setBodyOverflow(!showNav);
  }, [showNav]);

  return (
    <header className="sticky top-0 z-10">
      <div
        className={clsx(
          "backdrop-blur-lg bg-[rgba(0,0,0,0.5)] w-full relative z-[2]",
          showBorder && "border-b border-b-white border-opacity-10"
        )}
      >
        <div className="max-w-5xl mx-auto flex w-full items-center justify-between">
          {!isMobile && (
            <nav className={clsx("flex items-center justify-center")}>
              {navigation.map(({ title, link }, i) => (
                <Link
                  className="p-4 flex items-start justify-center"
                  href={link}
                  key={`${link}_${i}`}
                >
                  {title}
                </Link>
              ))}
            </nav>
          )}

          <div
            className={clsx("flex justify-between py-4", isMobile && "w-full")}
          >
            <div className="p-4 flex items-start justify-center ml-0 whitespace-nowrap">
              India 🇮🇳
            </div>
            <button
              className="p-4 md:hidden text-2xl"
              onClick={() => setShowNav((prev) => !prev)}
            >
              {!showNav ? <FiMenu /> : <IoClose />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobile && showNav && (
          <motion.nav
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "-100%" }}
            transition={{ easings: ["easeInOut"] }}
            className={clsx(
              "items-center flex z-[1] fixed top-0 left-0 w-full bg-black h-screen flex-col justify-start pt-[7rem]"
            )}
          >
            {navigation.map(({ title, link }, i) => (
              <Link
                className="p-4 flex items-start justify-center py-6"
                href={link}
                key={`${link}_${i}`}
                onClick={() => {
                  setShowNav(false);
                }}
              >
                {title}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
