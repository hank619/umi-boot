/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-10 16:28:17
 * @Description:
 */
import React from 'react';

interface ChangeTheme {
  changeTheme: (color: string) => void;
}
export const ThemContext = React.createContext<ChangeTheme | null>(null);
