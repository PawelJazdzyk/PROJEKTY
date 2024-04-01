import { daneZRaportu, daneZKolej } from "./index.js";
import { NameValue, NameStyle } from "./klasy.js";
import { daty } from "./index.js";

let listaVZbiorczaTab;
let listaVZbiorczaTabToBar;

export const podajListe = () => {
  let selectedDataOd = $("#datepicker_1").val();
  let selectedDataDo = $("#datepicker_2").val();

  if (selectedDataOd == "") {
    selectedDataOd = "2024-03-01";
  } else {
    selectedDataOd = $("#datepicker_1").val();
  }
  if (selectedDataDo == "") {
    selectedDataDo = `${daty.dzis}`;
  } else {
    selectedDataDo = $("#datepicker_2").val();
  }

  let listaV = new Set();
  let listaVTab = [];
  listaVZbiorczaTab = [];
  listaVZbiorczaTabToBar = [];
  let help = 0;

  for (let i = 0; i < daneZRaportu.length; i++) {
    listaV.add(daneZRaportu[i].produkcja);
  }

  for (let x of listaV) {
    listaVTab.push(x);
  }

  let nrProdukcji;
  let listaVList;

  for (let i = 0; i < listaVTab.length; i++) {
    listaVList = [];
    let tp = false;
    let tpDobreIlosc = 0;
    let tpZleIlosc = 0;
    let tpKrotnosc = 0;
    let tpWew = false;
    let tpWewDobreIlosc = 0;
    let tpWewZleIlosc = 0;
    let tpWewKrotnosc = 0;
    let nakladOryginal = 0;
    let produkcja = false;
    let doKoncaNakladu = 0;
    let produkcjaDobreIlosc = 0;
    let produkcjaZleIlosc = 0;
    let produkcjaZleProcent = 0;
    let produkcjaKrotnosc = 0;
    let odpad = 0;
    let qc = 0;
    let wagaPlacka = 0;
    let wagaPlackaKrotnosc = 0;
    let wagaPlyty = 0;
    let wagaPlytyKrotnosc = 0;
    let dataProdukcji;
    let format;
    let efekt;
    let czas = 0;
    nrProdukcji = listaVTab[i];
    listaVList.push(nrProdukcji);

    for (let j = 0; j < daneZRaportu.length; j++) {
      if (nrProdukcji == daneZRaportu[j].produkcja) {
        dataProdukcji = daneZRaportu[j].data;
        format = daneZRaportu[j].format;

        if (daneZRaportu[j].rodzaj == "TP") {
          tp = true;
          tpDobreIlosc += daneZRaportu[j].dobre;
          tpZleIlosc += daneZRaportu[j].zle;
          tpKrotnosc++;
          odpad += daneZRaportu[j].odpad;
          qc += daneZRaportu[j].qc;
          wagaPlacka += daneZRaportu[j].waga_placka;
          wagaPlackaKrotnosc++;
          wagaPlyty += daneZRaportu[j].waga_plyty;
          wagaPlytyKrotnosc++;
          efekt = daneZRaportu[j].efekt;
          czas += daneZRaportu[j].czas;
        }
        if (daneZRaportu[j].rodzaj == "TP WEW") {
          tpWew = true;
          tpWewDobreIlosc += daneZRaportu[j].dobre;
          tpWewZleIlosc += daneZRaportu[j].zle;
          tpWewKrotnosc++;
          odpad += daneZRaportu[j].odpad;
          qc += daneZRaportu[j].qc;
          wagaPlacka += daneZRaportu[j].waga_placka;
          wagaPlackaKrotnosc++;
          wagaPlyty += daneZRaportu[j].waga_plyty;
          wagaPlytyKrotnosc++;
          efekt = daneZRaportu[j].efekt;
          czas += daneZRaportu[j].czas;
        }
        if (daneZRaportu[j].rodzaj == "Produkcja") {
          produkcja = true;
          produkcjaDobreIlosc += daneZRaportu[j].dobre;
          produkcjaZleIlosc += daneZRaportu[j].zle;
          produkcjaKrotnosc++;
          odpad += daneZRaportu[j].odpad;
          qc += daneZRaportu[j].qc;
          wagaPlacka += daneZRaportu[j].waga_placka;
          wagaPlackaKrotnosc++;
          wagaPlyty += daneZRaportu[j].waga_plyty;
          wagaPlytyKrotnosc++;
          efekt = daneZRaportu[j].efekt;
          czas += daneZRaportu[j].czas;
        }
      }
    }

    for (let k = 0; k < daneZKolej.length; k++) {
      if (daneZKolej[k].tytul.includes(nrProdukcji) == true) {
        help++;
        nakladOryginal = daneZKolej[k].naklad;
      }
    }

    let nakladOryginalString = nakladOryginal.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let nakladOryginalObj = new NameValue(nakladOryginal, nakladOryginalString);

    listaVList.push(nakladOryginalObj);

    wagaPlacka = wagaPlacka / wagaPlackaKrotnosc;
    wagaPlyty = wagaPlyty / wagaPlytyKrotnosc;

    listaVList.push(dataProdukcji);

    if (tp == false) {
      listaVList.push(
        new NameStyle(tp, {
          style: "color: #FFB6C1;",
        })
      );
    } else {
      listaVList.push(
        new NameStyle(tp, {
          style: "color: #2E8B57; background-color: #ccffdd",
        })
      );
    }

    let tpDobreIloscString = tpDobreIlosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let tpDobreIloscObj = new NameValue(tpDobreIlosc, tpDobreIloscString);

    listaVList.push(tpDobreIloscObj);

    let tpZleIloscString = tpZleIlosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let tpZleIloscObj = new NameValue(tpZleIlosc, tpZleIloscString);

    listaVList.push(tpZleIloscObj);

    let tpKrotnoscString = tpKrotnosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let tpKrotnoscObj = new NameValue(tpKrotnosc, tpKrotnoscString);

    listaVList.push(tpKrotnoscObj);

    if (tpWew == false) {
      listaVList.push(
        new NameStyle(tpWew, {
          style: "color: #FFB6C1;",
        })
      );
    } else {
      listaVList.push(
        new NameStyle(tpWew, {
          style: "color: #2E8B57; background-color: #ccffdd",
        })
      );
    }

    let tpWewDobreIloscString = tpWewDobreIlosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let tpWewDobreIloscObj = new NameValue(
      tpWewDobreIlosc,
      tpWewDobreIloscString
    );

    listaVList.push(tpWewDobreIloscObj);

    let tpWewZleIloscString = tpWewZleIlosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let tpWewZleIloscObj = new NameValue(tpWewZleIlosc, tpWewZleIloscString);

    listaVList.push(tpWewZleIloscObj);

    let tpWewKrotnoscString = tpWewKrotnosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let tpWewKrotnoscObj = new NameValue(tpWewKrotnosc, tpWewKrotnoscString);

    listaVList.push(tpWewKrotnoscObj);

    if (produkcja == false) {
      listaVList.push(
        new NameStyle(produkcja, {
          style: "color: #FFB6C1;",
        })
      );
    } else {
      listaVList.push(
        new NameStyle(produkcja, {
          style: "color: #2E8B57; background-color: #ccffdd",
        })
      );
    }

    let produkcjaDobreIloscString = produkcjaDobreIlosc.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );

    let produkcjaDobreIloscObj = new NameValue(
      produkcjaDobreIlosc,
      produkcjaDobreIloscString
    );

    listaVList.push(produkcjaDobreIloscObj);

    doKoncaNakladu = produkcjaDobreIlosc - nakladOryginal;

    if (nakladOryginal == 0) {
      doKoncaNakladu = 0;
    }

    let doKoncaNakladuString = doKoncaNakladu.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let doKoncaNakladuObj = new NameValue(doKoncaNakladu, doKoncaNakladuString);

    listaVList.push(doKoncaNakladuObj);

    let produkcjaZleIloscString = produkcjaZleIlosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let produkcjaZleIloscObj = new NameValue(
      produkcjaZleIlosc,
      produkcjaZleIloscString
    );

    listaVList.push(produkcjaZleIloscObj);

    produkcjaZleProcent = produkcjaZleIlosc / produkcjaDobreIlosc;

    if (Number.isNaN(produkcjaZleProcent)) {
      produkcjaZleProcent = 0;
    }

    let produkcjaZleProcentString = `${(
      produkcjaZleProcent * 100
    ).toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    })}%`;

    let produkcjaZleProcentObj = new NameValue(
      produkcjaZleProcent,
      produkcjaZleProcentString
    );

    listaVList.push(produkcjaZleProcentObj);

    let produkcjaKrotnoscString = produkcjaKrotnosc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let produkcjaKrotnoscObj = new NameValue(
      produkcjaKrotnosc,
      produkcjaKrotnoscString
    );

    listaVList.push(produkcjaKrotnoscObj);

    let odpadString = odpad.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "2",
      maximumFractionDigits: "2",
    });

    let odpadObj = new NameValue(odpad, odpadString);

    listaVList.push(odpadObj);

    let qcString = qc.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let qcObj = new NameValue(qc, qcString);

    listaVList.push(qcObj);

    let wagaPlackaString = wagaPlacka.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "3",
      maximumFractionDigits: "3",
    });

    let wagaPlackaObj = new NameValue(wagaPlacka, wagaPlackaString);

    listaVList.push(wagaPlackaObj);

    let wagaPlytyString = wagaPlyty.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "3",
      maximumFractionDigits: "3",
    });

    let wagaPlytyObj = new NameValue(wagaPlyty, wagaPlytyString);

    listaVList.push(wagaPlytyObj);
    listaVList.push(format);
    listaVList.push(efekt);

    let czasString = czas.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });

    let czasObj = new NameValue(czas, czasString);

    listaVList.push(czasObj);

    listaVZbiorczaTab.push(listaVList);
  }

  for (let i = 0; i < listaVZbiorczaTab.length; i++) {
    let dataWpisu = new Date(listaVZbiorczaTab[i][2]).getTime();

    if (
      dataWpisu >= new Date(selectedDataOd).getTime() &&
      dataWpisu <= new Date(selectedDataDo).getTime()
    ) {
      listaVZbiorczaTabToBar.push(listaVZbiorczaTab[i]);
    }
  }

  console.log(listaVZbiorczaTabToBar);
};

