import { DOTS, usePagination } from '@/hooks/usePagination';
import { Table } from '@tanstack/react-table';
import React from 'react';
import * as Fi from 'react-icons/fi';

const Pagination = ({ table }: { table: Table<any> }) => {
  const pagination: (string | number)[] | undefined = usePagination({ table });

  const currentPage = table.getState().pagination.pageIndex;

  const handlePrevPage = () => {
    if (table.getCanPreviousPage()) {
      table.previousPage();
    }
    return;
  };

  const handleNextPage = () => {
    if (table.getCanNextPage()) {
      table.nextPage();
    }
    return;
  };

  return (
    <ul className="flex items-center justify-end mt-4">
      <li className=" px-2 py-1" onClick={handlePrevPage}>
        <Fi.FiChevronLeft
          className={`${
            table.getCanPreviousPage() ? '' : 'text-gray-300'
          } font-bold cursor-pointer`}
          size={20}
        />
      </li>
      {pagination?.map((pageNumber, pageIndex) => {
        const page = typeof pageNumber === 'number' ? pageNumber : 0;
        return pageNumber === DOTS ? (
          <li className="px-2 py-1 cursor-pointer" key={pageIndex}>
            &#8230;
          </li>
        ) : (
          <li
            className={`${
              pageNumber === currentPage + 1
                ? 'bg-sky-600 text-white rounded-md'
                : 'hover:bg-gray-100 rounded-md'
            } px-2 py-1 cursor-pointer`}
            key={pageIndex}
            onClick={() => table.setPageIndex(page - 1)}
          >
            <p>{pageNumber}</p>
          </li>
        );
      })}
      <li className="px-2 cursor-pointer" onClick={handleNextPage}>
        <Fi.FiChevronRight
          className={`${
            table.getCanNextPage() ? '' : 'text-gray-300'
          } font-bold`}
          size={20}
        />
      </li>
    </ul>
  );
};

export default Pagination;
