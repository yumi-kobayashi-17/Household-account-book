import axios from 'axios';
import type { ApiResponse } from '@/stores/postalCode';

export const getAddress = async (zipcode: string): Promise<ApiResponse> => {
  // APIを呼び出す
  const response = await axios.get('https://zipcloud.ibsnet.co.jp/api/search', {
    params: { zipcode },
  });
  return response.data;
};
