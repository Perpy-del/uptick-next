import { UptickContext } from '@/context/UptickContext';
import { useContext } from 'react';

export const useUptickHook = () => {
  const context = useContext(UptickContext);

  return context;
};
