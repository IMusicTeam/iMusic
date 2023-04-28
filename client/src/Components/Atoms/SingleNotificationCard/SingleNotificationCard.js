import radio from 'Assets/Images/radio-icon.svg';
import DateTimeConverter from 'Helpers/DateTimeConverterNotification';
import toCurrencyAmount from 'Helpers/toCurrencyAmount';
import userDateTime from 'Helpers/userDateTime';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import styles from './SingleNotificationCard.module.scss';

const SingleNotificationCard = ({
  item = {},
  onClear = () => {},
  onRead = () => {},
  onUnread = () => {}
}) => {
  const [deleteId, setDeleteId] = useState('');
  const createMarkup = (html) => {
    return { __html: html };
  };
  const handleRead = (e) => {
    if (item.read == false) {
      onRead(item.id);
    } else {
      onUnread(item.id);
    }
  };
  const handleDelete = (e) => {
    setDeleteId(item.id);
    onClear(item.id);
    e.stopPropagation();
  };

  return (
    <div className={styles.overFlow}>
      <div
        className={`${styles.mainDiv} ${
          deleteId == item.id ? styles.ForSlide : ''
        } flex  mx-4  rounded-lg  cursor-pointer  ${
          item.read ? '' : 'hover:bg-ibor1'
        }`}
        onClick={handleRead}
      >
        <div className={`${styles.firstDiv} w-16`}>
          {item.read == false && (
            <img className={`${styles.dotIcon}`} src={radio} />
          )}
        </div>
        <div className={`${styles.secondDiv} ${item.read && 'opacity-40'}`}>
          <div className={` flex flex-wrap ${styles.firstRow}`}>
            <span className={`text-base font-[500] text-ibgy1 mr-2`}>
              {item.msgSubject}
            </span>
            <span className={`font-[400] text-xs text-cgy2 pt-1`}>
              {DateTimeConverter(item.createdAt)}
            </span>
          </div>
          <div className={`${styles.secondRow}`}>
            <div
              className={`text-xs font-[400] text-ibgy8 break-words`}
              dangerouslySetInnerHTML={createMarkup(item.msgContent)}
            ></div>
          </div>
        </div>
        <div className={`${styles.thirdDiv} w-32 `}>
          {item.amount && (
            <div className={`${styles.amount} `}>
              <span className={`font-[500] text-base text-ibgy1`}>
                ${toCurrencyAmount(item.amount)}
              </span>
            </div>
          )}
          <button
            className={`${
              item.read === false ? styles.deleteIcon : styles.deleteIconForRead
            }`}
            data-tip="Delete"
            onClick={handleDelete}
            onMouseEnter={() => ReactTooltip.rebuild()}
          >
            {/* <img src={deleteIcon} width="16" /> */}
            <div className={`${styles.trash} text-base  icon-Delete  `} />
          </button>

          <ReactTooltip
            place="top"
            type="dark"
            effect="solid"
            isCapture={true}
          />
        </div>
      </div>
    </div>
  );
};
export default SingleNotificationCard;

SingleNotificationCard.propTypes = {
  item: propTypes.object,
  onUnread: propTypes.func,
  onClear: propTypes.func,
  onRead: propTypes.func
};
