import React, { useState } from "react";
import button from "./button";

Contador  const = () => {
    const [contador, setCounter] = useState(0);

    const addCounter = () => setCounter(contador + 1);

    const subsCounter = () => setCounter(contador - 1);

    retorno(
        <div className="card" style={{ ancho: "18rem" }} >
            <div className="card-body" >
                <h5 className="card-title" > Contador </h5>
                <div className="botones-contenedor" >
                    <Botón de acción={subsCounter} text="-" />
                    <span className="contador" > {contador} </span>
                    <Botón de acción={addCounter} colorType="primary" text="+" />
                </div>
            </div>
        </div>
    );
};

export default contador;