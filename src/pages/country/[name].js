// pages/country/[name].js
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const CountryDetails = () => {
    const router = useRouter();
    const { name } = router.query;
    const [country, setCountry] = React.useState(null);

    React.useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
            const data = await response.json();
            if (data && data.length > 0) {
                setCountry(data[0]);
            }
        };

        if (name) {
            fetchCountryData();
        }
    }, [name]);

    if (!country) return <div>Loading...</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto p-4"
        >
            <div className="text-center my-8">
                <h1 className="text-4xl font-bold">{country.name.common}</h1>
                <img
                    src={country.flags.svg || country.flags.png}
                    className="mx-auto my-4 max-h-40 object-cover"
                    alt={`Flag of ${country.name.common}`}
                />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <p className="text-lg"><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p className="text-lg"><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                <p className="text-lg"><strong>Region:</strong> {country.region}</p>
                <p className="text-lg"><strong>Subregion:</strong> {country.subregion}</p>
            </div>
            <button
                onClick={() => router.back()}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
            >
                Go Back
            </button>
        </motion.div>
    );
};

export default CountryDetails;
