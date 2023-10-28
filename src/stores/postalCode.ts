import { defineStore } from 'pinia';
import { getAddress } from '@/repository/postalCode';

type ApiResult = {
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
  prefcode: string;
  zipcode: string;
};

export type ApiResponse = {
  message: string;
  results: ApiResult[];
  status: string;
};

export const usePostalCodeStore = defineStore({
  id: 'postalCode',
  state: () => ({
    address: {} as ApiResponse,
    displayAddress: '',
  }),
  actions: {
    setAddress(postalCode: string) {
      getAddress(postalCode).then((data) => {
        this.address = data;
        if (this.address.results.length > 0) {
          this.displayAddress =
            this.address.results[0].address1 + this.address.results[0].address2 + this.address.results[0].address3;
        }
      });
    },
  },
});
