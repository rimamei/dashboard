/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

interface TextfieldProps {
  label?: string;
  icon?: JSX.Element;
  placeholder?: string;
  type?: string;
}

const Textfield = ({
  label,
  icon,
  placeholder,
  type = 'text',
}: TextfieldProps) => {
  return (
    <div className="w-full">
      {label ? <label className="text-base">{label}</label> : null}
      <div className="pl-2 pr-4 py-2 bg-gray-100 rounded-md flex items-center">
        {icon ? <div className="mr-2">{icon}</div> : null}
        <input
          className="outline-none bg-gray-100 text-base w-full"
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

export default Textfield;
