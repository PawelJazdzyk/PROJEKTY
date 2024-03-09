export const funkcjaDat = (data) => {
  let rok = new Date(data).getFullYear();
  let miesiac = new Date(data).getMonth();
  let dzien = new Date(data).getDate();

  function podajDzien(rokFunc, miesiacFunc) {
    let dzienFunc;
    let rokPrzestepny = 2020;
    let rokPrzestepnyTab = [];
    let luty = 28;
    for (let i = 0; i < 20; i++) {
      rokPrzestepny = rokPrzestepny + 4;
      rokPrzestepnyTab.push(rokPrzestepny);
      if (rokFunc == rokPrzestepny) {
        luty = 29;
      }
    }
    let miesiacTab = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let dzienTab = [
      "31",
      luty,
      "31",
      "30",
      "31",
      "30",
      "31",
      "31",
      "30",
      "31",
      "30",
      "31",
    ];

    for (let i = 0; i < miesiacTab.length; i++) {
      if (miesiacFunc == miesiacTab[i]) {
        dzienFunc = dzienTab[i];
      }
    }

    return dzienFunc;
  }
  //*** tu 6 miesiecy wstecz */
  let miesiacMinus_6;
  let rokMinus_6 = rok;

  if (miesiac >= 6) {
    miesiacMinus_6 = miesiac - 6;
  } else if (miesiac == 5) {
    miesiacMinus_6 = 11;
    rokMinus_6 = rok - 1;
  } else if (miesiac == 4) {
    miesiacMinus_6 = 10;
    rokMinus_6 = rok - 1;
  } else if (miesiac == 3) {
    miesiacMinus_6 = 9;
    rokMinus_6 = rok - 1;
  } else if (miesiac == 2) {
    miesiacMinus_6 = 8;
    rokMinus_6 = rok - 1;
  } else if (miesiac == 1) {
    miesiacMinus_6 = 7;
    rokMinus_6 = rok - 1;
  } else if (miesiac == 0) {
    miesiacMinus_6 = 6;
    rokMinus_6 = rok - 1;
  }

  if (miesiacMinus_6 < 9) {
    miesiacMinus_6 = `0${miesiacMinus_6 + 1}`;
  } else {
    miesiacMinus_6 = miesiacMinus_6 + 1;
  }

  let dzienMinus_6 = podajDzien(rokMinus_6, miesiacMinus_6);
  let dataMinus6_poczatek = `${rokMinus_6}-${miesiacMinus_6}-01`;
  let dataMinus6_koniec = `${rokMinus_6}-${miesiacMinus_6}-${dzienMinus_6}`;

  //*** tu 5 miesiecy wstecz */

  let miesiacMinus_5;
  let rokMinus_5 = rok;

  if (miesiac >= 6) {
    miesiacMinus_5 = miesiac - 5;
  } else if (miesiac == 5) {
    miesiacMinus_5 = 0;
    rokMinus_5 = rok;
  } else if (miesiac == 4) {
    miesiacMinus_5 = 11;
    rokMinus_5 = rok - 1;
  } else if (miesiac == 3) {
    miesiacMinus_5 = 10;
    rokMinus_5 = rok - 1;
  } else if (miesiac == 2) {
    miesiacMinus_5 = 9;
    rokMinus_5 = rok - 1;
  } else if (miesiac == 1) {
    miesiacMinus_5 = 8;
    rokMinus_5 = rok - 1;
  } else if (miesiac == 0) {
    miesiacMinus_5 = 7;
    rokMinus_5 = rok - 1;
  }

  if (miesiacMinus_5 < 9) {
    miesiacMinus_5 = `0${miesiacMinus_5 + 1}`;
  } else {
    miesiacMinus_5 = miesiacMinus_5 + 1;
  }

  let dzienMinus_5 = podajDzien(rokMinus_5, miesiacMinus_5);
  let dataMinus5_poczatek = `${rokMinus_5}-${miesiacMinus_5}-01`;
  let dataMinus5_koniec = `${rokMinus_5}-${miesiacMinus_5}-${dzienMinus_5}`;

  //*** tu 4 miesiecy wstecz */

  let miesiacMinus_4;
  let rokMinus_4 = rok;

  if (miesiac >= 6) {
    miesiacMinus_4 = miesiac - 4;
  } else if (miesiac == 5) {
    miesiacMinus_4 = 1;
    rokMinus_4 = rok;
  } else if (miesiac == 4) {
    miesiacMinus_4 = 0;
    rokMinus_4 = rok;
  } else if (miesiac == 3) {
    miesiacMinus_4 = 11;
    rokMinus_4 = rok - 1;
  } else if (miesiac == 2) {
    miesiacMinus_4 = 10;
    rokMinus_4 = rok - 1;
  } else if (miesiac == 1) {
    miesiacMinus_4 = 9;
    rokMinus_4 = rok - 1;
  } else if (miesiac == 0) {
    miesiacMinus_4 = 8;
    rokMinus_4 = rok - 1;
  }

  if (miesiacMinus_4 < 9) {
    miesiacMinus_4 = `0${miesiacMinus_4 + 1}`;
  } else {
    miesiacMinus_4 = miesiacMinus_4 + 1;
  }

  let dzienMinus_4 = podajDzien(rokMinus_4, miesiacMinus_4);
  let dataMinus4_poczatek = `${rokMinus_4}-${miesiacMinus_4}-01`;
  let dataMinus4_koniec = `${rokMinus_4}-${miesiacMinus_4}-${dzienMinus_4}`;

  //*** tu 3 miesiecy wstecz */

  let miesiacMinus_3;
  let rokMinus_3 = rok;

  if (miesiac >= 6) {
    miesiacMinus_3 = miesiac - 3;
  } else if (miesiac == 5) {
    miesiacMinus_3 = 2;
    rokMinus_3 = rok;
  } else if (miesiac == 4) {
    miesiacMinus_3 = 1;
    rokMinus_3 = rok;
  } else if (miesiac == 3) {
    miesiacMinus_3 = 0;
    rokMinus_3 = rok;
  } else if (miesiac == 2) {
    miesiacMinus_3 = 11;
    rokMinus_3 = rok - 1;
  } else if (miesiac == 1) {
    miesiacMinus_3 = 10;
    rokMinus_3 = rok - 1;
  } else if (miesiac == 0) {
    miesiacMinus_3 = 9;
    rokMinus_3 = rok - 1;
  }

  if (miesiacMinus_3 < 9) {
    miesiacMinus_3 = `0${miesiacMinus_3 + 1}`;
  } else {
    miesiacMinus_3 = miesiacMinus_3 + 1;
  }

  let dzienMinus_3 = podajDzien(rokMinus_3, miesiacMinus_3);
  let dataMinus3_poczatek = `${rokMinus_3}-${miesiacMinus_3}-01`;
  let dataMinus3_koniec = `${rokMinus_3}-${miesiacMinus_3}-${dzienMinus_3}`;

  //*** tu 2 miesiecy wstecz */

  let miesiacMinus_2;
  let rokMinus_2 = rok;

  if (miesiac >= 6) {
    miesiacMinus_2 = miesiac - 2;
  } else if (miesiac == 5) {
    miesiacMinus_2 = 3;
    rokMinus_2 = rok;
  } else if (miesiac == 4) {
    miesiacMinus_2 = 2;
    rokMinus_2 = rok;
  } else if (miesiac == 3) {
    miesiacMinus_2 = 1;
    rokMinus_2 = rok;
  } else if (miesiac == 2) {
    miesiacMinus_2 = 0;
    rokMinus_2 = rok;
  } else if (miesiac == 1) {
    miesiacMinus_2 = 11;
    rokMinus_2 = rok - 1;
  } else if (miesiac == 0) {
    miesiacMinus_2 = 10;
    rokMinus_2 = rok - 1;
  }

  if (miesiacMinus_2 < 9) {
    miesiacMinus_2 = `0${miesiacMinus_2 + 1}`;
  } else {
    miesiacMinus_2 = miesiacMinus_2 + 1;
  }

  let dzienMinus_2 = podajDzien(rokMinus_2, miesiacMinus_2);
  let dataMinus2_poczatek = `${rokMinus_2}-${miesiacMinus_2}-01`;
  let dataMinus2_koniec = `${rokMinus_2}-${miesiacMinus_2}-${dzienMinus_2}`;

  //*** tu 1 miesiecy wstecz */

  let miesiacMinus_1;
  let rokMinus_1 = rok;

  if (miesiac >= 6) {
    miesiacMinus_1 = miesiac - 1;
  } else if (miesiac == 5) {
    miesiacMinus_1 = 4;
    rokMinus_1 = rok;
  } else if (miesiac == 4) {
    miesiacMinus_1 = 3;
    rokMinus_1 = rok;
  } else if (miesiac == 3) {
    miesiacMinus_1 = 2;
    rokMinus_1 = rok;
  } else if (miesiac == 2) {
    miesiacMinus_1 = 1;
    rokMinus_1 = rok;
  } else if (miesiac == 1) {
    miesiacMinus_1 = 0;
    rokMinus_1 = rok;
  } else if (miesiac == 0) {
    miesiacMinus_1 = 11;
    rokMinus_1 = rok - 1;
  }

  if (miesiacMinus_1 < 9) {
    miesiacMinus_1 = `0${miesiacMinus_1 + 1}`;
  } else {
    miesiacMinus_1 = miesiacMinus_1 + 1;
  }

  let dzienMinus_1 = podajDzien(rokMinus_1, miesiacMinus_1);
  let dataMinus1_poczatek = `${rokMinus_1}-${miesiacMinus_1}-01`;
  let dataMinus1_koniec = `${rokMinus_1}-${miesiacMinus_1}-${dzienMinus_1}`;

  //*** tu 0 miesiecy wstecz - poczatek i koniec obecnego miesiąca*/

  let miesiacMinus_0;
  let rokMinus_0 = rok;

  if (miesiac >= 6) {
    miesiacMinus_0 = miesiac;
  } else if (miesiac == 5) {
    miesiacMinus_0 = 5;
    rokMinus_0 = rok;
  } else if (miesiac == 4) {
    miesiacMinus_0 = 4;
    rokMinus_0 = rok;
  } else if (miesiac == 3) {
    miesiacMinus_0 = 3;
    rokMinus_0 = rok;
  } else if (miesiac == 2) {
    miesiacMinus_0 = 2;
    rokMinus_0 = rok;
  } else if (miesiac == 1) {
    miesiacMinus_0 = 1;
    rokMinus_0 = rok;
  } else if (miesiac == 0) {
    miesiacMinus_0 = 0;
    rokMinus_0 = rok;
  }

  if (miesiacMinus_0 < 9) {
    miesiacMinus_0 = `0${miesiacMinus_0 + 1}`;
  } else {
    miesiacMinus_0 = miesiacMinus_0 + 1;
  }

  let dzienMinus_0 = podajDzien(rokMinus_0, miesiacMinus_0);
  let dataMinus0_poczatek = `${rokMinus_0}-${miesiacMinus_0}-01`;
  let dataMinus0_koniec = `${rokMinus_0}-${miesiacMinus_0}-${dzienMinus_0}`;

  //*** tu plus 1 miesiecy do przodu */

  let miesiacPlus_1;
  let rokPlus_1 = rok;

  if (miesiac >= 6 && miesiac < 11) {
    miesiacPlus_1 = miesiac + 1;
  } else if (miesiac == 5) {
    miesiacPlus_1 = 6;
    rokPlus_1 = rok;
  } else if (miesiac == 4) {
    miesiacPlus_1 = 5;
    rokPlus_1 = rok;
  } else if (miesiac == 3) {
    miesiacPlus_1 = 4;
    rokPlus_1 = rok;
  } else if (miesiac == 2) {
    miesiacPlus_1 = 3;
    rokPlus_1 = rok;
  } else if (miesiac == 1) {
    miesiacPlus_1 = 2;
    rokPlus_1 = rok;
  } else if (miesiac == 0) {
    miesiacPlus_1 = 1;
    rokPlus_1 = rok;
  } else if (miesiac == 11) {
    miesiacPlus_1 = 0;
    rokPlus_1 = rok + 1;
  }

  if (miesiacPlus_1 < 9) {
    miesiacPlus_1 = `0${miesiacPlus_1 + 1}`;
  } else {
    miesiacPlus_1 = miesiacPlus_1 + 1;
  }

  let dzienPlus_1 = podajDzien(rokPlus_1, miesiacPlus_1);
  let dataPlus1_poczatek = `${rokPlus_1}-${miesiacPlus_1}-01`;
  let dataPlus1_koniec = `${rokPlus_1}-${miesiacPlus_1}-${dzienPlus_1}`;

  //*** tu plus 6 miesiecy do przodu - tylko data końca miesiaca*/

  let miesiacPlus_6;
  let rokPlus_6 = rok;

  if (miesiac <= 5) {
    miesiacPlus_6 = miesiac + 6;
  } else if (miesiac == 6) {
    miesiacPlus_6 = 0;
    rokPlus_6 = rok + 1;
  } else if (miesiac == 7) {
    miesiacPlus_6 = 1;
    rokPlus_6 = rok + 1;
  } else if (miesiac == 8) {
    miesiacPlus_6 = 2;
    rokPlus_6 = rok + 1;
  } else if (miesiac == 9) {
    miesiacPlus_6 = 3;
    rokPlus_6 = rok + 1;
  } else if (miesiac == 10) {
    miesiacPlus_6 = 4;
    rokPlus_6 = rok + 1;
  } else if (miesiac == 11) {
    miesiacPlus_6 = 5;
    rokPlus_6 = rok + 1;
  }

  if (miesiacPlus_6 < 9) {
    miesiacPlus_6 = `0${miesiacPlus_6 + 1}`;
  } else {
    miesiacPlus_6 = miesiacPlus_6 + 1;
  }

  let dzienPlus_6 = podajDzien(rokPlus_6, miesiacPlus_6);
  let dataPlus6_koniec = `${rokPlus_6}-${miesiacPlus_6}-${dzienPlus_6}`;

  //*** data wejściowa () */
  if (miesiac < 9) {
    miesiac = `0${miesiac + 1}`;
  } else {
    miesiac = miesiac + 1;
  }
  if (dzien < 10) {
    dzien = `0${dzien}`;
  } else {
    dzien = dzien;
  }

  let entranceData = `${rok}-${miesiac}-${dzien}`;

  const daty = {
    dzis: entranceData,
    minus_6_poczatek: dataMinus6_poczatek,
    minus_6_koniec: dataMinus6_koniec,
    minus_5_poczatek: dataMinus5_poczatek,
    minus_5_koniec: dataMinus5_koniec,
    minus_4_poczatek: dataMinus4_poczatek,
    minus_4_koniec: dataMinus4_koniec,
    minus_3_poczatek: dataMinus3_poczatek,
    minus_3_koniec: dataMinus3_koniec,
    minus_2_poczatek: dataMinus2_poczatek,
    minus_2_koniec: dataMinus2_koniec,
    minus_1_poczatek: dataMinus1_poczatek,
    minus_1_koniec: dataMinus1_koniec,
    minus_0_poczatek: dataMinus0_poczatek,
    minus_0_koniec: dataMinus0_koniec,
    plus_1_poczatek: dataPlus1_poczatek,
    plus_1_koniec: dataPlus1_koniec,
    plus_6_koniec: dataPlus6_koniec,
  };

  return daty;
};
