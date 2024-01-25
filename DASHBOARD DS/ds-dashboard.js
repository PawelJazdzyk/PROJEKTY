$(document).ready(function () {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  class NameStyle {
    constructor(v, p) {
      this.v = v;
      this.p = p;
    }
  }
  class NameValue {
    constructor(v, f) {
      this.v = v;
      this.f = f;
    }
  }
  $("#orders-for-Today_button, #orders-for_today").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#orders-for-today_head").offset().top,
      },
      500
    );
  });
  $("#orders-entry-Today_button, #orders-today").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#orders-entry-today_head").offset().top,
      },
      500
    );
  });
  $("#invoice-Today_button, #invoices-today_month").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#invoice-today_head").offset().top,
      },
      500
    );
  });
  $("#overwiev_button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".desktop").offset().top,
      },
      500
    );
  });

  let dataPoint = [
    1266.890435345, 2443.8903455, 2674.8904345, 4872.8903555, 5339.894343,
    2359.894343, 4322.894343, 4335.894343, 7739.894343,
  ];

  let aa = Math.round(Math.round(dataPoint[0]) * 1.11);
  let bb = Math.round(Math.round(dataPoint[1]) * 1.11);
  let cc = Math.round(Math.round(dataPoint[2]) * 1.11);
  let dd = Math.round(Math.round(dataPoint[3]) * 1.11);
  let ee = Math.round(Math.round(dataPoint[4]) * 1.11);
  let ff = Math.round(Math.round(dataPoint[5]) * 1.11);
  let gg = Math.round(Math.round(dataPoint[6]) * 1.11);
  let hh = Math.round(Math.round(dataPoint[7]) * 1.11);
  let ii = Math.round(Math.round(dataPoint[8]) * 1.11);

  // console.log(aa);
  // console.log(bb);
  // console.log(cc);
  // console.log(dd);
  // console.log(ee);
  // console.log(ff);
  // console.log(gg);
  // console.log(hh);
  // console.log(ii);

  let handlowiec = "Lucyna Kozicka";
  let target = [
    1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567, 1234567,
    1234567, 1234567, 1234567, 1234567,
  ];
  let mailHandlowiec;
  let welcomeUser;

  while (true) {
    let pinHandlowiec = Number(prompt("Podaj PIN"));

    switch (pinHandlowiec) {
      case aa:
        handlowiec = "Maja Grunt";
        target = [
          70000, 70000, 70000, 80000, 80000, 80000, 90000, 90000, 90000, 100000,
          100000, 100000,
        ];
        mailHandlowiec = "maja.grunt@x-disc.pl";
        welcomeUser = "Welcome, Maja Grunt";
        break;

      case bb:
        handlowiec = "Krzysztof Ciółkowski";
        target = [
          95000, 95000, 95000, 105000, 105000, 105000, 110000, 110000, 110000,
          120000, 120000, 120000,
        ];
        welcomeUser = "Welcome, Krzysztof Ciółkowski";
        mailHandlowiec = "krzysztof.ciolkowski@x-disc.pl";
        break;

      case cc:
        handlowiec = "Michał Durmowicz";
        target = [
          70000, 70000, 70000, 80000, 80000, 80000, 90000, 90000, 90000, 100000,
          100000, 100000,
        ];
        welcomeUser = "Welcome, Michał Durmowicz";
        mailHandlowiec = "michal.durmowicz@x-disc.pl";
        break;

      case dd:
        handlowiec = "Marta Kierzkowska";
        target = [
          200000, 200000, 200000, 210000, 210000, 210000, 200000, 380000,
          250000, 250000, 240000, 0,
        ];
        welcomeUser = "Welcome, Marta Kierzkowska";
        mailHandlowiec = "marta.kierzkowska@x-disc.pl";
        break;

      case ee:
        handlowiec = "Lucyna Kozicka";
        target = [
          280000, 280000, 280000, 305000, 305000, 305000, 320000, 320000,
          320000, 335000, 335000, 335000,
        ];
        welcomeUser = "Welcome, Lucyna Kozicka";
        mailHandlowiec = "lucyna.kozicka@x-disc.pl";
        break;

      case ff:
        handlowiec = "Jakub Mikliński";
        target = [
          335000, 335000, 335000, 335000, 335000, 335000, 370000, 370000,
          370000, 385000, 375000, 375000,
        ];
        welcomeUser = "Welcome, Jakub Mikliński";
        mailHandlowiec = "jakub.miklinski@x-disc.pl";
        break;

      case gg:
        handlowiec = "Małgorzata Roszkowska";
        target = [
          160000, 160000, 160000, 165000, 165000, 175000, 170000, 170000,
          170000, 170000, 170000, 170000,
        ];
        welcomeUser = "Welcome, Małgorzata Roszkowska";
        mailHandlowiec = "malgorzata.roszkowska@x-disc.pl";
        break;

      case hh:
        handlowiec = "Ingo Kleimann";
        target = [
          56000, 122000, 146000, 39000, 130000, 68000, 145000, 200000, 84000,
          125000, 100000, 100000,
        ];
        welcomeUser = "Welcome, Ingo Kleimann";
        mailHandlowiec = "ingo.kleimann@x-disc.pl";
        break;

      case ii:
        handlowiec = "Jean-Remi BEL";
        target = [
          50000, 50000, 50000, 70000, 70000, 70000, 85000, 85000, 85000, 90000,
          90000, 90000,
        ];
        welcomeUser = "Welcome, Jean-Remi Bel";
        mailHandlowiec = "jean-remi.bel@x-disc.pl";
        break;

      default:
        setTimeout(function () {
          window.location.href = "failPin.html";
        }, 500);
    }

    break;
  }

  $("#welcome-user-id").html(welcomeUser);

  let ms;
  let mis;
  let di;
  let koncowkiMiesiaca = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 29, 31, 30, 31, 30, 31,
    31, 30, 31, 30, 31,
  ];
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
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

  if (m == 0) {
    m = 12;
    month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
    ];
  } else if (m == 1) {
    m = 12;
    month = [
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
    ];
  } else if (m == 2) {
    m = 12;
    month = [
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
    ];
  } else if (m == 3) {
    m = 12;
    month = [
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
    ];
  } else if (m == 4) {
    m = 12;
    month = [
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
    ];
  } else if (m == 5) {
    m = 12;
    month = [
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
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
      DataOd: poczatekData0,
      DataDo: koniecData06,
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

      //***************DATY OSTATNIE PÓŁ ROKU ****************************/

      let datyMinus_6_Poczatek = new Date(poczatekMiesiac6).getTime();
      let datyMinus_6_Koniec = new Date(koniecMiesiac6).getTime();
      let datyMinus_5_Poczatek = new Date(poczatekMiesiac5).getTime();
      let datyMinus_5_Koniec = new Date(koniecMiesiac5).getTime();
      let datyMinus_4_Poczatek = new Date(poczatekMiesiac4).getTime();
      let datyMinus_4_Koniec = new Date(koniecMiesiac4).getTime();
      let datyMinus_3_Poczatek = new Date(poczatekMiesiac3).getTime();
      let datyMinus_3_Koniec = new Date(koniecMiesiac3).getTime();
      let datyMinus_2_Poczatek = new Date(poczatekMiesiac2).getTime();
      let datyMinus_2_Koniec = new Date(koniecMiesiac2).getTime();
      let datyMinus_1_Poczatek = new Date(poczatekMiesiac1).getTime();
      let datyMinus_1_Koniec = new Date(koniecMiesiac1).getTime();
      let datyMinus_0_Poczatek = new Date(poczatekMiesiac0).getTime();
      let datyMinus_0_Koniec = new Date(dzis).getTime();
      let fakturyDataDokumentu;
      let zamowieniaDataDokumentu;
      let zamowieniaDataRealizacji;

      let poczatekRoku = new Date(y, 0, 1);

      //************************************************************** */

      let roznica = datyMinus_0_Koniec - poczatekRoku.getTime();

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

      //*************************** FAKTURY ******************** */

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

      let sprzedazCD_6 = 0;
      let sprzedazVIN_6 = 0;
      let sprzedazCD_5 = 0;
      let sprzedazVIN_5 = 0;
      let sprzedazCD_4 = 0;
      let sprzedazVIN_4 = 0;
      let sprzedazCD_3 = 0;
      let sprzedazVIN_3 = 0;
      let sprzedazCD_2 = 0;
      let sprzedazVIN_2 = 0;
      let sprzedazCD_1 = 0;
      let sprzedazVIN_1 = 0;
      let sprzedazCD_0 = 0;
      let sprzedazVIN_0 = 0;
      let sprzedazCD_dzis = 0;
      let sprzedazVIN_dzis = 0;

      let zyskCD_6 = 0;
      let zyskVIN_6 = 0;
      let zyskCD_5 = 0;
      let zyskVIN_5 = 0;
      let zyskCD_4 = 0;
      let zyskVIN_4 = 0;
      let zyskCD_3 = 0;
      let zyskVIN_3 = 0;
      let zyskCD_2 = 0;
      let zyskVIN_2 = 0;
      let zyskCD_1 = 0;
      let zyskVIN_1 = 0;
      let zyskCD_0 = 0;
      let zyskVIN_0 = 0;
      let zyskCD_dzis = 0;
      let zyskVIN_dzis = 0;

      let fakturyDzis = 0;
      let fakturyMiesiac = 0;

      let fvDzisTab;
      let fvDzisZbiorczaTab = [];

      for (i = 0; i < faktury.length; i++) {
        if (faktury[i].handlowiec == handlowiec) {
          fakturyDataDokumentu = new Date(faktury[i].dataDokumentu).getTime();

          if (
            fakturyDataDokumentu >= datyMinus_0_Poczatek &&
            fakturyDataDokumentu <= datyMinus_0_Koniec
          ) {
            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_0 += faktury[i].kwotaPozycjiNetto;
                zyskCD_0 += faktury[i].zysk;
                fakturyMiesiac++;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_0 += faktury[i].kwotaPozycjiNetto;
                zyskVIN_0 += faktury[i].zysk;
                fakturyMiesiac++;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_0 += faktury[i].kwotaNetto;
                zyskCD_0 += faktury[i].kwotaNetto;
                fakturyMiesiac++;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_0 += faktury[i].kwotaNetto;
                zyskVIN_0 += faktury[i].kwotaNetto;
                fakturyMiesiac++;
              }
            }
          }
          if (
            fakturyDataDokumentu >= datyMinus_1_Poczatek &&
            fakturyDataDokumentu <= datyMinus_1_Koniec
          ) {
            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_1 += faktury[i].kwotaPozycjiNetto;
                zyskCD_1 += faktury[i].zysk;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_1 += faktury[i].kwotaPozycjiNetto;
                zyskVIN_1 += faktury[i].zysk;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_1 += faktury[i].kwotaNetto;
                zyskCD_1 += faktury[i].kwotaNetto;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_1 += faktury[i].kwotaNetto;
                zyskVIN_1 += faktury[i].kwotaNetto;
              }
            }
          }
          if (
            fakturyDataDokumentu >= datyMinus_2_Poczatek &&
            fakturyDataDokumentu <= datyMinus_2_Koniec
          ) {
            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_2 += faktury[i].kwotaPozycjiNetto;
                zyskCD_2 += faktury[i].zysk;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_2 += faktury[i].kwotaPozycjiNetto;
                zyskVIN_2 += faktury[i].zysk;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_2 += faktury[i].kwotaNetto;
                zyskCD_2 += faktury[i].kwotaNetto;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_2 += faktury[i].kwotaNetto;
                zyskVIN_2 += faktury[i].kwotaNetto;
              }
            }
          }
          if (
            fakturyDataDokumentu >= datyMinus_3_Poczatek &&
            fakturyDataDokumentu <= datyMinus_3_Koniec
          ) {
            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_3 += faktury[i].kwotaPozycjiNetto;
                zyskCD_3 += faktury[i].zysk;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_3 += faktury[i].kwotaPozycjiNetto;
                zyskVIN_3 += faktury[i].zysk;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_3 += faktury[i].kwotaNetto;
                zyskCD_3 += faktury[i].kwotaNetto;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_3 += faktury[i].kwotaNetto;
                zyskVIN_3 += faktury[i].kwotaNetto;
              }
            }
          }
          if (
            fakturyDataDokumentu >= datyMinus_4_Poczatek &&
            fakturyDataDokumentu <= datyMinus_4_Koniec
          ) {
            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_4 += faktury[i].kwotaPozycjiNetto;
                zyskCD_4 += faktury[i].zysk;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_4 += faktury[i].kwotaPozycjiNetto;
                zyskVIN_4 += faktury[i].zysk;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_4 += faktury[i].kwotaNetto;
                zyskCD_4 += faktury[i].kwotaNetto;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_4 += faktury[i].kwotaNetto;
                zyskVIN_4 += faktury[i].kwotaNetto;
              }
            }
          }
          if (
            fakturyDataDokumentu >= datyMinus_5_Poczatek &&
            fakturyDataDokumentu <= datyMinus_5_Koniec
          ) {
            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_5 += faktury[i].kwotaPozycjiNetto;
                zyskCD_5 += faktury[i].zysk;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_5 += faktury[i].kwotaPozycjiNetto;
                zyskVIN_5 += faktury[i].zysk;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_5 += faktury[i].kwotaNetto;
                zyskCD_5 += faktury[i].kwotaNetto;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_5 += faktury[i].kwotaNetto;
                zyskVIN_5 += faktury[i].kwotaNetto;
              }
            }
          }
          if (
            fakturyDataDokumentu >= datyMinus_6_Poczatek &&
            fakturyDataDokumentu <= datyMinus_6_Koniec
          ) {
            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_6 += faktury[i].kwotaPozycjiNetto;
                zyskCD_6 += faktury[i].zysk;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_6 += faktury[i].kwotaPozycjiNetto;
                zyskVIN_6 += faktury[i].zysk;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_6 += faktury[i].kwotaNetto;
                zyskCD_6 += faktury[i].kwotaNetto;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_6 += faktury[i].kwotaNetto;
                zyskVIN_6 += faktury[i].kwotaNetto;
              }
            }
          }
          if (fakturyDataDokumentu == datyMinus_0_Koniec) {
            fvDzisTab = [];
            let fvDzisNumerProdukcji;
            let fvDzisNumerFV;
            let fvDzisBokowiec;
            let fvDzisKontrahent;
            let fvDzisNosnik;
            let fvDzisWartoscSprzedaz = 0;
            let fvDzisWartoscSprzedazString;
            let fvDzisWartoscZysk = 0;
            let fvDzisWartoscZyskString;
            let fvDzisZyskProcent = 0;

            fvDzisNumerProdukcji = faktury[i].xNumer;
            fvDzisTab.push(fvDzisNumerProdukcji);
            fvDzisNumerFV = faktury[i].nrDokumentu;
            fvDzisTab.push(fvDzisNumerFV);
            fvDzisBokowiec = faktury[i].opiekun;
            fvDzisTab.push(fvDzisBokowiec);
            fvDzisKontrahent = faktury[i].kontrahent;
            fvDzisTab.push(fvDzisKontrahent);

            if (faktury[i].kategoria == "Sprzedaż") {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_dzis += faktury[i].kwotaPozycjiNetto;
                zyskCD_dzis += faktury[i].zysk;
                fvDzisWartoscSprzedaz = faktury[i].kwotaPozycjiNetto;
                fvDzisWartoscZysk = faktury[i].zysk;
                fvDzisNosnik = "CD/DVD";
                fakturyDzis++;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_dzis += faktury[i].kwotaPozycjiNetto;
                zyskVIN_dzis += faktury[i].zysk;
                fvDzisWartoscSprzedaz = faktury[i].kwotaPozycjiNetto;
                fvDzisWartoscZysk = faktury[i].zysk;
                fvDzisNosnik = "VIN";
                fakturyDzis++;
              }
            } else {
              if (
                faktury[i].dział == "PŁYTY CD" ||
                faktury[i].dział == "INNE"
              ) {
                sprzedazCD_dzis += faktury[i].kwotaNetto;
                zyskCD_dzis += faktury[i].kwotaNetto;
                fvDzisWartoscSprzedaz = faktury[i].kwotaNetto;
                fvDzisWartoscZysk = faktury[i].kwotaNetto;
                fvDzisNosnik = "CD/DVD";
                fakturyDzis++;
              }
              if (faktury[i].dział == "PŁYTY WINYLOWE") {
                sprzedazVIN_dzis += faktury[i].kwotaNetto;
                zyskVIN_dzis += faktury[i].kwotaNetto;
                fvDzisWartoscSprzedaz = faktury[i].kwotaNetto;
                fvDzisWartoscZysk = faktury[i].kwotaNetto;
                fvDzisNosnik = "VIN";
                fakturyDzis++;
              }
            }
            fvDzisTab.push(fvDzisNosnik);

            fvDzisWartoscSprzedazString = fvDzisWartoscSprzedaz.toLocaleString(
              "pl-PL",
              {
                useGrouping: "true",
                minimumFractionDigits: "2",
                maximumFractionDigits: "2",
              }
            );
            let fvDzisWartoscSprzedazObj = new NameValue(
              fvDzisWartoscSprzedaz,
              fvDzisWartoscSprzedazString
            );
            fvDzisTab.push(fvDzisWartoscSprzedazObj);
            fvDzisWartoscZyskString = fvDzisWartoscZysk.toLocaleString(
              "pl-PL",
              {
                useGrouping: "true",
                minimumFractionDigits: "2",
                maximumFractionDigits: "2",
              }
            );
            let fvDzisWartoscZyskObj = new NameValue(
              fvDzisWartoscZysk,
              fvDzisWartoscZyskString
            );
            fvDzisTab.push(fvDzisWartoscZyskObj);

            if (fvDzisWartoscZysk < 0) {
              fvDzisZyskProcent = `${(0).toLocaleString("pl-PL", {
                useGrouping: "true",
                minimumFractionDigits: "2",
                maximumFractionDigits: "2",
              })} %`;
            } else {
              fvDzisZyskProcent = `${(
                (fvDzisWartoscZysk / fvDzisWartoscSprzedaz) *
                100
              ).toLocaleString("pl-PL", {
                useGrouping: "true",
                minimumFractionDigits: "2",
                maximumFractionDigits: "2",
              })} %`;
            }

            fvDzisTab.push(fvDzisZyskProcent);
            fvDzisZbiorczaTab.push(fvDzisTab);
          }
        }
      }

      console.log(fakturyMiesiac);
      console.log(fakturyDzis);

      $(
        "#invoices-today_month"
      ).html(` <span class="container-right_firs_row_data_text_small"
          >Invoices (T/M)</span
        >
        <br />${fakturyDzis}/${fakturyMiesiac}`);

      class WykresSprzedaz {
        constructor(y, label, indexLabel) {
          this.y = y;
          this.label = label;
          this.indexLabel = indexLabel;
        }
      }

      class WykresZysk {
        constructor(y, label) {
          this.y = y;
          this.label = label;
        }
      }

      let yourSalesBar = [];
      let yourProfitBar = [];

      let sprzedazAll_6 = sprzedazCD_6 + sprzedazVIN_6;
      let wykresSprzedaz = new WykresSprzedaz(
        sprzedazAll_6,
        month[m - 6],
        sprzedazAll_6.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourSalesBar.push(wykresSprzedaz);

      let sprzedazAll_5 = sprzedazCD_5 + sprzedazVIN_5;
      wykresSprzedaz = new WykresSprzedaz(
        sprzedazAll_5,
        month[m - 5],
        sprzedazAll_5.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourSalesBar.push(wykresSprzedaz);

      let sprzedazAll_4 = sprzedazCD_4 + sprzedazVIN_4;
      wykresSprzedaz = new WykresSprzedaz(
        sprzedazAll_4,
        month[m - 4],
        sprzedazAll_4.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourSalesBar.push(wykresSprzedaz);

      let sprzedazAll_3 = sprzedazCD_3 + sprzedazVIN_3;
      wykresSprzedaz = new WykresSprzedaz(
        sprzedazAll_3,
        month[m - 3],
        sprzedazAll_3.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourSalesBar.push(wykresSprzedaz);

      let sprzedazAll_2 = sprzedazCD_2 + sprzedazVIN_2;
      wykresSprzedaz = new WykresSprzedaz(
        sprzedazAll_2,
        month[m - 2],
        sprzedazAll_2.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourSalesBar.push(wykresSprzedaz);

      let sprzedazAll_1 = sprzedazCD_1 + sprzedazVIN_1;
      wykresSprzedaz = new WykresSprzedaz(
        sprzedazAll_1,
        month[m - 1],
        sprzedazAll_1.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourSalesBar.push(wykresSprzedaz);

      let sprzedazAll_0 = sprzedazCD_0 + sprzedazVIN_0;
      wykresSprzedaz = new WykresSprzedaz(
        sprzedazAll_0,
        month[m],
        sprzedazAll_0.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourSalesBar.push(wykresSprzedaz);

      let sprzedazAll_Dzis = sprzedazCD_dzis + sprzedazVIN_dzis;
      let zyskAll_Dzis = zyskCD_dzis + zyskVIN_dzis;
      let zyskProcent_Dzis = (zyskAll_Dzis / sprzedazAll_Dzis) * 100;
      let winylProcent = (sprzedazVIN_0 / sprzedazAll_0) * 100;
      let cdProcent = (sprzedazCD_0 / sprzedazAll_0) * 100;

      $(
        "#today-sales"
      ).html(` <span class="container-right_second_row_data_text_small"
              >Sale Today (PLN)</span
            >
            <br /> ${sprzedazAll_Dzis.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            })}`);

      $(
        "#today-profit"
      ).html(` <span class="container-right_second_row_data_text_small"
                >Profit Today (PLN)</span
              >
              <br /> ${zyskAll_Dzis.toLocaleString("pl-PL", {
                useGrouping: "true",
                minimumFractionDigits: "0",
                maximumFractionDigits: "0",
              })}`);

      $(
        "#today-profit_percent"
      ).html(` <span class="container-right_second_row_data_text_small"
                >Margin Profit Today %</span
            >
            <br /> ${zyskProcent_Dzis.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "2",
              maximumFractionDigits: "2",
            })} %`);

      $("#percent-winyl_all").html(
        `${winylProcent.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })} %`
      );

      $("#percent-cd_all").html(
        `${cdProcent.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })} %`
      );

      let zyskAll_6 = zyskCD_6 + zyskVIN_6;
      let wykresZysk = new WykresZysk(zyskAll_6, month[m - 6]);
      yourProfitBar.push(wykresZysk);

      let zyskAll_5 = zyskCD_5 + zyskVIN_5;
      wykresZysk = new WykresZysk(zyskAll_5, month[m - 5]);
      yourProfitBar.push(wykresZysk);

      let zyskAll_4 = zyskCD_4 + zyskVIN_4;
      wykresZysk = new WykresZysk(zyskAll_4, month[m - 4]);
      yourProfitBar.push(wykresZysk);

      let zyskAll_3 = zyskCD_3 + zyskVIN_3;
      wykresZysk = new WykresZysk(zyskAll_3, month[m - 3]);
      yourProfitBar.push(wykresZysk);

      let zyskAll_2 = zyskCD_2 + zyskVIN_2;
      wykresZysk = new WykresZysk(zyskAll_2, month[m - 2]);
      yourProfitBar.push(wykresZysk);

      let zyskAll_1 = zyskCD_1 + zyskVIN_1;
      wykresZysk = new WykresZysk(zyskAll_1, month[m - 1]);
      yourProfitBar.push(wykresZysk);

      let zyskAll_0 = zyskCD_0 + zyskVIN_0;
      wykresZysk = new WykresZysk(zyskAll_0, month[m]);
      yourProfitBar.push(wykresZysk);

      console.log(yourSalesBar);

      let progrsTarget = zyskAll_0 / target[m - monthMinus];

      let progrsTarget_empty = 1 - progrsTarget;

      $(
        "#target-this_month"
      ).html(`<span class="container-right_firs_row_data_text_small" 
              >Profit Target (PLN)</span
            >
            <br />
          ${target[m - monthMinus].toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })}`);

      let circleColour;
      let circProgresTarget;
      let circprogrsTarget_empty;

      if (progrsTarget_empty < 0) {
        circleColour = "#32CD32";
        circProgresTarget = 100;
        circProgrsTarget_empty = 0;
      } else {
        circleColour = "#FFE4E1";
        circProgresTarget = progrsTarget;
        circProgrsTarget_empty = progrsTarget_empty;
      }

      var chart = new CanvasJS.Chart("target_bar", {
        animationEnabled: true,
        animationDuration: 2000,
        title: {
          text: `Target Progres: ${(progrsTarget * 100).toLocaleString(
            "pl-PL",
            {
              useGrouping: "true",
              minimumFractionDigits: "2",
              maximumFractionDigits: "2",
            }
          )} %`,
          fontFamily: "calibri",
          fontColor: "#A9A9A9",
          fontSize: "25",
        },
        tooltips: {
          mode: false,
        },
        data: [
          {
            type: "doughnut",
            startAngle: 90,
            innerRadius: 30,
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
              { y: circProgresTarget, label: "Relisation", color: "#008000" },
              { y: circProgrsTarget_empty, color: circleColour },
            ],
          },
        ],
      });
      chart.render();

      var chart1 = new CanvasJS.Chart("sales-history", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        fontFamily: "calibri",
        title: {
          text: "Your Sales",
          fontColor: "#A9A9A9",
        },
        axisX: {
          ValueFormatString: "PLN # ### ###",
        },
        axisY: {
          ValueFormatString: "PLN # ### ###",
          minimum: 0,
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
            name: "Sales",
            showInLegend: true,
            indexLabelPlacement: "outside",
            color: "#B0E0E6",
            yValueFormatString: "PLN # ### ###",
            dataPoints: yourSalesBar,
          },
          {
            type: "line",
            name: "Expected Profit",
            showInLegend: true,
            yValueFormatString: "PLN # ### ###",
            color: "red",
            dataPoints: [{ x: 6, y: target[m - monthMinus] }],
          },
          {
            type: "area",
            name: "Profit",
            markerBorderColor: "white",
            color: "#3be4ac",
            markerBorderThickness: 2,
            indexLabelFontColor: "white",
            showInLegend: true,
            yValueFormatString: "PLN # ### ###",
            dataPoints: yourProfitBar,
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

      //*************************** ZAMOWIENIA ******************** */

      let zamoweianiaCD_0_Wprowadzone = 0;
      let zamoweianiaVIN_0_Wprowadzone = 0;
      let zamoweianiaCD_dzis_Wprowadzone = 0;
      let zamoweianiaVIN_dzis_Wprowadzone = 0;

      let zamowieniaDoRealizacjiNaDzis = 0;
      let zamowieniaDzisWprowadzone = 0;
      let zamowieniaMiesiacWprowadzone = 0;
      let zamowieniaDoRealizacjiMiesiac = 0;

      let zamowieniaNaDzisZbiorczaTab = [];
      let zamowieniaNaDzis;
      let zamowieniaDzisWprowadzoneTab;
      let zamowieniaDzisWprowadzoneZbiorczeTab = [];

      for (i = 0; i < zamowienia.length; i++) {
        if (handlowiec == zamowienia[i].handlowiec) {
          zamowieniaDataDokumentu = new Date(
            zamowienia[i].dataDokumentu
          ).getTime();
          zamowieniaDataRealizacji = new Date(
            zamowienia[i].dataRealizacji
          ).getTime();

          if (
            zamowieniaDataDokumentu >= datyMinus_0_Poczatek &&
            zamowieniaDataDokumentu <= datyMinus_0_Koniec
          ) {
            if (
              zamowienia[i].dział == "PŁYTY CD" ||
              zamowienia[i].dział == "INNE"
            ) {
              zamoweianiaCD_0_Wprowadzone += zamowienia[i].kwotaNetto;
              zamowieniaMiesiacWprowadzone++;
            } else {
              zamoweianiaVIN_0_Wprowadzone += zamowienia[i].kwotaNetto;
              zamowieniaMiesiacWprowadzone++;
            }
          }

          if (zamowieniaDataDokumentu == datyMinus_0_Koniec) {
            zamowieniaDzisWprowadzoneTab = [];
            let numerProdukcjiZKDzisWprowadzone;
            let numerZKDzisWprowadzone;
            let bokowiecZKDzisWprowadzone;
            let kontrahentZKDzisWprowadzone;
            let typProdukcjiZKDzisWprowadzone;
            let statusZKDzisWprowadzone;
            let wartoscZKDzisWprowadzone = 0;
            let wartoscZKDzisWprowadzoneString;
            let dataRealizacjiZDzisWprowadzoneData = new Date(
              zamowienia[i].dataRealizacji
            );

            zamowieniaDzisWprowadzone++;
            numerProdukcjiZKDzisWprowadzone = zamowienia[i].xNumer;
            zamowieniaDzisWprowadzoneTab.push(
              numerProdukcjiZKDzisWprowadzone.substr(0, 30)
            );
            numerZKDzisWprowadzone = zamowienia[i].nrDokumentu;
            zamowieniaDzisWprowadzoneTab.push(numerZKDzisWprowadzone);
            bokowiecZKDzisWprowadzone = zamowienia[i].opiekun;
            zamowieniaDzisWprowadzoneTab.push(bokowiecZKDzisWprowadzone);
            kontrahentZKDzisWprowadzone = zamowienia[i].kontrahent;
            zamowieniaDzisWprowadzoneTab.push(kontrahentZKDzisWprowadzone);

            if (
              zamowienia[i].dział == "PŁYTY CD" ||
              zamowienia[i].dział == "INNE"
            ) {
              zamoweianiaCD_dzis_Wprowadzone += zamowienia[i].kwotaNetto;
              typProdukcjiZKDzisWprowadzone = "CD/DVD";
            } else if (zamowienia[i].dział == "PŁYTY WINYLOWE") {
              zamoweianiaVIN_dzis_Wprowadzone += zamowienia[i].kwotaNetto;
              typProdukcjiZKDzisWprowadzone = "VIN";
            } else {
              typProdukcjiZKDzisWprowadzone = "";
            }

            zamowieniaDzisWprowadzoneTab.push(typProdukcjiZKDzisWprowadzone);
            if (zamowienia[i].statusProdukcji == "Oczekuje") {
              statusZKDzisWprowadzone = "Waiting";
            } else if (zamowienia[i].statusProdukcji == "Zakończone") {
              statusZKDzisWprowadzone = "Complete";
            } else if (zamowienia[i].statusProdukcji == "Częściowo przyjęte") {
              statusZKDzisWprowadzone = "Partially complete";
            } else if (zamowienia[i].statusProdukcji == "Foliowanie") {
              statusZKDzisWprowadzone = "Foiling";
            } else {
              statusZKDzisWprowadzone = zamowienia[i].statusProdukcji;
            }
            zamowieniaDzisWprowadzoneTab.push(statusZKDzisWprowadzone);

            wartoscZKDzisWprowadzone = zamowienia[i].kwotaNetto;
            wartoscZKDzisWprowadzoneString =
              wartoscZKDzisWprowadzone.toLocaleString("pl-PL", {
                useGrouping: "true",
                minimumFractionDigits: "2",
                maximumFractionDigits: "2",
              });

            let wartoscZKDzisWprowadzoneObj = new NameValue(
              wartoscZKDzisWprowadzone,
              wartoscZKDzisWprowadzoneString
            );
            zamowieniaDzisWprowadzoneTab.push(wartoscZKDzisWprowadzoneObj);
            zamowieniaDzisWprowadzoneTab.push(
              new Date(dataRealizacjiZDzisWprowadzoneData).toLocaleDateString(
                "pl-PL",
                options
              )
            );

            zamowieniaDzisWprowadzoneZbiorczeTab.push(
              zamowieniaDzisWprowadzoneTab
            );
          }

          if (zamowieniaDataRealizacji == datyMinus_0_Koniec) {
            zamowieniaNaDzis = [];
            let numerProdukcjiZKNaDzis;
            let numerZKNaDzis;
            let bokowiecZKNaDzis;
            let kontrahentZKNaDzis;
            let typProdukcjiZKNaDzis;
            let statusZKNaDzis;
            let akceptZKNaDzis;
            let sampleZKNaDzis;
            let wartoscZKNaDzis = 0;
            let wartoscZKNaDzisString;
            let dataUtworzeniaZKNaDzis = new Date(zamowienia[i].dataDokumentu);
            let dataRealizacjiZKNaDzisData = new Date(
              zamowienia[i].dataRealizacji
            );
            let mineloDniZKNaDzis = 0;
            let mineloDniZKNaDzisString;

            zamowieniaDoRealizacjiNaDzis++;

            numerProdukcjiZKNaDzis = zamowienia[i].xNumer;
            zamowieniaNaDzis.push(numerProdukcjiZKNaDzis.substr(0, 30));
            numerZKNaDzis = zamowienia[i].nrDokumentu;
            zamowieniaNaDzis.push(numerZKNaDzis);
            bokowiecZKNaDzis = zamowienia[i].opiekun;
            zamowieniaNaDzis.push(bokowiecZKNaDzis);
            kontrahentZKNaDzis = zamowienia[i].kontrahent;
            zamowieniaNaDzis.push(kontrahentZKNaDzis);
            if (zamowienia[i].dział == "PŁYTY WINYLOWE") {
              typProdukcjiZKNaDzis = "VIN";
            } else if (zamowienia[i].dział == "PŁYTY CD") {
              typProdukcjiZKNaDzis = "CD/DVD";
            } else {
              typProdukcjiZKNaDzis = "";
            }
            zamowieniaNaDzis.push(typProdukcjiZKNaDzis);
            if (zamowienia[i].statusProdukcji == "Oczekuje") {
              statusZKNaDzis = "Waiting";
            } else if (zamowienia[i].statusProdukcji == "Zakończone") {
              statusZKNaDzis = "Complete";
            } else if (zamowienia[i].statusProdukcji == "Częściowo przyjęte") {
              statusZKNaDzis = "Partially complete";
            } else if (zamowienia[i].statusProdukcji == "Foliowanie") {
              statusZKNaDzis = "Foiling";
            } else {
              statusZKNaDzis = zamowienia[i].statusProdukcji;
            }
            zamowieniaNaDzis.push(statusZKNaDzis);
            if (zamowienia[i].brakAkceptu == false) {
              akceptZKNaDzis = "";
            } else {
              akceptZKNaDzis = "NO";
            }
            zamowieniaNaDzis.push(akceptZKNaDzis);
            if (zamowienia[i].sample == true) {
              sampleZKNaDzis = true;
            } else {
              sampleZKNaDzis = false;
            }
            if (sampleZKNaDzis == false) {
              zamowieniaNaDzis.push(
                new NameStyle(sampleZKNaDzis, {
                  style: "color: #FFB6C1;",
                })
              );
            } else {
              zamowieniaNaDzis.push(
                new NameStyle(sampleZKNaDzis, {
                  style: "color: #2E8B57; background-color: #90EE90",
                })
              );
            }
            wartoscZKNaDzis = zamowienia[i].kwotaNetto;
            wartoscZKNaDzisString = wartoscZKNaDzis.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "2",
              maximumFractionDigits: "2",
            });
            let wartoscZKNaDzisObj = new NameValue(
              wartoscZKNaDzis,
              wartoscZKNaDzisString
            );
            zamowieniaNaDzis.push(wartoscZKNaDzisObj);

            (dataRealizacjiZKNaDzis = zamowienia[i].dataRealizacji.split("T")),
              (sekund =
                Math.abs(dataRealizacjiZKNaDzisData - dataUtworzeniaZKNaDzis) /
                1000);
            let minut = parseInt(sekund / 60);
            let godzin = parseInt(minut / 60);
            let dni = parseInt(godzin / 24);
            zamowieniaNaDzis.push(
              new Date(dataUtworzeniaZKNaDzis).toLocaleDateString(
                "pl-PL",
                options
              )
            );
            mineloDniZKNaDzis = dni;
            mineloDniZKNaDzisString = dni.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            });

            let mineloDniZKNaDzisObj = new NameValue(
              mineloDniZKNaDzis,
              mineloDniZKNaDzisString
            );
            zamowieniaNaDzis.push(mineloDniZKNaDzisObj);
            zamowieniaNaDzisZbiorczaTab.push(zamowieniaNaDzis);
          }
        }
      }

      console.log(zamowieniaDzisWprowadzoneZbiorczeTab);

      let zamowieniaAll_Dzis_Wprowadzone =
        zamoweianiaCD_dzis_Wprowadzone + zamoweianiaVIN_dzis_Wprowadzone;
      console.log(zamowieniaDzisWprowadzone);

      google.charts.load("current", { packages: ["table"] });
      google.charts.setOnLoadCallback(drawTable_zamowieniaNaDzis);
      google.charts.setOnLoadCallback(drawTable_zamowieniaWprowadzoneDzis);
      google.charts.setOnLoadCallback(drawTable_FakturyWystawioneDzis);

      function drawTable_zamowieniaNaDzis() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Production Number");
        data.addColumn("string", "Order number");
        data.addColumn("string", "Customer Care");
        data.addColumn("string", "Client");
        data.addColumn("string", "Type");
        data.addColumn("string", "Status");
        data.addColumn("string", "TP approve");
        data.addColumn("boolean", "Sample");
        data.addColumn("number", "Order value (PLN)");
        data.addColumn("string", "Order entry date");
        data.addColumn("number", "Days left");
        data.addRows(zamowieniaNaDzisZbiorczaTab);

        var table = new google.visualization.Table(
          document.getElementById("orders-for-today_table")
        );

        var formatter = new google.visualization.ColorFormat();
        formatter.addRange(100, 500, "#DC143C", null);
        formatter.format(data, 10);

        var formatter1 = new google.visualization.ColorFormat();
        formatter1.addRange("Waiting", null, "#FF7F50", null);
        formatter1.addRange("Partially complete", null, "#008B8B", null);
        formatter1.addRange("Foiling", null, "#556B2F", null);
        formatter1.addRange("Complete", null, "#006400", "#D7FBD8");
        formatter1.format(data, 5);

        var formatter2 = new google.visualization.ColorFormat();
        formatter2.addRange("NO", null, "#DC143C", null);
        formatter2.format(data, 6);

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
      function drawTable_zamowieniaWprowadzoneDzis() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Production Number");
        data.addColumn("string", "Order number");
        data.addColumn("string", "Customer Care");
        data.addColumn("string", "Client");
        data.addColumn("string", "Type");
        data.addColumn("string", "Status");
        data.addColumn("number", "Order value (PLN)");
        data.addColumn("string", "Target date");
        data.addRows(zamowieniaDzisWprowadzoneZbiorczeTab);

        var table1 = new google.visualization.Table(
          document.getElementById("orders-entry-today_table")
        );

        var formatter3 = new google.visualization.ColorFormat();
        formatter3.addRange("Waiting", null, "#FF7F50", null);
        formatter3.addRange("Partially complete", null, "#008B8B", null);
        formatter3.addRange("Foiling", null, "#556B2F", null);
        formatter3.addRange("Complete", null, "#006400", "#D7FBD8");
        formatter3.format(data, 5);

        var cssClassNames = {
          headerRow: "headerRow",
          tableRow: "tableRow",
          oddTableRow: "oddTableRow",
        };

        table1.draw(data, {
          allowHtml: true,
          showRowNumber: true,
          width: "100%",
          height: "100%",
          cssClassNames: cssClassNames,
        });
      }

      function drawTable_FakturyWystawioneDzis() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Production Number");
        data.addColumn("string", "Invoice number");
        data.addColumn("string", "Customer Care");
        data.addColumn("string", "Client");
        data.addColumn("string", "Type");
        data.addColumn("number", "Invoice value (PLN)");
        data.addColumn("number", "Invoice profit (PLN)");
        data.addColumn("string", "Profit Margin %");
        data.addRows(fvDzisZbiorczaTab);

        var table2 = new google.visualization.Table(
          document.getElementById("invoice-today_table")
        );

        var formatter4 = new google.visualization.ColorFormat();
        formatter4.addRange(-100000, -1, "#DC143C", null);
        formatter4.format(data, 6);
        formatter4.format(data, 5);

        var formatter5 = new google.visualization.ColorFormat();
        formatter5.addRange("0,00 %", "0,01 %", "#DC143C", null);
        formatter5.format(data, 7);

        var cssClassNames = {
          headerRow: "headerRow",
          tableRow: "tableRow",
          oddTableRow: "oddTableRow",
        };

        table2.draw(data, {
          allowHtml: true,
          showRowNumber: true,
          width: "100%",
          height: "100%",
          cssClassNames: cssClassNames,
        });
      }
      $(
        "#orders-today"
      ).html(`<span class="container-right_firs_row_data_text_small"
                >Entered Orders (T)</span
              >
              <br />${zamowieniaDzisWprowadzone}
            `);

      $(
        "#today-order_value"
      ).html(`<span class="container-right_second_row_data_text_small"
            >Today Orders Value (PLN)</span
          >
          <br />${zamowieniaAll_Dzis_Wprowadzone.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })}
                  `);

      $(
        "#orders-for_today"
      ).html(`<span class="container-right_firs_row_data_text_small"
            >Orders For Today</span
          >
          <br />${zamowieniaDoRealizacjiNaDzis}
        `);

      console.log(zamoweianiaCD_dzis_Wprowadzone);
    });
  });
});
