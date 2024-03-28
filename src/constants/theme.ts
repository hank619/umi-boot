/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-09 16:34:37
 * @Description:
 */
export const COLORS = {
  // brand
  primary: 'primary',
  //functional
  success: 'success',
  error: 'error',
  warning: 'waiting',
  info: 'processing',
  // neutral
  black: 'black',
  gray: 'gray',
  white: 'white',
} as const;

type COLOR_TYPE = typeof COLORS;
export type COLOR_VALUE_TYPE = COLOR_TYPE[keyof COLOR_TYPE];

export const DEFAULT_COLOR_PLATE: Record<COLOR_VALUE_TYPE, string> = {
  [COLORS.primary]: 'rgb(88 88 255)',
  [COLORS.success]: 'rgb(46 213 115)',
  [COLORS.error]: 'rgb(245 34 9)',
  [COLORS.warning]: 'rgb(207 137 9)',
  [COLORS.info]: 'rgb(30 144 255)',
  [COLORS.black]: 'rgb(33 33 33)',
  [COLORS.gray]: 'rgb(238 238 238)',
  [COLORS.white]: 'rgb(255 255 255)',
};
