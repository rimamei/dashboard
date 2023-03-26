import {
  columnListEmployee,
  EmployeeSubRow,
  PageTitle,
  Table,
} from '@/components/molecules';
import { useEmployee } from '@/hooks';

const Employee = () => {
  const { isLoading, isSuccess, data } = useEmployee();

  return (
    <>
      <PageTitle title="Employee" />
      <Table
        columns={columnListEmployee}
        data={isSuccess ? data : []}
        isLoading={isLoading}
        getRowCanExpand={() => true}
        renderSubComponent={EmployeeSubRow}
        title="Employee"
      />
    </>
  );
};

export default Employee;
