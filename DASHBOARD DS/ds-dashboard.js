$(document).ready(function () {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const options2 = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const profitCD = 0.3;
  const profitVIN = 0.35;

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
  class WykresTarget {
    constructor(y, label, indexLabel) {
      this.y = y;
      this.label = label;
      this.indexLabel = indexLabel;
    }
  }
  class WykresTargetForecast {
    constructor(y, label) {
      this.y = y;
      this.label = label;
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
  $("#target-details_button, #target-this_month").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".container-right_seven_row").offset().top,
      },
      500
    );
  });
  $("#sales-history_button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".container-right_eight_row").offset().top,
      },
      500
    );
  });

  let dataPoint = [
    1266.890435345, 2443.8903455, 2674.8904345, 4872.8903555, 3373.894343,
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

  let handlowiec = "Maja Grunt";

  target = [
    70000, 70000, 70000, 80000, 80000, 80000, 90000, 90000, 90000, 100000,
    100000, 100000,
  ];
  targetCD = [
    45000, 45000, 45000, 50000, 50000, 50000, 55000, 55000, 55000, 60000, 60000,
    60000,
  ];
  targetVIN = [
    25000, 25000, 25000, 30000, 30000, 30000, 35000, 35000, 35000, 40000, 40000,
    40000,
  ];
  // let target = [];
  // let targetCD = [];
  // let targetVIN = [];
  let mailHandlowiec;
  let welcomeUser;

  // while (true) {
  //   let pinHandlowiec = Number(prompt("Podaj PIN"));

  //   switch (pinHandlowiec) {
  //     case aa:
  //       handlowiec = "Maja Grunt";
  //       target = [
  //         70000, 70000, 70000, 80000, 80000, 80000, 90000, 90000, 90000, 100000,
  //         100000, 100000,
  //       ];
  //       targetCD = [
  //         45000, 45000, 45000, 50000, 50000, 50000, 55000, 55000, 55000, 60000,
  //         60000, 60000,
  //       ];
  //       targetVIN = [
  //         25000, 25000, 25000, 30000, 30000, 30000, 35000, 35000, 35000, 40000,
  //         40000, 40000,
  //       ];
  //       mailHandlowiec = "maja.grunt@x-disc.pl";
  //       welcomeUser = "Welcome, Maja Grunt";
  //       break;

  //     case bb:
  //       handlowiec = "Krzysztof Ciółkowski";
  //       target = [
  //         95000, 95000, 95000, 105000, 105000, 105000, 110000, 110000, 110000,
  //         120000, 120000, 120000,
  //       ];
  //       targetCD = [
  //         70000, 70000, 70000, 75000, 75000, 75000, 75000, 75000, 75000, 80000,
  //         80000, 80000,
  //       ];
  //       targetVIN = [
  //         25000, 25000, 25000, 30000, 30000, 30000, 35000, 35000, 35000, 40000,
  //         40000, 40000,
  //       ];
  //       welcomeUser = "Welcome, Krzysztof Ciółkowski";
  //       mailHandlowiec = "krzysztof.ciolkowski@x-disc.pl";
  //       break;

  //     case cc:
  //       handlowiec = "Michał Durmowicz";
  //       target = [
  //         70000, 70000, 70000, 80000, 80000, 80000, 90000, 90000, 90000, 100000,
  //         100000, 100000,
  //       ];
  //       targetCD = [
  //         45000, 45000, 45000, 50000, 50000, 50000, 55000, 55000, 55000, 60000,
  //         60000, 60000,
  //       ];
  //       targetVIN = [
  //         25000, 25000, 25000, 30000, 30000, 30000, 35000, 35000, 35000, 40000,
  //         40000, 40000,
  //       ];
  //       welcomeUser = "Welcome, Michał Durmowicz";
  //       mailHandlowiec = "michal.durmowicz@x-disc.pl";
  //       break;

  //     case dd:
  //       handlowiec = "Marta Kierzkowska";
  //       target = [
  //         200000, 200000, 200000, 210000, 210000, 210000, 200000, 380000,
  //         250000, 250000, 240000, 0,
  //       ];
  //       targetCD = [
  //         100000, 100000, 100000, 105000, 105000, 105000, 100000, 300000,
  //         130000, 130000, 120000, 0,
  //       ];
  //       targetVIN = [
  //         100000, 100000, 100000, 105000, 105000, 105000, 100000, 80000, 120000,
  //         120000, 120000, 0,
  //       ];
  //       welcomeUser = "Welcome, Marta Kierzkowska";
  //       mailHandlowiec = "marta.kierzkowska@x-disc.pl";
  //       break;

  //     case ee:
  //       handlowiec = "Lucyna Kozicka";
  //       target = [
  //         280000, 280000, 280000, 305000, 305000, 305000, 320000, 320000,
  //         320000, 335000, 335000, 335000,
  //       ];
  //       targetCD = [
  //         200000, 200000, 200000, 220000, 220000, 220000, 230000, 230000,
  //         230000, 240000, 240000, 240000,
  //       ];
  //       targetVIN = [
  //         80000, 80000, 80000, 85000, 85000, 85000, 90000, 90000, 90000, 95000,
  //         95000, 95000,
  //       ];
  //       welcomeUser = "Welcome, Lucyna Kozicka";
  //       mailHandlowiec = "lucyna.kozicka@x-disc.pl";
  //       break;

  //     case ff:
  //       handlowiec = "Jakub Mikliński";
  //       target = [
  //         335000, 335000, 335000, 335000, 335000, 335000, 370000, 370000,
  //         370000, 385000, 375000, 375000,
  //       ];
  //       targetCD = [
  //         55000, 55000, 55000, 65000, 65000, 65000, 70000, 70000, 70000, 75000,
  //         75000, 75000,
  //       ];
  //       targetVIN = [
  //         280000, 280000, 280000, 290000, 290000, 290000, 300000, 300000,
  //         300000, 310000, 300000, 300000,
  //       ];
  //       welcomeUser = "Welcome, Jakub Mikliński";
  //       mailHandlowiec = "jakub.miklinski@x-disc.pl";
  //       break;

  //     case gg:
  //       handlowiec = "Małgorzata Roszkowska";
  //       target = [
  //         160000, 160000, 160000, 165000, 165000, 175000, 170000, 170000,
  //         170000, 170000, 170000, 170000,
  //       ];
  //       targetCD = [
  //         100000, 100000, 100000, 105000, 105000, 115000, 110000, 110000,
  //         110000, 110000, 110000, 110000,
  //       ];
  //       targetVIN = [
  //         60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000,
  //         60000, 60000,
  //       ];
  //       welcomeUser = "Welcome, Małgorzata Roszkowska";
  //       mailHandlowiec = "malgorzata.roszkowska@x-disc.pl";
  //       break;

  //     case hh:
  //       handlowiec = "Ingo Kleimann";
  //       target = [
  //         56000, 122000, 146000, 39000, 130000, 68000, 145000, 200000, 84000,
  //         125000, 100000, 100000,
  //       ];
  //       targetCD = [
  //         11000, 52000, 68000, 34000, 11000, 45000, 140000, 90000, 60000,
  //         100000, 80000, 80000,
  //       ];
  //       targetVIN = [
  //         45000, 70000, 78000, 5000, 20000, 23000, 5000, 110000, 24000, 25000,
  //         20000, 20000,
  //       ];
  //       welcomeUser = "Welcome, Ingo Kleimann";
  //       mailHandlowiec = "ingo.kleimann@x-disc.pl";
  //       break;

  //     case ii:
  //       handlowiec = "Jean-Remi BEL";
  //       target = [
  //         50000, 50000, 50000, 70000, 70000, 70000, 85000, 85000, 85000, 90000,
  //         90000, 90000,
  //       ];
  //       targetCD = [
  //         10000, 10000, 10000, 20000, 20000, 20000, 25000, 25000, 25000, 30000,
  //         30000, 30000,
  //       ];
  //       targetVIN = [
  //         40000, 40000, 40000, 50000, 50000, 50000, 60000, 60000, 60000, 60000,
  //         60000, 60000,
  //       ];
  //       welcomeUser = "Welcome, Jean-Remi Bel";
  //       mailHandlowiec = "jean-remi.bel@x-disc.pl";
  //       break;

  //     default:
  //       setTimeout(function () {
  //         window.location.href = "failPin.html";
  //       }, 500);
  //   }

  //   break;
  // }

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

  let dodatekRoboczy = 7;

  if (dodatekRoboczy >= pozostaleDni) {
    dodatekRoboczy = pozostaleDni;
  } else {
    dodatekRoboczy = dodatekRoboczy;
  }

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

  let poczatekMiesiac6 = new Date(y - yearMinus6, m - 5, 1);
  let koniecMiesiac6 = new Date(y - yearMinus6, m - 5, koncowkiMiesiaca[m - 5]);
  let poczatekMiesiac5 = new Date(y - yearMinus5, m - 4, 1);
  let koniecMiesiac5 = new Date(y - yearMinus5, m - 4, koncowkiMiesiaca[m - 4]);
  let poczatekMiesiac4 = new Date(y - yearMinus4, m - 3, 1);
  let koniecMiesiac4 = new Date(y - yearMinus4, m - 3, koncowkiMiesiaca[m - 3]);
  let poczatekMiesiac3 = new Date(y - yearMinus3, m - 2, 1);
  let koniecMiesiac3 = new Date(y - yearMinus3, m - 2, koncowkiMiesiaca[m - 2]);
  let poczatekMiesiac2 = new Date(y - yearMinus2, m - 1, 1);
  let koniecMiesiac2 = new Date(y - yearMinus2, m - 1, koncowkiMiesiaca[m - 1]);
  let poczatekMiesiac1 = new Date(y - yearMinus2, m, 1);
  let koniecMiesiac1 = new Date(y - yearMinus2, m, koncowkiMiesiaca[m - 1]);
  let poczatekMiesiac0 = new Date(y, m - monthMinus, 1);
  let koniecMiesiac0 = new Date(y, m - monthMinus, d);
  let koniecMiesiac0_koniecTegoMiesiaca = new Date(
    y,
    m - monthMinus,
    koncowkiMiesiaca[m - monthMinus]
  );

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
  console.log(koniecMiesiac0_koniecTegoMiesiaca);
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

  let koniecData00 = `${yK0}-${msK0}-${koncowkiMiesiaca[m - monthMinus]}`;

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

  console.log(poczatekData0);
  console.log(koniecData06);

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
      let datyPlus_1_Poczatek = new Date(poczatekData06).getTime();
      let datyPlus_1_Koniec = new Date(koniecMiesiac06).getTime();

      let datyMinus_1_KoniecString = new Date(
        koniecMiesiac1
      ).toLocaleDateString("pl-PL", options2);

      let fakturyDataDokumentu;
      let zamowieniaDataDokumentu;
      let zamowieniaDataRealizacji;

      let poczatekRoku = new Date(y, 0, 1);

      let koniecObecnegoMiesiaca = new Date(koniecData00).getTime();

      let dzisPlus7Dni = new Date(dzisPlus7).getTime();

      //***************************************************************/

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
          if (
            faktury[j].handlowiec == handlowiec &&
            faktury[j].nrDokumentu.includes("ZAL", 0) == false
          ) {
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
            (fakturyDataDokumentu >= datyMinus_1_Poczatek &&
              fakturyDataDokumentu <= datyMinus_1_Koniec) ||
            faktury[i].dataDokumentu == "2024-01-31"
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

      let aktualnyMiesiac = new Date(dzis).getMonth();
      console.log(aktualnyMiesiac);

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

      let descriebeLabel = `${(circProgresTarget * 100).toLocaleString(
        "pl-PL",
        {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        }
      )} %`;

      let descriebeLabelEmpty = `${(
        circProgrsTarget_empty * 100
      ).toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      })} %`;

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
            toolTipContent: "(#percent%)",
            dataPoints: [
              {
                y: circProgresTarget,
                color: "#008000",
                indexLabel: descriebeLabel,
              },
              {
                y: circProgrsTarget_empty,
                color: circleColour,
                indexLabel: descriebeLabelEmpty,
              },
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
      let zamowieniaDoRealizacjiMiesiacCd = 0;
      let zamowieniaDoRealizacjiMiesiacVIN = 0;

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

          if (
            zamowieniaDataRealizacji >= datyMinus_0_Koniec &&
            zamowieniaDataRealizacji <= koniecObecnegoMiesiaca
          ) {
            if (
              zamowienia[i].dział == "PŁYTY CD" ||
              zamowienia[i].dział == "INNE"
            ) {
              zamowieniaDoRealizacjiMiesiacCd += zamowienia[i].kwotaNetto;
            } else {
              zamowieniaDoRealizacjiMiesiacVIN += zamowienia[i].kwotaNetto;
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

      //********************* TARGETY********************************* */

      let profitCDOrder = zamowieniaDoRealizacjiMiesiacCd * profitCD;
      let profitVINOrder = zamowieniaDoRealizacjiMiesiacVIN * profitVIN;

      let yourTargetDetailsCDAllTab = [];

      let yourTargetDetailsCD = [];

      yourTargetDetailsCD.push(month[m]);

      let salesValueCD_0 = new NameValue(
        sprzedazCD_0,
        sprzedazCD_0.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );
      yourTargetDetailsCD.push(salesValueCD_0);

      let salesProfitCD_0 = new NameValue(
        zyskCD_0,
        zyskCD_0.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );
      yourTargetDetailsCD.push(salesProfitCD_0);

      let averageProfitCD_0 = `${(
        (zyskCD_0 / sprzedazCD_0) *
        100
      ).toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      })} %`;

      yourTargetDetailsCD.push(averageProfitCD_0);
      yourTargetDetailsCD.push(
        targetCD[m - monthMinus].toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );

      let progresProfitCD_0 = `${(
        (zyskCD_0 / targetCD[m - monthMinus]) *
        100
      ).toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      })} %`;

      yourTargetDetailsCD.push(progresProfitCD_0);

      let openOrdersCD_0 = new NameValue(
        zamowieniaDoRealizacjiMiesiacCd,
        zamowieniaDoRealizacjiMiesiacCd.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );

      yourTargetDetailsCD.push(openOrdersCD_0);

      let forecastSaleCD_0 = new NameValue(
        sprzedazCD_0 + zamowieniaDoRealizacjiMiesiacCd,
        (sprzedazCD_0 + zamowieniaDoRealizacjiMiesiacCd).toLocaleString(
          "pl-PL",
          {
            useGrouping: "true",
            minimumFractionDigits: "2",
            maximumFractionDigits: "2",
          }
        )
      );

      yourTargetDetailsCD.push(forecastSaleCD_0);

      let forecastProfitCD_0 = new NameValue(
        zyskCD_0 + profitCDOrder,
        (zyskCD_0 + profitCDOrder).toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );

      yourTargetDetailsCD.push(forecastProfitCD_0);

      let targetRealizationForecastProcentCD = `${(
        ((zyskCD_0 + profitCDOrder) / targetCD[m - monthMinus]) *
        100
      ).toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      })} %`;

      yourTargetDetailsCD.push(targetRealizationForecastProcentCD);

      yourTargetDetailsCDAllTab.push(yourTargetDetailsCD);

      let yourTargetDetailsVINAllTab = [];

      let yourTargetDetailsVIN = [];

      yourTargetDetailsVIN.push(month[m]);

      let salesValueVIN_0 = new NameValue(
        sprzedazVIN_0,
        sprzedazVIN_0.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );
      yourTargetDetailsVIN.push(salesValueVIN_0);

      let salesProfitVIN_0 = new NameValue(
        zyskVIN_0,
        zyskVIN_0.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );
      yourTargetDetailsVIN.push(salesProfitVIN_0);

      let averageProfitVIN_0 = `${(
        (zyskVIN_0 / sprzedazVIN_0) *
        100
      ).toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      })} %`;

      yourTargetDetailsVIN.push(averageProfitVIN_0);
      yourTargetDetailsVIN.push(
        targetVIN[m - monthMinus].toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );

      let progresProfitVIN_0 = `${(
        (zyskVIN_0 / targetVIN[m - monthMinus]) *
        100
      ).toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      })} %`;

      yourTargetDetailsVIN.push(progresProfitVIN_0);

      let openOrdersVIN_0 = new NameValue(
        zamowieniaDoRealizacjiMiesiacVIN,
        zamowieniaDoRealizacjiMiesiacVIN.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );

      yourTargetDetailsVIN.push(openOrdersVIN_0);

      let forecastSaleVIN_0 = new NameValue(
        sprzedazVIN_0 + zamowieniaDoRealizacjiMiesiacVIN,
        (sprzedazVIN_0 + zamowieniaDoRealizacjiMiesiacVIN).toLocaleString(
          "pl-PL",
          {
            useGrouping: "true",
            minimumFractionDigits: "2",
            maximumFractionDigits: "2",
          }
        )
      );

      yourTargetDetailsVIN.push(forecastSaleVIN_0);

      let forecastProfitVIN_0 = new NameValue(
        zyskVIN_0 + profitVINOrder,
        (zyskVIN_0 + profitVINOrder).toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })
      );

      yourTargetDetailsVIN.push(forecastProfitVIN_0);

      let targetRealizationForecastProcentVIN = `${(
        ((zyskVIN_0 + profitVINOrder) / targetVIN[m - monthMinus]) *
        100
      ).toLocaleString("pl-PL", {
        useGrouping: "true",
        minimumFractionDigits: "2",
        maximumFractionDigits: "2",
      })} %`;

      yourTargetDetailsVIN.push(targetRealizationForecastProcentVIN);

      yourTargetDetailsVINAllTab.push(yourTargetDetailsVIN);

      console.log(yourTargetDetailsVINAllTab);

      let yourTargetCDBar = [];
      let yourTargetVINBar = [];

      let yourTargetCDBarForecast = [];
      let yourTargetVINBarForecast = [];

      let yourTargetCDBarForecastPlusOrder = [];
      let yourTargetVINBarForecastPlusOrder = [];

      let wykresTargetCDForecast = new WykresTargetForecast(
        profitCDOrder,
        month[m]
      );
      yourTargetCDBarForecast.push(wykresTargetCDForecast);

      let wykresTargetVINForecast = new WykresTargetForecast(
        profitVINOrder,
        month[m]
      );
      yourTargetVINBarForecast.push(wykresTargetVINForecast);

      let wykresTargetCDForecastPlusOrder = new WykresTargetForecast(
        targetCD[m - monthMinus],
        month[m]
      );
      yourTargetCDBarForecastPlusOrder.push(wykresTargetCDForecastPlusOrder);

      let wykresTargetVINForecastPlusOrder = new WykresTargetForecast(
        targetVIN[m - monthMinus],
        month[m]
      );
      yourTargetVINBarForecastPlusOrder.push(wykresTargetVINForecastPlusOrder);

      let wykresTargetCD = new WykresTarget(
        zyskCD_0,
        month[m],
        zyskCD_0.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourTargetCDBar.push(wykresTargetCD);

      let wykresTargetVIN = new WykresTarget(
        zyskVIN_0,
        month[m],
        zyskVIN_0.toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "0",
          maximumFractionDigits: "0",
        })
      );
      yourTargetVINBar.push(wykresTargetVIN);

      if (aktualnyMiesiac > 0) {
        wykresTargetCD = new WykresTarget(
          zyskCD_1,
          month[m - 1],
          zyskCD_1.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetCDBar.push(wykresTargetCD);

        wykresTargetVIN = new WykresTarget(
          zyskVIN_1,
          month[m - 1],
          zyskVIN_1.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetVINBar.push(wykresTargetVIN);

        wykresTargetCDForecastPlusOrder = new WykresTargetForecast(
          targetCD[m - monthMinus - 1],
          month[m - 1]
        );
        yourTargetCDBarForecastPlusOrder.push(wykresTargetCDForecastPlusOrder);

        wykresTargetVINForecastPlusOrder = new WykresTargetForecast(
          targetVIN[m - monthMinus - 1],
          month[m - 1]
        );
        yourTargetVINBarForecastPlusOrder.push(
          wykresTargetVINForecastPlusOrder
        );

        yourTargetDetailsCD = [];

        yourTargetDetailsCD.push(month[m - 1]);

        let salesValueCD_1 = new NameValue(
          sprzedazCD_1,
          sprzedazCD_1.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "2",
            maximumFractionDigits: "2",
          })
        );
        yourTargetDetailsCD.push(salesValueCD_1);

        let salesProfitCD_1 = new NameValue(
          zyskCD_1,
          zyskCD_1.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "2",
            maximumFractionDigits: "2",
          })
        );
        yourTargetDetailsCD.push(salesProfitCD_1);

        let averageProfitCD_1 = `${(
          (zyskCD_1 / sprzedazCD_1) *
          100
        ).toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })} %`;

        yourTargetDetailsCD.push(averageProfitCD_1);
        yourTargetDetailsCD.push(
          targetCD[m - monthMinus - 1].toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );

        let progresProfitCD_1 = `${(
          (zyskCD_1 / targetCD[m - monthMinus - 1]) *
          100
        ).toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })} %`;

        yourTargetDetailsCD.push(progresProfitCD_1);

        let openOrdersCD_1 = new NameValue(
          0,
          (0).toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetDetailsCD.push(openOrdersCD_1);

        let forecastSaleCD_1 = new NameValue(
          0,
          (0).toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );

        yourTargetDetailsCD.push(forecastSaleCD_1);

        let forecastProfitCD_1 = new NameValue(
          0,
          (0).toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );

        yourTargetDetailsCD.push(forecastProfitCD_1);

        let targetRealizationForecastProcentCD_1 = `${(0).toLocaleString(
          "pl-PL",
          {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          }
        )} %`;

        yourTargetDetailsCD.push(targetRealizationForecastProcentCD_1);

        yourTargetDetailsCDAllTab.push(yourTargetDetailsCD);

        yourTargetDetailsVIN = [];

        yourTargetDetailsVIN.push(month[m - 1]);

        let salesValueVIN_1 = new NameValue(
          sprzedazVIN_1,
          sprzedazVIN_1.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "2",
            maximumFractionDigits: "2",
          })
        );
        yourTargetDetailsVIN.push(salesValueVIN_1);

        let salesProfitVIN_1 = new NameValue(
          zyskVIN_1,
          zyskVIN_1.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "2",
            maximumFractionDigits: "2",
          })
        );
        yourTargetDetailsVIN.push(salesProfitVIN_1);

        let averageProfitVIN_1 = `${(
          (zyskVIN_1 / sprzedazVIN_1) *
          100
        ).toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })} %`;

        yourTargetDetailsVIN.push(averageProfitVIN_1);
        yourTargetDetailsVIN.push(
          targetVIN[m - monthMinus - 1].toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );

        let progresProfitVIN_1 = `${(
          (zyskVIN_1 / targetVIN[m - monthMinus - 1]) *
          100
        ).toLocaleString("pl-PL", {
          useGrouping: "true",
          minimumFractionDigits: "2",
          maximumFractionDigits: "2",
        })} %`;

        yourTargetDetailsVIN.push(progresProfitVIN_1);

        let openOrdersVIN_1 = new NameValue(
          0,
          (0).toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetDetailsVIN.push(openOrdersVIN_1);

        let forecastSaleVIN_1 = new NameValue(
          0,
          (0).toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );

        yourTargetDetailsVIN.push(forecastSaleVIN_1);

        let forecastProfitVIN_1 = new NameValue(
          0,
          (0).toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );

        yourTargetDetailsVIN.push(forecastProfitVIN_1);

        let targetRealizationForecastProcentVIN_1 = `${(0).toLocaleString(
          "pl-PL",
          {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          }
        )} %`;

        yourTargetDetailsVIN.push(targetRealizationForecastProcentVIN_1);

        yourTargetDetailsVINAllTab.push(yourTargetDetailsVIN);
      }

      console.log(yourTargetDetailsCD);
      console.log(yourTargetDetailsVIN);

      //******target zrobiony tylko miesiąc do tyłu (na próbę) ********/

      if (aktualnyMiesiac > 1) {
        wykresTargetCD = new WykresTarget(
          zyskCD_2,
          month[m - 2],
          zyskCD_2.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetCDBar.push(wykresTargetCD);

        wykresTargetVIN = new WykresTarget(
          zyskVIN_2,
          month[m - 2],
          zyskVIN_2.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetVINBar.push(wykresTargetVIN);

        wykresTargetCDForecastPlusOrder = new WykresTargetForecast(
          targetCD[m - monthMinus],
          month[m - 2]
        );
        yourTargetCDBarForecastPlusOrder.push(wykresTargetCDForecastPlusOrder);

        wykresTargetVINForecastPlusOrder = new WykresTargetForecast(
          targetVIN[m - monthMinus],
          month[m - 2]
        );
        yourTargetVINBarForecastPlusOrder.push(
          wykresTargetVINForecastPlusOrder
        );
      }

      if (aktualnyMiesiac > 2) {
        wykresTargetCD = new WykresTarget(
          zyskCD_3,
          month[m - 3],
          zyskCD_3.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetCDBar.push(wykresTargetCD);

        wykresTargetVIN = new WykresTarget(
          zyskVIN_3,
          month[m - 3],
          zyskVIN_3.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetVINBar.push(wykresTargetVIN);

        wykresTargetCDForecastPlusOrder = new WykresTargetForecast(
          targetCD[m - monthMinus],
          month[m - 3]
        );
        yourTargetCDBarForecastPlusOrder.push(wykresTargetCDForecastPlusOrder);

        wykresTargetVINForecastPlusOrder = new WykresTargetForecast(
          targetVIN[m - monthMinus],
          month[m - 3]
        );
        yourTargetVINBarForecastPlusOrder.push(
          wykresTargetVINForecastPlusOrder
        );
      }
      if (aktualnyMiesiac > 3) {
        wykresTargetCD = new WykresTarget(
          zyskCD_4,
          month[m - 4],
          zyskCD_4.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetCDBar.push(wykresTargetCD);

        wykresTargetVIN = new WykresTarget(
          zyskVIN_4,
          month[m - 4],
          zyskVIN_4.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetVINBar.push(wykresTargetVIN);

        wykresTargetCDForecastPlusOrder = new WykresTargetForecast(
          targetCD[m - monthMinus],
          month[m - 4]
        );
        yourTargetCDBarForecastPlusOrder.push(wykresTargetCDForecastPlusOrder);

        wykresTargetVINForecastPlusOrder = new WykresTargetForecast(
          targetVIN[m - monthMinus],
          month[m - 4]
        );
        yourTargetVINBarForecastPlusOrder.push(
          wykresTargetVINForecastPlusOrder
        );
      }
      if (aktualnyMiesiac > 4) {
        wykresTargetCD = new WykresTarget(
          zyskCD_5,
          month[m - 5],
          zyskCD_5.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetCDBar.push(wykresTargetCD);

        wykresTargetVIN = new WykresTarget(
          zyskVIN_5,
          month[m - 5],
          zyskVIN_5.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetVINBar.push(wykresTargetVIN);

        wykresTargetCDForecastPlusOrder = new WykresTargetForecast(
          targetCD[m - monthMinus],
          month[m - 5]
        );
        yourTargetCDBarForecastPlusOrder.push(wykresTargetCDForecastPlusOrder);

        wykresTargetVINForecastPlusOrder = new WykresTargetForecast(
          targetVIN[m - monthMinus],
          month[m - 5]
        );
        yourTargetVINBarForecastPlusOrder.push(
          wykresTargetVINForecastPlusOrder
        );
      }
      if (aktualnyMiesiac > 5) {
        wykresTargetCD = new WykresTarget(
          zyskCD_6,
          month[m - 6],
          zyskCD_6.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetCDBar.push(wykresTargetCD);

        wykresTargetVIN = new WykresTarget(
          zyskVIN_6,
          month[m - 6],
          zyskVIN_6.toLocaleString("pl-PL", {
            useGrouping: "true",
            minimumFractionDigits: "0",
            maximumFractionDigits: "0",
          })
        );
        yourTargetVINBar.push(wykresTargetVIN);

        wykresTargetCDForecastPlusOrder = new WykresTargetForecast(
          targetCD[m - monthMinus],
          month[m - 6]
        );
        yourTargetCDBarForecastPlusOrder.push(wykresTargetCDForecastPlusOrder);

        wykresTargetVINForecastPlusOrder = new WykresTargetForecast(
          targetVIN[m - monthMinus],
          month[m - 6]
        );
        yourTargetVINBarForecastPlusOrder.push(
          wykresTargetVINForecastPlusOrder
        );
      }

      //***************************KONTRAHENCI OBROTY************************************* */
      class Kontrahent {
        constructor(
          kontrahentNazwa,
          kontrahentKraj,
          kontrahentOpiekun,
          kontrahentFaktury,
          kontrahentUdzial,
          kontrahentSprzedazAll,
          kontrahentSprzedaz_0,
          kontrahentSprzedaz_1,
          kontrahentSprzedaz_2,
          kontrahentSprzedaz_3,
          kontrahentSprzedaz_4,
          kontrahentSprzedaz_5,
          kontrahentSprzedaz_6,
          kontrahentZyskAll,
          kontrahentZysk_0,
          kontrahentZysk_1,
          kontrahentZysk_2,
          kontrahentZysk_3,
          kontrahentZysk_4,
          kontrahentZysk_5,
          kontrahentZysk_6,
          kontrahentZamowienia_0,
          kontrahentZyskZamowienia_0,
          kontrahentSprzedaz_zamowienia_0,
          kontrahentZysk_zyskZamowienia_0,
          kontrahentZamowienia_next_1,
          kontrahentZyskZamowienia_next_1,
          kontrahentAlertRed,
          kontrahentAlertOrange,
          kontrahentAlertSredniaGreen,
          kontrahentAlertSredniaOrange,
          kontrahentUdzial_CD,
          kontrahentUdzial_VIN,
          kontrahentMarzaProcent
        ) {
          this.kontrahentNazwa = kontrahentNazwa;
          this.kontrahentKraj = kontrahentKraj;
          this.kontrahentOpiekun = kontrahentOpiekun;
          this.kontrahentFaktury = kontrahentFaktury;
          this.kontrahentUdzial = kontrahentUdzial;
          this.kontrahentSprzedazAll = kontrahentSprzedazAll;
          this.kontrahentSprzedaz_0 = kontrahentSprzedaz_0;
          this.kontrahentSprzedaz_1 = kontrahentSprzedaz_1;
          this.kontrahentSprzedaz_2 = kontrahentSprzedaz_2;
          this.kontrahentSprzedaz_3 = kontrahentSprzedaz_3;
          this.kontrahentSprzedaz_4 = kontrahentSprzedaz_4;
          this.kontrahentSprzedaz_5 = kontrahentSprzedaz_5;
          this.kontrahentSprzedaz_6 = kontrahentSprzedaz_6;
          this.kontrahentZyskAll = kontrahentZyskAll;
          this.kontrahentZysk_0 = kontrahentZysk_0;
          this.kontrahentZysk_1 = kontrahentZysk_1;
          this.kontrahentZysk_2 = kontrahentZysk_2;
          this.kontrahentZysk_3 = kontrahentZysk_3;
          this.kontrahentZysk_4 = kontrahentZysk_4;
          this.kontrahentZysk_5 = kontrahentZysk_5;
          this.kontrahentZysk_6 = kontrahentZysk_6;
          this.kontrahentZamowienia_0 = kontrahentZamowienia_0;
          this.kontrahentZyskZamowienia_0 = kontrahentZyskZamowienia_0;
          this.kontrahentSprzedaz_zamowienia_0 =
            kontrahentSprzedaz_zamowienia_0;
          this.kontrahentZysk_zyskZamowienia_0 =
            kontrahentZysk_zyskZamowienia_0;
          this.kontrahentZamowienia_next_1 = kontrahentZamowienia_next_1;
          this.kontrahentZyskZamowienia_next_1 =
            kontrahentZyskZamowienia_next_1;
          this.kontrahentAlertRed = kontrahentAlertRed;
          this.kontrahentAlertOrange = kontrahentAlertOrange;
          this.kontrahentAlertSredniaGreen = kontrahentAlertSredniaGreen;
          this.kontrahentAlertSredniaOrange = kontrahentAlertSredniaOrange;
          this.kontrahentUdzial_CD = kontrahentUdzial_CD;
          this.kontrahentUdzial_VIN = kontrahentUdzial_VIN;
          this.kontrahentMarzaProcent = kontrahentMarzaProcent;
        }
      }

      let fakturyZamowieniaTab = [];
      let kontrahentAll = new Set();
      let kontrahentAllTab = [];

      for (i = 0; i < faktury.length; i++) {
        if (
          handlowiec == faktury[i].handlowiec &&
          faktury[i].nrDokumentu.includes("ZAL", 0) == false
        ) {
          fakturyZamowieniaTab.push(faktury[i]);
          kontrahentAll.add(faktury[i].kontrahent);
        }
      }

      for (i = 0; i < zamowienia.length; i++) {
        if (handlowiec == zamowienia[i].handlowiec) {
          fakturyZamowieniaTab.push(zamowienia[i]);
          kontrahentAll.add(zamowienia[i].kontrahent);
        }
      }

      for (let x of kontrahentAll) {
        kontrahentAllTab.push(x);
      }
      console.log(fakturyZamowieniaTab);
      console.log(kontrahentAllTab);

      let bokowiec = new Set();
      let kontrahent = new Set();

      function dodajSelectory() {
        let htmlBokowiec = null;
        let htmlKontrahent = null;
        let bokowiecTab = [];
        let kontrahentTab = [];
        for (k = 0; k < fakturyZamowieniaTab.length; k++) {
          bokowiec.add(fakturyZamowieniaTab[k].opiekun);
          kontrahent.add(fakturyZamowieniaTab[k].kontrahent);
        }

        for (let x of bokowiec) {
          bokowiecTab.push(x);
        }
        for (let x of kontrahent) {
          kontrahentTab.push(x);
        }

        bokowiecTab.sort();
        kontrahentTab.sort();

        htmlBokowiec = "<option>BOK</option>";

        for (i = 0; i < bokowiecTab.length; i++) {
          htmlBokowiec += `<option>${bokowiecTab[i]}</option>`;
        }

        htmlKontrahent = "<option>Customer</option>";

        for (i = 0; i < kontrahentTab.length; i++) {
          htmlKontrahent += `<option>${kontrahentTab[i]}</option>`;
        }

        $("#opiekun-bok").html(htmlBokowiec);
        $("#kontrahent-customer").html(htmlKontrahent);
      }

      dodajSelectory();

      function analizujKontrahenta() {
        listaKontrahentow = [];
        let kontrahentSprzedazWszyscy_CD = 0;
        let kontrahentSprzedazWszyscy_VIN = 0;
        let kontrahentSprzedazWszyscy = 0;

        for (k = 0; k < fakturyZamowieniaTab.length; k++) {
          if (fakturyZamowieniaTab[k].kategoria == "Sprzedaż") {
            if (fakturyZamowieniaTab[k].dział == "PŁYTY WINYLOWE") {
              kontrahentSprzedazWszyscy_VIN +=
                fakturyZamowieniaTab[k].kwotaPozycjiNetto;
            } else {
              kontrahentSprzedazWszyscy_CD +=
                fakturyZamowieniaTab[k].kwotaPozycjiNetto;
            }
          }
          if (fakturyZamowieniaTab[k].kategoria == "KorektaSprzedaży") {
            if (fakturyZamowieniaTab[k].dział == "PŁYTY WINYLOWE") {
              kontrahentSprzedazWszyscy_VIN +=
                fakturyZamowieniaTab[k].kwotaNetto;
            } else {
              kontrahentSprzedazWszyscy_CD +=
                fakturyZamowieniaTab[k].kwotaNetto;
            }
          }
        }

        for (i = 0; i < kontrahentAllTab.length; i++) {
          let kontrahentKraj;
          let kontrahentOpiekun;
          let kontrahentNazwa = kontrahentAllTab[i];
          let kontrahentFaktury_CD = 0;
          let kontrahentFaktury_VIN = 0;
          let kontrahentFaktury_All = 0;
          let kontrahentUdzial = 0;
          let kontrahentSprzedazAll_CD = 0;
          let kontrahentSprzedaz_0_CD = 0;
          let kontrahentSprzedaz_1_CD = 0;
          let kontrahentSprzedaz_2_CD = 0;
          let kontrahentSprzedaz_3_CD = 0;
          let kontrahentSprzedaz_4_CD = 0;
          let kontrahentSprzedaz_5_CD = 0;
          let kontrahentSprzedaz_6_CD = 0;
          let kontrahentSprzedazAll_VIN = 0;
          let kontrahentSprzedaz_0_VIN = 0;
          let kontrahentSprzedaz_1_VIN = 0;
          let kontrahentSprzedaz_2_VIN = 0;
          let kontrahentSprzedaz_3_VIN = 0;
          let kontrahentSprzedaz_4_VIN = 0;
          let kontrahentSprzedaz_5_VIN = 0;
          let kontrahentSprzedaz_6_VIN = 0;
          let kontrahentSprzedazAll = 0;
          let kontrahentSprzedaz_0 = 0;
          let kontrahentSprzedaz_1 = 0;
          let kontrahentSprzedaz_2 = 0;
          let kontrahentSprzedaz_3 = 0;
          let kontrahentSprzedaz_4 = 0;
          let kontrahentSprzedaz_5 = 0;
          let kontrahentSprzedaz_6 = 0;
          let kontrahentZyskAll_CD = 0;
          let kontrahentZysk_0_CD = 0;
          let kontrahentZysk_1_CD = 0;
          let kontrahentZysk_2_CD = 0;
          let kontrahentZysk_3_CD = 0;
          let kontrahentZysk_4_CD = 0;
          let kontrahentZysk_5_CD = 0;
          let kontrahentZysk_6_CD = 0;
          let kontrahentZyskAll_VIN = 0;
          let kontrahentZysk_0_VIN = 0;
          let kontrahentZysk_1_VIN = 0;
          let kontrahentZysk_2_VIN = 0;
          let kontrahentZysk_3_VIN = 0;
          let kontrahentZysk_4_VIN = 0;
          let kontrahentZysk_5_VIN = 0;
          let kontrahentZysk_6_VIN = 0;
          let kontrahentZyskAll = 0;
          let kontrahentZysk_0 = 0;
          let kontrahentZysk_1 = 0;
          let kontrahentZysk_2 = 0;
          let kontrahentZysk_3 = 0;
          let kontrahentZysk_4 = 0;
          let kontrahentZysk_5 = 0;
          let kontrahentZysk_6 = 0;
          let kontrahentZamowienia_0_CD = 0;
          let kontrahentZamowienia_0_VIN = 0;
          let kontrahentZamowienia_0 = 0;
          let kontrahentZyskZamowienia_0_CD = 0;
          let kontrahentZyskZamowienia_0_VIN = 0;
          let kontrahentZyskZamowienia_0 = 0;
          let kontrahentSprzedaz_zamowienia_0_CD = 0;
          let kontrahentSprzedaz_zamowienia_0_VIN = 0;
          let kontrahentSprzedaz_zamowienia_0 = 0;
          let kontrahentZysk_zyskZamowienia_0_CD = 0;
          let kontrahentZysk_zyskZamowienia_0_VIN = 0;
          let kontrahentZysk_zyskZamowienia_0 = 0;
          let kontrahentZamowienia_next_1_CD = 0;
          let kontrahentZamowienia_next_1_VIN = 0;
          let kontrahentZamowienia_next_1 = 0;
          let kontrahentZyskZamowienia_next_1_CD = 0;
          let kontrahentZyskZamowienia_next_1_VIN = 0;
          let kontrahentZyskZamowienia_next_1 = 0;
          let kontrahentAlertRed;
          let kontrahentAlertOrange;
          let zamowieniaDzisPlus7 = 0;
          let kontrahentUdzial_CD = 0;
          let kontrahentUdzial_VIN = 0;
          let sredniaHistoryczna = 0;
          let sredniaObecna = 0;
          let kontrahentAlertSredniaGreen;
          let kontrahentAlertSredniaOrange;
          const dzielnik = 120;

          let selectedBOK = $("#opiekun-bok :selected").text();
          let selectedKontrahent = $("#kontrahent-customer :selected").text();

          for (j = 0; j < fakturyZamowieniaTab.length; j++) {
            let selectBOK;
            let selectKontrahent;

            if (selectedBOK == "BOK") {
              selectBOK = "BOK";
            } else {
              selectBOK = fakturyZamowieniaTab[j].opiekun;
            }
            if (selectedKontrahent == "Customer") {
              selectKontrahent = "Customer";
            } else {
              selectKontrahent = fakturyZamowieniaTab[j].kontrahent;
            }

            if (
              selectedBOK == selectBOK &&
              selectedKontrahent == selectKontrahent
            ) {
              let dataDokumentu = new Date(
                fakturyZamowieniaTab[j].dataDokumentu
              ).getTime();

              let dataRealizacji = new Date(
                fakturyZamowieniaTab[j].dataRealizacji
              ).getTime();

              if (kontrahentNazwa == fakturyZamowieniaTab[j].kontrahent) {
                kontrahentKraj = fakturyZamowieniaTab[j].kodKrajuKontrahenta;
                kontrahentOpiekun = fakturyZamowieniaTab[j].opiekun;
                if (
                  fakturyZamowieniaTab[j].kategoria == "Sprzedaż" ||
                  fakturyZamowieniaTab[j].kategoria == "KorektaSprzedaży"
                ) {
                  if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                    if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                      kontrahentFaktury_VIN++;
                    } else {
                      kontrahentFaktury_CD++;
                    }
                  } else {
                    if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                      kontrahentFaktury_VIN++;
                    } else {
                      kontrahentFaktury_CD++;
                    }
                  }

                  if (
                    dataDokumentu >= datyMinus_0_Poczatek &&
                    dataDokumentu <= datyMinus_0_Koniec
                  ) {
                    if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_0_VIN +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_0_VIN += fakturyZamowieniaTab[j].zysk;
                      } else {
                        kontrahentSprzedaz_0_CD +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_0_CD += fakturyZamowieniaTab[j].zysk;
                      }
                    } else {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_0_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_0_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      } else {
                        kontrahentSprzedaz_0_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_0_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      }
                    }
                  }
                  if (
                    (dataDokumentu >= datyMinus_1_Poczatek &&
                      dataDokumentu <= datyMinus_1_Koniec) ||
                    fakturyZamowieniaTab[j].dataDokumentu == "2024-01-31"
                  ) {
                    if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_1_VIN +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_1_VIN += fakturyZamowieniaTab[j].zysk;
                      } else {
                        kontrahentSprzedaz_1_CD +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_1_CD += fakturyZamowieniaTab[j].zysk;
                      }
                    } else {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_1_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_1_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      } else {
                        kontrahentSprzedaz_1_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_1_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      }
                    }
                  }
                  if (
                    dataDokumentu >= datyMinus_2_Poczatek &&
                    dataDokumentu <= datyMinus_2_Koniec
                  ) {
                    if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_2_VIN +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_2_VIN += fakturyZamowieniaTab[j].zysk;
                      } else {
                        kontrahentSprzedaz_2_CD +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_2_CD += fakturyZamowieniaTab[j].zysk;
                      }
                    } else {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_2_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_2_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      } else {
                        kontrahentSprzedaz_2_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_2_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      }
                    }
                  }
                  if (
                    dataDokumentu >= datyMinus_3_Poczatek &&
                    dataDokumentu <= datyMinus_3_Koniec
                  ) {
                    if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_3_VIN +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_3_VIN += fakturyZamowieniaTab[j].zysk;
                      } else {
                        kontrahentSprzedaz_3_CD +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_3_CD += fakturyZamowieniaTab[j].zysk;
                      }
                    } else {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_3_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_3_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      } else {
                        kontrahentSprzedaz_3_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_3_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      }
                    }
                  }
                  if (
                    dataDokumentu >= datyMinus_4_Poczatek &&
                    dataDokumentu <= datyMinus_4_Koniec
                  ) {
                    if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_4_VIN +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_4_VIN += fakturyZamowieniaTab[j].zysk;
                      } else {
                        kontrahentSprzedaz_4_CD +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_4_CD += fakturyZamowieniaTab[j].zysk;
                      }
                    } else {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_4_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_4_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      } else {
                        kontrahentSprzedaz_4_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_4_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      }
                    }
                  }
                  if (
                    dataDokumentu >= datyMinus_5_Poczatek &&
                    dataDokumentu <= datyMinus_5_Koniec
                  ) {
                    if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_5_VIN +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_5_VIN += fakturyZamowieniaTab[j].zysk;
                      } else {
                        kontrahentSprzedaz_5_CD +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_5_CD += fakturyZamowieniaTab[j].zysk;
                      }
                    } else {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_5_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_5_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      } else {
                        kontrahentSprzedaz_5_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_5_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      }
                    }
                  }
                  if (
                    dataDokumentu >= datyMinus_6_Poczatek &&
                    dataDokumentu <= datyMinus_6_Koniec
                  ) {
                    if (fakturyZamowieniaTab[j].kategoria == "Sprzedaż") {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_6_VIN +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_6_VIN += fakturyZamowieniaTab[j].zysk;
                      } else {
                        kontrahentSprzedaz_6_CD +=
                          fakturyZamowieniaTab[j].kwotaPozycjiNetto;
                        kontrahentZysk_6_CD += fakturyZamowieniaTab[j].zysk;
                      }
                    } else {
                      if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                        kontrahentSprzedaz_6_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_6_VIN +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      } else {
                        kontrahentSprzedaz_6_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                        kontrahentZysk_6_CD +=
                          fakturyZamowieniaTab[j].kwotaNetto;
                      }
                    }
                  }
                }
              }

              if (
                kontrahentNazwa == fakturyZamowieniaTab[j].kontrahent &&
                fakturyZamowieniaTab[j].kategoria == "ZamówienieOdbiorcy"
              ) {
                if (
                  dataRealizacji >= datyMinus_0_Poczatek &&
                  dataRealizacji <= koniecObecnegoMiesiaca
                ) {
                  if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                    let val = fakturyZamowieniaTab[j].kwotaNetto;

                    if (Number.isNaN(val)) {
                      val = 0;
                    }

                    kontrahentZamowienia_0_VIN +=
                      fakturyZamowieniaTab[j].kwotaNetto;
                    kontrahentZyskZamowienia_0_VIN +=
                      fakturyZamowieniaTab[j].zysk;
                  } else {
                    let val = fakturyZamowieniaTab[j].kwotaNetto;

                    if (Number.isNaN(val)) {
                      val = 0;
                    }

                    kontrahentZamowienia_0_CD +=
                      fakturyZamowieniaTab[j].kwotaNetto;
                    kontrahentZyskZamowienia_0_CD +=
                      fakturyZamowieniaTab[j].zysk;
                  }
                }
                if (
                  dataRealizacji >= datyPlus_1_Poczatek &&
                  dataRealizacji <= datyPlus_1_Koniec
                ) {
                  if (fakturyZamowieniaTab[j].dział == "PŁYTY WINYLOWE") {
                    let val = fakturyZamowieniaTab[j].kwotaNetto;

                    if (Number.isNaN(val)) {
                      val = 0;
                    }

                    kontrahentZamowienia_next_1_VIN +=
                      fakturyZamowieniaTab[j].kwotaNetto;

                    let val1 = fakturyZamowieniaTab[j].zysk;

                    if (Number.isNaN(val1)) {
                      val1 = 0;
                    }
                    kontrahentZyskZamowienia_next_1_VIN +=
                      fakturyZamowieniaTab[j].zysk;
                  } else {
                    let val = fakturyZamowieniaTab[j].kwotaNetto;

                    if (Number.isNaN(val)) {
                      val = 0;
                    }

                    kontrahentZamowienia_next_1_CD +=
                      fakturyZamowieniaTab[j].kwotaNetto;

                    let val1 = fakturyZamowieniaTab[j].zysk;

                    if (Number.isNaN(val1)) {
                      val1 = 0;
                    }

                    kontrahentZyskZamowienia_next_1_CD +=
                      fakturyZamowieniaTab[j].zysk;
                  }
                }

                if (
                  dataRealizacji >= datyMinus_0_Koniec &&
                  dataRealizacji <= dzisPlus7Dni
                ) {
                  zamowieniaDzisPlus7 += fakturyZamowieniaTab[j].kwotaNetto;
                }
              }
            }
          }

          if ($("#radio-2").is(":checked")) {
            kontrahentZysk_0_VIN = 0;
            kontrahentZysk_1_VIN = 0;
            kontrahentZysk_2_VIN = 0;
            kontrahentZysk_3_VIN = 0;
            kontrahentZysk_4_VIN = 0;
            kontrahentZysk_5_VIN = 0;
            kontrahentZysk_6_VIN = 0;
            kontrahentSprzedaz_0_VIN = 0;
            kontrahentSprzedaz_1_VIN = 0;
            kontrahentSprzedaz_2_VIN = 0;
            kontrahentSprzedaz_3_VIN = 0;
            kontrahentSprzedaz_4_VIN = 0;
            kontrahentSprzedaz_5_VIN = 0;
            kontrahentSprzedaz_6_VIN = 0;
            kontrahentZamowienia_0_VIN = 0;
            kontrahentZyskZamowienia_0_VIN = 0;
            kontrahentZamowienia_next_1_VIN = 0;
          }
          if ($("#radio-3").is(":checked")) {
            kontrahentZysk_0_CD = 0;
            kontrahentZysk_1_CD = 0;
            kontrahentZysk_2_CD = 0;
            kontrahentZysk_3_CD = 0;
            kontrahentZysk_4_CD = 0;
            kontrahentZysk_5_CD = 0;
            kontrahentZysk_6_CD = 0;
            kontrahentSprzedaz_0_CD = 0;
            kontrahentSprzedaz_1_CD = 0;
            kontrahentSprzedaz_2_CD = 0;
            kontrahentSprzedaz_3_CD = 0;
            kontrahentSprzedaz_4_CD = 0;
            kontrahentSprzedaz_5_CD = 0;
            kontrahentSprzedaz_6_CD = 0;
            kontrahentZamowienia_0_CD = 0;
            kontrahentZyskZamowienia_0_CD = 0;
            kontrahentZamowienia_next_1_CD = 0;
          }

          kontrahentZyskAll_CD =
            kontrahentZysk_0_CD +
            kontrahentZysk_1_CD +
            kontrahentZysk_2_CD +
            kontrahentZysk_3_CD +
            kontrahentZysk_4_CD +
            kontrahentZysk_5_CD +
            kontrahentZysk_6_CD;
          kontrahentZyskAll_VIN =
            kontrahentZysk_0_VIN +
            kontrahentZysk_1_VIN +
            kontrahentZysk_2_VIN +
            kontrahentZysk_3_VIN +
            kontrahentZysk_4_VIN +
            kontrahentZysk_5_VIN +
            kontrahentZysk_6_VIN;
          kontrahentZyskAll = kontrahentZyskAll_CD + kontrahentZyskAll_VIN;

          kontrahentSprzedazAll_CD =
            kontrahentSprzedaz_0_CD +
            kontrahentSprzedaz_1_CD +
            kontrahentSprzedaz_2_CD +
            kontrahentSprzedaz_3_CD +
            kontrahentSprzedaz_4_CD +
            kontrahentSprzedaz_5_CD +
            kontrahentSprzedaz_6_CD;
          kontrahentSprzedazAll_VIN =
            kontrahentSprzedaz_0_VIN +
            kontrahentSprzedaz_1_VIN +
            kontrahentSprzedaz_2_VIN +
            kontrahentSprzedaz_3_VIN +
            kontrahentSprzedaz_4_VIN +
            kontrahentSprzedaz_5_VIN +
            kontrahentSprzedaz_6_VIN;
          kontrahentSprzedazAll =
            kontrahentSprzedazAll_CD + kontrahentSprzedazAll_VIN;

          kontrahentSprzedaz_0 =
            kontrahentSprzedaz_0_CD + kontrahentSprzedaz_0_VIN;
          kontrahentSprzedaz_1 =
            kontrahentSprzedaz_1_CD + kontrahentSprzedaz_1_VIN;
          kontrahentSprzedaz_2 =
            kontrahentSprzedaz_2_CD + kontrahentSprzedaz_2_VIN;
          kontrahentSprzedaz_3 =
            kontrahentSprzedaz_3_CD + kontrahentSprzedaz_3_VIN;
          kontrahentSprzedaz_4 =
            kontrahentSprzedaz_4_CD + kontrahentSprzedaz_4_VIN;
          kontrahentSprzedaz_5 =
            kontrahentSprzedaz_5_CD + kontrahentSprzedaz_5_VIN;
          kontrahentSprzedaz_6 =
            kontrahentSprzedaz_6_CD + kontrahentSprzedaz_6_VIN;

          kontrahentZysk_0 = kontrahentZysk_0_CD + kontrahentZysk_0_VIN;
          kontrahentZysk_1 = kontrahentZysk_1_CD + kontrahentZysk_1_VIN;
          kontrahentZysk_2 = kontrahentZysk_2_CD + kontrahentZysk_2_VIN;
          kontrahentZysk_3 = kontrahentZysk_3_CD + kontrahentZysk_3_VIN;
          kontrahentZysk_4 = kontrahentZysk_4_CD + kontrahentZysk_4_VIN;
          kontrahentZysk_5 = kontrahentZysk_5_CD + kontrahentZysk_5_VIN;
          kontrahentZysk_6 = kontrahentZysk_6_CD + kontrahentZysk_6_VIN;

          kontrahentZamowienia_0 =
            kontrahentZamowienia_0_CD + kontrahentZamowienia_0_VIN;

          kontrahentZyskZamowienia_0 =
            kontrahentZyskZamowienia_0_CD + kontrahentZyskZamowienia_0_VIN;

          kontrahentSprzedaz_zamowienia_0_CD =
            kontrahentZamowienia_0_CD + kontrahentSprzedaz_0_CD;

          kontrahentSprzedaz_zamowienia_0_VIN =
            kontrahentZamowienia_0_VIN + kontrahentSprzedaz_0_VIN;

          kontrahentSprzedaz_zamowienia_0 =
            kontrahentSprzedaz_zamowienia_0_CD +
            kontrahentSprzedaz_zamowienia_0_VIN;

          kontrahentZysk_zyskZamowienia_0_CD =
            kontrahentZyskZamowienia_0_CD + kontrahentZysk_0_CD;

          kontrahentZysk_zyskZamowienia_0_VIN =
            kontrahentZyskZamowienia_0_VIN + kontrahentZysk_0_VIN;

          kontrahentZysk_zyskZamowienia_0 =
            kontrahentZysk_zyskZamowienia_0_VIN +
            kontrahentZysk_zyskZamowienia_0_CD;

          kontrahentZamowienia_next_1 =
            kontrahentZamowienia_next_1_CD + kontrahentZamowienia_next_1_VIN;

          kontrahentZyskZamowienia_next_1 =
            kontrahentZyskZamowienia_next_1_CD +
            kontrahentZyskZamowienia_next_1_VIN;

          kontrahentSprzedazWszyscy =
            kontrahentSprzedazWszyscy_CD + kontrahentSprzedazWszyscy_VIN;

          kontrahentUdzial =
            (kontrahentSprzedazAll / kontrahentSprzedazWszyscy) * 100;

          kontrahentFaktury_All = kontrahentFaktury_CD + kontrahentFaktury_VIN;

          kontrahentUdzial_CD =
            (kontrahentSprzedazAll_CD / kontrahentSprzedazAll) * 100;

          if (Number.isNaN(kontrahentUdzial_CD)) {
            kontrahentUdzial_CD = 0;
          }

          kontrahentUdzial_VIN =
            (kontrahentSprzedazAll_VIN / kontrahentSprzedazAll) * 100;

          if (Number.isNaN(kontrahentUdzial_VIN)) {
            kontrahentUdzial_VIN = 0;
          }

          sredniaHistoryczna =
            (kontrahentSprzedazAll - kontrahentSprzedaz_0) / dzielnik;
          sredniaObecna =
            (kontrahentSprzedaz_0 + zamowieniaDzisPlus7) /
            (minelorev + dodatekRoboczy);

          if (sredniaObecna < sredniaHistoryczna) {
            kontrahentAlertSredniaGreen = false;
            kontrahentAlertSredniaOrange = true;
            kontrahentAlertOrange = false;
            kontrahentAlertRed = false;
          }
          if (sredniaObecna > sredniaHistoryczna) {
            kontrahentAlertSredniaGreen = true;
            kontrahentAlertSredniaOrange = false;
            kontrahentAlertOrange = false;
            kontrahentAlertRed = false;
          }
          if (
            kontrahentSprzedaz_0 == 0 &&
            kontrahentSprzedaz_1 == 0 &&
            kontrahentZamowienia_0 == 0 &&
            kontrahentZamowienia_next_1 == 0
          ) {
            kontrahentAlertRed = true;
            kontrahentAlertSredniaOrange = false;
            kontrahentAlertSredniaGreen = false;
            kontrahentAlertOrange = false;
          }

          if (
            kontrahentSprzedaz_zamowienia_0 == 0 &&
            kontrahentSprzedaz_0 == 0 &&
            kontrahentZamowienia_next_1 == 0 &&
            kontrahentSprzedaz_1 > 0
          ) {
            kontrahentAlertOrange = true;
            kontrahentAlertSredniaOrange = false;
            kontrahentAlertSredniaGreen = false;
            kontrahentAlertRed = false;
          }

          console.log("all  " + kontrahentSprzedazAll);
          console.log("wszyscy  " + kontrahentSprzedazWszyscy);

          kontrahentMarzaProcent =
            (kontrahentZyskAll / kontrahentSprzedazAll) * 100;

          if (Number.isNaN(kontrahentMarzaProcent)) {
            kontrahentMarzaProcent = 0;
          }
          let kontrahentObj = new Kontrahent(
            kontrahentNazwa,
            kontrahentKraj,
            kontrahentOpiekun,
            kontrahentFaktury_All,
            `${kontrahentUdzial.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "2",
              maximumFractionDigits: "2",
            })}%`,
            kontrahentSprzedazAll,
            kontrahentSprzedaz_0.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentSprzedaz_1.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentSprzedaz_2.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentSprzedaz_3.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentSprzedaz_4.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentSprzedaz_5.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentSprzedaz_6.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZyskAll.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_0.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_1.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_2.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_3.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_4.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_5.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_6.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZamowienia_0.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZyskZamowienia_0.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentSprzedaz_zamowienia_0.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZysk_zyskZamowienia_0.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZamowienia_next_1.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentZyskZamowienia_next_1.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            }),
            kontrahentAlertRed,
            kontrahentAlertOrange,
            kontrahentAlertSredniaGreen,
            kontrahentAlertSredniaOrange,
            `${kontrahentUdzial_CD.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            })}`,
            `${kontrahentUdzial_VIN.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            })}`,
            `${kontrahentMarzaProcent.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "2",
              maximumFractionDigits: "2",
            })}%`
          );
          listaKontrahentow.push(kontrahentObj);
        }

        function posortujPoWartosci(a, b) {
          return b.kontrahentSprzedazAll - a.kontrahentSprzedazAll;
        }

        listaKontrahentow.sort(posortujPoWartosci);

        console.log(listaKontrahentow);
        pokaTabeleKontrahenci();
      }

      analizujKontrahenta();

      //***********************WYŚWIETLANIE TABELI Z KONTRAHENTAMI *******************

      $(".buttons-customer").click(function () {
        analizujKontrahenta();
        pokaTabeleKontrahenci();
      });
      $(".buttons-customer_count").on("click", function () {
        analizujKontrahenta();
        pokaTabeleKontrahenci();
      });

      function pokaTabeleKontrahenci() {
        let htmlListaKontrahentow = `<table class="table4head" class="table5" id="tabelaWinyl">
      <tr>
      <th class="table4head" style="width: 40%; font-weight: 400;">R</th>
      <th class="table4head" style="width: 265%; font-weight: 400;">Customer</th>
      <th class="table4head" style="font-weight: 400;">Alert</th>
      <th class="table4head" style="width: 100%"; font-weight: 400;>CD/VIN</th>
      <th class="table4head" style="width: 120%; font-weight: 400;">BOK</th>
      <th class="table4head" style="font-weight: 400;">${month[m - 6]}</th>
      <th class="table4head" style="font-weight: 400;">${month[m - 5]}</th>
      <th class="table4head" style="font-weight: 400;">${month[m - 4]}</th>
      <th class="table4head" style="font-weight: 400;">${month[m - 3]}</th>
      <th class="table4head" style="font-weight: 400;">${month[m - 2]}</th>
      <th class="table4head" style="font-weight: 400;">${month[m - 1]}</th>
      <th class="table4head" style="background-color: rgb(253, 234, 237); font-weight: 400;">${
        month[m]
      }</th>
      <th class="table4head" style="background-color: rgb(252, 245, 246); color: #918b8b; font-weight: 400;">Orders</th>
      <th class="table4head" style="background-color: rgb(252, 245, 246); color: #918b8b; font-weight: 400;">Forecast</th>
          <th class="table4head">${month[m - monthMinus]}</th>
            <th colspan="2" class="table4head" style="width: 150%; font-weight: 400;">Sale (All)</th>
            <th class="table4head" style="width: 40%; font-weight: 400;">FV</th>
            <th class="table4head" style="width: 65%; font-weight: 400;">R %</th>
            </tr>`;

        let backRowCount = 0;
        let backRow;
        let alertClass;
        let alertArrow;

        let selectedBOK = $("#opiekun-bok :selected").text();
        let selectedKontrahent = $("#kontrahent-customer :selected").text();

        for (i = 0; i < listaKontrahentow.length; i++) {
          let selectBOK;
          let selectKontrahent;

          if (selectedBOK == "BOK") {
            selectBOK = "BOK";
          } else {
            selectBOK = listaKontrahentow[i].kontrahentOpiekun;
          }
          if (selectedKontrahent == "Customer") {
            selectKontrahent = "Customer";
          } else {
            selectKontrahent = listaKontrahentow[i].kontrahentNazwa;
          }

          backRowCount++;

          if (
            selectedBOK == selectBOK &&
            selectedKontrahent == selectKontrahent
          ) {
            if (listaKontrahentow[i].kontrahentAlertRed == true) {
              alertClass = "alertClassRed";
              alertArrow = "!!!";
            } else if (listaKontrahentow[i].kontrahentAlertOrange == true) {
              alertClass = "alertClassOrange";
              alertArrow = "!";
            } else if (
              listaKontrahentow[i].kontrahentAlertSredniaOrange == true
            ) {
              alertClass = "alertClassSredniaOrange";
              alertArrow = "↘";
            } else {
              alertClass = "alertClassSredniaGreen";
              alertArrow = "↗";
            }

            if (backRowCount % 2 == 0) {
              backRow = "table4";
            } else {
              backRow = "table4row";
            }

            htmlListaKontrahentow += `<tr>
<td class="${backRow}" rowspan="2" width: 50%;>${i + 1}</td>
<td class="${backRow}" style="width: 290%;" rowspan="2">${
              listaKontrahentow[i].kontrahentNazwa
            } (${listaKontrahentow[i].kontrahentKraj})</td>
<td class="${backRow} , ${alertClass}" rowspan="2" width: 50%;>${alertArrow}</td>
<td class="${backRow}" rowspan="2" width: 50%;>${
              listaKontrahentow[i].kontrahentUdzial_CD
            } / ${listaKontrahentow[i].kontrahentUdzial_VIN}</td>
<td class="${backRow}" rowspan="2" width: 50%;>${
              listaKontrahentow[i].kontrahentOpiekun
            }</td>
<td class="${backRow}">${listaKontrahentow[i].kontrahentSprzedaz_6}</td>
<td class="${backRow}">${listaKontrahentow[i].kontrahentSprzedaz_5}</td>
<td class="${backRow}">${listaKontrahentow[i].kontrahentSprzedaz_4}</td>
<td class="${backRow}">${listaKontrahentow[i].kontrahentSprzedaz_3}</td>
<td class="${backRow}">${listaKontrahentow[i].kontrahentSprzedaz_2}</td>
<td class="${backRow}">${listaKontrahentow[i].kontrahentSprzedaz_1}</td>
<td class="${backRow}" style="background-color: rgb(253, 234, 237)">${
              listaKontrahentow[i].kontrahentSprzedaz_0
            }</td>
<td class="${backRow}" style="background-color: rgb(252, 245, 246)">${
              listaKontrahentow[i].kontrahentZamowienia_0
            }</td>
<td class="${backRow}" style="background-color: rgb(252, 245, 246)">${
              listaKontrahentow[i].kontrahentSprzedaz_zamowienia_0
            }</td>
<td class="${backRow}" style="background-color: aliceblue;">${
              listaKontrahentow[i].kontrahentZamowienia_next_1
            }</td>
<td class="${backRow}" colspan="2">${listaKontrahentow[
              i
            ].kontrahentSprzedazAll.toLocaleString("pl-PL", {
              useGrouping: "true",
              minimumFractionDigits: "0",
              maximumFractionDigits: "0",
            })}</td>
<td class="${backRow}" rowspan="2" width: 50%;>${
              listaKontrahentow[i].kontrahentFaktury
            }</td>
<td class="${backRow}" rowspan="2" width: 50%;>${
              listaKontrahentow[i].kontrahentUdzial
            }</td>
</tr>`;

            htmlListaKontrahentow += `<tr>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentZysk_6}</td>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentZysk_5}</td>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentZysk_4}</td>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentZysk_3}</td>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentZysk_2}</td>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentZysk_1}</td>
<td class="${backRow} , tablemargin" style="background-color: rgb(253, 234, 237)">${listaKontrahentow[i].kontrahentZysk_0}</td>
<td class="${backRow} , tablemargin" style="background-color: rgb(252, 245, 246)">${listaKontrahentow[i].kontrahentZyskZamowienia_0}</td>
<td class="${backRow} , tablemargin" style="background-color: rgb(252, 245, 246)">${listaKontrahentow[i].kontrahentZysk_zyskZamowienia_0}</td>
<td class="${backRow} , tablemargin" style="background-color: aliceblue">${listaKontrahentow[i].kontrahentZyskZamowienia_next_1}</td>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentZyskAll}</td>
<td class="${backRow} , tablemargin">${listaKontrahentow[i].kontrahentMarzaProcent}</td>
</tr>`;
          }
        }
        htmlListaKontrahentow += `</table>`;
        $("#tabelaKontrahent").html(htmlListaKontrahentow);
      }

      //pokaTabeleKontrahenci();

      console.log(
        new Date(datyPlus_1_Poczatek).toLocaleDateString("pl-PL", options)
      );
      console.log(
        new Date(datyPlus_1_Koniec).toLocaleDateString("pl-PL", options)
      );

      //**********************************************WYKRESY *************************** */

      var chart2 = new CanvasJS.Chart("bar-target_cd", {
        animationEnabled: true,
        theme: "light2",
        fontFamily: "calibri",
        title: {
          text: "Profit Target CD",
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
            type: "stackedColumn",
            name: "Current Profit",
            showInLegend: true,
            indexLabelPlacement: "outside",
            color: "#B0E0E6",
            yValueFormatString: "PLN # ### ###",
            dataPoints: yourTargetCDBar,
          },
          {
            type: "stackedColumn",
            name: "Profit Forecast",
            showInLegend: true,
            color: "#D3D3D3",
            yValueFormatString: "PLN # ### ###",
            dataPoints: yourTargetCDBarForecast,
          },
          {
            type: "line",
            name: "Expected Profit",
            showInLegend: true,
            yValueFormatString: "PLN # ### ###",
            color: "red",
            dataPoints: yourTargetCDBarForecastPlusOrder,
          },
        ],
      });
      chart2.render();

      var chart3 = new CanvasJS.Chart("bar-target_vin", {
        animationEnabled: true,
        theme: "light2",
        fontFamily: "calibri",
        title: {
          text: "Profit Target Vinyl",
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
            type: "stackedColumn",
            name: "Current Profit",
            showInLegend: true,
            indexLabelPlacement: "outside",
            color: "#B0E0E6",
            yValueFormatString: "PLN # ### ###",
            dataPoints: yourTargetVINBar,
          },
          {
            type: "stackedColumn",
            name: "Profit Forecast",
            showInLegend: true,
            color: "#D3D3D3",
            yValueFormatString: "PLN # ### ###",
            dataPoints: yourTargetVINBarForecast,
          },
          {
            type: "line",
            name: "Expected Profit",
            showInLegend: true,
            yValueFormatString: "PLN # ### ###",
            color: "red",
            dataPoints: yourTargetVINBarForecastPlusOrder,
          },
        ],
      });
      chart3.render();

      google.charts.load("current", { packages: ["table"] });
      google.charts.setOnLoadCallback(drawTable_zamowieniaNaDzis);
      google.charts.setOnLoadCallback(drawTable_zamowieniaWprowadzoneDzis);
      google.charts.setOnLoadCallback(drawTable_FakturyWystawioneDzis);
      google.charts.setOnLoadCallback(drawTable_tergetCDDetails);
      google.charts.setOnLoadCallback(drawTable_tergetVINDetails);

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
        data.addColumn("number", "");
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
        formatter5.format(data, 8);

        var formatter8 = new google.visualization.BarFormat({
          width: 50,
          showValue: false,
        });
        formatter8.format(data, 7);

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
      function drawTable_tergetCDDetails() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Month");
        data.addColumn("number", "Sales PLN");
        data.addColumn("number", "Profit PLN");
        data.addColumn("string", "Margin Profit");
        data.addColumn("string", "Profit Target PLN");
        data.addColumn("string", "Target Realisation");
        data.addColumn("number", "Open Orders PLN");
        data.addColumn("number", "Sale Forecast PLN");
        data.addColumn("number", "Profit Forecast PLN");
        data.addColumn("string", "Target Realisation Forecast");
        data.addRows(yourTargetDetailsCDAllTab);

        var table3 = new google.visualization.Table(
          document.getElementById("cd-target_details_table")
        );

        var formatter6 = new google.visualization.ColorFormat();
        formatter6.addRange(null, null, null, "#90EE90");
        formatter6.format(data, 5);

        var formatter7 = new google.visualization.ColorFormat();
        formatter7.addRange(null, null, null, "#ADD8E6");
        formatter7.format(data, 9);

        var cssClassNames = {
          headerRow: "headerRow",
          tableRow: "tableRow",
          oddTableRow: "oddTableRow",
        };

        table3.draw(data, {
          allowHtml: true,
          showRowNumber: true,
          width: "100%",
          height: "100%",
          cssClassNames: cssClassNames,
        });
      }
      function drawTable_tergetVINDetails() {
        var data = new google.visualization.DataTable();
        data.addColumn("string", "Month");
        data.addColumn("number", "Sales PLN");
        data.addColumn("number", "Profit PLN");
        data.addColumn("string", "Margin Profit");
        data.addColumn("string", "Profit Target PLN");
        data.addColumn("string", "Target Realisation");
        data.addColumn("number", "Open Orders PLN");
        data.addColumn("number", "Sale Forecast PLN");
        data.addColumn("number", "Profit Forecast PLN");
        data.addColumn("string", "Target Realisation Forecast");
        data.addRows(yourTargetDetailsVINAllTab);

        var table4 = new google.visualization.Table(
          document.getElementById("vinyl-target_details_table")
        );

        var formatter8 = new google.visualization.ColorFormat();
        formatter8.addRange(null, null, null, "#90EE90");
        formatter8.format(data, 5);

        var formatter9 = new google.visualization.ColorFormat();
        formatter9.addRange(null, null, null, "#ADD8E6");
        formatter9.format(data, 9);

        var cssClassNames = {
          headerRow: "headerRow",
          tableRow: "tableRow",
          oddTableRow: "oddTableRow",
        };

        table4.draw(data, {
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
    });
  });
});
