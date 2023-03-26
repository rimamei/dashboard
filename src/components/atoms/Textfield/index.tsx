/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

interface TextfieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  icon?: JSX.Element;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  value?: string;
  onChange?: () => void;
  readOnly?: boolean;
}

const Textfield = ({
  label,
  icon,
  placeholder,
  type = 'text',
  value,
  readOnly,
}: TextfieldProps) => {
  return (
    <div className="w-full">
      {label ? <label className="text-base">{label}</label> : null}
      <div className="pl-2 pr-4 py-2 bg-gray-100 rounded-md flex items-center">
        {icon ? <div className="mr-2">{icon}</div> : null}
        <input
          className="outline-none bg-gray-100 text-xs w-full"
          placeholder={placeholder}
          type={type}
          value={value}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};

export default Textfield;
