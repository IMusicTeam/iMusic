import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import "./MenuItem.style.scss";
import { useOutsideClick } from "./../../../Hooks/useOutsideClick";
import MultiColorIcon from "./../../Atoms/MultiColorIcon/MultiColorIcon";
import styles from "./MenuItem.module.scss";
import small_arrow from "./../../../Assets/images/small_arrow_2.svg";
import { useMediaQuery } from "./../../../Hooks/useMediaQuery";

export default function MenuItem({
  icon = "user",
  iconClassname,
  label = "Button",
  children,
  url = "/",
  onClickOutside = false,
  ClickedOut = false,
  isDisable = false,
  onClick = "",
  id = "",
}) {
  const location = useLocation();
  const isDesktop = useMediaQuery("(max-width: 1297px)");
  const [isDropDown, setDropDown] = useState(false);
  const [isClosed, setIsClosed] = useCycle(false, true);
  const [activeTab, setActiveTab] = useState(false);

  const toggleMenu = () => {
    if ((location.pathname.includes(url) && isClosed) || isDropDown) {
      setDropDown((prev) => !prev);
      setIsClosed(false);
      setActiveTab(true);
    } else {
      setDropDown(true);
      setIsClosed(true);
    }
  };

  const menuCloseRef = useRef(null);
  useOutsideClick(menuCloseRef, () => {
    if (isDropDown) {
      if (location.pathname.includes(url)) {
        setDropDown(true);
      } else if (onClickOutside) {
        setDropDown(false);
      }
    }
  });

  useEffect(() => {
    // if (location.pathname.includes(url)) {
    setDropDown(false);
    // }
  }, [ClickedOut, location.pathname, url]);

  useEffect(() => {
    if (location.pathname.includes(url)) {
      if (!isDesktop) {
        setDropDown(true);
        setIsClosed(false);
      } else {
        setDropDown(true);
        setIsClosed(true);
      }
      setActiveTab(true);
    }
    // else if (location.pathname.includes(url) && isDesktop) {
    //   setDropDown(true);
    //   setIsClosed(true);
    //   setActiveTab(true);
    // }
    else {
      setDropDown(false);
      setIsClosed(true);
      setActiveTab(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, url]);

  return (
    <>
      <button
        className={`w-full flex justify-between items-center 1xl:px-3 px-3 text-sm lg:text-base group ${
          styles.profile_nav_btn
        } ${isDropDown ? "active" : ""} ${
          isDisable && "pointer-events-none "
        } ${activeTab || isDropDown ? "bg-ibm8" : "bg-white"}`}
        onClick={toggleMenu}
        ref={menuCloseRef}
      >
        {/* <div
          className={`w-[40px] flex flex-row ${
            !isOpen
              ? 'sm:gap-4 lg:gap-0 5xl:gap-4 2xl:gap-16 3xl:gap-2'
              : 'gap-8'
          } `}
        > */}
        <div
          className={`flex flex-row items-center gap-4 1xl:gap-5 lg:gap-2 xl:gap-3`}
        >
          <div className="w-[40px]">
            <div>
              <img src={''}/>
              {/* <MultiColorIcon icon={`${icon}`} className={`${iconClassname}`} /> */}
            </div>
          </div>
          {/* <span
              className={`icon-${icon} ${
                isDisable ? 'menu-item-icon-disable' : 'menu-item-icon'
              } text-${size}`}
            /> */}
          <span
            className={`text-[22px] ${
              isDisable
                ? "menu-item-label-disable leading-10 text-ibgy1 font-normal"
                : "menu-item-label leading-10 font-normal group-hover:text-ibm2"
            } ${activeTab || isDropDown ? " text-ibm2" : "text-ibgy1"}`}
          >
            {label}
          </span>
        </div>
        {/* <div>{!isDisable && <span className={`icon-arrow-down`}></span>}</div> */}
        {/* {!isDropDown ? (
          <img
            className={`${styles.caret} -rotate-90 duration-300 ease-in ${
              activeTab || isDropDown ? "visible" : "invisible"
            }`}
            src={small_arrow}
            alt={`arrow-${id}`}
          />
        ) : (
          <img
            className={`${styles.caret} rotate-0 duration-300 ease-out ${
              activeTab || isDropDown ? "visible" : "invisible"
            }`}
            src={small_arrow}
            alt="arrow-down"
          />
        )} */}
      </button>
      <AnimatePresence>
        {isDropDown && (
          <motion.div
            transition={{ type: "tween", duration: 0.1 }}
            animate={{ height: "auto" }}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            className="subitems-container"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

MenuItem.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string,
  iconClassname: PropTypes.any,
  isDisable: PropTypes.bool,
  isOpen: PropTypes.any,
  label: PropTypes.string,
  onClickOutside: PropTypes.bool,
  size: PropTypes.any,
  url: PropTypes.string,
  id: PropTypes.string,
};
