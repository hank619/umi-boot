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
  [COLORS.primary]: '88 88 255',
  [COLORS.success]: '46 213 115',
  [COLORS.error]: '245 34 9',
  [COLORS.warning]: '207 137 9',
  [COLORS.info]: '30 144 255',
  [COLORS.black]: '33 33 33',
  [COLORS.gray]: '238 238 238',
  [COLORS.white]: '255 255 255',
};
