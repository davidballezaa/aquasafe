import Map from './components/Map';

export default function Home() {
    return (
        <main>
            <div className="map flex flex-col items-center box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900">
                <div className="flex flex-row space-x-1">
                    <p className="text-white">Filtrar: </p>
                    <select>
                        <option>Puntos Rojos</option>
                        <option>Puntos Verdes</option>
                    </select>
                </div>
                <Map />
            </div>
        </main>
    );
}
