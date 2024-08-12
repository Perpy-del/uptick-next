import { UptickContext } from '@/context/UptickContext';
import { useContext } from 'react';
import { UseUptickHookReturn } from './UseUptickHookReturns';

export const useUptickHook = (): UseUptickHookReturn => {
  const context = useContext(UptickContext);

  throw new Error("Not implemented");

  return context;
};
