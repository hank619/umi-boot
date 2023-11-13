/*
 * @Author: Hong.Zhang
 * @Date: 2023-11-09 14:29:51
 * @Description:
 */
import { Button } from 'antd';
import { useNavigate } from '@umijs/max';

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="w-fit mt-48 m-auto flex flex-col items-center">
      Welcome
      <Button onClick={() => navigate('./test')}>Click</Button>
    </div>
  );
}
