import laskeVertausluvut from "../vertausluku.js";
import ehdokasRekisteri from "../ehdokasRekisteri.js";

import { afterEach, beforeEach, describe, it, mock } from "node:test";
import assert from "node:assert/strict";

describe("laskeVertausluvut", () => {
  beforeEach(() => {
    const lista = [
      { numero: 101, nimi: "Maija Meikäläinen", aanet: 1 },
      { numero: 102, nimi: "Kalle Korhonen", aanet: 4 },
      { numero: 103, nimi: "Sari Virtanen", aanet: 2 },
      { numero: 104, nimi: "Jukka Jokinen", aanet: 5 },
      { numero: 105, nimi: "Anna Väisänen", aanet: 2 }
    ];

    mock.method(ehdokasRekisteri, 'haeLista', () => {
      return lista;
    });
  });

  afterEach(() => {
    mock.reset();
  });

  it('listan eniten ääniä saaneen ehdokkaan vertausluku on listan äänten summa', () => {
    const tulos = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    assert.equal(tulos[0].vertausluku, 14);
  });

  it('listan toiseksi eniten ääniä saaneen ehdokkaan vertausluku on puolet listan äänien summasta', () => {
    const tulos = laskeVertausluvut(ehdokasRekisteri.haeLista(1));
    assert.equal(tulos[1].vertausluku, 7);
  });

  it('saman äänimäärän saaneet ehdokkaat ovat satunnaisessa järjestyksessä ja arvotussa tilassa', () => {
    const tulos = laskeVertausluvut(ehdokasRekisteri.haeLista(1));

    const samaaAantaa = tulos.filter(ehdokas => ehdokas.aanet === 2);
    assert.strictEqual(samaaAantaa.length, 2);

    assert.ok(samaaAantaa[0].arvottu);
    assert.ok(samaaAantaa[1].arvottu);
    assert.notEqual(samaaAantaa[0].numero, samaaAantaa[1].numero);
  });
});
