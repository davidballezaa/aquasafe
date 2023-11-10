"use client"

import Globe from "react-globe.gl"
import { useRouter } from "next/navigation";

export default function Map() {
    const router = useRouter();
    const myData = [{
        "lat": 25,
        "lng": -100,
        "id": 1,
        "label": "Hola",
        "color": "red" // status == contaminado ? red : green
    }];
    return (
        <Globe 
            backgroundColor="white"
            globeImageUrl="//unpkg.com/three-globe@2.30.0/example/img/earth-blue-marble.jpg"
            width={500}
            height={500}
            labelsData={myData}
            labelText="label"
            labelColor={(pin) => pin.color}
            labelSize={0.5}
            labelDotRadius={1}
            onLabelClick={(pin) => router.push(`/detail/${pin.id}`)}
        />
    )
}