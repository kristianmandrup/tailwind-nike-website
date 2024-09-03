import React from "react";

export const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}: any) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-4 text-lg leading-none  border rounded-full px-7 font-montserrat ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${borderColor ? borderColor : "none"} ${
        textColor ? textColor : "text-white"
      } ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="button" className="w-5 h-5 ml-2 rounded-full" />
      )}
    </button>
  );
};
