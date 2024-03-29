import { flexRender, Table } from '@tanstack/react-table';
import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface TableHeadProps {
  table: Table<any>;
}

const TableHead = ({ table }: TableHeadProps) => {
  return (
    <thead>
      {table.getHeaderGroups().map((headerGroup) => {
        return (
          <tr
            key={headerGroup.id}
            className="bg-gray-50 border-t border-b border-grayModern-300 text-left font-semibold"
          >
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id}
                  className={`${
                    header.id === 'expander' ? 'bg-gray-100 w-5' : ''
                  }`}
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: `p-2 text-gray-700 flex items-center ${
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }  ${header.id === 'id' ? 'text-right' : ''} ${
                          header.id === 'expander'
                            ? 'w-10 bg-gray-100'
                            : header.id === 'id'
                            ? 'w-10'
                            : 'min-w-[150px]'
                        }`,
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      &nbsp;
                      {{
                        asc: <FiChevronUp />,
                        desc: <FiChevronDown />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
};

export default TableHead;
