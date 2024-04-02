import { daneZRaportu, daneZKolej } from "./index.js";
import { daty } from "./index.js";
import { NameValue } from "./klasy.js";

let listaZamowienZbiorczaTab = [];
let selektorHanKon;

export const podajZamowienia = () => {
  let lista = [];
  let listaSuma = [];
  listaZamowienZbiorczaTab = [];
  let listaHandlowcowLubKontrahentow = [];
  let listaHandlowcowLubKontrahentowSet = new Set();

  let selectedDataOd = $("#datepicker_5").val();
  let selectedDataDo = $("#datepicker_6").val();
  selektorHanKon = $("#kontrahent-handlowiec").val();

  if (selectedDataOd == "") {
    selectedDataOd = "2024-03-01";
  } else {
    selectedDataOd = $("#datepicker_5").val();
  }
  if (selectedDataDo == "") {
    selectedDataDo = `${daty.dzis}`;
  } else {
    selectedDataDo = $("#datepicker_6").val();
  }
  for (let i = 0; i < daneZKolej.length; i++) {
    if (selektorHanKon == "Handlowiec") {
      if (
        !(daneZKolej[i].handlowiec == "Jean-Rémi BEL") &&
        !(daneZKolej[i].handlowiec == "Nicolas Pinault")
      ) {
        listaHandlowcowLubKontrahentowSet.add(daneZKolej[i].handlowiec);
      }
    } else {
      listaHandlowcowLubKontrahentowSet.add(daneZKolej[i].kontrahent);
    }
  }

  for (let x of listaHandlowcowLubKontrahentowSet) {
    listaHandlowcowLubKontrahentow.push(x);
  }

  let naklady_20_100_Suma = 0;
  let naklady_101_200_Suma = 0;
  let naklady_201_300_Suma = 0;
  let naklady_301_400_Suma = 0;
  let naklady_401_500_Suma = 0;
  let naklady_501_600_Suma = 0;
  let naklady_601_700_Suma = 0;
  let naklady_701_800_Suma = 0;
  let naklady_801_900_Suma = 0;
  let naklady_901_1000_Suma = 0;
  let naklady_1001_2000_Suma = 0;
  let naklady_2001_5000_Suma = 0;
  let naklady_5001_Suma = 0;

  for (let i = 0; i < listaHandlowcowLubKontrahentow.length; i++) {
    lista = [];
    listaSuma = [];
    let handlowiecLubKontrahent = listaHandlowcowLubKontrahentow[i];
    lista.push(handlowiecLubKontrahent);
    listaSuma.push("Suma nakładów");
    let naklady_20_100_licznik = 0;
    let naklady_101_200_licznik = 0;
    let naklady_201_300_licznik = 0;
    let naklady_301_400_licznik = 0;
    let naklady_401_500_licznik = 0;
    let naklady_501_600_licznik = 0;
    let naklady_601_700_licznik = 0;
    let naklady_701_800_licznik = 0;
    let naklady_801_900_licznik = 0;
    let naklady_901_1000_licznik = 0;
    let naklady_1001_2000_licznik = 0;
    let naklady_2001_5000_licznik = 0;
    let naklady_5001_licznik = 0;

    for (let j = 0; j < daneZKolej.length; j++) {
      let dataWprowadzeniaZamowienia = new Date(
        daneZKolej[j].dataUtworzenia
      ).getTime();

      let handlowiecLubKontrahentKolejka;

      if (selektorHanKon == "Handlowiec") {
        handlowiecLubKontrahentKolejka = daneZKolej[j].handlowiec;
      } else {
        handlowiecLubKontrahentKolejka = daneZKolej[j].kontrahent;
      }

      if (
        dataWprowadzeniaZamowienia >= new Date(selectedDataOd).getTime() &&
        dataWprowadzeniaZamowienia <= new Date(selectedDataDo).getTime()
      ) {
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 20 &&
          daneZKolej[j].naklad <= 100
        ) {
          naklady_20_100_licznik++;
          naklady_20_100_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 101 &&
          daneZKolej[j].naklad <= 200
        ) {
          naklady_101_200_licznik++;
          naklady_101_200_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 201 &&
          daneZKolej[j].naklad <= 300
        ) {
          naklady_201_300_licznik++;
          naklady_201_300_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 301 &&
          daneZKolej[j].naklad <= 400
        ) {
          naklady_301_400_licznik++;
          naklady_301_400_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 401 &&
          daneZKolej[j].naklad <= 500
        ) {
          naklady_401_500_licznik++;
          naklady_401_500_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 501 &&
          daneZKolej[j].naklad <= 600
        ) {
          naklady_501_600_licznik++;
          naklady_501_600_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 601 &&
          daneZKolej[j].naklad <= 700
        ) {
          naklady_601_700_licznik++;
          naklady_601_700_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 701 &&
          daneZKolej[j].naklad <= 800
        ) {
          naklady_701_800_licznik++;
          naklady_701_800_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 801 &&
          daneZKolej[j].naklad <= 900
        ) {
          naklady_801_900_licznik++;
          naklady_801_900_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 901 &&
          daneZKolej[j].naklad <= 1000
        ) {
          naklady_901_1000_licznik++;
          naklady_901_1000_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 1001 &&
          daneZKolej[j].naklad <= 2000
        ) {
          naklady_1001_2000_licznik++;
          naklady_1001_2000_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 2001 &&
          daneZKolej[j].naklad <= 5000
        ) {
          naklady_2001_5000_licznik++;
          naklady_2001_5000_Suma += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 5001
        ) {
          naklady_5001_licznik++;
          naklady_5001_Suma += daneZKolej[j].naklad;
        }
      }
    }
    let naklady_20_100_licznikString = naklady_20_100_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_20_100_licznikObj = new NameValue(
      naklady_20_100_licznik,
      naklady_20_100_licznikString
    );

    lista.push(naklady_20_100_licznikObj);

    let naklady_20_100_SumaString = naklady_20_100_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_20_100_SumaObj = new NameValue(
      naklady_20_100_Suma,
      naklady_20_100_SumaString
    );

    listaSuma.push(naklady_20_100_SumaObj);

    let naklady_101_200_licznikString = naklady_101_200_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_101_200_licznikObj = new NameValue(
      naklady_101_200_licznik,
      naklady_101_200_licznikString
    );

    lista.push(naklady_101_200_licznikObj);

    let naklady_101_200_SumaString = naklady_101_200_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_101_200_SumaObj = new NameValue(
      naklady_101_200_Suma,
      naklady_101_200_SumaString
    );

    listaSuma.push(naklady_101_200_SumaObj);

    let naklady_201_300_licznikString = naklady_201_300_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_201_300_licznikObj = new NameValue(
      naklady_201_300_licznik,
      naklady_201_300_licznikString
    );

    lista.push(naklady_201_300_licznikObj);

    let naklady_201_300_SumaString = naklady_201_300_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_201_300_SumaObj = new NameValue(
      naklady_201_300_Suma,
      naklady_201_300_SumaString
    );

    listaSuma.push(naklady_201_300_SumaObj);

    let naklady_301_400_licznikString = naklady_301_400_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_301_400_licznikObj = new NameValue(
      naklady_301_400_licznik,
      naklady_301_400_licznikString
    );

    lista.push(naklady_301_400_licznikObj);

    let naklady_301_400_SumaString = naklady_301_400_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_301_400_SumaObj = new NameValue(
      naklady_301_400_Suma,
      naklady_301_400_SumaString
    );

    listaSuma.push(naklady_301_400_SumaObj);

    let naklady_401_500_licznikString = naklady_401_500_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_401_500_licznikObj = new NameValue(
      naklady_401_500_licznik,
      naklady_401_500_licznikString
    );

    lista.push(naklady_401_500_licznikObj);

    let naklady_401_500_SumaString = naklady_401_500_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_401_500_SumaObj = new NameValue(
      naklady_401_500_Suma,
      naklady_401_500_SumaString
    );

    listaSuma.push(naklady_401_500_SumaObj);

    let naklady_501_600_licznikString = naklady_501_600_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_501_600_licznikObj = new NameValue(
      naklady_501_600_licznik,
      naklady_501_600_licznikString
    );
    lista.push(naklady_501_600_licznikObj);

    let naklady_501_600_SumaString = naklady_501_600_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_501_600_SumaObj = new NameValue(
      naklady_501_600_Suma,
      naklady_501_600_SumaString
    );
    listaSuma.push(naklady_501_600_SumaObj);

    let naklady_601_700_licznikString = naklady_601_700_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_601_700_licznikObj = new NameValue(
      naklady_601_700_licznik,
      naklady_601_700_licznikString
    );
    lista.push(naklady_601_700_licznikObj);

    let naklady_601_700_SumaString = naklady_601_700_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_601_700_SumaObj = new NameValue(
      naklady_601_700_Suma,
      naklady_601_700_SumaString
    );

    listaSuma.push(naklady_601_700_SumaObj);

    let naklady_701_800_licznikString = naklady_701_800_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_701_800_licznikObj = new NameValue(
      naklady_701_800_licznik,
      naklady_701_800_licznikString
    );

    lista.push(naklady_701_800_licznikObj);

    let naklady_701_800_SumaString = naklady_701_800_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_701_800_SumaObj = new NameValue(
      naklady_701_800_Suma,
      naklady_701_800_SumaString
    );

    listaSuma.push(naklady_701_800_SumaObj);

    let naklady_801_900_licznikString = naklady_801_900_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_801_900_licznikObj = new NameValue(
      naklady_801_900_licznik,
      naklady_801_900_licznikString
    );

    lista.push(naklady_801_900_licznikObj);

    let naklady_801_900_SumaString = naklady_801_900_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_801_900_SumaObj = new NameValue(
      naklady_801_900_Suma,
      naklady_801_900_SumaString
    );

    listaSuma.push(naklady_801_900_SumaObj);

    let naklady_901_1000_licznikString =
      naklady_901_1000_licznik.toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      });
    let naklady_901_1000_licznikObj = new NameValue(
      naklady_901_1000_licznik,
      naklady_901_1000_licznikString
    );

    lista.push(naklady_901_1000_licznikObj);

    let naklady_901_1000_SumaString = naklady_901_1000_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_901_1000_SumaObj = new NameValue(
      naklady_901_1000_Suma,
      naklady_901_1000_SumaString
    );

    listaSuma.push(naklady_901_1000_SumaObj);

    let naklady_1001_2000_licznikString =
      naklady_1001_2000_licznik.toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      });
    let naklady_1001_2000_licznikObj = new NameValue(
      naklady_1001_2000_licznik,
      naklady_1001_2000_licznikString
    );
    lista.push(naklady_1001_2000_licznikObj);

    let naklady_1001_2000_SumaString = naklady_1001_2000_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_1001_2000_SumaObj = new NameValue(
      naklady_1001_2000_Suma,
      naklady_1001_2000_SumaString
    );
    listaSuma.push(naklady_1001_2000_SumaObj);

    let naklady_2001_5000_licznikString =
      naklady_2001_5000_licznik.toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      });
    let naklady_2001_5000_licznikObj = new NameValue(
      naklady_2001_5000_licznik,
      naklady_2001_5000_licznikString
    );
    lista.push(naklady_2001_5000_licznikObj);

    let naklady_2001_5000_SumaString = naklady_2001_5000_Suma.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_2001_5000_SumaObj = new NameValue(
      naklady_2001_5000_Suma,
      naklady_2001_5000_SumaString
    );

    listaSuma.push(naklady_2001_5000_SumaObj);

    let naklady_5001_licznikString = naklady_5001_licznik.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let naklady_5001_licznikObj = new NameValue(
      naklady_5001_licznik,
      naklady_5001_licznikString
    );
    lista.push(naklady_5001_licznikObj);

    let naklady_5001_SumaString = naklady_5001_Suma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });
    let naklady_5001_SumaObj = new NameValue(
      naklady_5001_Suma,
      naklady_5001_SumaString
    );
    listaSuma.push(naklady_5001_SumaObj);
    listaZamowienZbiorczaTab.push(lista);
  }

  listaZamowienZbiorczaTab.push(listaSuma);
  console.log(listaZamowienZbiorczaTab);
};

