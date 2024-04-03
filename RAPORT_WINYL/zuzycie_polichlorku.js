import { daneZRaportu } from "./index.js";
import { wagaParam, efektParamWaga } from "./polichlorek.js";
import { daty } from "./index.js";
import { NameValue } from "./klasy.js";

let listaZbiorczaTab = [];
let listaZbiorczaSumaTab = [];

let tpOkSuma = 0;
let tpNOkSuma = 0;
let tpWewOkSuma = 0;
let tpWewNOkSuma = 0;
let dobreSuma = 0;
let zleSuma = 0;
let qcSuma = 0;
let odpadSuma = 0;
let sumaKoloruSuma = 0;

export const podajZuzycie = () => {
  let listaKolorow = new Set();
  let listaKolorowTab = [];
  let lista = [];
  let listaSuma = [];
  listaZbiorczaTab = [];
  listaZbiorczaSumaTab = [];

  let selectedDataOd = $("#datepicker_7").val();
  let selectedDataDo = $("#datepicker_8").val();

  if (selectedDataOd == "") {
    selectedDataOd = "2024-03-01";
  } else {
    selectedDataOd = $("#datepicker_7").val();
  }
  if (selectedDataDo == "") {
    selectedDataDo = `${daty.dzis}`;
  } else {
    selectedDataDo = $("#datepicker_8").val();
  }

  for (let i = 0; i < daneZRaportu.length; i++) {
    listaKolorow.add(daneZRaportu[i].kolor_1);
    listaKolorow.add(daneZRaportu[i].kolor_2);
  }

  for (let x of listaKolorow) {
    listaKolorowTab.push(x);
  }

  tpOkSuma = 0;
  tpNOkSuma = 0;
  tpWewOkSuma = 0;
  tpWewNOkSuma = 0;
  dobreSuma = 0;
  zleSuma = 0;
  qcSuma = 0;
  odpadSuma = 0;
  sumaKoloruSuma = 0;

  for (let i = 0; i < listaKolorowTab.length; i++) {
    lista = [];
    listaSuma = [];
    let kolor = listaKolorowTab[i];
    lista.push(kolor);
    listaSuma.push("Suma zużycia");
    let tpOk = 0;
    let tpNOk = 0;
    let tpWewOk = 0;
    let tpWewNOk = 0;
    let dobre = 0;
    let zle = 0;
    let qc = 0;
    let odpad = 0;
    let sumaKoloru = 0;

    for (let j = 0; j < daneZRaportu.length; j++) {
      let dataWprowadzeniaZamowienia = new Date(daneZRaportu[j].data).getTime();

      if (
        dataWprowadzeniaZamowienia >= new Date(selectedDataOd).getTime() &&
        dataWprowadzeniaZamowienia <= new Date(selectedDataDo).getTime()
      ) {
        if (kolor == daneZRaportu[j].kolor_1) {
          odpad += daneZRaportu[j].odpad;
          odpadSuma += daneZRaportu[j].odpad;
          if (
            daneZRaportu[j].efekt == "Black" ||
            daneZRaportu[j].efekt == "Color" ||
            daneZRaportu[j].efekt == "Splatter" ||
            daneZRaportu[j].efekt == "----" ||
            daneZRaportu[j].efekt == "Inny"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              qc += daneZRaportu[j].qc * wagaParam.waga12_180;
              qcSuma += daneZRaportu[j].qc * wagaParam.waga12_180;
            } else if (daneZRaportu[j].format == "12 (140)") {
              qc += daneZRaportu[j].qc * wagaParam.waga12_140;
              qcSuma += daneZRaportu[j].qc * wagaParam.waga12_140;
            } else if (daneZRaportu[j].format == "10 (110)") {
              qc += daneZRaportu[j].qc * wagaParam.waga10;
              qcSuma += daneZRaportu[j].qc * wagaParam.waga10;
            } else if (daneZRaportu[j].format == "7 (42)") {
              qc += daneZRaportu[j].qc * wagaParam.waga7;
              qcSuma += daneZRaportu[j].qc * wagaParam.waga7;
            }
          }
          if (
            (daneZRaportu[j].efekt == "Black" ||
              daneZRaportu[j].efekt == "Color" ||
              daneZRaportu[j].efekt == "Splatter" ||
              daneZRaportu[j].efekt == "----" ||
              daneZRaportu[j].efekt == "Inny") &&
            daneZRaportu[j].rodzaj == "TP"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              tpOk += daneZRaportu[j].dobre * wagaParam.waga12_180;
              tpOkSuma += daneZRaportu[j].dobre * wagaParam.waga12_180;
              tpNOk += daneZRaportu[j].zle * wagaParam.waga12_180;
              tpNOkSuma += daneZRaportu[j].zle * wagaParam.waga12_180;
            } else if (daneZRaportu[j].format == "12 (140)") {
              tpOk += daneZRaportu[j].dobre * wagaParam.waga12_140;
              tpOkSuma += daneZRaportu[j].dobre * wagaParam.waga12_140;
              tpNOk += daneZRaportu[j].zle * wagaParam.waga12_140;
              tpNOkSuma += daneZRaportu[j].zle * wagaParam.waga12_140;
            } else if (daneZRaportu[j].format == "10 (110)") {
              tpOk += daneZRaportu[j].dobre * wagaParam.waga10;
              tpOkSuma += daneZRaportu[j].dobre * wagaParam.waga10;
              tpNOk += daneZRaportu[j].zle * wagaParam.waga10;
              tpNOkSuma += daneZRaportu[j].zle * wagaParam.waga10;
            } else if (daneZRaportu[j].format == "7 (42)") {
              tpOk += daneZRaportu[j].dobre * wagaParam.waga7;
              tpOkSuma += daneZRaportu[j].dobre * wagaParam.waga7;
              tpNOk += daneZRaportu[j].zle * wagaParam.waga7;
              tpNOkSuma += daneZRaportu[j].zle * wagaParam.waga7;
            }
          } else if (
            (daneZRaportu[j].efekt == "Black" ||
              daneZRaportu[j].efekt == "Color" ||
              daneZRaportu[j].efekt == "Splatter" ||
              daneZRaportu[j].efekt == "----" ||
              daneZRaportu[j].efekt == "Inny") &&
            daneZRaportu[j].rodzaj == "TP WEW"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              tpWewOk += daneZRaportu[j].dobre * wagaParam.waga12_180;
              tpWewOkSuma += daneZRaportu[j].dobre * wagaParam.waga12_180;
              tpWewNOk += daneZRaportu[j].zle * wagaParam.waga12_180;
              tpWewNOkSuma += daneZRaportu[j].zle * wagaParam.waga12_180;
            } else if (daneZRaportu[j].format == "12 (140)") {
              tpWewOk += daneZRaportu[j].dobre * wagaParam.waga12_140;
              tpWewOkSuma += daneZRaportu[j].dobre * wagaParam.waga12_140;
              tpWewNOk += daneZRaportu[j].zle * wagaParam.waga12_140;
              tpWewNOkSuma += daneZRaportu[j].zle * wagaParam.waga12_140;
            } else if (daneZRaportu[j].format == "10 (110)") {
              tpWewOk += daneZRaportu[j].dobre * wagaParam.waga10;
              tpWewOkSuma += daneZRaportu[j].dobre * wagaParam.waga10;
              tpWewNOk += daneZRaportu[j].zle * wagaParam.waga10;
              tpWewNOkSuma += daneZRaportu[j].zle * wagaParam.waga10;
            } else if (daneZRaportu[j].format == "7 (42)") {
              tpWewOk += daneZRaportu[j].dobre * wagaParam.waga7;
              tpWewOkSuma += daneZRaportu[j].dobre * wagaParam.waga7;
              tpWewNOk += daneZRaportu[j].zle * wagaParam.waga7;
              tpWewNOkSuma += daneZRaportu[j].zle * wagaParam.waga7;
            }
          } else if (
            (daneZRaportu[j].efekt == "Black" ||
              daneZRaportu[j].efekt == "Color" ||
              daneZRaportu[j].efekt == "Splatter" ||
              daneZRaportu[j].efekt == "----" ||
              daneZRaportu[j].efekt == "Inny") &&
            daneZRaportu[j].rodzaj == "Produkcja"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              dobre += daneZRaportu[j].dobre * wagaParam.waga12_180;
              dobreSuma += daneZRaportu[j].dobre * wagaParam.waga12_180;
              zle += daneZRaportu[j].zle * wagaParam.waga12_180;
              zleSuma += daneZRaportu[j].zle * wagaParam.waga12_180;
            } else if (daneZRaportu[j].format == "12 (140)") {
              dobre += daneZRaportu[j].dobre * wagaParam.waga12_140;
              dobreSuma += daneZRaportu[j].dobre * wagaParam.waga12_140;
              zle += daneZRaportu[j].zle * wagaParam.waga12_140;
              zleSuma += daneZRaportu[j].zle * wagaParam.waga12_140;
            } else if (daneZRaportu[j].format == "10 (110)") {
              dobre += daneZRaportu[j].dobre * wagaParam.waga10;
              dobreSuma += daneZRaportu[j].dobre * wagaParam.waga10;
              zle += daneZRaportu[j].zle * wagaParam.waga10;
              zleSuma += daneZRaportu[j].zle * wagaParam.waga10;
            } else if (daneZRaportu[j].format == "7 (42)") {
              dobre += daneZRaportu[j].dobre * wagaParam.waga7;
              dobreSuma += daneZRaportu[j].dobre * wagaParam.waga7;
              zle += daneZRaportu[j].zle * wagaParam.waga7;
              zleSuma += daneZRaportu[j].zle * wagaParam.waga7;
            }
          }
          if (daneZRaportu[j].efekt == "Marble") {
            if (daneZRaportu[j].format == "12 (180)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Marble_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Marble_1;
            } else if (daneZRaportu[j].format == "12 (140)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Marble_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Marble_1;
            } else if (daneZRaportu[j].format == "10 (110)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Marble_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Marble_1;
            } else if (daneZRaportu[j].format == "7 (42)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga7) /
                efektParamWaga.Marble_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga7) /
                efektParamWaga.Marble_1;
            }
          }

          if (
            daneZRaportu[j].efekt == "Marble" &&
            daneZRaportu[j].rodzaj == "Produkcja"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Marble_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Marble_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Marble_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Marble_1;
            } else if (daneZRaportu[j].format == "12 (140)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Marble_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Marble_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Marble_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Marble_1;
            } else if (daneZRaportu[j].format == "10 (110)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Marble_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Marble_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Marble_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Marble_1;
            } else if (daneZRaportu[j].format == "7 (42)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Marble_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Marble_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Marble_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Marble_1;
            }
          }
          if (
            daneZRaportu[j].efekt == "Bi Color" ||
            daneZRaportu[j].efekt == "Swirl"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "12 (140)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "10 (110)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "7 (42)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga7) / efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga7) / efektParamWaga.Swirl_1;
            }
          }

          if (
            (daneZRaportu[j].efekt == "Bi Color" ||
              daneZRaportu[j].efekt == "Swirl") &&
            daneZRaportu[j].rodzaj == "Produkcja"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "12 (140)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "10 (110)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "7 (42)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
            }
          }
        }
        if (kolor == daneZRaportu[j].kolor_2) {
          if (daneZRaportu[j].efekt == "Marble") {
            if (daneZRaportu[j].format == "12 (180)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Marble_2;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Marble_2;
            } else if (daneZRaportu[j].format == "12 (140)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Marble_2;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Marble_2;
            } else if (daneZRaportu[j].format == "10 (110)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Marble_2;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Marble_2;
            } else if (daneZRaportu[j].format == "7 (42)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga7) /
                efektParamWaga.Marble_2;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga7) /
                efektParamWaga.Marble_2;
            }
          }

          if (
            daneZRaportu[j].efekt == "Marble" &&
            daneZRaportu[j].rodzaj == "Produkcja"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Marble_2;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Marble_2;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Marble_2;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Marble_2;
            } else if (daneZRaportu[j].format == "12 (140)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Marble_2;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Marble_2;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Marble_2;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Marble_2;
            } else if (daneZRaportu[j].format == "10 (110)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Marble_2;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Marble_2;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Marble_2;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Marble_2;
            } else if (daneZRaportu[j].format == "7 (42)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Marble_2;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Marble_2;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Marble_2;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Marble_2;
            }
          }
          if (
            daneZRaportu[j].efekt == "Bi Color" ||
            daneZRaportu[j].efekt == "Swirl"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "12 (140)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "10 (110)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "7 (42)") {
              qc +=
                (daneZRaportu[j].qc * wagaParam.waga7) / efektParamWaga.Swirl_1;
              qcSuma +=
                (daneZRaportu[j].qc * wagaParam.waga7) / efektParamWaga.Swirl_1;
            }
          }

          if (
            (daneZRaportu[j].efekt == "Bi Color" ||
              daneZRaportu[j].efekt == "Swirl") &&
            daneZRaportu[j].rodzaj == "Produkcja"
          ) {
            if (daneZRaportu[j].format == "12 (180)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_180) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "12 (140)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga12_140) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "10 (110)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga10) /
                efektParamWaga.Swirl_1;
            } else if (daneZRaportu[j].format == "7 (42)") {
              dobre +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
              dobreSuma +=
                (daneZRaportu[j].dobre * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
              zle +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
              zleSuma +=
                (daneZRaportu[j].zle * wagaParam.waga7) /
                efektParamWaga.Swirl_1;
            }
          }
        }
      }
    }
    sumaKoloru = tpOk + tpNOk + tpWewOk + dobre + zle + qc + odpad;
    sumaKoloruSuma =
      tpOkSuma +
      tpNOkSuma +
      tpWewOkSuma +
      tpWewNOkSuma +
      dobreSuma +
      zleSuma +
      odpadSuma;

    let tpOkString = tpOk.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpOkObj = new NameValue(tpOk, tpOkString);

    lista.push(tpOkObj);

    let tpOkSumaString = tpOkSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpOkSumaObj = new NameValue(tpOkSuma, tpOkSumaString);

    listaSuma.push(tpOkSumaObj);

    let tpNOkString = tpNOk.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpNOkObj = new NameValue(tpNOk, tpNOkString);
    lista.push(tpNOkObj);

    let tpNOkSumaString = tpNOkSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpNOkSumaObj = new NameValue(tpNOkSuma, tpNOkSumaString);
    listaSuma.push(tpNOkSumaObj);

    let tpWewOkString = tpWewOk.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpWewOkObj = new NameValue(tpWewOk, tpWewOkString);
    lista.push(tpWewOkObj);

    let tpWewOkSumaString = tpWewOkSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpWewOkSumaObj = new NameValue(tpWewOkSuma, tpWewOkSumaString);
    listaSuma.push(tpWewOkSumaObj);

    let tpWewNOkString = tpWewNOk.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpWewNOkObj = new NameValue(tpWewNOk, tpWewNOkString);
    lista.push(tpWewNOkObj);

    let tpWewNOkSumaString = tpWewNOkSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let tpWewNOkSumaObj = new NameValue(tpWewNOkSuma, tpWewNOkSumaString);
    listaSuma.push(tpWewNOkSumaObj);

    let dobreString = dobre.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let dobreObj = new NameValue(dobre, dobreString);
    lista.push(dobreObj);

    let dobreSumaString = dobreSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let dobreSumaObj = new NameValue(dobreSuma, dobreSumaString);
    listaSuma.push(dobreSumaObj);

    let zleString = zle.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let zleObj = new NameValue(zle, zleString);
    lista.push(zleObj);

    let zleSumaString = zleSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let zleSumaObj = new NameValue(zleSuma, zleSumaString);
    listaSuma.push(zleSumaObj);

    let qcString = qc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let qcObj = new NameValue(qc, qcString);
    lista.push(qcObj);

    let qcSumaString = qcSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let qcSumaObj = new NameValue(qcSuma, qcSumaString);
    listaSuma.push(qcSumaObj);

    let odpadString = odpad.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let odpadObj = new NameValue(odpad, odpadString);
    lista.push(odpadObj);

    let odpadSumaString = odpadSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let odpadSumaObj = new NameValue(odpadSuma, odpadSumaString);
    listaSuma.push(odpadSumaObj);

    let sumaKoloruString = sumaKoloru.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let sumaKoloruObj = new NameValue(sumaKoloru, sumaKoloruString);
    lista.push(sumaKoloruObj);

    let sumaKoloruSumaString = sumaKoloruSuma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });
    let sumaKoloruSumaObj = new NameValue(sumaKoloruSuma, sumaKoloruSumaString);
    listaSuma.push(sumaKoloruSumaObj);

    listaZbiorczaTab.push(lista);
  }
  listaZbiorczaTab.push(listaSuma);
  console.log(listaZbiorczaTab);
};

