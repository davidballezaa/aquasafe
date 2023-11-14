'use client';

import Globe from 'react-globe.gl';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Map() {
    const router = useRouter();
    const [data, setData] = useState([]);

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
                        color: pin.estado == 'potable' ? 'green' : 'red',
                    };
                });
                setData(newData);
            });
    }, []);

    useEffect(() => {
        const MAP_CENTER = { lat: 25, lng: -100, altitude: 1.5 };
        globeRef.current.pointOfView(MAP_CENTER, 0);
    }, [globeRef]);

    return (
        <>
            <Globe
                ref={globeRef}
                backgroundColor="white"
                globeImageUrl="//unpkg.com/three-globe@2.30.0/example/img/earth-blue-marble.jpg"
                width={500}
                height={500}
                labelsData={data}
                labelText="label"
                labelColor={(pin) => pin.color}
                labelSize={0.5}
                labelDotRadius={1}
                onLabelClick={(pin) => router.push(`/detail/${pin.id}`)}
            />
        </>
    );
}
