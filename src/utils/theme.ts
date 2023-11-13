/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-10 15:05:19
 * @Description:
 */
import {
  COLORS,
  COLOR_VALUE_TYPE,
  DEFAULT_COLOR_PLATE,
} from '@/constants/theme';

function getCssVariable(color: COLOR_VALUE_TYPE) {
  return (
    getComputedStyle(document.documentElement).getPropertyValue(
      `--color-${color}`,
    ) || DEFAULT_COLOR_PLATE[color]
  );
}

function setCssVariable(color: COLOR_VALUE_TYPE, value: string) {
  document.documentElement.style.setProperty(`--color-${color}`, value);
}

export function getPrimaryColor() {
  return getCssVariable(COLORS.primary);
}

export function setPrimaryColor(color: string) {
  setCssVariable(COLORS.primary, color);
}
