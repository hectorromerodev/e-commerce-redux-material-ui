import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { Dispatch, RootState } from '@/redux/store';

export const useCustomDispatch: () => Dispatch = useDispatch<Dispatch>;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
