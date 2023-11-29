'use client';

import Globe from 'react-globe.gl';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';
import HEX_DATA from '../data/countries_hex_data.json';

export default function Map({ filter }) {
    const router = useRouter();
    const [data, setData] = useState([]);

    const hex = HEX_DATA;

    const globeRef = useRef();

    useEffect(() => {
        fetch('/api/map')
            .then((res) => res.json())
            .then((pins) => {
                const newData = pins?.data.map((pin) => {
                    return {
                        id: pin.id_Aquasafe,
                        lat: pin.latitud,
                        lng: pin.longitud,
                        label: '',
                        color: pin.estado == '0' ? 'green' : 'red',
                    };
                });
                setData(newData);
            });
    }, []);

    useEffect(() => {
        const MAP_CENTER = { lat: 25, lng: -100, altitude: 1.5 };
        globeRef.current.pointOfView(MAP_CENTER, 0);
    }, [globeRef]);

    const filteredData = data.filter((pin) => pin.color == filter);

    return (
        <>
            <Globe
                ref={globeRef}
                backgroundColor="rgba(0,0,0,0)"
                width={500}
                height={500}
                hexPolygonsData={hex.features}
                hexPolygonResolution={3}
                hexPolygonMargin={0.62}
                hexPolygonColor={useCallback(() => '#1b66b1', [])}
                labelsData={filter ? filteredData : data}
                labelAltitude={0.005}
                labelText="label"
                labelColor={(pin) => pin.color}
                labelSize={0.5}
                labelDotRadius={1}
                onLabelClick={(pin) => router.push(`/detail/${pin.id}`)}
            />
        </>
    );
}
