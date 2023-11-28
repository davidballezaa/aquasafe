import Image from 'next/image';
export default function Home() {
    return (
        <main>
            <div className="flex justify-center space-x-4 font-bold text-2xl text-justify m-5">
                <p>¿Que es AquaSafe?</p>
            </div>
            <div className="flex justify-center box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900 m-5">
                <Image
                    src="/AquaSafeLogo.png"
                    alt="LogoAquaSafe"
                    width="400"
                    height="400"
                />
            </div>
            <div className="flex justify-center space-x-4 pr-40 pl-40 text-justify m-5">
                <div>
                    El proyecto se llama “AquaSafe” y se enfoca en medir la
                    potabilidad del agua en comunidades marginadas mediante un
                    dispositivo que involucra 3 sensores principales: Sensor de
                    temperatura, sensor pasivo infrarrojo y sensor de pH.
                    Mediante estos sensores, se busca medir diferentes aspectos
                    de una reserva de agua para que al juntar estos datos, se
                    pueda medir y determinar si el agua es segura de ingerir. El
                    proyecto no solamente se enfoca en medir el pH del agua para
                    determinar si es potable o no, sino que también tiene como
                    propósito determinar si la temperatura es un factor
                    influyente en la contaminación del agua y por otro lado, el
                    sensor infrarrojo va a detectar partículas contamintes en el
                    líquido, brindando así un análisis más completo para
                    garantizar (en caso de que el agua sea potable) la
                    salubridad.
                </div>
            </div>
            <div className="flex justify-center font-bold text-2xl text-justify m-5">
                <div></div>
                <p>¿Como se elaboro este proyecto?</p>
                <div></div>
            </div>
            <div className="flex justify-center space-x-40 text-justify m-5">
                <div></div>
                <p>
                    Se ha creado un prototipo en Tinkercad simulando las
                    conexiones del sensor de temperatura y el sensor infrarrojo.
                    En este caso, el sensor infrarrojo es diferente al que se
                    tiene físicamente porque en Tinkercad no se encuentran
                    algunos de los componentes requeridos, pero las conexiones
                    son bastante similares y por eso se simuló el circuito de la
                    siguiente manera:
                </p>
                <div></div>
            </div>
            <div className="flex justify-center space-x-4 text-justify m-5">
                <footer className="flex items-end box-decoration-slice bg-gradient-to-r from-slate-700 to-slate-900 m-5">
                    <Image
                        src="/Tinker.jpeg"
                        alt="LogoAquaSafe"
                        width="400"
                        height="500"
                    />
                </footer>
            </div>
            <div className="flex justify-center font-bold text-2xl text-justify m-5">
                <div></div>
                <p>Uso de Sensores</p>
                <div></div>
            </div>
            <div className="flex justify-center space-x-40 text-justify m-5">
                <div></div>
                <div>
                    Como se explicó anteriormente, en este prototipo se usó un
                    sensor de temperatura para medir el área cercana al agua
                    para que se despliegue el valor a un display. Igualmente, se
                    usa el sensor pasivo infrarrojo (PIR) para detectar la
                    presencia de objetos foráneos en el agua, como hojas o
                    basura y manda una alerta al detectar estos al display.
                    Estos 2 sensores son los más simples, sin embargo, nuestro
                    proyecto involucra un tercer sensor, que es el sensor de pH,
                    pero al no estar disponible en Tinkercad, a continuación se
                    muestra una implementación teórica para simular la conexión
                    que habría en el circuito físico:
                </div>
                <div></div>
            </div>
            <div className="flex justify-center font-bold text-2xl text-justify m-5">
                <div></div>
                <p>Nuestro Diagrama</p>
                <div></div>
            </div>
            <div className="flex justify-center space-x-40 text-justify m-5">
                <div></div>
                <p>
                    Como se puede apreciar, en este diagrama se puede apreciar
                    la presencia del sensor de pH implementado de manera
                    improvisada, al igual que el despliegue de su valor. La
                    combinación de estos 3 sensores representará el prototipo
                    del proyecto y a lo largo de las siguientes semanas, se
                    desarrollará físicamente para hacerlo funcional y hacer
                    pruebas sobre diferentes muestras de agua.
                </p>
                <div></div>
            </div>
        </main>
    );
}
