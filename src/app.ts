import { RequestConfig } from '@umijs/max';
import { parse } from 'qs';

export async function getInitialState(): Promise<{ productType: string }> {
  const params = parse(location.search.substring(1));
  const productType = params.productType;
  return {
    productType: productType as string,
  };
}

export const request: RequestConfig = {
  baseURL: API_HOST,
}