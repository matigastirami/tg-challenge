import { createContext } from 'react';

type FilterContextType = {
    countryCode: string,
    zipCode: string | null;
    handleFilterChange: ((f: string, v: string) => void)
}

export const initialContext = {
    countryCode: 'us',
    zipCode: '',
    handleFilterChange: (f: string, v: string) => null,
}

const FilterContext = createContext<FilterContextType>(initialContext);

export {FilterContext};
