import { daneZKolej } from "./index.js";
import { daty } from "./index.js";
import { NameValue, NameStyle } from "./klasy.js";

let listaZamowienZbiorczaTab = [];
let selektorHanKon;

export const podajZamowienia = () => {
  let lista = [];
  let listaSuma = [];
  let listaLicznikow = [];
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
  let nakladySuma_20_100_licznik = 0;
  let nakladySuma_101_200_licznik = 0;
  let nakladySuma_201_300_licznik = 0;
  let nakladySuma_301_400_licznik = 0;
  let nakladySuma_401_500_licznik = 0;
  let nakladySuma_501_600_licznik = 0;
  let nakladySuma_601_700_licznik = 0;
  let nakladySuma_701_800_licznik = 0;
  let nakladySuma_801_900_licznik = 0;
  let nakladySuma_901_1000_licznik = 0;
  let nakladySuma_1001_2000_licznik = 0;
  let nakladySuma_2001_5000_licznik = 0;
  let nakladySuma_5001_licznik = 0;

  for (let i = 0; i < listaHandlowcowLubKontrahentow.length; i++) {
    lista = [];
    listaSuma = [];
    listaLicznikow = [];
    let handlowiecLubKontrahent = listaHandlowcowLubKontrahentow[i];
    listaLicznikow.push(
      new NameStyle("Ilość nakładów", {
        style: "background-color: #ffe6ff; color: #660066; font-weight: bold;",
      })
    );
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
    let iloscPlytHandlowiec = 0;

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
          nakladySuma_20_100_licznik++;
          naklady_20_100_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 101 &&
          daneZKolej[j].naklad <= 200
        ) {
          naklady_101_200_licznik++;
          nakladySuma_101_200_licznik++;
          naklady_101_200_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 201 &&
          daneZKolej[j].naklad <= 300
        ) {
          naklady_201_300_licznik++;
          nakladySuma_201_300_licznik++;
          naklady_201_300_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 301 &&
          daneZKolej[j].naklad <= 400
        ) {
          naklady_301_400_licznik++;
          nakladySuma_301_400_licznik++;
          naklady_301_400_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 401 &&
          daneZKolej[j].naklad <= 500
        ) {
          naklady_401_500_licznik++;
          nakladySuma_401_500_licznik++;
          naklady_401_500_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 501 &&
          daneZKolej[j].naklad <= 600
        ) {
          naklady_501_600_licznik++;
          nakladySuma_501_600_licznik++;
          naklady_501_600_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 601 &&
          daneZKolej[j].naklad <= 700
        ) {
          naklady_601_700_licznik++;
          nakladySuma_601_700_licznik;
          naklady_601_700_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 701 &&
          daneZKolej[j].naklad <= 800
        ) {
          naklady_701_800_licznik++;
          nakladySuma_701_800_licznik++;
          naklady_701_800_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 801 &&
          daneZKolej[j].naklad <= 900
        ) {
          naklady_801_900_licznik++;
          nakladySuma_801_900_licznik++;
          naklady_801_900_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 901 &&
          daneZKolej[j].naklad <= 1000
        ) {
          naklady_901_1000_licznik++;
          nakladySuma_901_1000_licznik++;
          naklady_901_1000_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 1001 &&
          daneZKolej[j].naklad <= 2000
        ) {
          naklady_1001_2000_licznik++;
          nakladySuma_1001_2000_licznik++;
          naklady_1001_2000_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 2001 &&
          daneZKolej[j].naklad <= 5000
        ) {
          naklady_2001_5000_licznik++;
          nakladySuma_2001_5000_licznik++;
          naklady_2001_5000_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
        if (
          handlowiecLubKontrahent == handlowiecLubKontrahentKolejka &&
          daneZKolej[j].naklad >= 5001
        ) {
          naklady_5001_licznik++;
          nakladySuma_5001_licznik++;
          naklady_5001_Suma += daneZKolej[j].naklad;
          iloscPlytHandlowiec += daneZKolej[j].naklad;
        }
      }
    }

    let sumaSum =
      naklady_20_100_Suma +
      naklady_101_200_Suma +
      naklady_201_300_Suma +
      naklady_301_400_Suma +
      naklady_401_500_Suma +
      naklady_501_600_Suma +
      naklady_601_700_Suma +
      naklady_701_800_Suma +
      naklady_801_900_Suma +
      naklady_901_1000_Suma +
      naklady_1001_2000_Suma +
      naklady_2001_5000_Suma +
      naklady_5001_Suma;

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

    let naklady_5001_SumaString = naklady_5001_Suma.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });
    let naklady_5001_SumaObj = new NameValue(
      naklady_5001_Suma,
      naklady_5001_SumaString
    );

    let sumaLicznikow =
      nakladySuma_20_100_licznik +
      nakladySuma_101_200_licznik +
      nakladySuma_201_300_licznik +
      nakladySuma_301_400_licznik +
      nakladySuma_401_500_licznik +
      nakladySuma_501_600_licznik +
      nakladySuma_601_700_licznik +
      nakladySuma_701_800_licznik +
      nakladySuma_801_900_licznik +
      nakladySuma_901_1000_licznik +
      nakladySuma_1001_2000_licznik +
      nakladySuma_2001_5000_licznik +
      nakladySuma_5001_licznik;

    let sumaSumString = sumaSum.toLocaleString("pl-PL", {
      useGrouping: "true",
      minimumFractionDigits: "0",
      maximumFractionDigits: "0",
    });
    let sumaSumObj = new NameValue(sumaSum, sumaSumString);

    let iloscPlytHandlowiecString = iloscPlytHandlowiec.toLocaleString(
      "pl-PL",
      {
        useGrouping: "true",
        minimumFractionDigits: "0",
        maximumFractionDigits: "0",
      }
    );
    let iloscPlytHandlowiecObj = new NameValue(
      iloscPlytHandlowiec,
      iloscPlytHandlowiecString
    );

    listaLicznikow.push(
      new NameStyle(nakladySuma_20_100_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_101_200_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_201_300_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_301_400_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_401_500_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_501_600_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_601_700_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_701_800_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_801_900_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_901_1000_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_1001_2000_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_2001_5000_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(nakladySuma_5001_licznik, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );
    listaLicznikow.push(
      new NameStyle(sumaLicznikow, {
        style: "background-color: #e6ffff; color: #004d4d",
      })
    );

    if (selektorHanKon == "Kontrahent" && iloscPlytHandlowiec > 0) {
      console.log(handlowiecLubKontrahent);
      lista.push(handlowiecLubKontrahent);
      lista.push(naklady_20_100_licznikObj);
      lista.push(naklady_101_200_licznikObj);
      lista.push(naklady_201_300_licznikObj);
      lista.push(naklady_301_400_licznikObj);
      lista.push(naklady_401_500_licznikObj);
      lista.push(naklady_501_600_licznikObj);
      lista.push(naklady_601_700_licznikObj);
      lista.push(naklady_701_800_licznikObj);
      lista.push(naklady_801_900_licznikObj);
      lista.push(naklady_901_1000_licznikObj);
      lista.push(naklady_1001_2000_licznikObj);
      lista.push(naklady_2001_5000_licznikObj);
      lista.push(naklady_5001_licznikObj);
      lista.push(iloscPlytHandlowiecObj);
      listaZamowienZbiorczaTab.push(lista);
    }
    if (selektorHanKon == "Handlowiec") {
      console.log(handlowiecLubKontrahent);
      lista.push(handlowiecLubKontrahent);
      lista.push(naklady_20_100_licznikObj);
      lista.push(naklady_101_200_licznikObj);
      lista.push(naklady_201_300_licznikObj);
      lista.push(naklady_301_400_licznikObj);
      lista.push(naklady_401_500_licznikObj);
      lista.push(naklady_501_600_licznikObj);
      lista.push(naklady_601_700_licznikObj);
      lista.push(naklady_701_800_licznikObj);
      lista.push(naklady_801_900_licznikObj);
      lista.push(naklady_901_1000_licznikObj);
      lista.push(naklady_1001_2000_licznikObj);
      lista.push(naklady_2001_5000_licznikObj);
      lista.push(naklady_5001_licznikObj);
      lista.push(iloscPlytHandlowiecObj);
      listaZamowienZbiorczaTab.push(lista);
    }

    listaSuma.push(
      new NameStyle("Ilość tytułów", {
        style: "background-color: #f2e6ff; color: #26004d; font-weight: bold;",
      })
    );
    listaSuma.push(naklady_20_100_SumaObj);
    listaSuma.push(naklady_101_200_SumaObj);
    listaSuma.push(naklady_201_300_SumaObj);
    listaSuma.push(naklady_301_400_SumaObj);
    listaSuma.push(naklady_401_500_SumaObj);
    listaSuma.push(naklady_501_600_SumaObj);
    listaSuma.push(naklady_601_700_SumaObj);
    listaSuma.push(naklady_701_800_SumaObj);
    listaSuma.push(naklady_801_900_SumaObj);
    listaSuma.push(naklady_901_1000_SumaObj);
    listaSuma.push(naklady_1001_2000_SumaObj);
    listaSuma.push(naklady_2001_5000_SumaObj);
    listaSuma.push(naklady_5001_SumaObj);
    listaSuma.push(sumaSumObj);
  }
  listaZamowienZbiorczaTab.push(listaLicznikow);
  listaZamowienZbiorczaTab.push(listaSuma);
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
  data.addColumn("number", "Łącznie płyt");

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

  var formatter1 = new google.visualization.ColorFormat();
  formatter1.addRange(0, 0.5, "#DC143C", null);
  formatter1.addRange(1, 100000, "#001a4d", "#ccddff");
  formatter1.format(data, 14);

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
