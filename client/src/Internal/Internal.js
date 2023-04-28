import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Internal.module.scss";
import { DashboardMenu, DashboardMenuFloat, DashboardMenuMini } from "../Components/Molecules/DashboardMenu/DashboardMenu";
import Player from "../Components/Player/Player";
import Footer from "../Components/Footer/Footer";
import TopBar from "../Components/TopBar/TopBar";
// import {
//   DashboardMenu,
//   DashboardMenuFloat,
//   DashboardMenuMini,
// } from "./../Components/Atoms/DashboardMenuItems/DashboardMenuItems";

const Internal = () => {
  const contentRef = useRef(null);
  return (
    // <div className="flex flex-row justify-between w-full">
    //   <div>Sidebar</div>
    //   <div className="flex flex-col">
    //     <div>
    //       <Navbar />
    //     </div>
    //     <Outlet />
    //     <div>
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
    <>
      <div className={styles.internal_template}>
        <div className={styles.internal_template__menu}>
          <DashboardMenu />
          <DashboardMenuMini />
          <DashboardMenuFloat />
        </div>
        <div className={styles.internal_template__content} ref={contentRef}>
          {/* <div className={styles.internal_template__container}> */}
            {/* <InternalHeader /> */}
            {/* <ToastProvider /> */}
            <TopBar />
            <Outlet />
            <Player />
   <Footer />
          {/* </div> */}
          <div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Internal;
