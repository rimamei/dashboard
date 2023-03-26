import { Textfield } from '@/components/atoms';
import { Row } from '@tanstack/react-table';
import React from 'react';

const EmployeeSubRow = ({ row }: { row: Row<IEmployee> }) => {
  const data = row?.original;
  return (
    <div className="bg-gray-200">
      <Textfield
        label="Employee Salary"
        value={`${data?.employee_salary}`}
        readOnly={true}
        disabled={true}
      />
    </div>
  );
};

export default EmployeeSubRow;
