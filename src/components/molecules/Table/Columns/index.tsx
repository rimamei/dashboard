import { ColumnDef } from '@tanstack/react-table';
import * as Fi from 'react-icons/fi';

export const columnListEmployee: ColumnDef<IEmployee>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer' },
          }}
        >
          {row.getIsExpanded() ? (
            <Fi.FiChevronUp className="text-sky-600" />
          ) : (
            <Fi.FiChevronDown className="text-sky-600" />
          )}
        </button>
      ) : null;
    },
  },
  {
    accessorKey: 'employee_name',
    header: 'Name',
  },
  {
    accessorKey: 'employee_age',
    header: 'Age',
  },
  {
    accessorKey: 'id',
    header: 'Action',
    cell: (props) => {
      return (
        <div className="relative flex">
          <Fi.FiEye className="mr-3 cursor-pointer" />
          <Fi.FiEdit className="mr-3 cursor-pointer" />
          <Fi.FiTrash className="cursor-pointer" />
        </div>
      );
    },
  },
];
