import { daneZKolej } from "./index.js";
import { NameValue } from "./klasy.js";
import { daty } from "./index.js";

const wagaParam = {
  waga12_180: 0.21,
  waga12_140: 0.16,
  waga10: 0.13,
  waga7: 0.5,
};

const efektParamWaga = {
  Kolor: 1,
  Splatter_1: 1,
  Splatter_2: 0.1,
  Marble_1: 0.8,
  Marble_2: 0.3,
  Swirl_1: 0.5,
  Swirl_2: 0.5,
  Kolory_2_1: 0.5,
  Kolory_2_2: 0.5,
  null: 1,
};

let kolorZapotrzebowanieTabZbiorcza = [];
let listaAnomaliiTabZbiorcza = [];
let licznik = 0;

export const podajListePolichlorek = () => {
  let listaEfektow = new Set();
  let listaKolorow = new Set();
  let listaTab = [];
  let listaTabKoloryDoNakladu = [];
  let listaWszystkieKolorySet = new Set();
  let listaWszystkieKoloryTab = [];
  let nowaListaZTabelaPolichlorku = [];
  let policzoneTab = [];
  let kolor;
  let kolorZapotrzebowanie = 0;
  let kolorZapotrzebowanieTab = [];
  let daneZKolejkiNowe = [];
  let nowaKolejka;
  kolorZapotrzebowanieTabZbiorcza = [];
  listaAnomaliiTabZbiorcza = [];
  licznik++;

  for (let i = 0; i < daneZKolej.length; i++) {
    listaEfektow.add(daneZKolej[i].efekty);
    if (daneZKolej[i].kolory != null) {
      listaKolorow.add(daneZKolej[i].kolory.toString());
    }
  }

  for (let x of listaKolorow) {
    if (x != null) {
      listaTab.push(x);
    }
  }

  for (let i = 0; i < listaTab.length; i++) {
    if (licznik > 1) {
      listaTab[i] = listaTab[i].toString();
    }
    listaTabKoloryDoNakladu.push(listaTab[i].split(","));
  }

  for (let i = 0; i < listaTabKoloryDoNakladu.length; i++) {
    if (listaTabKoloryDoNakladu[i].length > 1) {
      for (let j = 0; j < listaTabKoloryDoNakladu[i].length; j++) {
        listaWszystkieKolorySet.add(listaTabKoloryDoNakladu[i][j]);
      }
    } else {
      listaWszystkieKolorySet.add(listaTabKoloryDoNakladu[i][0]);
    }
  }

  for (let x of listaWszystkieKolorySet) {
    listaWszystkieKoloryTab.push(x);
  }
  console.log(listaWszystkieKoloryTab);

  let selectedDataOd = $("#datepicker_3").val();
  let selectedDataDo = $("#datepicker_4").val();

  if (selectedDataOd == "") {
    selectedDataOd = "2024-03-01";
  } else {
    selectedDataOd = $("#datepicker_3").val();
  }
  if (selectedDataDo == "") {
    selectedDataDo = `${daty.dzis}`;
  } else {
    selectedDataDo = $("#datepicker_4").val();
  }

  for (let i = 0; i < daneZKolej.length; i++) {
    nowaKolejka = daneZKolej[i];

    daneZKolejkiNowe.push(nowaKolejka);

    let dataWprowadzeniaZamowienia = new Date(
      daneZKolejkiNowe[i].dataUtworzenia
    ).getTime();
    if (
      daneZKolejkiNowe[i].kolory != null &&
      dataWprowadzeniaZamowienia >= new Date(selectedDataOd).getTime() &&
      dataWprowadzeniaZamowienia <= new Date(selectedDataDo).getTime()
    ) {
      if (licznik > 1) {
        daneZKolejkiNowe[i].kolory = daneZKolejkiNowe[i].kolory.toString();
      }
      daneZKolejkiNowe[i].kolory = daneZKolejkiNowe[i].kolory.split(",");
      nowaListaZTabelaPolichlorku.push(daneZKolejkiNowe[i]);
    }
  }

  for (let i = 0; i < nowaListaZTabelaPolichlorku.length; i++) {
    let listaAnomaliiTab = [];
    let przyczynaAnomalii;
    let tytulProdukcji;
    let handlowiec;
    let bokowiec;

    if (nowaListaZTabelaPolichlorku[i].efekty == "Inny") {
      tytulProdukcji = nowaListaZTabelaPolichlorku[i].tytul;
      handlowiec = nowaListaZTabelaPolichlorku[i].handlowiec;
      bokowiec = nowaListaZTabelaPolichlorku[i].osobaBok;
      przyczynaAnomalii = "Wpisany Efekt = INNY";
      listaAnomaliiTab.push(tytulProdukcji);
      listaAnomaliiTab.push(przyczynaAnomalii);
      listaAnomaliiTab.push(handlowiec);
      listaAnomaliiTab.push(bokowiec);
      listaAnomaliiTabZbiorcza.push(listaAnomaliiTab);
      listaAnomaliiTab = [];
    }
    if (nowaListaZTabelaPolichlorku[i].efekty == null) {
      tytulProdukcji = nowaListaZTabelaPolichlorku[i].tytul;
      handlowiec = nowaListaZTabelaPolichlorku[i].handlowiec;
      bokowiec = nowaListaZTabelaPolichlorku[i].osobaBok;
      przyczynaAnomalii = "Brak wpisanego Efektu";
      listaAnomaliiTab.push(tytulProdukcji);
      listaAnomaliiTab.push(przyczynaAnomalii);
      listaAnomaliiTab.push(handlowiec);
      listaAnomaliiTab.push(bokowiec);
      listaAnomaliiTabZbiorcza.push(listaAnomaliiTab);
      listaAnomaliiTab = [];
    }
    if (nowaListaZTabelaPolichlorku[i].kolory.length > 2) {
      tytulProdukcji = nowaListaZTabelaPolichlorku[i].tytul;
      handlowiec = nowaListaZTabelaPolichlorku[i].handlowiec;
      bokowiec = nowaListaZTabelaPolichlorku[i].osobaBok;
      przyczynaAnomalii = "Ilość kolorów więcej niż 2";
      listaAnomaliiTab.push(tytulProdukcji);
      listaAnomaliiTab.push(przyczynaAnomalii);
      listaAnomaliiTab.push(handlowiec);
      listaAnomaliiTab.push(bokowiec);
      listaAnomaliiTabZbiorcza.push(listaAnomaliiTab);
      listaAnomaliiTab = [];
    }
    if (nowaListaZTabelaPolichlorku[i].naklad < 50) {
      tytulProdukcji = nowaListaZTabelaPolichlorku[i].tytul;
      handlowiec = nowaListaZTabelaPolichlorku[i].handlowiec;
      bokowiec = nowaListaZTabelaPolichlorku[i].osobaBok;
      przyczynaAnomalii = "Podejrzanie mały nakład (mniejszy niż 50)";
      listaAnomaliiTab.push(tytulProdukcji);
      listaAnomaliiTab.push(przyczynaAnomalii);
      listaAnomaliiTab.push(handlowiec);
      listaAnomaliiTab.push(bokowiec);
      listaAnomaliiTabZbiorcza.push(listaAnomaliiTab);
      listaAnomaliiTab = [];
    }
    if (nowaListaZTabelaPolichlorku[i].kolory == "") {
      tytulProdukcji = nowaListaZTabelaPolichlorku[i].tytul;
      handlowiec = nowaListaZTabelaPolichlorku[i].handlowiec;
      bokowiec = nowaListaZTabelaPolichlorku[i].osobaBok;
      przyczynaAnomalii = "Brak wpisanego Koloru";
      listaAnomaliiTab.push(tytulProdukcji);
      listaAnomaliiTab.push(przyczynaAnomalii);
      listaAnomaliiTab.push(handlowiec);
      listaAnomaliiTab.push(bokowiec);
      listaAnomaliiTabZbiorcza.push(listaAnomaliiTab);
      listaAnomaliiTab = [];
    } else {
      policzoneTab.push(nowaListaZTabelaPolichlorku[i]);
    }
  }
  console.log(listaAnomaliiTabZbiorcza);

  for (let i = 0; i < listaWszystkieKoloryTab.length; i++) {
    kolorZapotrzebowanieTab = [];
    kolor = listaWszystkieKoloryTab[i];
    kolorZapotrzebowanie = 0;

    for (let j = 0; j < policzoneTab.length; j++) {
      if (
        kolor == policzoneTab[j].kolory[0] &&
        policzoneTab[j].efekty == "Kolor"
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie += wagaParam.waga12_180 * policzoneTab[j].naklad;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie += wagaParam.waga12_140 * policzoneTab[j].naklad;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie += wagaParam.waga10 * policzoneTab[j].naklad;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie += wagaParam.waga7 * policzoneTab[j].naklad;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[0] &&
        policzoneTab[j].efekty == "Marble "
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Marble_1;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Marble_1;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 * policzoneTab[j].naklad * efektParamWaga.Marble_1;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 * policzoneTab[j].naklad * efektParamWaga.Marble_1;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[0] &&
        policzoneTab[j].efekty == "Splatter"
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_1;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_1;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_1;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_1;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[0] &&
        policzoneTab[j].efekty == "Swirl"
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Swirl_1;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Swirl_1;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 * policzoneTab[j].naklad * efektParamWaga.Swirl_1;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 * policzoneTab[j].naklad * efektParamWaga.Swirl_1;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[0] &&
        policzoneTab[j].efekty == "2 kolory"
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_1;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_1;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_1;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_1;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[1] &&
        policzoneTab[j].efekty == "Marble "
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Marble_2;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Marble_2;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 * policzoneTab[j].naklad * efektParamWaga.Marble_2;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 * policzoneTab[j].naklad * efektParamWaga.Marble_2;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[1] &&
        policzoneTab[j].efekty == "Splatter"
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_2;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_2;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_2;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 *
            policzoneTab[j].naklad *
            efektParamWaga.Splatter_2;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[1] &&
        policzoneTab[j].efekty == "Swirl"
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Swirl_2;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Swirl_2;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 * policzoneTab[j].naklad * efektParamWaga.Swirl_2;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 * policzoneTab[j].naklad * efektParamWaga.Swirl_2;
        }
      }
      if (
        kolor == policzoneTab[j].kolory[1] &&
        policzoneTab[j].efekty == "2 kolory"
      ) {
        if (policzoneTab[j].typNosnika == "12/180") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_180 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_2;
        }
        if (policzoneTab[j].typNosnika == "12/140") {
          kolorZapotrzebowanie +=
            wagaParam.waga12_140 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_2;
        }
        if (policzoneTab[j].typNosnika == "10/110") {
          kolorZapotrzebowanie +=
            wagaParam.waga10 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_2;
        }
        if (
          policzoneTab[j].typNosnika == "7/42/45" ||
          policzoneTab[j].typNosnika == "7/70/45"
        ) {
          kolorZapotrzebowanie +=
            wagaParam.waga7 *
            policzoneTab[j].naklad *
            efektParamWaga.Kolory_2_2;
        }
      }
    }

    let kolorZapotrzebowanieString = kolorZapotrzebowanie.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      }
    );
    let kolorZapotrzebowanieObj = new NameValue(
      kolorZapotrzebowanie,
      kolorZapotrzebowanieString
    );

    if (kolorZapotrzebowanie > 0) {
      kolorZapotrzebowanieTab.push(kolor);
      kolorZapotrzebowanieTab.push(kolorZapotrzebowanieObj);
      kolorZapotrzebowanieTabZbiorcza.push(kolorZapotrzebowanieTab);
    }
  }
};

export function drawTable_ListaPolichlorek() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Kolor");
  data.addColumn("number", "Zapotrzebowanie (kg)");

  data.addRows(kolorZapotrzebowanieTabZbiorcza);

  var table = new google.visualization.Table(
    document.getElementById("lista_polichlorek")
  );

  var formatter = new google.visualization.ColorFormat();
  formatter.addRange(0, 1, "#DC143C", null);
  formatter.format(data, 1);

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
export function drawTable_ListaAnomalii() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Tytuł produkcji");
  data.addColumn("string", "Anomalia");
  data.addColumn("string", "Handlowiec");
  data.addColumn("string", "BOK");

  data.addRows(listaAnomaliiTabZbiorcza);

  var table = new google.visualization.Table(
    document.getElementById("lista_anomalii")
  );

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
