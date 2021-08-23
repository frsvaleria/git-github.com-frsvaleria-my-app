
//promesa de arrays de objetos de viaje a resolver imprimidos en consola
const travel = [
    { id: "viaje1", name: "ushuaia", description: "vuelo" },
    { id: "viaje2", name: "cerrochapelco", description: "bus" },
];


const task = () =>
    new Promise({ resolve, reject }) => {
    setTimeout(() => {
        resolve(travel);
    }, 2);
};

task()
    .then(result => {
        console.log(result);
    },
        (err) => console.log(err)
    )
    .finally(() => console.log(finalizado));
