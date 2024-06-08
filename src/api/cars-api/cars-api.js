import { axiosInstance } from '../axios-instance';

export const fetchCars = async (page) => {
  const { data } = await axiosInstance.get(`?page=${page}&limit=4`);
  return data;
};

export const fetchAllCars = async () => {
  const { data } = await axiosInstance.get();
  return data;
};
