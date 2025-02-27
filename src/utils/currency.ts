/*
 * @Author: Hong.Zhang
 * @Date: 2023-12-01 13:16:22
 * @Description: 
 */
import { CURRENCY } from "@/constants/currency";

type PriceOption = {
  withCurrency?: boolean;
  decimal?: number;
  defaultZeroDisplay?: string;
  defaultEmptyDisplay?: string;
};

export const formatPrice = (
  price: string | number | undefined | null,
  options?: PriceOption,
): string => {
  const {
    withCurrency = true,
    decimal = 0,
    defaultZeroDisplay = '-',
    defaultEmptyDisplay = '-',
  } = options ?? {};
  if (price === null || price === undefined) return defaultEmptyDisplay;
  if (Number(price) === 0) return defaultZeroDisplay;
  if (typeof price === 'number' && isNaN(price)) return '-';
  const numParts = price.toString().split('.');
  if (decimal > 0) {
    numParts[1] = numParts[1] || '';
    numParts[1] = numParts[1].padEnd(decimal, '0');
  } else {
    numParts.splice(1, 1);
  }
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const number = numParts.join('.');
  return `${withCurrency ? CURRENCY : ''}${number}`;
};
