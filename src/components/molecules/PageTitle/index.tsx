import React from 'react';
import * as Fi from 'react-icons/fi';

interface PageTitleProps {
  title: string;
  handleAdd?: () => void;
}

const PageTitle = ({ title, handleAdd }: PageTitleProps) => {
  return (
    <div>
      <h1 className="mb-8">{title}</h1>
      <div className="mb-2 justify-end flex">
        {handleAdd ? (
          <button
            className="hover:bg-sky-700 bg-sky-600 px-3 py-2 rounded-md border-none flex items-center"
            onClick={handleAdd}
          >
            <Fi.FiPlus className="text-white font-bold" />
            <p className="text-white ml-2">Add Employee</p>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PageTitle;
