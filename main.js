let pizza = [
  "harina",
  "salsa",
  "agua",
  "jamón",
  "queso",
  "choclo",
  "roquefort",
  "sal",
  "rúcula",
  "palmito",
];


function condimentos(ingredientes) {
  let pares = [];
  let impares = [];

  for (i = 0; i < pizza.length; i++) {
    let cont = pizza[i].length;

    if (cont % 2 === 0) {
      pares.push(pizza[i]);
    } else {
      impares.push(pizza[i]);
    }
  }

  return (
    console.log(`Las palabras con cantidad de caracteres PARES son ${pares}`),
    console.log(
      `Las palabras con cantidada de caracteres IMPARES son ${impares}`
    )
  );
}

condimentos(pizza);
