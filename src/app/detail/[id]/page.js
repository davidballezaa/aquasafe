'use client';
import { useEffect, useState } from 'react';

import Graph from './components/graph';

export default function Home({ params }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/detail/${params.id}`)
            .then((res) => res.json())
            .then((pins) => {
                const newData = pins?.data.map((pin) => {
                    const formattedDate = new Date(pin.fecha).toLocaleString(
                        'es-MX',
                        {
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false,
                        }
                    );
                    return {
                        id: pin.id_Aquasafe,
                        date: formattedDate,
                        ir: pin.lectura_ir,
                        ph: pin.lectura_ph,
                        temp: pin.lectura_temp,
                        dir: pin.direccion,
                        // lat: pin.latitud,
                        // lng: pin.longitud,
                        // color: pin.estado == 'potable' ? 'green' : 'red',
                    };
                });
                setData(newData);
            });
    }, []);

    console.log(data);

    return (
        <main className="flex flex-col items-center">
            {data && (
                <>
                    <div className="info mb-4 text-center">
                        <h2 className="text-white text-lg">
                            Has seleccionado el{' '}
                            <span className="text-blue-400">aquasafe</span> con
                            id: {data[0]?.id}
                        </h2>

                        <p className="text-white">Direccion: {data[0]?.dir}</p>
                    </div>
                    <div className="graphs">
                        <Graph data={data} attribute={'ir'} color={'#FF0000'} />
                        <Graph data={data} attribute={'ph'} color={'#00FF00'} />
                        <Graph
                            data={data}
                            attribute={'temp'}
                            color={'#0000FF'}
                        />
                    </div>
                </>
            )}
        </main>
    );
}
