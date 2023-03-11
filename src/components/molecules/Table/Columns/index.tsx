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
          {row.getIsExpanded() ? <Fi.FiChevronUp /> : <Fi.FiChevronDown />}
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
      return <div className="relative"></div>;
    },
  },
];
