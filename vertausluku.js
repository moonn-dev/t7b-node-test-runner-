import { randomize } from './sekoitettu.js';

/**
 * Laskee D'Hondtin vertausluvut yhdelle listalle
 * @param {Object[]} ehdokkaat - Taulukko ehdokasobjekteja, joissa numero, nimi ja äänimäärä
 * @returns {Object[]} - Sama taulukko, mutta lisättynä vertausluvuilla ja arvottu-merkinnällä
 */
function laskeVertausluvut(ehdokkaat) {
  // Järjestetään ehdokkaat äänimäärän mukaan laskevasti
  const jarjestetyt = [...ehdokkaat].sort((a, b) => b.aanet - a.aanet);

  // Ryhmitellään ehdokkaat saman äänimäärän perusteella
  const ryhmat = [];
  let currentGroup = [];
  let currentVotes = jarjestetyt[0].aanet;

  jarjestetyt.forEach((ehdokas) => {
    if (ehdokas.aanet === currentVotes) {
      currentGroup.push(ehdokas);
    } else {
      // Saman äänimäärän saaneet arpoaan järjestyksen
      ryhmat.push(randomize(currentGroup));
      currentGroup = [ehdokas];
      currentVotes = ehdokas.aanet;
    }
  });

  // Lisää viimeinen ryhmä
  if (currentGroup.length > 0) {
    ryhmat.push(randomize(currentGroup));
  }

  // Yhdistetään kaikki ryhmät takaisin listaksi
  const jarjestettyJaArvottu = ryhmat.flat().map((ehdokas, index) => ({
    ...ehdokas,
    arvottu: true, // Kaikki samat äänimäärät saaneet saavat arvottu-merkinnän
    vertausluku: jarjestetyt.reduce((summa, ehdokas) => summa + ehdokas.aanet, 0) / (index + 1), // D'Hondt laskentakaava
  }));

  return jarjestettyJaArvottu;
}

export default laskeVertausluvut;
export { laskeVertausluvut };
