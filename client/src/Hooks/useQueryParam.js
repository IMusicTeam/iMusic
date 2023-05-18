import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Example of useQueryParam
 * URL: https://www.example.com/path?param1=value1&param2=value2
 * const queryParam = useQueryParam();
 * queryParam.get('param1'); // value1
 * queryParam.get('param2'); // value2
 */

export const useQueryParam = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
