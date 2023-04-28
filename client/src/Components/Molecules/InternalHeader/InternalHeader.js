import Bell from "Assets/Images/Bell.svg";
import bgInternalHeader1 from "Assets/Images/bgInternalHeader1.svg";
import bgInternalHeader2 from "Assets/Images/bgInternalHeader2.svg";
import iBasS_Logo from "Assets/Images/iBaas_Logo.svg";
import arrowDown from "Assets/Images/small arrow.svg";
import Spinner from "Components/Atoms/Spinner/Spinner";
import NoNotification from "Components/Atoms/NoNotification/NoNotification";
import ReceivedNotificationCard from "Components/Atoms/ReceivedNotificationCard/ReceivedNotificationCard";
import SingleNotificationCard from "Components/Atoms/SingleNotificationCard/SingleNotificationCard";
import ToggleButton from "Components/Atoms/ToggleButton/ToggleButton";
// import { PayModal, RequestModal } from "Components/Organisms";
// import { AccountTypeEnum } from "Enums";
// import { AccountStatusEnum } from "Enums/AccountStatusEnum";
import { motion } from "framer-motion";
import toast from "Helpers/toast";
import userDateTime, { getUserTimeZoneOffset } from "Helpers/userDateTime";
import { useMediaQuery } from "Hooks/useMediaQuery";
import { useOutsideClick } from "Hooks/useOutsideClick";
import _ from "lodash";
import Moment from "moment";
import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import {
//   notificationsMarkClear,
//   notificationsMarkRead,
//   notificationsMarkUnread,
//   receivedNotificationUpdate,
// } from "Services/API/Notifications/Notifications";
// import {
//   getCordaFee,
//   getTransactionLimit,
// } from "Services/API/Transactions/Transactions";
// import { showGiftCardModal } from "Store/ducks/giftCardModal";
// import {
//   deleteGroupOfNotificationsActions,
//   fetchNotificationAction,
//   fetchReceiveNotificationAction,
//   fetchSendNotificationAction,
//   markNotificationDeleteAction,
//   markNotificationReadUnreadAction,
//   markRequestReceivedComplete,
//   markRequestReceivedDeclined,
//   markRequestSentCancelled,
//   markRequestSentReminder,
// } from "Store/ducks/notification";
import styles from "./InternalHeader.module.scss";
import "./InternalHeader.style.scss";

export function InternalHeader() {
  // const dispatch = useDispatch();
  const location = useLocation();
  // const { firstName, lastName, id, isLoading } = useSelector(
  //   (store) => store?.userDetails?.data
  // );
  // const {
  //   isProfileVerified,
  //   isAuthyRegistered,
  //   isPersonIdentified,
  //   isPaymentModeAdded,
  // } = useSelector((store) => store.registrationStatus);

  const [activeTab, setActiveTab] = useState("Notifications");
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showPayModal, setShowPayModal] = useState(false);
  const [showSendReceiveModal, setShowSendReceiveModal] = useState(false);

  // const { timeZone } = useSelector((store) => store.userPreferences);
  // const {
  //   notifications,
  //   currentNotificationPage,
  //   currentNotificationPageSize,
  //   totalNotificationPages,
  //   unreadNotificationsCount,
  // } = useSelector((store) => store.notification);

  // const {
  //   requestReceived: receivedNotification,
  //   currentReceiveNotificationPage,
  //   currentReceiveNotificationPageSize,
  //   totalReceivedNotificationsPages,
  // } = useSelector((store) => store.notification);

  // const {
  //   requestSent: requests,
  //   currentRequestsPage,
  //   currentRequestsPageSize,
  //   totalRequestsPages,
  // } = useSelector((store) => store.notification);

  // const userDetails = useSelector((store) => store.userDetails);
  // const accountType = userDetails?.data?.accountType;
  // const accountStatus = userDetails?.data?.accountStatus;
  const [loading, setLoading] = useState(false);

  const handleGetNotification = () => {
    setLoading(true);

    // For Notifications
    // if (
    //   currentNotificationPage < totalNotificationPages - 1 &&
    //   activeTab == "Notifications"
    // ) {
    //   // dispatch(
    //   //   fetchNotificationAction({
    //   //     pageNo: currentNotificationPage + 1,
    //   //     pageSize: currentNotificationPageSize,
    //   //   })
    //   );
    //   setLoading(false);
    // }

    // For Received Notifications
    // if (currentReceiveNotificationPage < totalReceivedNotificationsPages - 1) {
    //   dispatch(
    //     fetchReceiveNotificationAction({
    //       pageNo: currentReceiveNotificationPage + 1,
    //       pageSize: currentReceiveNotificationPageSize,
    //     })
    //   );
    //   setLoading(false);
    // }

    // For Requests
    // if (
    //   currentRequestsPage < totalRequestsPages - 1 &&
    //   activeTab == "Pay/Req"
    // ) {
    //   // dispatch(
    //   //   fetchSendNotificationAction({
    //   //     pageNo: currentRequestsPage + 1,
    //   //     pageSize: currentRequestsPageSize,
    //   //   })
    //   // );

    //   setLoading(false);
    // }
    return setLoading(false);
  };

  const notificationRef = useRef(null);
  useOutsideClick(notificationRef, () => {
    if (showNotification) {
      setShowNotification(false);
    }
  });

  const onClose = () => {
    setShowModal(!showModal);
  };
  const DropdownRef = useRef(null);
  useOutsideClick(DropdownRef, () => {
    if (showModal) {
      setShowModal(false);
    }
  });

  // fetching notifications
  // useEffect(() => {
  //   if (accountType) {
  //     dispatch(
  //       fetchNotificationAction(
  //         {
  //           pageNo: currentNotificationPage,
  //           pageSize: currentNotificationPageSize,
  //         },
  //         true
  //       )
  //     );
  //   } else {
  //     return;
  //   }
  // }, [timeZone, accountType]);

  // fetching send and requests notifications only for customer
  // useEffect(() => {
  //   if (accountType == AccountTypeEnum.Personal) {
  //     dispatch(
  //       fetchReceiveNotificationAction(
  //         {
  //           pageNo: currentReceiveNotificationPage,
  //           pageSize: currentReceiveNotificationPageSize,
  //         },
  //         true
  //       )
  //     );
  //     dispatch(
  //       fetchSendNotificationAction(
  //         {
  //           pageNo: currentRequestsPage,
  //           pageSize: currentRequestsPageSize,
  //         },
  //         true
  //       )
  //     );
  //   }
  // }, [accountType, timeZone]);

  useEffect(() => {
    if (showNotification) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  });
  // const nameLength = firstName?.length + lastName?.length;

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showModal]);

  const resolution = useMediaQuery("(max-width: 992px)");

  return (
    <div className="flex flex-row mt-[30px] mb-[20px]">
      <div
        className={`relative internal-header__container`}
        ref={notificationRef}
      >
        <div className={`relative ${styles.leftContainer}`}>
          <div className={`${styles.bgInternalHeader1Container}`}>
            <img
              src={bgInternalHeader1}
              className={`${styles.bgInternalHeader1}`}
            />
          </div>
          {/* Logo Container */}
          <div
            // className={`${styles.logoContainer} ml-[17px] z-10 flex items-center justify-center`}
            className="z-10 ml-10 bg-transparent"
          >
            {/* <img
              src={iBasS_Logo}
              alt="iBasS_Logo"
              className="w-[162px] h-[30px]"
            /> */}
            <h1 className="text-[48px] text-ibm2 ">
              i<span className="text-cm3">Fund</span>
            </h1>
          </div>
          {/* input searchContainer */}
          {/* <div className="ml-[20px] relative z-[5] w-full flex">
            <div className={`w-full ${styles.searchContainer}`}>
              <input
                type="text"
                placeholder="Search"
                className={`${styles.searchInputBox} pl-[20px]  pr-[40px] text-[16px] leading-[24px] text-ibgy2 outline-[0px] w-[87%] h-[44px] rounded-[22px] border-[1px] border-[#93C4F6] shadow-[0px_3px_6px_#00000029]`}
              />
            </div>
            <div className={`${styles.searchIconContainer}`}>
              <button onClick={() => {}}>
                <MultiColorIcon icon="Audit_log" className="text-[21px]" />
              </button>
            </div>
          </div> */}
        </div>
        <div className="internal-header__center z-[5]">
          <span
            className={`${styles.headerText} text-[32px] text-ibm1 font-[500] z-[5]`}
          >
            {location.pathname.includes("/my-profile/user-details") ||
            location.pathname.includes("/my-profile/payment-methods") ||
            location.pathname.includes("/my-profile/account-limits") ||
            location.pathname.includes("/my-profile/agreements") ||
            location.pathname.includes("/my-profile/change-password") ||
            location.pathname.includes("/my-profile/twostep-authentication")
              ? "Profile"
              : location.pathname.includes("/statements")
              ? "Statement"
              : location.pathname.includes("/contact-us")
              ? "Contact Us"
              : location.pathname.includes("/exported-files")
              ? "Export Files"
              : location.pathname.includes("/get-help")
              ? "Get Help"
              : location.pathname.includes("/Home/dashboard/add-funds")
              ? "Add Tokens"
              : location.pathname.includes("/Home/dashboard/send-funds")
              ? "Send Tokens"
              : location.pathname.includes("/Home/dashboard/smart-buy")
              ? "Smart Buy"
              : location.pathname.includes("/Home/dashboard")
              ? "Account"
              : location.pathname.includes("/settings")
              ? "Settings"
              : location.pathname.includes("/merchant-activity/payout-history")
              ? "Payout History"
              : location.pathname.includes("/merchant-activity/reserve-history")
              ? "Reserve History"
              : location.pathname.includes("/application/process") ||
                location.pathname.includes("/application/banner")
              ? "Business Application"
              : "Campaigns"}
          </span>
        </div>
        {/* <div className="relative internal-header__right-container"> */}
        <div className={`relative ${styles.rightContainer}`}>
          <div className={`${styles.bgInternalHeader2Container}`}>
            <img
              src={bgInternalHeader2}
              className={`${styles.bgInternalHeader2}`}
            />
          </div>
          {/* $
          {(accountStatus == AccountStatusEnum.Canceled ||
            accountStatus == AccountStatusEnum.Declined) &&
            "pointer-events-none"} */}
          <div
            className={`py-2 rounded-full cursor-pointer internal-header__notification hover:bg-cm1`}
            onClick={(event) => {
              event.stopPropagation();
              setShowNotification(!showNotification);
            }}
          >
            <div>
              <img
                src={Bell}
                className={`${styles.bellIcon} w-[26px] h-[30px]`}
              />
            </div>
            {/* <button className="icon-notification-bold img-notifications" /> */}
            {/* {unreadNotificationsCount > 0 && (
              <div
                className={
                  unreadNotificationsCount > 0 ? `notification-count z-[8]` : ""
                }
              >
                <span className="text">
                  {unreadNotificationsCount > 0 ? unreadNotificationsCount : ""}
                </span>
              </div>
            )} */}
          </div>
          <div className="relative z-[30]" ref={DropdownRef}>
            {/* {showModal && (
              <NameModal
                setShowPayModal={setShowPayModal}
                setShowSendReceiveModal={setShowSendReceiveModal}
                show={showModal}
                onClose={() => onClose()}
                setShowModal={setShowModal}
                firstName={firstName}
                lastName={lastName}
                setShowNotification={setShowNotification}
                setActiveTab={setActiveTab}
                requests={requests}
                id={id}
                verified={
                  isProfileVerified === true &&
                  isAuthyRegistered === true &&
                  isPersonIdentified === true &&
                  isPaymentModeAdded === true
                }
                isPaymentModeAdded={isPaymentModeAdded}
              />
            )} */}
          </div>
          {/* <motion.span
            transition={{ duration: 0.5 }}
            animate={{ opacity: !isLoading ? 1 : 0 }}
            initial={{ opacity: 0 }}
            // className={`z-[5] user-initials-ring ${
            //   showModal ? 'user-initials-ring__active' : ''
            // }`}
            className={`z-[5] user-initials-ring ${
              showModal ? "user-initials-ring__active" : ""
            }`}
          >
            <div
              onClick={() => setShowModal(!showModal)}
              onClose={() => setShowModal((old) => !old)}
              className={`${
                isLoading
                  ? ""
                  : nameLength > 15
                  ? "internal-header__circle-initials-large"
                  : "internal-header__circle-initials"
              } 
              }`}
            >
              <button className={`${styles.internalHeaderCircle} px-1 h-7`}>
                <div className="flex group gap-[8px] items-center">
                  <span
                    className={`${styles.quickLinks} text-[22px] leading-[33px] font-normal cursor-pointer group-hover:underline text-ibgy1 group-hover:text-ibm1`}
                  >
                    {/* {firstName === ''
                      ? 'iBasSCustomer'
                      : resolution
                      ? `${nameToInitials(firstName)}${nameToInitials(
                          lastName
                        )}`
                      : `${titleCase(firstName) ?? ''} ${
                          titleCase(lastName) ?? ''
                        } `} 
                    Quick Links
                  </span>
                  <span className={`${styles.arrowButtonContainer}`}>
                    <img
                      src={arrowDown}
                      alt="logo"
                      className={`cursor-pointer ${
                        showModal === true ? "up-arrow" : "down-arrow"
                      }`}
                    />
                  </span>
                </div>
              </button>
            </div>
          </motion.span> */}
          {/* {showNotification && (
            <div className="flex w-full">
              <div className="absolute top-0 left-0 z-10 w-4/5 min-h-full bg-transparent"></div>
              <Notification
                userId={id}
                notifications={notifications}
                receivedNotification={receivedNotification}
                requests={requests}
                onClose={() => setShowNotification((old) => !old)}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                show={showNotification}
                getNotifications={handleGetNotification}
                loading={loading}
                timeZone={timeZone}
              />
              {/* <div className="bg-cm3">Another div</div> *
            </div>
          )} */}
        </div>
      </div>
      {/* <PayModal
        show={showPayModal}
        setShowSendReceiveModal={setShowPayModal}
        onClose={() => {
          setShowPayModal(false);
        }}
      /> */}
      {/* <RequestModal
        show={showSendReceiveModal}
        setShowSendReceiveModal={setShowSendReceiveModal}
        onClose={() => {
          setShowSendReceiveModal(false);
        }}
        showSearch={true}
      /> */}
    </div>
  );
}