let zuzycia;

const policzProcentyDoWykresu = () => {
  let zuzycieTpOk = ((tpOkSuma / sumaKoloruSuma) * 100).toFixed(2);
  let zuzycieTpNOk = ((tpNOkSuma / sumaKoloruSuma) * 100).toFixed(2);
  let zuzycieTpWewOk = ((tpWewOkSuma / sumaKoloruSuma) * 100).toFixed(2);
  let zuzycieTpWewNOk = ((tpWewNOkSuma / sumaKoloruSuma) * 100).toFixed(2);
  let zuzycieDobre = ((dobreSuma / sumaKoloruSuma) * 100).toFixed(2);
  let zuzycieZle = ((zleSuma / sumaKoloruSuma) * 100).toFixed(2);
  let zuzycieQc = ((qcSuma / sumaKoloruSuma) * 100).toFixed(2);
  let zuzycieOdpad = ((odpadSuma / sumaKoloruSuma) * 100).toFixed(2);

  zuzycia = {
    zuzycieTpOk: zuzycieTpOk,
    zuzycieTpNOk: zuzycieTpNOk,
    zuzycieTpWewOk: zuzycieTpWewOk,
    zuzycieTpWewNOk: zuzycieTpWewNOk,
    zuzycieDobre: zuzycieDobre,
    zuzycieZle: zuzycieZle,
    zuzycieQc: zuzycieQc,
    zuzycieOdpad: zuzycieOdpad,
  };

  return zuzycia;
};

