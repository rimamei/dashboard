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

import { TableBody, TableHead } from '@/components/molecules';

export interface ReactTableProps<TData> {
  route?: string;
  modal?: () => void;
  title: string;
  data: TData[];
  columns: ColumnDef<TData, any>[];
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
}

const Table = <TData extends object>({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
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
        {renderSubComponent ? (
          <TableBody table={table} renderSubComponent={renderSubComponent} />
        ) : (
          <TableBody table={table} />
        )}
      </table>
    </Fragment>
  );
};

export default Table;
