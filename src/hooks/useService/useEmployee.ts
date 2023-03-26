import { fetchEmployees } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const useEmployee = () => {
  return useQuery({
    queryKey: ['employee'],
    queryFn: fetchEmployees,
    onError: (error: AxiosError | any) =>
      toast.error(
        `Error ${error.response?.status}: ${error?.response?.data?.message}`
      ),
  });
};
