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
            className="border-t border-b border-grayModern-300 text-left font-semibold"
          >
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: `captionLarge py-2 text-grayModern-700 flex items-center ${
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }  ${header.id === 'id' ? 'text-right' : ''} ${
                          header.id === 'expander' || header.id === 'id'
                            ? 'w-12'
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
