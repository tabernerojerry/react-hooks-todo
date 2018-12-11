import { createContext } from "react";

// Store Context is the global context that is managed by reducers.
const useStore = createContext({ todos: [] });

export const StoreProvider = useStore.Provider;
export const StoreConsumer = useStore.Consumer;

export default useStore;
