const zucchine = [
    { varietà: "Grossa", peso: 0.6, lunghezza: 16 },
    { varietà: "Fina", peso: 0.4, lunghezza: 14 },
    { varietà: "Lunga", peso: 0.8, lunghezza: 23 },
    { varietà: "Dolce", peso: 0.2, lunghezza: 14 },
    { varietà: "Gialla", peso: 0.9, lunghezza: 23 },
    { varietà: "Rotonda", peso: 0.1, lunghezza: 6 },
    { varietà: "Amara", peso: 0.2, lunghezza: 15 },
    { varietà: "Tardiva", peso: 0.5, lunghezza: 12 },
    { varietà: "Halloween", peso: 0.2, lunghezza: 5 },
    { varietà: "Zucchino", peso: 0.9, lunghezza: 32 },
  ];

let somma_peso = 0;
for (let i = 0; i < zucchine.length; i++) {
  somma_peso += zucchine[i].peso;
}

somma_peso = somma_peso.toFixed(2);


console.log("Il peso totale è: " + somma_peso + " kg");