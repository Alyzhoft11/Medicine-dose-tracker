import { createStore, createTypedHooks } from 'easy-peasy';
import model, { StoreModel } from './model';

// const { useActions, useStore } = createTypedHooks<StoreModel>();

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

// export { useActions, useStore };

const store = createStore(model);

export default store;
