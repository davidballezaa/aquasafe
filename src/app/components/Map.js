"use client"

import Globe from "react-globe.gl"

export default function Map() {
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
            labelColor={label => label.color}
            labelSize={0.5}
            labelDotRadius={1}
            onLabelClick={(label) => console.log(label)}
        />
    )
}