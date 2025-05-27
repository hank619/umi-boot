/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-09 16:21:29
 * @Description:
 */
import Loading from '@/components/Loading';
import { COLORS, COLOR_VALUE_TYPE } from '@/constants/theme';
import { ThemContext } from '@/context/ThemeContext';
import { getCssVariable, setCssVariable } from '@/utils/theme';
import { Outlet, useModel } from '@umijs/max';
import { ConfigProvider } from 'antd';
import { useReducer } from 'react';

function Layout() {
  const [, forceRender] = useReducer((v) => v + 1, 0);
  const { loading } = useModel('loading');

  return (
    <ThemContext.Provider
      value={{
        changeTheme: (color: COLOR_VALUE_TYPE, value: string) => {
          setCssVariable(color, value);
          forceRender();
        },
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: `rgb(255 0 0)`,
            colorPrimary: getCssVariable(COLORS.primary),
            colorSuccess: getCssVariable(COLORS.success),
            colorError: getCssVariable(COLORS.error),
            colorWarning: getCssVariable(COLORS.warning),
            colorInfo: getCssVariable(COLORS.info),
            colorTextBase: getCssVariable(COLORS.black),
          },
        }}
      >
        <div>
          <Outlet />
          {loading && (
            <div className="absolute inset-0">
              <Loading />
            </div>
          )}
        </div>
      </ConfigProvider>
    </ThemContext.Provider>
  );
}

export default Layout;