export function drawTable_ListaZuzycie() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", `Kolor`);
  data.addColumn("number", "TP OK (kg)");
  data.addColumn("number", "TP ZŁE (kg)");
  data.addColumn("number", "TP WEW OK (kg)");
  data.addColumn("number", "TP WEW ZŁE (kg)");
  data.addColumn("number", "Dobre (kg)");
  data.addColumn("number", "Złe (kg)");
  data.addColumn("number", "QC (kg)");
  data.addColumn("number", "Odpad (kg)");
  data.addColumn("number", "SUMA (kg)");

  data.addRows(listaZbiorczaTab);

  var table = new google.visualization.Table(
    document.getElementById("lista_zuzycie")
  );

  var formatter = new google.visualization.ColorFormat();
  formatter.addRange(0, 0.01, "#DC143C", null);
  formatter.addRange(0.02, 100000, "#006622", "#e6ffee");
  formatter.format(data, 1);
  formatter.format(data, 2);
  formatter.format(data, 3);
  formatter.format(data, 4);
  formatter.format(data, 5);
  formatter.format(data, 6);
  formatter.format(data, 7);
  formatter.format(data, 8);

  var formatter1 = new google.visualization.ColorFormat();
  formatter1.addRange(0, 0.1, "#DC143C", null);
  formatter1.addRange(0.11, 100000, "#002233", "#e6f7ff");
  formatter1.format(data, 9);

  var cssClassNames = {
    headerRow: "headerRow",
    tableRow: "tableRow",
    oddTableRow: "oddTableRow",
  };

  table.draw(data, {
    allowHtml: true,
    showRowNumber: true,
    width: "100%",
    height: "100%",
    cssClassNames: cssClassNames,
  });
}

