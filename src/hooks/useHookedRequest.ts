/*
 * @Author: Hong.Zhang
 * @Date: 2025-04-30 17:01:27
 * @Description:
 */
import { useModel } from '@umijs/max';
import { useRequest } from 'ahooks';
import { Options, Service } from 'ahooks/es/useRequest/src/types';

/**
 *
 * @param service
 * @param options
 * @param parent undefined: no dependency of parent; null: parent is not ready
 * @returns
 */
export const useHookedRequest = <TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
  parent?: string | null,
) => {
  const { setLoading } = useModel('loading');
  const { ready = true, refreshDeps = [] } = options ?? {};

  return useRequest(service, {
    ...options,
    onBefore(params) {
      if (options?.onBefore) {
        options.onBefore(params);
      }
      setLoading(true);
    },
    onFinally(params: any, data?: any, e?: any) {
      if (options?.onFinally) {
        options.onFinally(params, data, e);
      }
      setLoading(false);
    },
    ready: parent !== null && ready,
    refreshDeps: parent !== null ? [parent, ...refreshDeps] : [...refreshDeps],
  });
};
