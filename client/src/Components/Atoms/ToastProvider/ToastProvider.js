import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './ToastProvider.style.scss';
import error from 'Assets/Images/account-status-close.svg';
import success from 'Assets/Images/account-status-check.svg';

export const CustomBody = (props) => (
  <div
    className={`container ${props.error ? 'error' : ''} ${
      props.className ? props.className : ''
    }`}
  >
    <img
      src={props.error ? error : success}
      style={{
        width: '65.97px',
        height: '65.97px'
      }}
    />
    <div className="message-container">
      <p className="title">
        {props.error
          ? 'Error!'
          : props.title === undefined
          ? 'Success!'
          : `${props.title}`}
      </p>
      <p className="message">{props.message}</p>
    </div>
  </div>
);

export default function ToastProvider({ id = 'main', autoClose = 2000 }) {
  return (
    <ToastContainer
      autoClose={autoClose}
      hideProgressBar
      closeOnClick={true}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      transition={Slide}
      toastClassName="custom-toast__toast"
      className="custom-toast__container"
      containerId={id}
      position="top-right"
      enableMultiContainer={true}
    />
  );
}
