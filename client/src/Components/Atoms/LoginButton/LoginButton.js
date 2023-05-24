import React from "react";

const LoginButton = ({
  id = "",
  label = "",
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
      className={` ${
        disable
          ? "bg-iLightBlue1 text-iWhite"
          : "bg-iBlue text-iWhite hover:bg-iOrange hover:transition-all hover:ease-in hover:duration-300"
      } ${className}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default LoginButton;
