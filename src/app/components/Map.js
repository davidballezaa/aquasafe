'use client';

import Globe from 'react-globe.gl';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Map() {
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/map')
            .then((res) => res.json())
            .then((pins) => {
                const newData = pins?.data.map((pin) => {
                    return {
                        id: pin.id,
                        lat: pin.latitud,
                        lng: pin.longitud,
                        label: '',
                        color: pin.status === 'contaminado' ? 'red' : 'green',
                    };
                });
                setData(newData);
            });
    }, []);

    return (
        <>
            <Globe
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