export function drawTable_ListaProdukcji() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Numer Produkcji");
  data.addColumn("number", "Nakład");
  data.addColumn("string", "Data Tłoczenia");
  data.addColumn("boolean", "TP");
  data.addColumn("number", "TP OK");
  data.addColumn("number", "TP Złe");
  data.addColumn("number", "TP x ");
  data.addColumn("boolean", "TP W");
  data.addColumn("number", "TP W OK");
  data.addColumn("number", "TP W Złe");
  data.addColumn("number", "TP W x ");
  data.addColumn("boolean", "Prod");
  data.addColumn("number", "Dobre");
  data.addColumn("number", "Górka");
  data.addColumn("number", "Złe");
  data.addColumn("number", "Złe %");
  data.addColumn("number", "Wpisów");
  data.addColumn("number", "Odpad");
  data.addColumn("number", "QC");
  data.addColumn("number", "Placek");
  data.addColumn("number", "Płyta");
  data.addColumn("string", "Format");
  data.addColumn("string", "Efekt");
  data.addColumn("number", "Czas (min)");
  data.addRows(listaVZbiorczaTabToBar);

  var table = new google.visualization.Table(
    document.getElementById("lista_table")
  );

  var formatter = new google.visualization.ColorFormat();
  formatter.addRange(0, 1, "#DC143C", null);
  formatter.format(data, 1);

  var formatter1 = new google.visualization.ColorFormat();
  formatter1.addRange(0, 1, "#DCDCDC", null);
  formatter1.format(data, 4);

  var formatter2 = new google.visualization.ColorFormat();
  formatter2.addRange(0, 1, "#DCDCDC", null);
  formatter2.format(data, 5);

  var formatter3 = new google.visualization.ColorFormat();
  formatter3.addRange(0, 1, "#DCDCDC", null);
  formatter3.addRange(2, 1000, "#DC143C", "#FFF0F5");
  formatter3.format(data, 6);

  var formatter4 = new google.visualization.ColorFormat();
  formatter4.addRange(0, 1, "#DCDCDC", null);
  formatter4.format(data, 8);

  var formatter5 = new google.visualization.ColorFormat();
  formatter5.addRange(0, 1, "#DCDCDC", null);
  formatter5.format(data, 9);

  var formatter6 = new google.visualization.ColorFormat();
  formatter6.addRange(0, 1, "#DCDCDC", null);
  formatter6.addRange(2, 1000, "#DC143C", "#FFF0F5");
  formatter6.format(data, 10);

  var formatter7 = new google.visualization.ColorFormat();
  formatter7.addRange(0, 1, "#DCDCDC", null);
  formatter7.format(data, 12);

  var formatter8 = new google.visualization.ColorFormat();
  formatter8.addRange(0, 1, "#DCDCDC", null);
  formatter8.format(data, 14);

  var formatter9 = new google.visualization.ColorFormat();
  formatter9.addRange(0, 1, "#DCDCDC", null);
  formatter9.addRange(2, 1000, "#004d80", "#e6f5ff");
  formatter9.format(data, 16);

  var formatter10 = new google.visualization.ColorFormat();
  formatter10.addRange(0, 0.01, "#DCDCDC", null);
  formatter10.format(data, 17);

  var formatter11 = new google.visualization.ColorFormat();
  formatter11.addRange(0, 1, "#DCDCDC", null);
  formatter11.format(data, 18);

  var formatter12 = new google.visualization.ColorFormat();
  formatter12.addRange(0, 0.01, "#DCDCDC", null);
  formatter12.format(data, 19);

  var formatter13 = new google.visualization.ColorFormat();
  formatter13.addRange(0, 0.01, "#DCDCDC", null);
  formatter13.format(data, 20);

  var formatter14 = new google.visualization.ColorFormat();
  formatter14.addRange(0, 1, "#DCDCDC", null);
  formatter14.format(data, 23);

  var formatter15 = new google.visualization.ColorFormat();
  formatter15.addRange("7 (42)", null, "#330033", "#ffe6ff");
  formatter15.addRange("12 (180)", null, "#001a00", "#e6ffe6");
  formatter15.addRange("12 (140)", null, "#001a33", "#e6f2ff");
  formatter15.addRange("10 (110)", null, "#1a0d00", "#fff2e6");
  formatter15.format(data, 21);

  var formatter16 = new google.visualization.ColorFormat();
  formatter16.addRange(0, 0.01, "#DCDCDC", null);
  formatter16.addRange(0.051, 0.09, "#ff0000", null);
  formatter16.addRange(0.1, 1, "#ff0000", "#ffe6e6");
  formatter16.format(data, 15);

  var formatter17 = new google.visualization.ColorFormat();
  formatter17.addRange(-1000, 0, "#FDD835", null);
  formatter17.addRange(1, 1000, "#2E7D32", null);
  formatter17.format(data, 13);

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

  //google.visualization.events.addListener(table, "select", selectHandler);

  //   function selectHandler() {
  //     alert(`    Nr Produkcji: ${data.getValue(table.getSelection()[0].row, 0)}
  //     Nakład: ${data.getValue(table.getSelection()[0].row, 1)}
  //     Data tłoczenia: ${data.getValue(table.getSelection()[0].row, 2)}`);
  //   }
}
