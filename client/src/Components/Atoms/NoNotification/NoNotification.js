import SucessIcon from 'Assets/Animations/success_animation.gif';
import propTypes from 'prop-types';
import React from 'react';
import styles from './NoNotification.module.scss';
const NoNotification = ({ text = '' }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`${styles.sucess} `}>
        <img src={SucessIcon} />
      </div>
      <div className={`font-[400] text-ibgy1 mt-[30px] text-sm`}>
        Good job! You are up to date on {text}.
      </div>
    </div>
  );
};
export default NoNotification;
NoNotification.propTypes = {
  text: propTypes.string
};
