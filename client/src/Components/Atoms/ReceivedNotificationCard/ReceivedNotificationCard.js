import radio from "Assets/Images/radio-icon.svg";
// import { TransactionLimitEnum } from "Enums/TransactionLimitEnum";
import DateTimeConverter from "Helpers/DateTimeConverterNotification";
// import toast from "Helpers/toast";
import toCurrencyAmount from "Helpers/toCurrencyAmount";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { receivedNotificationUpdate } from "Services/API/Notifications/Notifications";
// import { showBuyTokenModal } from "Store/ducks/buyTokenModal";
// import { getDefaultTransactionsAction } from "Store/ducks/transactionData";
// import { showVerificationInputModalAction } from "Store/ducks/verificationInputModal";
// import { CancelButton, ReminderButton } from "../Buttons/Buttons";
import styles from "./ReceivedNotificationCard.module.scss";
import { PrimaryButtonSmall } from "../Buttons/Buttons";

const ReceivedNotificationCard = ({
  // id = '',
  item = {},
  limitType,
  minimumLimit,
  cordaFeeAbsolute,
  cordaFeeInPercentage,
  transactionLimit,
  onDeny = () => {},
  onReminder = () => {},
  onCancel = () => {},
  onPay = () => {},
  hideNotification = () => {},
}) => {
  const { timeZone } = useSelector((store) => store.userPreferences);
  const [isPayConfirm, setIsPayConfirm] = useState(false);
  const [message, setMessage] = useState();
  const walletInfo = useSelector((store) => store.wallets.walletInfo);
  const { id } = useSelector((store) => store?.userDetails?.data);
  const cynWallet = walletInfo.find((x) => x.walletCategory === "CYN");
  const { sentSuccess, payRequestId } = useSelector(
    (store) => store.verificationInputModal
  );
  const dispatch = useDispatch();
  const [showDenyMsg, setShowDenyMsg] = useState(false);
  const [showPaidMsg, setShowPaidMsg] = useState(false);
  const [showCancelMsg, setShowCancelMsg] = useState(false);
  const [activeLink, setActiveLink] = useState(false);

  useEffect(() => {
    if (!sentSuccess) {
      return;
    }
    if (payRequestId !== item.id) {
      return;
    }
    handlePaySuccess(payRequestId);
  }, [sentSuccess]);

  const handleDeny = (e) => {
    e.stopPropagation();
    // receivedNotificationUpdate(item.id, 'Test remarks', 'Declined')
    //   .then((res) => {
    //     setShowDenyMsg(true);
    //     setTimeout(() => {
    //       onDeny(item.id);
    //       setShowDenyMsg(false);
    //     }, 2 * 1000);
    //   })
    //   .catch((err) => {
    //     const message = 'Unable to deny request.';
    //     toast.error(message);
    //   });
  };

  const handlePaySuccess = (id) => {
    // receivedNotificationUpdate(id, "Test remarks", "Completed")
    //   .then((res) => {
    //     setShowPaidMsg(true);
    //     setTimeout(() => {
    //       onPay(item.id);
    //       setShowPaidMsg(false);
    //       setIsPayConfirm(false);
    //     }, 2 * 1000);
    //     dispatch(getDefaultTransactionsAction({}));
    //   })
    //   .catch((err) => {
    //     const message = "Unable to update pay request.";
    //     toast.error(message);
    //   });
  };

  const handlePay = () => {
    const processingFee =
      (Number(item.amount) / 100) * Number(cordaFeeInPercentage) +
      Number(cordaFeeAbsolute);

    const maxTransfer = Number(transactionLimit) - processingFee;
    const lessThanLimit =
      +maxTransfer > +transactionLimit
        ? +transactionLimit + 0.000001
        : +maxTransfer + 0.00001;

    // ${limitType === TransactionLimitEnum.DAILY ? "Daily" : "Weekly"}
    const lessThanLimitMessage =
      +maxTransfer > +transactionLimit
        ? `You are above your 
      1000 
      limit of ${toCurrencyAmount(transactionLimit)} CYN`
        : `The maximum transaction amount is ${toCurrencyAmount(maxTransfer)}.`;

    if (item.amount > cynWallet?.availabilityToUse && isPayConfirm === false) {
      setMessage("Insufficient funds in your Token Account.");
      setActiveLink(true);
    } else if (
      item.amount < minimumLimit - 0.000001 &&
      isPayConfirm === false
    ) {
      setMessage(
        `The minimum transaction amount is ${toCurrencyAmount(
          minimumLimit
        )} CYN`
      );
    } else if (item.amount > lessThanLimit && isPayConfirm === false) {
      setMessage(lessThanLimitMessage);
    } else if (isPayConfirm === true) {
      hideNotification();
      // dispatch(
      //   showVerificationInputModalAction({
      //     showBackArrow: true,
      //     walletId: item.requesterWalletId,
      //     amount: item.amount,
      //     payRequestId: item.id,
      //   })
      // );
    } else {
      setIsPayConfirm(true);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    // receivedNotificationUpdate(item.id, "Test remarks", "Cancelled").then(
    //   (res) => {
    //     setShowCancelMsg(true);
    //     setTimeout(() => {
    //       onCancel(item.id);
    //       setShowCancelMsg(false);
    //     }, 2 * 1000);
    //   }
    // );
  };

  const handleReminder = (e) => {
    onReminder(item.id);
    e.stopPropagation();
  };

  const handleBuyTokensAction = () => {
    hideNotification();
    // setTimeout(() => {
    //   dispatch(showBuyTokenModal());
    // }, 200);
  };

  return (
    <div
      className={`flex  mx-4  rounded-lg hover:bg-ibor1 cursor-pointer ${styles.mainDiv}`}
    >
      <div className={`${styles.firstDiv} w-16 `}>
        <img className={`${styles.dotIcon}`} src={radio} />
      </div>
      {item.toUserId == id ? (
        <div className={`${styles.secondDiv} w-96 `}>
          <div className={`flex flex-wrap  ${styles.firstRow}`}>
            <span className={`text-base font-[500] text-ibgy1 mr-1`}>
              {item.fromUser} requests
            </span>

            <div className="flex align-middle ">
              <span
                className={`mr-2 text-base font-[500] text-ibgy1  ${styles.amountHover}`}
              >
                ${toCurrencyAmount(item.amount)}
              </span>

              <span className={`font-[400] text-xs text-cgy2 pt-[5px] `}>
                {" "}
                {DateTimeConverter(item.requestedDate)}
              </span>
            </div>
          </div>
          <div className={`${styles.secondRow}`}>
            {!showDenyMsg && !showPaidMsg && !message && !isPayConfirm && (
              <div className={`text-xs font-[400] text-ibgy8`}>
                {item.content}
              </div>
            )}
            {isPayConfirm && !showPaidMsg && (
              <span className={`text-xs font-[400] text-cm3`}>
                Pay {item.fromUser} ${toCurrencyAmount(item.amount)} from your
                Account?
              </span>
            )}
            {message !== "" && (
              <div className={`flex`}>
                <span className={`text-xs font-[400] text-crd5`}>
                  {message}{" "}
                </span>

                {activeLink && (
                  <button
                    className={`ml-1 text-xs font-[500] text-cm3`}
                    onClick={handleBuyTokensAction}
                  >
                    Add Funds
                  </button>
                )}
              </div>
            )}
            {showDenyMsg && (
              <span className={`text-xs text-cm3 font-[400]`}>
                You denied this request.
              </span>
            )}
            {showPaidMsg && payRequestId === item.id && (
              <span className={`text-xs text-cm3 font-[400]`}>
                You paid {item.fromUser} ${toCurrencyAmount(item.amount)}.
              </span>
            )}
          </div>
          {!showDenyMsg && !showPaidMsg && (
            <div className={`${styles.thirdRow} space-x-3.5`}>
              {/* <CancelButton label={"Deny"} onClick={handleDeny} />
              <ReminderButton label={"Pay"} onClick={handlePay} /> */}
              <PrimaryButtonSmall label={"Deny"} onClick={handleDeny} />
              <PrimaryButtonSmall label={"Pay"} onClick={handlePay} />
            </div>
          )}
        </div>
      ) : (
        <div className={`${styles.secondDiv} w-96 `}>
          <div className={` flex flex-wrap ${styles.firstRow}`}>
            <span className={`text-base font-[500] text-ibgy1 mr-2`}>
              Request to {item.toUser}
            </span>

            <span className={`font-[400] text-xs text-cgy2 pt-[6px]`}>
              {DateTimeConverter(item.requestedDate)}
            </span>
            {/* </div> */}
          </div>
          <div className={`${styles.secondRow}`}>
            {item.status === "Requested" && (
              <div className={`text-xs font-[400] text-ibgy8`}>
                {item.content}
              </div>
            )}
            {showCancelMsg && (
              <span className={`text-xs font-[400] text-cm3`}>
                You canceled this request.
              </span>
            )}
            {item.status === "Remind" && showCancelMsg == false && (
              <div className={`text-xs font-[400] text-cm3`}>
                You sent a reminder to {item.toUser}.
              </div>
            )}
          </div>
          {showCancelMsg ? (
            ""
          ) : (
            <div className={`${styles.thirdRow} space-x-3.5`}>
              {/* <CancelButton label={"Cancel"} onClick={handleCancel} /> */}
              <PrimaryButtonSmall label={"Cancel"} onClick={handleCancel} />

              {item.status === "Requested" && (
                // <ReminderButton label={"Reminder"} onClick={handleReminder} />
                <PrimaryButtonSmall label={"Cancel"} onClick={handleCancel} />
              )}
            </div>
          )}
        </div>
      )}

      <div className={`${styles.thirdDiv} w-32 `}>
        <div className={`${styles.amount} ml-1`}>
          <span className={`font-[500] text-base text-ibgy1 `}>
            ${toCurrencyAmount(item.amount)}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ReceivedNotificationCard;

ReceivedNotificationCard.propTypes = {
  id: propTypes.string,
  item: propTypes.object,
  onDeny: propTypes.func,
  onPay: propTypes.func,
  onReminder: propTypes.func,
  hideNotification: propTypes.func,
  onCancel: propTypes.func,
  limitType: propTypes.string,
  minimumLimit: propTypes.number,
  cordaFeeAbsolute: propTypes.number,
  cordaFeeInPercentage: propTypes.number,
  transactionLimit: propTypes.string,
};
