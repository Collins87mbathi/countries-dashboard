import React from "react";
import { useRouter } from 'next/router';

const Details = ({ detail }) => {
    const router = useRouter();
    const { name, population, area, flags } = detail;
    const handleClick = () => {
        router.push(`/country/${name.common}`);
    };

    return (
        <div className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer" onClick={() => handleClick()}>
            <img
                src={flags.svg || flags.png}
                className="w-full h-40 object-cover rounded-t-lg"
                alt={`${name.common} flag`}
            />
            <div className="flex flex-col p-4">
                <h3 className="font-bold text-lg">{name.common}</h3>
                <p className="text-gray-500">Population: {population.toLocaleString()}</p>
                <p>Area: {area.toLocaleString()} km²</p>
            </div>
        </div>
    );
};


export default Details;