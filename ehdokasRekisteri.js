// Palauttaa ehdokaslistan

const ehdokasRekisteri = {
  haeLista: () => {
    const ehdokkaat = [
      { numero: 101, nimi: "Maija Meikäläinen", aanet: 1 },
      { numero: 102, nimi: "Kalle Korhonen", aanet: 4 },
      { numero: 103, nimi: "Sari Virtanen", aanet: 2 },
      { numero: 104, nimi: "Jukka Jokinen", aanet: 5 },
      { numero: 105, nimi: "Anna Väisänen", aanet: 2 }
    ];

    return ehdokkaat;
  }
};

export default ehdokasRekisteri;
