import {
  ColumnDef,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Fragment, useState } from 'react';
import * as Fi from 'react-icons/fi';

import { Pagination, TableBody, TableHead } from '@/components/molecules';
import Skeleton from 'react-loading-skeleton';

export interface ReactTableProps<TData> {
  route?: string;
  modal?: () => void;
  title: string;
  data: TData[];
  columns: ColumnDef<TData, any>[];
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
  isLoading: boolean;
}

const Table = <TData extends object>({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
  isLoading,
}: ReactTableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowCanExpand,
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Fragment>
      <table className="w-full">
        <TableHead table={table} />
        {renderSubComponent && !isLoading && data.length > 0 ? (
          <TableBody
            table={table}
            renderSubComponent={renderSubComponent}
            isLoading={isLoading}
          />
        ) : (
          <TableBody table={table} isLoading={isLoading} />
        )}
      </table>
      {!isLoading && data.length > 0 ? <Pagination table={table} /> : null}

      {isLoading ? (
        Array(10)
          .fill('')
          .map((item, index) => (
            <div
              key={index}
              className="border-t border-b border-grayModern-300 text-left font-semibold"
            >
              <Skeleton className="my-1" height={20} />
            </div>
          ))
      ) : data.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[30vh] border-b">
          <Fi.FiFileText className="text-gray-500" size={28} />
          <h4 className="mt-4 text-gray-500">Data not found</h4>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Table;
