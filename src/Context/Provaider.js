import { createContext } from 'react';

export const AppContext = createContext({})

const DataProvider = ({ children }) => {

    return (
        <AppContext.Provider>{children}</AppContext.Provider>
    );
}

export default DataProvider;
