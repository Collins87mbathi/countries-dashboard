import React, { createContext, useContext, useState } from 'react';

const CountryContext = createContext();

export const useCountries = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <CountryContext.Provider value={{ countries, setCountries, search, setSearch }}>
      {children}
    </CountryContext.Provider>
  );
};
