import LeftArrow from "./../../../Assets/images/MenuLeftIcon.svg";
import RightArrow from "./../../../Assets/images/MenuRightIcon.svg";
// import MenuItem from "./../../Atoms/MenuItem/MenuItem";
import MultiColorIcon from "./../../Atoms/MultiColorIcon/MultiColorIcon";
import MenuItem from "./../../Atoms/MenuItem/MenuItem";
import { motion } from "framer-motion";
import { useMediaQuery } from "./../../../Hooks/useMediaQuery";
import { useOutsideClick } from "./../../../Hooks/useOutsideClick";
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import home from "./../../../Assets/images/home.png";
import profile from "./../../../Assets/images/profile.png"
import explore from "./../../../Assets/images/explore.png"
import yourlibrary from "./../../../Assets/images/yourlibrary.png"
import album from "./../../../Assets/images/album.png"
import playlist from "./../../../Assets/images/playlist.png"
import liked from "./../../../Assets/images/liked.png"
import logo from "./../../../Assets/logo.png";
import styles from "./DashboardMenu.module.scss";
import sideprofileImage from "./../../../Assets/profile.png";
import signout from "./../../../Assets/images/signout.png";
import dashboard from "./../../../Assets/images/dashboard.png";
import profilesetting from "./../../../Assets/images/profilesetting.png";
import help from "./../../../Assets/images/help.png"

