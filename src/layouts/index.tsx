/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-09 16:21:29
 * @Description:
 */
import { ThemContext } from '@/context/ThemeContext';
import { setPrimaryColor, getPrimaryColor } from '@/utils/theme';
import { Outlet } from '@umijs/max';
import { ConfigProvider } from 'antd';
import { useReducer } from 'react';

function Layout() {
  const colorPrimary = getPrimaryColor();
  const [, forceRender] = useReducer((v) => v + 1, 0);

  return (
    <ThemContext.Provider
      value={{
        changeTheme: (color: string) => {
          setPrimaryColor(color);
          forceRender();
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: `rgb(${colorPrimary})`,
          },
        }}
      >
        <Outlet />
      </ConfigProvider>
    </ThemContext.Provider>
  );
}

export default Layout;
