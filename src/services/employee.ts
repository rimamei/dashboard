import { Axios } from '@/utils';

export const fetchEmployees = async (): Promise<IEmployee[]> => {
  const { data } = await Axios.get('employees');
  return data?.data;
};
