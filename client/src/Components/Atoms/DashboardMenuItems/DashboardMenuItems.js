import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./DashboardMenuItems.module.scss";
import small_arrow from "./../../../Assets/images/arrow-right-ibaas.svg";

export function DashboardMenuItems({
  id = "",
  to = "",
  label = "",
  logo,
  size,
  isDisable = false,
  url,
}) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(false);

  const handleNavlink = (e) => {
    isDisable && e.preventDefault();
  };

  useEffect(() => {
    if (location.pathname.includes(url)) {
      setActiveTab(true);
    } else {
      setActiveTab(false);
    }
  }, [location?.pathname, url]);

  return (
    <NavLink
      id={id}
      data-testid={id}
      to={to}
      onClick={handleNavlink}
      // activeClassName={styles.active}
      // className={isDisable && 'pointer-events-none cursor-default'}
      className={(isActive) =>
        isActive
          ? `${styles.active}`
          : isDisable && "pointer-events-none cursor-default"
      }
    >
      <button
        className={`w-full flex justify-between items-center !px-6 text-sm lg:text-base
        ${styles.profile_nav_btn} ${activeTab ? "bg-ibm8" : "bg-white"}`}
      >
        <div className="flex flex-row items-center w-[173px] gap-4 1xl:gap-5 lg:gap-2 xl:gap-3">
          <div className="w-[40px]">
            <div className={`${styles.imgLogo} ${size} icon-${logo}`}>
              {logo}
            </div>
          </div>
          <span
            className={`leading-10 font-[400] text-[22px] ${styles.label} ${
              activeTab ? " text-ibm2" : "text-ibgy1"
            }`}
          >
            {label}
          </span>
        </div>
        <img className={""} src={small_arrow} alt={`arrow-${id}`} />
      </button>
    </NavLink>
  );
}

DashboardMenuItems.propTypes = {
  id: PropTypes.string,
  isDisable: PropTypes.bool,
  label: PropTypes.string,
  logo: PropTypes.any,
  size: PropTypes.any,
  to: PropTypes.string,
  url: PropTypes.string,
};
