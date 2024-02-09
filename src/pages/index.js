import React from 'react';
import MainList from '@/components/MainList';
import { useCountries } from '@/components/context/CountryContext';


export default function Home({ countries }) {
  const { setCountries } = useCountries();
  setCountries(countries);
  return (
    <>
      <MainList />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
}