export function drawTable_ListaZamowienia() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", `${selektorHanKon}`);
  data.addColumn("number", "20-100");
  data.addColumn("number", "101-200");
  data.addColumn("number", "201-300");
  data.addColumn("number", "301-400");
  data.addColumn("number", "401-500");
  data.addColumn("number", "501-600");
  data.addColumn("number", "601-700");
  data.addColumn("number", "701-800");
  data.addColumn("number", "801-900");
  data.addColumn("number", "901-1000");
  data.addColumn("number", "1001-2000");
  data.addColumn("number", "2001-5000");
  data.addColumn("number", "5001...");

  data.addRows(listaZamowienZbiorczaTab);

  var table = new google.visualization.Table(
    document.getElementById("lista_zamowienia")
  );

  var formatter = new google.visualization.ColorFormat();
  formatter.addRange(0, 0.5, "#DC143C", null);
  formatter.addRange(1, 100000, "#006622", "#e6ffee");
  formatter.format(data, 1);
  formatter.format(data, 2);
  formatter.format(data, 3);
  formatter.format(data, 4);
  formatter.format(data, 5);
  formatter.format(data, 6);
  formatter.format(data, 7);
  formatter.format(data, 8);
  formatter.format(data, 9);
  formatter.format(data, 10);
  formatter.format(data, 11);
  formatter.format(data, 12);
  formatter.format(data, 13);

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
