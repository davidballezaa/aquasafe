'use client';
import Map from './components/Map';
import { useState } from 'react';

export default function Home() {
    const [filter, setFilter] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <main>
            <div className="map flex flex-col items-center box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900">
                <div className="flex flex-row space-x-1">
                    <p className="text-white">Filtrar: </p>
                    <select onChange={handleFilterChange} value={filter}>
                        <option value="">Sin filtro</option>
                        <option value="red">No potables</option>
                        <option value="green">Potables</option>
                    </select>
                </div>
                <Map filter={filter} />
            </div>
        </main>
    );
}
