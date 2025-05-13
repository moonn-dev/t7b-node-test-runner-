/**
 * Arpoo (satunnaistaa) listan järjestyksen
 * @param {Object[]} lista - Lista, joka halutaan satunnaistaa
 * @returns {Object[]} - Satunnaistettu lista
 */
function randomize(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lista[i], lista[j]] = [lista[j], lista[i]]; 
    }
    return lista; // Palautetaan satunnaistettu lista
  }
  
  export { randomize };
  