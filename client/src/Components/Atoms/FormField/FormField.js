import React, { useState } from "react";
import { Input } from "../Input/Input";

const FormField = ({
  label,
  disabled = false,
  id,
  error,
  dateField = false,
  maxLength,
  className,
  success,
  type,
  ...props
}) => {
  const [labelTop, setLabelTop] = useState(false);

  const handleBlur = (e) => {
    setLabelTop(!!e.target.value);
    const { onBlur } = props;
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  const handleFocus = (e) => {
    setLabelTop(true);
  };

  return (
    <div
      className={`relative h-14 px-3.5 border border-solid border-iGray4 rounded-[10px] ${
        error && "border-ird1"
      } ${success && "border-igr1"} ${
        disabled && "!border-igy1 cursor-none bg-igy4"
      } ${className}`}
    >
      {label && (
        <label
          className={`px-1.5  absolute left-3 transform transition-all  duration-100 ease-in
       ${
         labelTop || dateField
           ? `-top-2 text-sm pb-0.5 leading-[17px] ${
               disabled ? "bg-igy4 rounded-t-[10px]" : "bg-iwhite"
             }`
           : `top-1/4 text-lg`
       }
       ${
         disabled
           ? "text-igy1 pointer-events-none"
           : labelTop && !error && !success
           ? "text-igy5"
           : error && labelTop
           ? "text-ird1"
           : success && labelTop
           ? "text-igr1"
           : "text-igy5"
       }`}
          htmlFor={id}
        >
        {label}
        </label>
      )}
      <div className="">
        <div className="flex items-center gap-1 h-14">
          <Input
            {...props}
            type={type}
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            id={id}
          />
        </div>
        <span
          className={`text-[15px] pb-0.5 leading-[14px] -bottom-[27px] absolute left-3 truncate font-normal 
        ${error && "text-ibrd1"}`}
        >
          {error}
        </span>
      </div>
    </div>
  );
};

export default FormField;