export function zuzyciaChart() {
  policzProcentyDoWykresu();
  console.log(zuzycia);
  var chart = new CanvasJS.Chart("chartContainer", {
    exportEnabled: true,
    animationEnabled: true,
    fontFamily: "calibri",
    title: {
      fontFamily: "calibri",
      text: "Podział procentowy zużycia",
    },
    legend: {
      cursor: "pointer",
      itemclick: explodePie,
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}%</strong>",
        indexLabel: "{name} - {y}%",
        dataPoints: [
          { y: zuzycia.zuzycieTpOk, name: "TP OK" },
          { y: zuzycia.zuzycieTpNOk, name: "TP ZŁE" },
          { y: zuzycia.zuzycieTpWewOk, name: "TP WEW OK" },
          { y: zuzycia.zuzycieTpWewNOk, name: "TP WEW ZŁE" },
          { y: zuzycia.zuzycieDobre, name: "Dobre", exploded: true },
          { y: zuzycia.zuzycieZle, name: "Złe" },
          { y: zuzycia.zuzycieOdpad, name: "Odpad" },
        ],
      },
    ],
  });
  chart.render();
}

function explodePie(e) {
  if (
    typeof e.dataSeries.dataPoints[e.dataPointIndex].exploded === "undefined" ||
    !e.dataSeries.dataPoints[e.dataPointIndex].exploded
  ) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
  e.chart.render();
}
