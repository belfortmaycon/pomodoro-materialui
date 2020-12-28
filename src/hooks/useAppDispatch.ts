import { useDispatch } from 'react-redux';

import { store } from 'src/store';

export type AppDispatch = typeof store.dispatch

// Export a hook that can be reused to resolve types
export const useAppDispatch = ():AppDispatch => useDispatch<AppDispatch>();