export const DashboardMenu = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const selectRef = useRef(null);
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);

  // const menuRef = useRef(null);

  // useOutsideClick(menuRef, () => {
  //   // ClickedOut(true);
  //   if (isOpen) {
  //     setIsOpen(false);
  //   }
  // });

  useOutsideClick(selectRef, () => {
    if (show) {
      setShow(false);
    }
  });

  return (
    <div className={`${styles.menu}`}>
      <div className="flex flex-col items-center mt-6">
        <div className="p-2">
          <img src={logo} className="w-[200px] h-[90px]" />
        </div>

        <div className="p-2 flex flex-col gap-[15px] pb-5">
          <div><img src={sideprofileImage}  /></div>
          <div className="text-[18px] font-bold">
            Jane Willin
          </div>
          <div className="font-semibold text-[14px]">
            Account ID: p-1234
          </div>
        </div>

        <div>
          <div>
            {/* Home-button */}
            <div className="mb-2" onClick={() => navigate("/")}>
              <MenuItem
                isActive={true}
                icon={
                  home
                }
                label="Home"
                url={"/"}
                id={"landing-page"}
              />
            </div>
            {/*Customer Dashboard*/}
            <div className="mb-2" onClick={() => setIsOpen(true)}>
              <MenuItem
                onClickOutside={true}
                ClickedOut={isOpen}
                url={"/profile"}
                icon={profile}
                iconClassname={`${styles.iconProfile}`}
                label={"Profile"}
                key={"merchant-activity"}
                className={`${styles.iconProfile}`}
                // isDisable={
                //   accountStatus == AccountStatusEnum.Declined ||
                //   accountStatus == AccountStatusEnum.Canceled
                // }
                id={"profile"}
              >
                <div className="">
                  {/* user-details */}
                  <NavLink
                    to={"/profile/dashboard"}
                    key="customer-details"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/my-profile/user-details"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                         { <span className="pt-2 pl-2"><img src={dashboard}/></span> }
                         {<span className="pl-3">DashBoard</span>}
                       
                       
                      </button>
                    </div>
                  </NavLink>
                  {/* payment-methods */}
                  <NavLink
                    to={"/profile/settings"}
                    key="customer-payments"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/profile/settings"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                         { <span className="pt-2 pl-2"><img src={profilesetting}/></span> }
                         {<span className="pl-3">Profile Settings</span>}
                      </button>
                    </div>
                  </NavLink>
            
                  {/* change-password */}
                  <NavLink
                    to={"/profile/get-help"}
                    key="customer-change-password"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/profile/get-help"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                        { <span className="pt-2 pl-2"><img src={help}/></span> }
                        {<span className="pl-3"> Get Help</span>}
                      </button>
                    </div>
                  </NavLink>
                </div>
              </MenuItem>
            </div>
            {/* settings-button */}
            <div className="mb-2" onClick={() => navigate("/exploreScreen")}>
              <MenuItem
                isActive={true}
                icon={ explore }
                label="Explore"
                url={"/exploreScreen"}
                id={"settings"}
              />
            </div>
            {/* Statement-button */}
            <div className="mb-2" onClick={() => navigate("/yourlibrary")}>
              <MenuItem
                icon={
                  yourlibrary
                }
                url={"/yourlibrary"}
                to={"/statements"}
                label="Your Library"
                id={"statement"}
              />
            </div>
            {/* ContactUs-button */}
            <div className="mb-2" onClick={() => navigate("/albums")}>
              <MenuItem
                icon={
                  album
                }
                label="Albums"
                id={"contactUs"}
                to={"/contact-us"}
                url={"/albums"}
              />
            </div>
            {/* Export-button */}
            <div className="mb-2" onClick={() => navigate("/playlists")}>
              <MenuItem
                icon={
                  playlist
                }
                label="Playlists"
                url={"/playlists"}
                id={"exportedFiles"}
              />
            </div>
            {/* GetHelp-button */}
            <div className="mb-2" onClick={() => navigate("/likedMusic")}>
              <MenuItem
                icon={
                  liked
                }
                label="Liked Songs"
                id={"getHelp"}
                to={"/get-help"}
                url={"/likedMusic"}
              />
            </div>
          </div>
          {/* SignOut-button */}
          <div className="mt-10 pb-[138px]">
            <div className="mb-2">
              <MenuItem
                icon={
                  signout
                }
                label="Sign Out"
                id={"Logout"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const variants = {
  open: {
    width: 250,
    transition: {
      type: "tween",
      damping: 40,
      ease: "easeIn",
    },
  },
  closed: {
    width: 10,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

// mini sidebar menu visible from 768px upto 1200px
export const DashboardMenuMini = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    // ClickedOut(true);
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const [show, setShow] = useState(false);

  useOutsideClick(selectRef, () => {
    if (show) {
      setShow(false);
    }
  });

  // const handleClose = () => {
  //   setShow(false);
  // };

  return (
    <motion.div
      className={`${styles.menu_mini} ${!isOpen && "w-[88px]"}`}
      // animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      {" "}
      {isOpen ? (
        <button
          className="absolute space-y-1 right-4 top-4"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img src={LeftArrow} alt="" />
        </button>
      ) : (
        <button
          className="absolute space-y-1 top-4 left-6"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={RightArrow} alt="" />
        </button>
      )}
      <div
        className={`${!show && "overflow-y-scroll"} ${styles.menu_items}`}
        ref={menuRef}
      >
        {" "}
        <div
          className={` p-2 ${styles.menu_items} ${!isOpen && "pl-0 pr-0"}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <div>
            {/* Home Button */}
            <div
              className="mb-2"
              onClick={() => navigate("/merchant-activity")}
            >
              <MenuItem
                isActive={true}
                logo={
                  <MultiColorIcon
                    icon="Home-1"
                    className={`${styles.iconHome}`}
                  />
                }
                label={!isOpen ? "" : "Home"}
                url={"/"}
                id={"landing-page"}
              />
            </div>
            {/* Customer Dashboard*/}
            <div className="mb-2" onClick={() => navigate("/Home/dashboard")}>
              <MenuItem
                isActive={true}
                logo={
                  <MultiColorIcon
                    icon="ibaas-account"
                    className={`${styles.iconHome}`}
                  />
                }
                label={!isOpen ? "" : "Account"}
                url={"/Home/dashboard"}
                id={"home"}
              />
            </div>
            {/* settings-button */}
            <div className="mb-2" onClick={() => navigate("/settings")}>
              <MenuItem
                isActive={true}
                logo={
                  <MultiColorIcon
                    icon="setting"
                    className={`${styles.iconHome}`}
                  />
                }
                label={!isOpen ? "" : "Settings"}
                url={"/settings"}
                id={"settings"}
              />
            </div>
            {/* Profile DropDown */}
            <div className="mb-2" onClick={() => setIsOpen(true)}>
              <MenuItem
                onClickOutside={true}
                ClickedOut={isOpen}
                url={"/my-profile"}
                icon={"Profile"}
                iconClassname={`${styles.iconProfile}`}
                label={!isOpen ? "" : "Profile"}
                key={"merchant-activity"}
                className={`${styles.iconProfile}`}
                // isDisable={
                //   accountStatus == AccountStatusEnum.Declined ||
                //   accountStatus == AccountStatusEnum.Canceled
                // }
                id={"profile"}
              >
                <div className="">
                  {/* user-details */}
                  <NavLink
                    to={"/my-profile/user-details"}
                    key="customer-details"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/my-profile/user-details"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                        User Details
                        {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                      </button>
                    </div>
                  </NavLink>
                  {/* payment-methods */}
                  <NavLink
                    to={"/my-profile/payment-methods"}
                    key="customer-payments"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/my-profile/payment-methods"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                        Payment Methods
                        {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                      </button>
                    </div>
                  </NavLink>
                  {/* Account Limit/Fee */}
                  <NavLink
                    to={"/my-profile/account-limits"}
                    key="customer-account-limits"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/my-profile/account-limits"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                        Account Limit/Fee
                        {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                      </button>
                    </div>
                  </NavLink>
                  {/* agreements */}
                  <NavLink
                    to={"/my-profile/agreements"}
                    key="customer-agreements"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes("/my-profile/agreements") &&
                        "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                        Agreements
                        {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                      </button>
                    </div>
                  </NavLink>
                  {/* change-password */}
                  <NavLink
                    to={"/my-profile/change-password"}
                    key="customer-change-password"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/my-profile/change-password"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                        Change Password
                        {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                      </button>
                    </div>
                  </NavLink>
                  {/* twostep-authentication */}
                  <NavLink
                    to={"/my-profile/twostep-authentication"}
                    key="customer-twostep"
                  >
                    <div
                      className={`${styles.NavLinkButtons} ${
                        location.pathname.includes(
                          "/my-profile/twostep-authentication"
                        ) && "bg-ibm8 text-ibm2 rounded-[10px]"
                      } text-ibgy1 hover:text-ibm2`}
                    >
                      <button
                        type="button"
                        className="flex flex-row leading-[43px]"
                      >
                        2-Step Authentication
                        {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                      </button>
                    </div>
                  </NavLink>
                </div>
              </MenuItem>
            </div>
            {/* Statement-button */}
            <div className="mb-2" onClick={() => navigate("/statements")}>
              <MenuItem
                logo={
                  <MultiColorIcon
                    icon="Statement"
                    className={`${styles.iconStatement}`}
                  />
                }
                label={!isOpen ? "" : "Statement"}
                id={"statement"}
                to={"/statements"}
                url={"/statements"}
              />
            </div>
            {/* ContactUs-button */}
            <div className="mb-2">
              <MenuItem
                logo={
                  <MultiColorIcon
                    icon="Contact_Us"
                    className={`${styles.iconContact_Us}`}
                  />
                }
                label={!isOpen ? "" : "Contact us"}
                id={"contactUs"}
                to={"/contact-us"}
                url={"/contact-us"}
              />
            </div>
            {/* Export-button */}
            <div className="mb-2" onClick={() => navigate("/exported-files")}>
              <MenuItem
                logo={
                  <MultiColorIcon
                    icon="export-files"
                    className={`${styles.iconExport}`}
                  />
                }
                label={!isOpen ? "" : "Export Files"}
                url={"/exported-files"}
                id={"exportedFiles"}
              />
            </div>
            {/* GetHelp-button */}
            <div className="mb-2">
              <MenuItem
                logo={
                  <MultiColorIcon
                    icon="get-help"
                    className={`${styles.iconGet_Help}`}
                  />
                }
                label={!isOpen ? "" : "Get help"}
                id={"getHelp"}
                to={"/get-help"}
                url={"/get-help"}
              />
            </div>
            {/* SignOut-button */}
            <div className="mt-10 mb-[146px] pb-[138px]">
              <div className="mb-2">
                <MenuItem
                  logo={
                    <MultiColorIcon
                      icon="signout"
                      className={`${styles.iconLogout}`}
                    />
                  }
                  label={!isOpen ? "" : "Sign Out"}
                  id={"Logout"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// float sidebar menu visible when width is less than 768px
// export const DashboardMenuFloat = () => {
//   const navigate = useNavigate();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isHigherWidth = useMediaQuery("(max-width: 1297px)");
//   const [show, setShow] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     if (isHigherWidth) {
//       setIsMenuOpen(false);
//     }
//   }, [isHigherWidth]);

//   alert(isMenuOpen);

//   const menuRef = useRef(null);

//   useOutsideClick(menuRef, () => {
//     // ClickedOut(true);
//     if (isMenuOpen) {
//       setIsMenuOpen(false);
//     }
//   });

//   return (
//     <div>
//       {!isMenuOpen && (
//         <button
//           type="button"
//           className={styles.menu_float_btn}
//           onClick={(e) => {
//             // e.stopPropagation();
//             setIsMenuOpen(true);
//           }}
//         >
//           <button type="button" className="space-y-1 ">
//             <img src={RightArrow} alt="" />
//           </button>
//         </button>
//       )}
//       <div
//         ref={menuRef}
//         className={`${!show && "overflow-y-scroll"} ${styles.menu_float} ${
//           isMenuOpen ? styles.menu_float__open : ""
//         }`}
//       >
//         <button
//           className="absolute space-y-1 top-4 right-7"
//           onClick={() => {
//             setIsMenuOpen(false);
//           }}
//         >
//           <img src={LeftArrow} alt="" />
//         </button>
//         {isMenuOpen && (
//           <div className="flex flex-col items-center mt-8">
//             {/* <UserProfile cynWallet={cynWallet} /> */}
//             <button
//               className={` ${styles.mainDiv} flex items-center gap-3 text-[27px] font-[500] mt-5 text-ibgy1 cursor-pointer `}
//               onClick={(event) => {
//                 event.stopPropagation();
//                 // setShow(!show);
//               }}
//             >
//               <div
//                 className={`icon-small-arrow text-base ${show && "text-ibm1"} ${
//                   show ? styles.upArrow : styles.downArrow
//                 }`}
//               />
//             </button>
//             ( (
//             <div>
//               <div>
//                 {/* Home-button */}
//                 <div
//                   className="mb-2"
//                   onClick={() => navigate("/merchant-activity")}
//                 >
//                   <MenuItem
//                     isActive={true}
//                     logo={
//                       <MultiColorIcon
//                         icon="Home-1"
//                         className={`${styles.iconHome}`}
//                       />
//                     }
//                     label="Home"
//                     url={"/merchant-activity"}
//                     id={"merchant-activity"}
//                   />
//                 </div>
//                 {/*Customer Dashboard*/}
//                 <div
//                   className="mb-2"
//                   onClick={() => navigate("/Home/dashboard")}
//                 >
//                   <MenuItem
//                     isActive={true}
//                     logo={
//                       <MultiColorIcon
//                         icon="ibaas-account"
//                         className={`${styles.iconHome}`}
//                       />
//                     }
//                     label="Account"
//                     url={"/Home/dashboard"}
//                     id={"home"}
//                   />
//                 </div>
//                 {/* settings-button */}
//                 <div className="mb-2" onClick={() => navigate("/settings")}>
//                   <MenuItem
//                     isActive={true}
//                     logo={
//                       <MultiColorIcon
//                         icon="setting"
//                         className={`${styles.iconHome}`}
//                       />
//                     }
//                     label="Settings"
//                     url={"/settings"}
//                     id={"settings"}
//                   />
//                 </div>
//                 {/* Profile-button */}
//                 <div className="mb-2">
//                   <MenuItem
//                     url={"/my-profile"}
//                     icon={"Profile"}
//                     iconClassname={`${styles.iconProfile}`}
//                     label={"Profile"}
//                     key={"merchant-activity"}
//                     className={`${styles.iconProfile}`}
//                     id={"profile"}
//                     onClickOutside={true}
//                   >
//                     <div className={`${styles.userDetails}`}>
//                       {/* user-details */}
//                       <NavLink
//                         to={"/my-profile/user-details"}
//                         key="customer-details"
//                       >
//                         <div
//                           className={`${styles.NavLinkButtons} ${
//                             location.pathname.includes(
//                               "/my-profile/user-details"
//                             ) && "bg-ibm8 text-ibm2 rounded-[10px]"
//                           } text-ibgy1 hover:text-ibm2`}
//                         >
//                           <button
//                             type="button"
//                             className="flex flex-row leading-[43px]"
//                           >
//                             User Details
//                             {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
//                           </button>
//                         </div>
//                       </NavLink>
//                       {/* payment-methods */}
//                       <NavLink
//                         to={"/my-profile/payment-methods"}
//                         key="customer-payments"
//                       >
//                         <div
//                           className={`${styles.NavLinkButtons} ${
//                             location.pathname.includes(
//                               "/my-profile/payment-methods"
//                             ) && "bg-ibm8 text-ibm2 rounded-[10px]"
//                           } text-ibgy1 hover:text-ibm2`}
//                         >
//                           <button
//                             type="button"
//                             className="flex flex-row leading-[43px]"
//                           >
//                             Payment Methods
//                             {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
//                           </button>
//                         </div>
//                       </NavLink>
//                       {/* Account Limit/Fee */}
//                       <NavLink
//                         to={"/my-profile/account-limits"}
//                         key="customer-account-limits"
//                       >
//                         <div
//                           className={`${styles.NavLinkButtons} ${
//                             location.pathname.includes(
//                               "/my-profile/account-limits"
//                             ) && "bg-ibm8 text-ibm2 rounded-[10px]"
//                           } text-ibgy1 hover:text-ibm2`}
//                         >
//                           <button
//                             type="button"
//                             className="flex flex-row leading-[43px]"
//                           >
//                             Account Limit/Fee
//                             {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
//                           </button>
//                         </div>
//                       </NavLink>
//                       {/* agreements */}
//                       <NavLink
//                         to={"/my-profile/agreements"}
//                         key="customer-agreements"
//                       >
//                         <div
//                           className={`${styles.NavLinkButtons} ${
//                             location.pathname.includes(
//                               "/my-profile/agreements"
//                             ) && "bg-ibm8 text-ibm2 rounded-[10px]"
//                           } text-ibgy1 hover:text-ibm2`}
//                         >
//                           <button
//                             type="button"
//                             className="flex flex-row leading-[43px]"
//                           >
//                             Agreements
//                             {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
//                           </button>
//                         </div>
//                       </NavLink>
//                       {/* change-password */}
//                       <NavLink
//                         to={"/my-profile/change-password"}
//                         key="customer-change-password"
//                       >
//                         <div
//                           className={`${styles.NavLinkButtons} ${
//                             location.pathname.includes(
//                               "/my-profile/change-password"
//                             ) && "bg-ibm8 text-ibm2 rounded-[10px]"
//                           } text-ibgy1 hover:text-ibm2`}
//                         >
//                           <button
//                             type="button"
//                             className="flex flex-row leading-[43px]"
//                           >
//                             Change Password
//                             {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
//                           </button>
//                         </div>
//                       </NavLink>
//                       {/* twostep-authentication */}
//                       <NavLink
//                         to={"/my-profile/twostep-authentication"}
//                         key="customer-twostep"
//                       >
//                         <div
//                           className={`${styles.NavLinkButtons} ${
//                             location.pathname.includes(
//                               "/my-profile/twostep-authentication"
//                             ) && "bg-ibm8 text-ibm2 rounded-[10px]"
//                           } text-ibgy1 hover:text-ibm2`}
//                         >
//                           <button
//                             type="button"
//                             className="flex flex-row leading-[43px]"
//                           >
//                             2-Step Authentication
//                             {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
//                           </button>
//                         </div>
//                       </NavLink>
//                     </div>
//                   </MenuItem>
//                 </div>
//                 {/* Statement-button */}
//                 <div className="mb-2" onClick={() => navigate("/statements")}>
//                   <MenuItem
//                     logo={
//                       <MultiColorIcon
//                         icon="Statement"
//                         className={`${styles.iconStatement}`}
//                       />
//                     }
//                     url={"/statements"}
//                     to={"/statements"}
//                     label="Statement"
//                     id={"statement"}
//                   />
//                 </div>
//                 {/* ContactUs-button */}
//                 <div className="mb-2">
//                   <MenuItem
//                     logo={
//                       <MultiColorIcon
//                         icon="Contact_Us"
//                         className={`${styles.iconContact_Us}`}
//                       />
//                     }
//                     label="Contact us"
//                     id={"contactUs"}
//                     to={"/contact-us"}
//                     url={"/contact-us"}
//                   />
//                 </div>
//                 {/* Export-button */}
//                 <div
//                   className="mb-2"
//                   onClick={() => navigate("/exported-files")}
//                 >
//                   <MenuItem
//                     logo={
//                       <MultiColorIcon
//                         icon="export-files"
//                         className={`${styles.iconExport}`}
//                       />
//                     }
//                     label="Export Files"
//                     url={"/exported-files"}
//                     id={"exportedFiles"}
//                   />
//                 </div>
//                 {/* GetHelp-button */}
//                 <div className="mb-2">
//                   <MenuItem
//                     logo={
//                       <MultiColorIcon
//                         icon="get-help"
//                         className={`${styles.iconGet_Help}`}
//                       />
//                     }
//                     label="Get help"
//                     id={"getHelp"}
//                     to={"/get-help"}
//                     url={"/get-help"}
//                   />
//                 </div>
//               </div>
//               {/* SignOut-button */}
//               <div className="mt-10 pb-[138px]">
//                 <div className="mb-2">
//                   <MenuItem
//                     logo={
//                       <MultiColorIcon
//                         icon="signout"
//                         className={`${styles.iconLogout}`}
//                       />
//                     }
//                     label="Sign Out"
//                     id={"Logout"}
//                   />
//                 </div>
//               </div>
//             </div>
//             ) )
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export const DashboardMenuFloat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHigherWidth = useMediaQuery("(max-width: 1297px)");
  const selectRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isHigherWidth) {
      setIsMenuOpen(false);
    }
  }, [isHigherWidth]);

  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  useOutsideClick(selectRef, () => {
    if (show) {
      setShow(false);
    }
  });

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {" "}
      {!isMenuOpen && (
        <div className={styles.menu_float_btn}>
          <button
            className="space-y-1 "
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(true);
            }}
          >
            <img src={RightArrow} alt="" />
          </button>
        </div>
      )}
      <div
        ref={menuRef}
        className={`${styles.menu_float} ${
          isMenuOpen && styles.menu_float__open
        }`}
      >
        <button
          className="absolute space-y-1 top-4 right-7"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={LeftArrow} alt="" />
        </button>
        <div className="flex flex-col items-center mt-8">
          {/* <UserProfile cynWallet={cynWallet} /> */}
          <button
            className={` ${styles.mainDiv} flex items-center gap-3 text-[27px] font-[500] mt-5 text-ibgy1 cursor-pointer `}
            onClick={(event) => {
              event.stopPropagation();
              setShow(!show);
            }}
          >
            <div
              className={`icon-small-arrow text-base ${show && "text-ibm1"} ${
                show ? styles.upArrow : styles.downArrow
              }`}
            />
          </button>

          {/* nav-labels */}
          <div>
            <div>
              {/* Home-button */}
              <div
                className="mb-2"
                // onClick={() => history.push("/merchant-activity")}
              >
                <MenuItem
                  isActive={true}
                  logo={
                    <MultiColorIcon
                      icon="Home-1"
                      className={`${styles.iconHome}`}
                    />
                  }
                  label="Home"
                  url={"/"}
                  id={"landing-page"}
                />
              </div>
              {/*Customer Dashboard*/}
              <div
                className="mb-2"
                // onClick={() => history.push("/Home/dashboard")}
              >
                <MenuItem
                  isActive={true}
                  logo={
                    <MultiColorIcon
                      icon="ibaas-account"
                      className={`${styles.iconHome}`}
                    />
                  }
                  label="Account"
                  url={"/Home/dashboard"}
                  id={"home"}
                />
              </div>
              {/* settings-button */}
              <div
                className="mb-2"
                // onClick={() => history.push("/settings")}
              >
                <MenuItem
                  isActive={true}
                  logo={
                    <MultiColorIcon
                      icon="setting"
                      className={`${styles.iconHome}`}
                    />
                  }
                  label="Settings"
                  url={"/settings"}
                  id={"settings"}
                />
              </div>
              {/* Profile-button */}
              <div className="mb-2">
                <MenuItem
                  url={"/my-profile"}
                  icon={"Profile"}
                  iconClassname={`${styles.iconProfile}`}
                  label={"Profile"}
                  key={"merchant-activity"}
                  className={`${styles.iconProfile}`}
                  id={"profile"}
                  onClickOutside={true}
                >
                  <div className={`${styles.userDetails}`}>
                    {/* user-details */}
                    <NavLink
                      to={"/my-profile/user-details"}
                      key="customer-details"
                    >
                      <div>
                        <button
                          type="button"
                          className="flex flex-row leading-[43px]"
                        >
                          User Details
                          {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                        </button>
                      </div>
                    </NavLink>
                    {/* payment-methods */}
                    <NavLink
                      to={"/my-profile/payment-methods"}
                      key="customer-payments"
                    >
                      <div>
                        <button
                          type="button"
                          className="flex flex-row leading-[43px]"
                        >
                          Payment Methods
                          {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                        </button>
                      </div>
                    </NavLink>
                    {/* Account Limit/Fee */}
                    <NavLink
                      to={"/my-profile/account-limits"}
                      key="customer-account-limits"
                    >
                      <div>
                        <button
                          type="button"
                          className="flex flex-row leading-[43px]"
                        >
                          Account Limit/Fee
                          {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                        </button>
                      </div>
                    </NavLink>
                    {/* agreements */}
                    <NavLink
                      to={"/my-profile/agreements"}
                      key="customer-agreements"
                    >
                      <div>
                        <button
                          type="button"
                          className="flex flex-row leading-[43px]"
                        >
                          Agreements
                          {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                        </button>
                      </div>
                    </NavLink>
                    {/* change-password */}
                    <NavLink
                      to={"/my-profile/change-password"}
                      key="customer-change-password"
                    >
                      <div>
                        <button
                          type="button"
                          className="flex flex-row leading-[43px]"
                        >
                          Change Password
                          {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                        </button>
                      </div>
                    </NavLink>
                    {/* twostep-authentication */}
                    <NavLink
                      to={"/my-profile/twostep-authentication"}
                      key="customer-twostep"
                    >
                      <div>
                        <button
                          type="button"
                          className="flex flex-row leading-[43px]"
                        >
                          2-Step Authentication
                          {/* <span className="mt-0.5 -ml-2 icon-Side-Right-Icon"></span> */}
                        </button>
                      </div>
                    </NavLink>
                  </div>
                </MenuItem>
              </div>
              {/* Statement-button */}
              <div
                className="mb-2"
                // onClick={() => history.push("/statements")}
              >
                <MenuItem
                  logo={
                    <MultiColorIcon
                      icon="Statement"
                      className={`${styles.iconStatement}`}
                    />
                  }
                  url={"/statements"}
                  to={"/statements"}
                  label="Statement"
                  id={"statement"}
                />
              </div>
              {/* ContactUs-button */}
              <div className="mb-2">
                <MenuItem
                  logo={
                    <MultiColorIcon
                      icon="Contact_Us"
                      className={`${styles.iconContact_Us}`}
                    />
                  }
                  label="Contact us"
                  id={"contactUs"}
                  to={"/contact-us"}
                  url={"/contact-us"}
                />
              </div>
              {/* Export-button */}
              <div
                className="mb-2"
                // onClick={() => history.push("/exported-files")}
              >
                <MenuItem
                  logo={
                    <MultiColorIcon
                      icon="export-files"
                      className={`${styles.iconExport}`}
                    />
                  }
                  label="Export Files"
                  url={"/exported-files"}
                  id={"exportedFiles"}
                />
              </div>
              {/* GetHelp-button */}
              <div className="mb-2">
                <MenuItem
                  logo={
                    <MultiColorIcon
                      icon="get-help"
                      className={`${styles.iconGet_Help}`}
                    />
                  }
                  label="Get help"
                  id={"getHelp"}
                  to={"/get-help"}
                  url={"/get-help"}
                />
              </div>
            </div>
            {/* SignOut-button */}
            <div
              className="mt-10 pb-[138px]"
              // onClick={handleLogout}
            >
              <div className="mb-2">
                <MenuItem
                  logo={
                    <MultiColorIcon
                      icon="signout"
                      className={`${styles.iconLogout}`}
                    />
                  }
                  label="Sign Out"
                  id={"Logout"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
