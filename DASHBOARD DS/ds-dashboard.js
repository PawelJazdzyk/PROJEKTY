$(document).ready(function () {
  let handlowiec = "Lucyna Kozicka";
  let target = [
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
    1234567, 1234567, 1234567, 1234567,
  ];
  let ms;
  let mis;
  let di;
  let koncowkiMiesiaca = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 29, 31, 30, 31, 30, 31,
    31, 30, 31, 30, 31,
  ];
  let month = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
    "Styczeń",
  ];

  let d = new Date().getDate();
  let m = new Date().getMonth();
  let y = new Date().getFullYear();
  let t = new Date().getHours();
  let mi = new Date().getMinutes();

  if (d >= 10) {
    di = d;
  } else {
    di = `0${d}`;
  }

  if (m >= 9) {
    ms = m + 1;
  } else {
    ms = `0${m + 1}`;
  }

  if (mi >= 10) {
    mis = mi;
  } else {
    mis = `0${mi}`;
  }
  let displayDzis;
  let dzis = `${y}-${ms}-${di}`;
  console.log("miesiąć" + m);
  console.log(dzis + "DZIŚ 99");
  displayDzis = `${di}-${ms}-${y}`;

  let dodatek = 0;

  if (d >= 0 && d <= 3) {
    dodatek = 2;
  } else {
    dodatek = 4;
  }

  let di7 = new Date().getDate() + 7 + dodatek;

  if (di7 >= 10) {
    di7 = di7;
  } else {
    di7 = `0${di7}`;
  }

  if (di7 >= koncowkiMiesiaca[m]) {
    di7 = koncowkiMiesiaca[m];
  } else {
    di7 = di7;
  }

  let dzisPlus7 = `${y}-${ms}-${di7}`;
  console.log("TUTAJ " + dzisPlus7);
  let yearMinus6 = 0;
  let yearMinus5 = 0;
  let yearMinus4 = 0;
  let yearMinus3 = 0;
  let yearMinus2 = 0;
  let yearMinus1 = 0;
  let monthMinus = 0;

  if (m == 0) {
    yearMinus6 = 1;
    yearMinus5 = 1;
    yearMinus4 = 1;
    yearMinus3 = 1;
    yearMinus2 = 1;
    yearMinus1 = 1;
    monthMinus = 12;
  } else if (m == 1) {
    yearMinus6 = 1;
    yearMinus5 = 1;
    yearMinus4 = 1;
    yearMinus3 = 1;
    yearMinus2 = 1;
    yearMinus1 = 0;
    monthMinus = 11;
  } else if (m == 2) {
    yearMinus6 = 1;
    yearMinus5 = 1;
    yearMinus4 = 1;
    yearMinus3 = 1;
    yearMinus2 = 0;
    yearMinus1 = 0;
    monthMinus = 10;
  } else if (m == 3) {
    yearMinus6 = 1;
    yearMinus5 = 1;
    yearMinus4 = 1;
    yearMinus3 = 0;
    yearMinus2 = 0;
    yearMinus1 = 0;
    monthMinus = 9;
  } else if (m == 4) {
    yearMinus6 = 1;
    yearMinus5 = 1;
    yearMinus4 = 0;
    yearMinus3 = 0;
    yearMinus2 = 0;
    yearMinus1 = 0;
    monthMinus = 8;
  } else if (m == 5) {
    yearMinus6 = 1;
    yearMinus5 = 0;
    yearMinus4 = 0;
    yearMinus3 = 0;
    yearMinus2 = 0;
    yearMinus1 = 0;
    monthMinus = 7;
  } else {
    yearMinus6 = 0;
    yearMinus5 = 0;
    yearMinus4 = 0;
    yearMinus3 = 0;
    yearMinus2 = 0;
    yearMinus1 = 0;
    monthMinus = 0;
  }

  let planWinyl1 = [
    1942857, 2014286, 2037143, 1957143, 2000000, 2008571, 2057143, 2300000,
    2168571, 2257143, 2214286, 1871429,
  ];

  let planWinyl = planWinyl1[m];

  if (m == 0) {
    m = 12;
    month = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
      "Styczeń",
    ];
  } else if (m == 1) {
    m = 12;
    month = [
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
      "Styczeń",
      "Luty",
    ];
  } else if (m == 2) {
    m = 12;
    month = [
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
      "Styczeń",
      "Luty",
      "Marzec",
    ];
  } else if (m == 3) {
    m = 12;
    month = [
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
    ];
  } else if (m == 4) {
    m = 12;
    month = [
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
    ];
  } else if (m == 5) {
    m = 12;
    month = [
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Czerwiec",
    ];
  } else {
    m = m;
    month = month;
  }

  const now = new Date().getMonth();
  const czas = new Date().getTime();
  const dzien = new Date().getDay();
  const minelo = new Date().getDate();

  const time = new Date(y, now + 1, 1);

  const msInADay = 24 * 60 * 60 * 1000;

  let pomiedzy = Number(Math.round((time - czas) / msInADay + `e+0`) + "e-0");

  let tygodnie = [
    0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3,
    4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0,
    1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4, 5, 6, 0, 1, 2, 3, 4,
    5, 6,
  ];
  let tygodnierev = [
    0, 6, 5, 4, 3, 2, 1, 0, 6, 5, 4, 3, 2, 1, 0, 6, 5, 4, 3, 2, 1, 0, 6, 5, 4,
    3, 2, 1, 0, 6, 5, 4, 3, 2, 1, 0, 6, 5, 4, 3, 2, 1, 0, 6, 5, 4, 3, 2, 1, 0,
    6, 5, 4, 3, 2, 1, 0, 6, 5, 4, 3, 2, 1, 0, 6, 5, 4, 3, 2, 1, 0, 6, 5, 4, 3,
    2, 1,
  ];

  let sobota = 0;
  let niedziela = 0;
  let sobotarev = 0;
  let niedzielarev = 0;

  for (i = dzien; i < pomiedzy + dzien; i++) {
    if (tygodnie[i] == 6) {
      sobota++;
    }
    if (tygodnie[i] == 0) {
      niedziela++;
    }
  }

  for (i = d; i >= 0; i--) {
    if (tygodnierev[i] == 6) {
      sobotarev++;
    }
    if (tygodnierev[i] == 0) {
      niedzielarev++;
    }
  }

  if (sobotarev > 0) {
    sobotarev = sobotarev - 1;
  } else {
    sobotarev = sobotarev;
  }

  if (niedzielarev > 0) {
    niedzielarev = niedzielarev - 1;
  } else {
    niedzielarev = niedzielarev;
  }

  let minelorev = minelo - sobotarev - niedzielarev - 2;
  let pozostaleDni = pomiedzy - sobota - niedziela;

  console.log(`mineło ${minelo}`);
  console.log(`soboty minelo ${sobotarev}`);
  console.log(`niedziela minelo ${niedzielarev}`);
  console.log(`minelo roboczych pelnych ${minelorev}`);
  console.log(`pozostalo roboczych ${pozostaleDni}`);
  console.log(`stała dzien ${dzien}`);
  console.log(`sobót jeszcze ${sobota}`);
  console.log(`niedziel jeszcze ${niedziela}`);

  if (d >= 10) {
    di = d;
  } else {
    di = `0${d}`;
  }

  if (m >= 9) {
    ms = m + 1;
  } else {
    ms = `0${m + 1}`;
  }

  if (mi >= 10) {
    mis = mi;
  } else {
    mis = `0${mi}`;
  }

  let poczatekMiesiac6 = new Date(y - yearMinus6, m - 6, 1);
  let koniecMiesiac6 = new Date(y - yearMinus6, m - 6, koncowkiMiesiaca[m - 6]);
  let poczatekMiesiac5 = new Date(y - yearMinus5, m - 5, 1);
  let koniecMiesiac5 = new Date(y - yearMinus5, m - 5, koncowkiMiesiaca[m - 5]);
  let poczatekMiesiac4 = new Date(y - yearMinus4, m - 4, 1);
  let koniecMiesiac4 = new Date(y - yearMinus4, m - 4, koncowkiMiesiaca[m - 4]);
  let poczatekMiesiac3 = new Date(y - yearMinus3, m - 3, 1);
  let koniecMiesiac3 = new Date(y - yearMinus3, m - 3, koncowkiMiesiaca[m - 3]);
  let poczatekMiesiac2 = new Date(y - yearMinus2, m - 2, 1);
  let koniecMiesiac2 = new Date(y - yearMinus2, m - 2, koncowkiMiesiaca[m - 2]);
  let poczatekMiesiac1 = new Date(y - yearMinus1, m - 1, 1);
  let koniecMiesiac1 = new Date(y - yearMinus1, m - 1, koncowkiMiesiaca[m - 1]);
  let poczatekMiesiac0 = new Date(y, m - monthMinus, 1);
  let koniecMiesiac0 = new Date(y, m - monthMinus, d);

  let poczatekMiesiac06 = new Date(y, m - monthMinus + 1, 1);
  let koniecMiesiac06 = new Date(
    y,
    m - monthMinus + 1,
    koncowkiMiesiaca[m - monthMinus + 1]
  );

  console.log(poczatekMiesiac6);
  console.log(koniecMiesiac6);
  console.log(poczatekMiesiac5);
  console.log(koniecMiesiac5);
  console.log(poczatekMiesiac4);
  console.log(koniecMiesiac4);
  console.log(poczatekMiesiac3);
  console.log(koniecMiesiac3);
  console.log(poczatekMiesiac2);
  console.log(koniecMiesiac2);
  console.log(poczatekMiesiac1);
  console.log(koniecMiesiac1);
  console.log(poczatekMiesiac0);
  console.log(koniecMiesiac0);
  console.log(poczatekMiesiac06);
  console.log(koniecMiesiac06);

  dK06 = new Date(koniecMiesiac06).getDate();
  mP06 = new Date(poczatekMiesiac06).getMonth();
  mK06 = new Date(koniecMiesiac06).getMonth();
  yP06 = new Date(poczatekMiesiac06).getFullYear();
  yK06 = new Date(koniecMiesiac06).getFullYear();

  if (dK06 >= 10) {
    dIK06 = d;
  } else {
    diK06 = `0${dK06}`;
  }

  if (mP06 >= 9) {
    msP06 = mP06 + 1;
  } else {
    msP06 = `0${mP06 + 1}`;
  }

  if (mK06 >= 9) {
    msK06 = mK06 + 1;
  } else {
    msK06 = `0${mK06 + 1}`;
  }

  let poczatekData06 = `${yP06}-${msP06}-01`;
  let koniecData06 = `${yK06}-${msK06}-${koncowkiMiesiaca[m - monthMinus + 1]}`;

  console.log(poczatekData06);
  console.log(koniecData06);

  dK6 = new Date(koniecMiesiac6).getDate();
  mP6 = new Date(poczatekMiesiac6).getMonth();
  mK6 = new Date(koniecMiesiac6).getMonth();
  yP6 = new Date(poczatekMiesiac6).getFullYear();
  yK6 = new Date(koniecMiesiac6).getFullYear();

  if (dK6 >= 10) {
    dIK6 = d;
  } else {
    diK6 = `0${dK6}`;
  }

  if (mP6 >= 9) {
    msP6 = mP6 + 1;
  } else {
    msP6 = `0${mP6 + 1}`;
  }

  if (mK6 >= 9) {
    msK6 = mK6 + 1;
  } else {
    msK6 = `0${mK6 + 1}`;
  }

  let poczatekData6 = `${yP6}-${msP6}-01`;
  let koniecData6 = `${yK6}-${msK6}-${koncowkiMiesiaca[m - 6]}`;

  dK5 = new Date(koniecMiesiac5).getDate();
  mP5 = new Date(poczatekMiesiac5).getMonth();
  mK5 = new Date(koniecMiesiac5).getMonth();
  yP5 = new Date(koniecMiesiac5).getFullYear();
  yK5 = new Date(koniecMiesiac5).getFullYear();

  if (dK5 >= 10) {
    dIK5 = d;
  } else {
    diK5 = `0${dK5}`;
  }

  if (mP5 >= 9) {
    msP5 = mP5 + 1;
  } else {
    msP5 = `0${mP5 + 1}`;
  }

  if (mK5 >= 9) {
    msK5 = mK5 + 1;
  } else {
    msK5 = `0${mK5 + 1}`;
  }

  let poczatekData5 = `${yP5}-${msP5}-01`;
  let koniecData5 = `${yK5}-${msK5}-${koncowkiMiesiaca[m - 5]}`;

  dK4 = new Date(koniecMiesiac4).getDate();
  mP4 = new Date(poczatekMiesiac4).getMonth();
  mK4 = new Date(koniecMiesiac4).getMonth();
  yP4 = new Date(koniecMiesiac4).getFullYear();
  yK4 = new Date(koniecMiesiac4).getFullYear();

  if (dK4 >= 10) {
    dIK4 = d;
  } else {
    diK4 = `0${dK4}`;
  }

  if (mP4 >= 9) {
    msP4 = mP4 + 1;
  } else {
    msP4 = `0${mP4 + 1}`;
  }

  if (mK4 >= 9) {
    msK4 = mK4 + 1;
  } else {
    msK4 = `0${mK4 + 1}`;
  }

  let poczatekData4 = `${yP4}-${msP4}-01`;
  let koniecData4 = `${yK4}-${msK4}-${koncowkiMiesiaca[m - 4]}`;

  dK3 = new Date(koniecMiesiac3).getDate();
  mP3 = new Date(poczatekMiesiac3).getMonth();
  mK3 = new Date(koniecMiesiac3).getMonth();
  yP3 = new Date(koniecMiesiac3).getFullYear();
  yK3 = new Date(koniecMiesiac3).getFullYear();

  if (dK3 >= 10) {
    dIK3 = d;
  } else {
    diK3 = `0${dK3}`;
  }

  if (mP3 >= 9) {
    msP3 = mP3 + 1;
  } else {
    msP3 = `0${mP3 + 1}`;
  }

  if (mK3 >= 9) {
    msK3 = mK3 + 1;
  } else {
    msK3 = `0${mK3 + 1}`;
  }

  let poczatekData3 = `${yP3}-${msP3}-01`;
  let koniecData3 = `${yK3}-${msK3}-${koncowkiMiesiaca[m - 3]}`;

  dK2 = new Date(koniecMiesiac2).getDate();
  mP2 = new Date(poczatekMiesiac2).getMonth();
  mK2 = new Date(koniecMiesiac2).getMonth();
  yP2 = new Date(koniecMiesiac2).getFullYear();
  yK2 = new Date(koniecMiesiac2).getFullYear();

  if (dK2 >= 10) {
    dIK2 = d;
  } else {
    diK2 = `0${dK2}`;
  }

  if (mP2 >= 9) {
    msP2 = mP2 + 1;
  } else {
    msP2 = `0${mP2 + 1}`;
  }

  if (mK2 >= 9) {
    msK2 = mK2 + 1;
  } else {
    msK2 = `0${mK2 + 1}`;
  }

  let poczatekData2 = `${yP2}-${msP2}-01`;
  let koniecData2 = `${yK2}-${msK2}-${koncowkiMiesiaca[m - 2]}`;

  dK1 = new Date(koniecMiesiac1).getDate();
  mP1 = new Date(poczatekMiesiac1).getMonth();
  mK1 = new Date(koniecMiesiac1).getMonth();
  yP1 = new Date(koniecMiesiac1).getFullYear();
  yK1 = new Date(koniecMiesiac1).getFullYear();

  if (dK1 >= 10) {
    dIK1 = d;
  } else {
    diK1 = `0${dK1}`;
  }

  if (mP1 >= 9) {
    msP1 = mP1 + 1;
  } else {
    msP1 = `0${mP1 + 1}`;
  }

  if (mK1 >= 9) {
    msK1 = mK1 + 1;
  } else {
    msK1 = `0${mK1 + 1}`;
  }

  let poczatekData1 = `${yP1}-${msP1}-01`;
  let koniecData1 = `${yK1}-${msK1}-${koncowkiMiesiaca[m - 1]}`;

  console.log("poczatek data 1");
  console.log(poczatekData1);
  console.log("poczatek data 1");
  console.log(poczatekData2);

  dK0 = new Date(koniecMiesiac0).getDate();
  mP0 = new Date(poczatekMiesiac0).getMonth();
  mK0 = new Date(koniecMiesiac0).getMonth();
  yP0 = new Date(koniecMiesiac0).getFullYear();
  yK0 = new Date(koniecMiesiac0).getFullYear();

  mK006 = new Date().getMonth() + 6;

  console.log(mK006);

  if (dK0 >= 10) {
    dIK0 = d;
  } else {
    diK0 = `0${dK0}`;
  }

  if (mP0 >= 9) {
    msP0 = mP0 + 1;
  } else {
    msP0 = `0${mP0 + 1}`;
  }

  if (mK0 >= 9) {
    msK0 = mK0 + 1;
  } else {
    msK0 = `0${mK0 + 1}`;
  }

  let poczatekData0 = `${yP0}-${msP0}-01`;
  let koniecData0 = dzis;

  console.log(koniecData0 + "koniecdata 0 424");

  let koniecData00 = `${yK0}-${msK0}-${koncowkiMiesiaca[m]}`;

  console.log(koniecData06 + " koniec miesiąca data00");

  date6P = new Date(poczatekData6);
  date6K = new Date(koniecData6);
  date5P = new Date(poczatekData5);
  date5K = new Date(koniecData5);
  date4P = new Date(poczatekData4);
  date4K = new Date(koniecData4);
  date3P = new Date(poczatekData3);
  date3K = new Date(koniecData3);
  date2P = new Date(poczatekData2);
  date2K = new Date(koniecData2);
  date1P = new Date(poczatekData1);
  date1K = new Date(koniecData1);
  date0P = new Date(poczatekData0);
  date0K = new Date(koniecData0);
  date06P = new Date(poczatekData06);
  date06K = new Date(koniecData06);

  console.log(poczatekData2);
  console.log(koniecData00);

  var settings1 = {
    url: "http://10.66.225.152:8888/dashboard_proxy/API/PobierzDokumenty",
    //"url": "http://enova.xdisc.local:3000/api/MethodInvoker/InvokeServiceMethod",
    //"url": "http://10.66.225.154:8080/dashboard_proxy/API/PobierzDokumenty",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      //"DataOd": '2023-09-01',
      //"DataDo": '2023-09-05',
      DataOd: poczatekData2,
      DataDo: koniecData00,
      BazaDanych: "XDISC",

      KategorieDokumentow: ["ZamówienieOdbiorcy"],
      NazwyMagazynow: ["GŁÓWNY-TŁOCZNIA"],
    }),
  };

  $.ajax(settings1).done(function (response1) {
    const result1 = JSON.stringify(response1);
    zamowienia = JSON.parse(result1);

    var settings = {
      //"url": "http://10.66.225.152:8888/dashboard_proxy/API/PobierzDokumenty",
      //"url": "http://enova.xdisc.local:3000/api/MethodInvoker/InvokeServiceMethod",
      url: "http://10.66.225.152:8888/dashboard_proxy/API/PobierzDokumenty",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        //"DataOd": `${y}-${ms}-01`,
        //"DataDo": `${y}-${ms}-${di}`,
        DataOd: poczatekData6,
        DataDo: dzis,
        BazaDanych: "XDISC",

        KategorieDokumentow: ["Sprzedaż", "KorektaSprzedaży"],
        NazwyMagazynow: ["GŁÓWNY-TŁOCZNIA"],
      }),
    };

    $.ajax(settings).done(function (response) {
      const result = JSON.stringify(response);
      faktury = JSON.parse(result);

      console.log(faktury);
      console.log(zamowienia);

      let poczatekRoku = new Date(y, 0, 1);
      let koniecMiesiac1 = new Date(dzis);

      let roznica = koniecMiesiac1.getTime() - poczatekRoku.getTime();

      let roznicaInt = Number.parseInt(roznica / (24 * 3600 * 1000)) + 1;

      console.log(poczatekRoku);
      console.log(koniecMiesiac1);
      console.log(roznicaInt);

      let newCalendar;
      let CalendarTAb = [];
      let day;
      let dd;
      let dds;
      let mm;
      let mms;
      let yy;

      let wynik;

      for (i = 0; i < roznicaInt; i++) {
        newCalendar = new Date(poczatekRoku).getTime() + i * 24 * 3600 * 1000;
        dd = new Date(newCalendar).getDate();
        mm = new Date(newCalendar).getMonth();
        yy = new Date(newCalendar).getFullYear();

        if (dd >= 10) {
          dds = dd;
        } else {
          dds = `0${dd}`;
        }

        if (mm >= 9) {
          mms = mm + 1;
        } else {
          mms = `0${mm + 1}`;
        }
        day = `${yy}-${mms}-${dds}`;
        dayToCalendar = `${yy}-${mm + 1}-${dd}`;

        wynik = 0;
        for (j = 0; j < faktury.length; j++) {
          if (faktury[j].handlowiec == handlowiec) {
            if (`${day}` == faktury[j].dataDokumentu) {
              wynik += Math.round(faktury[j].kwotaPozycjiNetto);
            }
          }
        }

        CalendarTAb.push([new Date(dayToCalendar), wynik]);
        console.log(day);
      }
      console.log(CalendarTAb);

      function drawChart() {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: "date", id: "Date" });
        dataTable.addColumn({ type: "number", id: "Won/Loss" });
        dataTable.addRows(CalendarTAb);

        var chart = new google.visualization.Calendar(
          document.getElementById("sales_callendar")
        );

        var options = {
          title: "",
          height: 350,
        };

        chart.draw(dataTable, options);
      }

      google.charts.load("current", { packages: ["calendar"] });
      google.charts.setOnLoadCallback(drawChart);

      let date_0_target = new Date(poczatekMiesiac0).getTime();
      let date_1_target;
      let date_2_target = new Date(dzis).getTime();

      let sprzedaz_target = 0;

      for (i = 0; i < faktury.length; i++) {
        if (faktury[i].handlowiec == handlowiec) {
          date_1_target = new Date(faktury[i].dataDokumentu).getTime();

          if (
            date_1_target >= date_0_target &&
            date_1_target <= date_2_target
          ) {
            sprzedaz_target += faktury[i].kwotaPozycjiNetto;
          }
        }
      }

      let target_percent = sprzedaz_target / target[0];

      $("#container-right_target_text_id").html(
        `Target: <span style='font-size: 300%; font-weight: 100'>${target[0].toLocaleString(
          "pl-PL",
          {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          }
        )}</span>    Current: <span style='font-size: 300%; font-weight: 100'>${sprzedaz_target.toLocaleString(
          "pl-PL",
          {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          }
        )}</span> `
      );

      var chart = new CanvasJS.Chart("target_bar", {
        animationEnabled: true,
        animationDuration: 10000,
        tooltips: {
          mode: false,
        },
        data: [
          {
            type: "doughnut",
            startAngle: 90,
            innerRadius: 60,
            //toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
              { y: 66, color: "#00FA9A" },
              { y: 34, color: "#FFE4E1" },
            ],
          },
        ],
      });
      chart.render();

      var chart1 = new CanvasJS.Chart("sales-history", {
        animationEnabled: true,
        theme: "light2",
        title: {
          text: "Monthly Sales Data",
        },
        axisX: {
          valueFormatString: "MMM",
        },
        axisY: {
          prefix: "$",
          labelFormatter: addSymbols,
        },
        toolTip: {
          shared: true,
        },
        legend: {
          cursor: "pointer",
          itemclick: toggleDataSeries,
        },
        data: [
          {
            type: "column",
            name: "Actual Sales",
            showInLegend: true,
            xValueFormatString: "MMMM YYYY",
            yValueFormatString: "$#,##0",
            dataPoints: [
              { x: new Date(2016, 0), y: 20000 },
              { x: new Date(2016, 1), y: 30000 },
              { x: new Date(2016, 2), y: 25000 },
              { x: new Date(2016, 3), y: 70000, indexLabel: "High Renewals" },
              { x: new Date(2016, 4), y: 50000 },
              { x: new Date(2016, 5), y: 35000 },
              { x: new Date(2016, 6), y: 30000 },
            ],
          },
          {
            type: "line",
            name: "Expected Sales",
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: [
              { x: new Date(2016, 0), y: 40000 },
              { x: new Date(2016, 1), y: 42000 },
              { x: new Date(2016, 2), y: 45000 },
              { x: new Date(2016, 3), y: 45000 },
              { x: new Date(2016, 4), y: 47000 },
              { x: new Date(2016, 5), y: 43000 },
              { x: new Date(2016, 6), y: 42000 },
            ],
          },
          {
            type: "area",
            name: "Profit",
            markerBorderColor: "white",
            markerBorderThickness: 2,
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: [
              { x: new Date(2016, 0), y: 5000 },
              { x: new Date(2016, 1), y: 7000 },
              { x: new Date(2016, 2), y: 6000 },
              { x: new Date(2016, 3), y: 30000 },
              { x: new Date(2016, 4), y: 20000 },
              { x: new Date(2016, 5), y: 15000 },
              { x: new Date(2016, 6), y: 13000 },
            ],
          },
        ],
      });
      chart1.render();

      function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(
          Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)),
          0
        );

        if (order > suffixes.length - 1) order = suffixes.length - 1;

        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
      }

      function toggleDataSeries(e) {
        if (
          typeof e.dataSeries.visible === "undefined" ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    });
  });
});
