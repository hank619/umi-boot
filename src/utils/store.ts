/*
 * @Author: Hong.Zhang
 * @Date: 2025-04-30 16:54:56
 * @Description:
 */
import store from 'store2';

export const LOCAL_TOKEN = 'token';

export const local = {
  set(key: string, value: any) {
    store.set(key, value);
  },
  get(key: string) {
    return store.get(key);
  },
  remove(key: string) {
    store.remove(key);
  },
  clear() {
    store.clear();
  },
};
