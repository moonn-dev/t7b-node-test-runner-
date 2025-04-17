/**
 * Laskee D'Hondtin vertausluvut yhdelle listalle
 * @param {Object[]} ehdokkaat - Taulukko ehdokasobjekteja, joissa numero, nimi ja äänimäärä
 * @returns {Object[]} - Sama taulukko, mutta lisättynä vertausluvuilla
 */
function laskeVertausluvut(ehdokkaat) {
  // Järjestetään ehdokkaat äänimäärän mukaan laskevasti
  const jarjestetyt = [...ehdokkaat].sort((a, b) => b.aanet - a.aanet);

  // Laske äänien summa
  const aanetYhteensa = jarjestetyt.reduce((summa, ehdokas) => summa + ehdokas.aanet, 0);

  // Lasketaan vertausluvut: äänet / sija listassa
  return jarjestetyt.map((ehdokas, index) => ({
    ...ehdokas,
    vertausluku: aanetYhteensa / (index + 1)
  }));
}

export default laskeVertausluvut;
export { laskeVertausluvut };
