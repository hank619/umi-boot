/*
 * @Author: Hong.Zhang
 * @Date: 2025-01-17 17:28:19
 * @Description:
 */
import { Spin } from 'antd';

function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#1C1F2333]">
      <Spin size="large" />
    </div>
  );
}

export default Loading;
