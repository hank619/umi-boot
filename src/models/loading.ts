/*
 * @Author: Hong.Zhang
 * @Date: 2025-04-30 16:58:21
 * @Description:
 */
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState(false);

  return { loading, setLoading };
};
