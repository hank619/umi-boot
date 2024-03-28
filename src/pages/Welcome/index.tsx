/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-09 14:29:51
 * @Description:
 */
import { COLORS } from '@/constants/theme';
import { ThemContext } from '@/context/ThemeContext';
import { Button } from 'antd';
import { useContext } from 'react';

export default function Welcome() {
  const context = useContext(ThemContext);
  const { changeTheme } = context ?? {};
  return (
    <div className="w-fit mt-48 m-auto flex flex-col items-center">
      <div className="text-primary">Welcome</div>
      <Button
        type="primary"
        onClick={() => changeTheme?.(COLORS.primary, '255 0 0')}
      >
        Click
      </Button>
    </div>
  );
}
