import { flexRender, Row, Table } from '@tanstack/react-table';
import React, { Fragment } from 'react';

interface TableBodyProps<TData> {
  table: Table<any>;
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
}

const TableBody = <TData extends object>({
  table,
  renderSubComponent,
}: TableBodyProps<TData>) => {
  return (
    <tbody className="w-full">
      {table.getRowModel().rows.map((row) => {
        return (
          <Fragment key={row.id}>
            <tr className="border-b border-gray-300  text-gray-700 hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id} className="py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
            {renderSubComponent
              ? row.getIsExpanded() && (
                  <tr>
                    <td colSpan={row.getVisibleCells().length}>
                      {renderSubComponent({ row })}
                    </td>
                  </tr>
                )
              : null}
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default TableBody;
