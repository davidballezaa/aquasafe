'use client';
import { useEffect, useState } from 'react';

import Graph from './components/graph';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

export default function Home({ params }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/detail/${params.id}`)
            .then((res) => res.json())
            .then((pins) => {
                const newData = pins?.data.map((pin) => {
                    return {
                        // id: pin.id_Aquasafe,
                        date: pin.fecha,
                        ir: pin.lectura_ir,
                        ph: pin.lectura_ph,
                        temp: pin.lectura_temp,
                        // lat: pin.latitud,
                        // lng: pin.longitud,
                        // color: pin.estado == 'potable' ? 'green' : 'red',
                    };
                });
                setData(newData);
            });
    }, []);

    return (
        <main>
            {data && (
                <div className="graphs">
                    <Graph data={data} attribute={'ir'} color={'#FF0000'} />
                    <Graph data={data} attribute={'ph'} color={'#00FF00'} />
                    <Graph data={data} attribute={'temp'} color={'#0000FF'} />
                </div>
            )}
        </main>
    );
}