const NameModal = ({
  show,
  setShowPayModal,
  setShowSendReceiveModal,
  setShowNotification,
  setActiveTab,
  requests,
  setShowModal = () => {},
  onClose = () => {},
  isPaymentModeAdded,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const userDetails = useSelector((store) => store.userDetails);
  // const accountStatus = userDetails?.data?.accountStatus;
  const request = requests.filter((z) => z.status !== "Completed");
  // const { userId } = useSelector((store) => store.userDetails.data);

  const variants = {
    modalHidden: { opacity: 0, transition: { duration: 0.2 } },
    modalVisible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    bgHidden: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    bgVisible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      show={show}
      onClose={onClose}
      onClick={onClose}
      className="user-dropdown"
      variants={variants}
    >
      <div className="dropdown-container-outer-triangle" />
      <div className="dropdown-container">
        {/* Pay */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px }`}
            onClick={() => {
              setShowModal(false);
              setShowPayModal(true);
            }}
          >
            <span
              className={`text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibm1 hover:underline cursor-pointer `}
            >
              Pay
            </span>
          </button>
        </div>
        {/* Request */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px `}
            onClick={() => {
              setShowNotification(true);
              setActiveTab("Requests");
              setShowModal(false);
              setShowSendReceiveModal(true);
            }}
          >
            <span
              className={`text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibm1 hover:underline cursor-pointer `}
            >
              Refund
            </span>
          </button>
        </div>
        {/* Gift Card */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px `}
            onClick={() => {
              setShowModal(false);
              // dispatch(showGiftCardModal());
            }}
          >
            <span
              className={`text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibm1 hover:underline cursor-pointer `}
            >
              Gift Voucher
            </span>
          </button>
        </div>
        {/* Add Tokens */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            onClick={() => {
              setShowModal(false);
              navigate({
                pathname: "/Home/dashboard/add-funds",
                // state: { userId: userId },
              });
            }}
          >
            <span
              className={`text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibm1 hover:underline cursor-pointer `}
            >
              Add Tokens
            </span>
          </button>
        </div>
        {/* Send Tokens */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            onClick={() => {
              setShowModal(false);
              navigate({
                pathname: "/Home/dashboard/send-funds",
                // state: { userId: userId },
              });
            }}
          >
            <span
              className={`text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibm1 hover:underline cursor-pointer `}
            >
              Send Tokens
            </span>
          </button>
        </div>
        {/* Utilities */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            // onClick={() => {
            //   setShowModal(false);
            //   navigate({
            //     pathname: '/Home/dashboard/smart-buy',
            //     state: { userId: userId }
            //   });
            // }}
          >
            <span
              className={`text-ibgy5 text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibgy5 cursor-default`}
            >
              Smart Buy
            </span>
          </button>
        </div>
        {/* Crypto */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            // onClick={}
          >
            <span
              className={`text-ibgy5 text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibgy5 cursor-default `}
            >
              Crypto
            </span>
          </button>
        </div>
        {/* Fixed Deposits */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            // onClick={}
          >
            <span
              className={`text-ibgy5 text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibgy5 cursor-default`}
            >
              Fixed Deposits
            </span>
          </button>
        </div>
        {/*Loans */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            // onClick={}
          >
            <span
              className={`text-ibgy5 text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibgy5 cursor-default`}
            >
              Loans
            </span>
          </button>
        </div>
        {/* Mutual Funds */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            // onClick={}
          >
            <span
              className={`text-ibgy5 text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibgy5 cursor-default`}
            >
              Mutual Funds
            </span>
          </button>
        </div>
        {/* Insurance */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            // onClick={}
          >
            <span
              className={`text-ibgy5 text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibgy5 cursor-default}`}
            >
              Insurance
            </span>
          </button>
        </div>
        {/* Smart Buy */}
        <div className="text-left">
          <button
            className={`flex flex-row gap-2 p-px`}
            // onClick={}
          >
            <span
              className={`text-ibgy5 text-[18px] leading-[36px] tracking-[0.29px] hover:text-ibgy5 cursor-default`}
            >
              Utilities
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Notification = ({
  userId,
  notifications = [],
  receivedNotification = [],
  requests = [],
  onClose = () => {},
  activeTab,
  setActiveTab,
  show,
  getNotifications = () => {},
  loading,
  timeZone,
}) => {
  const [todayNotifications, setTodayNotifications] = useState([]);
  const [yesterdayNotifications, setYesterdayNotifications] = useState([]);
  const [olderNotifications, setOlderNotifications] = useState([]);

  const [todayRequests, setTodayRequests] = useState([]);
  const [yesterdayRequests, setYesterdayRequests] = useState([]);
  const [olderRequests, setOlderRequests] = useState([]);

  const [limitType, setLimitType] = useState();
  const [minimumLimit, setMinimumLimit] = useState();
  const [transactionLimit, setTransactionLimit] = useState();
  const [cordaFeeAbsolute, setCordaFeeAbsolute] = useState();
  const [maxTransfer, setMaxTransfer] = useState();
  const [cordaFeeInPercentage, setCordaFeeInPercentage] = useState();

  // const walletInfo = useSelector((store) => store.wallets.walletInfo);
  // const cynWallet = walletInfo.find((x) => x.walletCategory === "CYN");
  // const availableBalance = cynWallet?.availabilityToUse;
  // const { timeZone } = useSelector((store) => store.userPreferences);

  // const userDetails = useSelector((store) => store.userDetails);
  // const accountType = userDetails?.data?.accountType;

  // const dispatch = useDispatch();

  //To sort notification Date amd time Wise
  function compare(a, b) {
    if (
      a.createdAt > b.createdAt ||
      a.requestedDate > b.requestedDate ||
      a.createdAt > b.requestedDate ||
      a.requestedDate > b.createdAt
    ) {
      return -1;
    }
    if (
      a.createdAt < b.createdAt ||
      a.requestedDate < b.requestedDate ||
      a.createdAt < b.requestedDate ||
      a.requestedDate < b.createdAt
    ) {
      return +1;
    }
    if (
      a.createdAt === b.createdAt ||
      a.requestedDate === b.requestedDate ||
      a.createdAt === b.requestedDate ||
      a.requestedDate === b.createdAt
    ) {
      return 0;
    }
  }

  // fetch the limits and fees
  useEffect(() => {
    const txnData = {
      transactionType: 12,
      transactionSubType: 8,
    };

    // if (accountType == AccountTypeEnum.Personal) {
    //   //get transaction limit
    //   getTransactionLimit(1, txnData)
    //     .then((res) => {
    //       const { data } = res.data;
    //       const { limitType, transactionLimit, minimumLimit } = data;
    //       setLimitType(limitType);
    //       setMinimumLimit(+minimumLimit);
    //       setTransactionLimit(transactionLimit);
    //     })
    //     .catch((err) => {
    //       const error = err?.response?.data?.error;
    //       const message =
    //         error?.errorDescription || "Unable to get transaction limits";
    //       toast.error(message);
    //     });
    // }

    const cordaFeeData = {
      tokens: 0,
      txnSubType: 8,
      txnType: 12,
    };
    // if (accountType == AccountTypeEnum.Personal) {
    //   // get processing fee
    //   getCordaFee(cordaFeeData)
    //     .then((res) => {
    //       const { data } = res.data;
    //       const { feeInAmount, feeInPercentage } = data;
    //       setCordaFeeAbsolute(feeInAmount);
    //       setCordaFeeInPercentage(feeInPercentage);

    //       // prettier-ignore
    //       let maxLimit = (
    //       (availableBalance * (1 - feeInPercentage / 100)) -
    //       feeInAmount
    //     ).toFixed(2);
    //       setMaxTransfer(maxLimit);
    //     })
    //     .catch((err) => {
    //       const error = err?.response?.data?.error;
    //       const message =
    //         error?.errorDescription || "Unable to calculate processing fee.";
    //       toast.error(message);
    //     });
    // }
  }, []);

  let currentDate = Moment()
    .utc()
    .utcOffset(getUserTimeZoneOffset(timeZone))
    .utc()
    .format("MM/DD/YYYY hh:mm:ss");

  useEffect(() => {
    let copyNotifications = _.cloneDeep(notifications);
    let copyReceivedNotifications = _.cloneDeep(receivedNotification);
    let copyRequest = _.cloneDeep(requests);

    let tempTodayNotifications = [];
    let tempYesterdayNotifications = [];
    let tempOlderNotifications = [];

    let tempTodayRequests = [];
    let tempYesterdayRequests = [];
    let tempOlderRequests = [];

    copyNotifications.forEach((x) => {
      var date = userDateTime(timeZone, x.createdAt);
      date = date.replace("-", "");
      x.createdAt = date;
    });

    copyReceivedNotifications.forEach((x) => {
      var date = userDateTime(timeZone, x.requestedDate);
      date = date.replace("-", "");
      x.requestedDate = date;
    });

    copyRequest.forEach((x) => {
      var date = userDateTime(timeZone, x.requestedDate);
      date = date.replace("-", "");
      x.requestedDate = date;
    });

    copyNotifications.forEach((x) => {
      if (x.createdAt.includes("Today")) {
        tempTodayNotifications.push(x);
      } else if (Moment(currentDate).diff(Moment(x.createdAt), "days") >= 2) {
        tempOlderNotifications.push(x);
      } else {
        tempYesterdayNotifications.push(x);
      }
    });

    copyReceivedNotifications.forEach((x) => {
      if (x.status === "Requested" || x.status === "Remind") {
        if (x.requestedDate.includes("Today")) {
          tempTodayNotifications.push(x);
          tempTodayRequests.push(x);
        } else if (
          Moment(currentDate).diff(Moment(x.requestedDate), "days") >= 2
        ) {
          tempOlderNotifications.push(x);
          tempOlderRequests.push(x);
        } else {
          tempYesterdayNotifications.push(x);
          tempYesterdayRequests.push(x);
        }
      }
    });

    copyRequest.forEach((x) => {
      if (x.status === "Requested" || x.status === "Remind") {
        if (x.requestedDate.includes("Today")) {
          tempTodayRequests.push(x);
        } else if (
          Moment(currentDate).diff(Moment(x.requestedDate), "days") >= 2
        ) {
          tempOlderRequests.push(x);
        } else {
          tempYesterdayRequests.push(x);
        }
      }
    });

    // sorting group of notifications
    tempOlderNotifications.sort(compare);
    tempYesterdayNotifications.sort(compare);
    tempTodayNotifications.sort(compare);

    //sorting group of requests
    tempOlderRequests.sort(compare);
    tempYesterdayRequests.sort(compare);
    tempTodayRequests.sort(compare);

    setTodayNotifications([...tempTodayNotifications]);
    setYesterdayNotifications([...tempYesterdayNotifications]);
    setOlderNotifications([...tempOlderNotifications]);

    setTodayRequests([...tempTodayRequests]);
    setYesterdayRequests([...tempYesterdayRequests]);
    setOlderRequests([...tempOlderRequests]);
  }, [
    notifications,
    receivedNotification,
    requests,
    show,
    currentDate,
    timeZone,
  ]);

  // For Delete notification
  const handleClear = (id) => {
    // notificationsMarkClear([id])
    //   .then((res) => {
    //     dispatch(markNotificationDeleteAction({ id: id }));
    //   })
    //   .catch((err) => {
    //     const message = "Unable to clear notification.";
    //     toast.error(message);
    //     onClose();
    //   });
    id.preventDefault();
  };

  // Pay From Notifications
  const handlePay = (id) => {
    // dispatch(markRequestReceivedComplete({ id: id }));
    id.preventDefault();
  };

  //Deny Request from Notification
  const handleDeny = (id) => {
    // dispatch(markRequestReceivedDeclined({ id: id }));
    id.preventDefault();
  };

  //Mark read the notifications by id
  const handleMarkRead = (id) => {
    // notificationsMarkRead(id)
    //   .then((res) => {
    //     dispatch(markNotificationReadUnreadAction({ id: id }));
    //   })
    //   .catch((err) => {
    //     const message = "Unable to mark notification as read";
    //     toast.error(message);
    //     onClose();
    //   });
    id.preventDefault();
  };

  // Delete group of notifications
  const handleClearNotificationGroup = (index) => {
    if (index == 0) {
      const todayIds = todayNotifications.map((x) => x.id);
      // notificationsMarkClear(todayIds)
      //   .then((res) => {
      //     setTodayNotifications([]);
      //     dispatch(deleteGroupOfNotificationsActions({ ids: todayIds }));
      //   })
      //   .catch((err) => {
      //     const message = "Unable to clear notifications.";
      //     toast.error(message);
      //     onClose();
      //   });
    } else if (index == 1) {
      const yesterdayIds = yesterdayNotifications.map((x) => x.id);
      // notificationsMarkClear(yesterdayIds)
      //   .then((res) => {
      //     setYesterdayNotifications([]);
      //     dispatch(deleteGroupOfNotificationsActions({ ids: yesterdayIds }));
      //   })
      //   .catch((err) => {
      //     const message = "Unable to clear notification.";
      //     toast.error(message);
      //     onClose();
      //   });
    } else if (index == 2) {
      const olderIds = olderNotifications.map((x) => x.id);
      // notificationsMarkClear(olderIds)
      //   .then((res) => {
      //     setOlderNotifications([]);
      //     dispatch(deleteGroupOfNotificationsActions({ ids: olderIds }));
      //   })
      //   .catch((err) => {
      //     const message = "Unable to clear notification.";
      //     toast.error(message);
      //     onClose();
      //   });
    } else {
      return;
    }
  };

  //Mark  Unread the notification
  const handleMarkUnread = (id) => {
    // notificationsMarkUnread(id)
    //   .then((res) => {
    //     dispatch(markNotificationReadUnreadAction({ id: id }));
    //   })
    //   .catch((err) => {
    //     const message = "Unable to mark notification as Unread";
    //     toast.error(message);
    //     onClose();
    //   });
    id.preventDefault();
  };

  // Cancel sent request
  const handleCancel = (id) => {
    // dispatch(markRequestSentCancelled({ id: id }));
    id.preventDefault();
  };

  // To sent reminder
  const handleReminder = (id) => {
    // receivedNotificationUpdate(id, "Test remarks", "Remind")
    //   .then((res) => {
    //     dispatch(markRequestSentReminder({ id: id }));
    //   })
    //   .catch((err) => {
    //     const message = "Unable to send reminder .";
    //     toast.error(message);
    //     onClose();
    //   });
    id.preventDefault();
  };

  const notificationRef = useRef(null);
  useOutsideClick(notificationRef, () => {
    onClose();
  });

  const handleHideNotification = () => {
    onClose();
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.clientHeight + Math.ceil(e.target.scrollTop) >=
      e.target.scrollHeight;

    if (bottom) {
      getNotifications();
    }
    return;
  };

  return (
    <div className="main-div">
      <div className="notification-container" ref={notificationRef}>
        <div>
          <button
            className="float-right mt-6 mr-8 cursor-pointer text-cgy4"
            onClick={onClose}
          >
            <span className="icon-clear" />
          </button>
          <div className="mx-10 mt-16 mb-10">
            <ToggleButton
              labelOne={"Notifications"}
              labelTwo={"Requests"}
              transition={true}
              selected={activeTab}
              onChange={(selected) => setActiveTab(selected)}
            />
          </div>
        </div>
        <div className="scrollDiv" onScroll={handleScroll}>
          {activeTab == "Notifications" ? (
            <div>
              {todayNotifications.length === 0 &&
              yesterdayNotifications.length === 0 &&
              olderNotifications.length === 0 ? (
                <NoNotification text={activeTab} />
              ) : (
                <div>
                  {todayNotifications.length > 0 && (
                    <div className="notifications-wrap">
                      <div className="notification-group">
                        <span>Today</span>
                        <span
                          className="notification-group-close"
                          onClick={() => handleClearNotificationGroup(0)}
                        >
                          Clear All
                        </span>
                      </div>
                      {todayNotifications.map(function (item, i) {
                        return item.createdAt ? (
                          <SingleNotificationCard
                            key={i}
                            item={item}
                            onClear={handleClear}
                            onRead={handleMarkRead}
                            onUnread={handleMarkUnread}
                          />
                        ) : (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onDeny={handleDeny}
                            onPay={handlePay}
                            limitType={limitType}
                            minimumLimit={minimumLimit}
                            cordaFeeAbsolute={cordaFeeAbsolute}
                            cordaFeeInPercentage={cordaFeeInPercentage}
                            transactionLimit={transactionLimit}
                            maxTransfer={maxTransfer}
                            hideNotification={handleHideNotification}
                          />
                        );
                      })}
                    </div>
                  )}
                  {yesterdayNotifications.length > 0 && (
                    <div className="notifications-wrap">
                      <div className="notification-group">
                        <span>Yesterday</span>
                        <span
                          className=" notification-group-close"
                          onClick={() => handleClearNotificationGroup(1)}
                        >
                          Clear All
                        </span>
                      </div>
                      {yesterdayNotifications.map(function (item, i) {
                        return item.createdAt ? (
                          <SingleNotificationCard
                            key={i}
                            item={item}
                            onClear={handleClear}
                            onRead={handleMarkRead}
                            onUnread={handleMarkUnread}
                          />
                        ) : (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onDeny={handleDeny}
                            onPay={handlePay}
                            limitType={limitType}
                            minimumLimit={minimumLimit}
                            cordaFeeAbsolute={cordaFeeAbsolute}
                            cordaFeeInPercentage={cordaFeeInPercentage}
                            transactionLimit={transactionLimit}
                            maxTransfer={maxTransfer}
                            hideNotification={handleHideNotification}
                          />
                        );
                      })}
                    </div>
                  )}
                  {olderNotifications.length > 0 && (
                    <div className="notifications-wrap">
                      <div className="notification-group">
                        <span>Older</span>

                        <span
                          className="notification-group-close"
                          onClick={() => handleClearNotificationGroup(2)}
                        >
                          Clear All
                        </span>
                      </div>
                      {olderNotifications.map(function (item, i) {
                        return item.createdAt ? (
                          <SingleNotificationCard
                            key={i}
                            item={item}
                            onClear={handleClear}
                            onRead={handleMarkRead}
                            onUnread={handleMarkUnread}
                          />
                        ) : item.requestedDate ? (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onDeny={handleDeny}
                            onPay={handlePay}
                            limitType={limitType}
                            minimumLimit={minimumLimit}
                            cordaFeeAbsolute={cordaFeeAbsolute}
                            cordaFeeInPercentage={cordaFeeInPercentage}
                            transactionLimit={transactionLimit}
                            maxTransfer={maxTransfer}
                            hideNotification={handleHideNotification}
                          />
                        ) : (
                          ""
                        );
                      })}
                    </div>
                  )}
                  {loading && (
                    <div className="text-center ">
                      <Spinner size={50} />
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div>
              {todayRequests.length === 0 &&
              yesterdayRequests.length === 0 &&
              olderRequests.length === 0 ? (
                <NoNotification text={activeTab} />
              ) : (
                <div>
                  {todayRequests.length > 0 && (
                    <div className="notifications-wrap">
                      <div className="notification-group">
                        <span>Today</span>
                      </div>
                      {todayRequests.map(function (item, i) {
                        return item.toUserId === userId ? (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onDeny={handleDeny}
                            onPay={handlePay}
                            limitType={limitType}
                            minimumLimit={minimumLimit}
                            cordaFeeAbsolute={cordaFeeAbsolute}
                            cordaFeeInPercentage={cordaFeeInPercentage}
                            transactionLimit={transactionLimit}
                            maxTransfer={maxTransfer}
                            hideNotification={handleHideNotification}
                          />
                        ) : (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onCancel={handleCancel}
                            onReminder={handleReminder}
                          />
                        );
                      })}
                    </div>
                  )}
                  {yesterdayRequests.length > 0 && (
                    <div className="notifications-wrap">
                      <div className="notification-group">
                        <span>Yesterday</span>
                      </div>
                      {yesterdayRequests.map(function (item, i) {
                        return item.toUserId === userId ? (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onDeny={handleDeny}
                            onPay={handlePay}
                            limitType={limitType}
                            minimumLimit={minimumLimit}
                            cordaFeeAbsolute={cordaFeeAbsolute}
                            cordaFeeInPercentage={cordaFeeInPercentage}
                            transactionLimit={transactionLimit}
                            maxTransfer={maxTransfer}
                            hideNotification={handleHideNotification}
                          />
                        ) : (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onClear={handleCancel}
                            onReminder={handleReminder}
                          />
                        );
                      })}
                    </div>
                  )}
                  {olderRequests.length > 0 && (
                    <div className="notifications-wrap">
                      <div className="notification-group">
                        <span>Older</span>
                      </div>
                      {olderRequests.map(function (item, i) {
                        return item.toUserId === userId ? (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onDeny={handleDeny}
                            onPay={handlePay}
                            limitType={limitType}
                            minimumLimit={minimumLimit}
                            cordaFeeAbsolute={cordaFeeAbsolute}
                            cordaFeeInPercentage={cordaFeeInPercentage}
                            transactionLimit={transactionLimit}
                            maxTransfer={maxTransfer}
                            hideNotification={handleHideNotification}
                          />
                        ) : (
                          <ReceivedNotificationCard
                            key={i}
                            item={item}
                            onCancel={handleCancel}
                            onReminder={handleReminder}
                          />
                        );
                      })}
                    </div>
                  )}
                  {loading && (
                    <div className="text-center">
                      <Spinner size={50} />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
Notification.propTypes = {
  userId: propTypes.number,
  notifications: propTypes.array,
  receivedNotification: propTypes.array,
  requests: propTypes.array,
  onClose: propTypes.func,
};
