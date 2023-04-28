import PropTypes from "prop-types";
import React from "react";
import MultiColorIcon from "../MultiColorIcon/MultiColorIcon";
import styles from "./Buttons.module.scss";

export const CustomButton = ({
  id = "",
  className,
  children,
  variation = "primary",
  color,
  icon,
  disable,
  isSelected = false,
  small = false,
  onClick,
  onBlur,
  ...props
}) => {
  return (
    <button
      className={` text-sm
      ${styles.btn} ${styles.btn__custom_button}  ${
        small ? `${styles.btn__icon__small}` : ""
      } ${isSelected ? `${styles.Active}` : ""} ${className}`}
      onClick={onClick}
      disabled={disable}
      onBlur={onBlur}
      id={id}
      {...props}
    >
      {icon != null ? (
        <MultiColorIcon
          icon={icon}
          className={`btn__custom_button__icon relative right-2`}
        />
      ) : null}
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  variation: PropTypes.oneOf(["primary", "secondary"]),
  color: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  className: PropTypes.string,
  isSelected: PropTypes.bool,
  id: PropTypes.string,
};

export const PrimaryButton = ({
  id = "",
  label = "",
  children,
  className = "",
  disable = false,
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      id={id}
      disabled={disable}
      data-testid={id}
      className={`w-60 h-9 rounded-full font-[400] text-center transition-all ease ${
        !disable
          ? "bg-ibm1 hover:bg-cor3 text-cwhite"
          : "bg-ibl1 text-ibgy5 pointer-events-none"
      } ${className}`}
      onClick={onClick}
      type={type}
    >
      {children || label}
    </button>
  );
};

PrimaryButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disable: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
};

export const PrimaryButtonSmall = ({
  id = "",
  children,
  className,
  label = "",
  disable = false,
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      id={id}
      data-testid={id}
      type={type}
      className={`w-44 h-9 rounded-[50px] font-normal text-center transition-all ease 
      ${
        !disable
          ? "hover:bg-ibm2 bg-ibm1 text-cwhite"
          : "bg-cwhitesmoke text-ibgy5 pointer-events-none"
      } ${className}`}
      onClick={onClick}
    >
      {children || label}
    </button>
  );
};

PrimaryButtonSmall.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disable: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.any,
};

export const PrimaryButtonVerySmall = ({
  id = "",
  children,
  className,
  label = "",
  disable = false,
  type = "button",
  onClick = () => {},
}) => {
  return (
    <button
      id={id}
      data-testid={id}
      type={type}
      className={`w-[104px] h-[27px] rounded-[50px] font-normal text-center transition-all ease 
      ${
        !disable
          ? "hover:bg-ibm2 bg-ibm1 text-cwhite"
          : "bg-cwhitesmoke text-ibgy5 pointer-events-none"
      } ${className}`}
      onClick={onClick}
    >
      {children || label}
    </button>
  );
};

PrimaryButtonVerySmall.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  disable: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.any,
};

//FlexyButton - For iBaaS
export const FlexyButton = ({ onClick, className, label, labelStyle }) => {
  return (
    <button
      type="button"
      className={`${
        className ? className : " w-[50px] h-[25px] rounded-[14px] p-[5px]"
      } bg-ibm1 text-ibwhite hover:bg-ibm2 flex justify-center items-center text-center cursor-pointer`}
      onClick={onClick}
    >
      <span className={labelStyle ? labelStyle : ""}>
        {label ? label : " "}
      </span>
    </button>
  );
};

FlexyButton.propTypes = {
  className: PropTypes.any,
  label: PropTypes.any,
  labelStyle: PropTypes.any,
  onClick: PropTypes.any,
};
