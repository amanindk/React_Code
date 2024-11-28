import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block ml-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`px-3 py-2 bg-white text-black rounded-lg outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
});

export default Input;
