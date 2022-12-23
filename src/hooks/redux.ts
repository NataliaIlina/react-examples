import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import type { IAppDispatch, IRootState } from 'src/stores/rootStore';

export const useDispatch: () => IAppDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
