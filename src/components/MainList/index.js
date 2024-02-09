import React from 'react';
import Details from '../Details/Details';
import { useCountries } from '../context/CountryContext';
import { useState } from 'react';

const MainList = () => {
    const { countries, search, setSearch } = useCountries();


    return (
        <div className='max-w-[1640px]'>
            <div className='max-w-[1640px] m-auto px-4 py-12'>
                <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                    {/* search  */}
                    <div className='flex justify-center'>
                        <input
                            className="w-full max-w-xl text-sm rounded-3xl outline-none border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
                            type="text"
                            placeholder="Search for countries..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                </div>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {
                        countries.length === 0 ? (
                            <div className='flex flex-col justify-center items-center'>
                                <p>countries not found</p>
                            </div>
                        ) : (
                            // eslint-disable-next-line array-callback-return
                            countries.filter(country => {
                                if (search === "") {
                                    return country;
                                } else if (country.name.common.toLowerCase().includes(search.toLowerCase())) {
                                    return country;
                                }
                            }).map((country, index) => {
                                return <Details key={index} detail={country} />;
                            })
                        )
                    }

                </div>
            </div>
        </div>
    )
}


export default MainList