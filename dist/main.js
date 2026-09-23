"use strict";
const sachovnica = document.getElementById("sachovnica");
if (sachovnica === null) {
    throw new Error("Kontajner sachovnice neexistuje.");
}
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (let riadok = 0; riadok < 8; riadok++) {
    for (let stlpec = 0; stlpec < 8; stlpec++) {
        const policko = document.createElement("div");
        policko.classList.add("policko");
        if ((riadok + stlpec) % 2 === 0) {
            policko.classList.add("biele");
        }
        else {
            policko.classList.add("cierne");
        }
        if (riadok === 7) {
            const znak = document.createElement("div");
            znak.classList.add("suradnica", "pismeno");
            znak.textContent = letters[stlpec];
            policko.append(znak);
        }
        if (stlpec === 0) {
            const cislo = document.createElement("div");
            cislo.classList.add("suradnica", "cislo");
            cislo.textContent = (8 - riadok).toString();
            policko.append(cislo);
        }
        sachovnica.append(policko);
    }
}
