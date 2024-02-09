import React from 'react';
import { render, screen } from '@testing-library/react';
import MainList from '../components/MainList';
import { CountryProvider } from '../context/CountryContext';

const mockCountries = [
    { name: { common: 'Canada' }, population: 37742154, area: 9984670, flags: { svg: 'https://flagcdn.com/ca.svg' } },
    { name: { common: 'Australia' }, population: 25499884, area: 7692024, flags: { svg: 'https://flagcdn.com/au.svg' } },
];

test('renders MainList and displays countries', () => {
    render(
        <CountryProvider>
            <MainList countries={mockCountries} />
        </CountryProvider>
    );
    expect(screen.getByText('Canada')).toBeInTheDocument();
    expect(screen.getByText('Australia')).toBeInTheDocument();
    expect(screen.getByText(/37742154/)).toBeInTheDocument();
    expect(screen.getByText(/25499884/)).toBeInTheDocument();
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', 'https://flagcdn.com/ca.svg');
    expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', 'https://flagcdn.com/au.svg');
});
