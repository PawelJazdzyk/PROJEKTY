import { podajDaneZRaportu } from "./api/api_raport.js";
import { podajDaneZKolejki } from "./api/api_kolejka.js";
import { podajListe, drawTable_ListaProdukcji } from "./lista_V.js";
import { funkcjaDat } from "./funkcja_do_dat.js";
import {
  podajListePolichlorek,
  drawTable_ListaPolichlorek,
  drawTable_ListaAnomalii,
} from "./polichlorek.js";
import {
  podajZamowienia,
  drawTable_ListaZamowienia,
} from "./przeglad_zamowien.js";
import {
  podajZuzycie,
  drawTable_ListaZuzycie,
  zuzyciaChart,
} from "./zuzycie_polichlorku.js";

export let daty = funkcjaDat(new Date());

export let options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

let daneZRaportuValue = podajDaneZRaportu();
let daneZKolejkiValue = podajDaneZKolejki();
export let daneZRaportu;
export let daneZKolej;

google.charts.load("current", { packages: ["table"] });

Promise.all([daneZRaportuValue, daneZKolejkiValue]).then((values) => {
  daneZRaportu = values[0];
  daneZKolej = values[1];
  console.log(daneZRaportu);
  console.log(daneZKolej);
  podajListe();
  google.charts.setOnLoadCallback(drawTable_ListaProdukcji);

  $("#struktra_zamowien-button").click(function () {
    podajZamowienia();
    google.charts.setOnLoadCallback(drawTable_ListaZamowienia);
  });

  $("#poka_liste-button_id").click(function () {
    podajListe();
    google.charts.setOnLoadCallback(drawTable_ListaProdukcji);
  });
  $("#zapotrzebowanie_polichlorek-button").click(function () {
    podajListePolichlorek();
    google.charts.setOnLoadCallback(drawTable_ListaPolichlorek);
    google.charts.setOnLoadCallback(drawTable_ListaAnomalii);
  });
  $("#policz_zuzycie-button").click(function () {
    podajZuzycie();
    google.charts.setOnLoadCallback(drawTable_ListaZuzycie);
    zuzyciaChart();
  });
});

$(function () {
  $("#datepicker_1").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_1").on("change", function () {
    $("#datepicker_1").datepicker("option", "drop", $(this).val());
  });
});
$(function () {
  $("#datepicker_2").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_2").on("change", function () {
    $("#datepicker_2").datepicker("option", "drop", $(this).val());
  });
});
$(function () {
  $("#datepicker_3").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_3").on("change", function () {
    $("#datepicker_3").datepicker("option", "drop", $(this).val());
  });
});
$(function () {
  $("#datepicker_4").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_4").on("change", function () {
    $("#datepicker_4").datepicker("option", "drop", $(this).val());
  });
});
$(function () {
  $("#datepicker_5").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_5").on("change", function () {
    $("#datepicker_5").datepicker("option", "drop", $(this).val());
  });
});
$(function () {
  $("#datepicker_6").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_6").on("change", function () {
    $("#datepicker_6").datepicker("option", "drop", $(this).val());
  });
});
$(function () {
  $("#datepicker_7").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_7").on("change", function () {
    $("#datepicker_7").datepicker("option", "drop", $(this).val());
  });
});
$(function () {
  $("#datepicker_8").datepicker({
    showButtonPanel: false,
    dateFormat: "yy-mm-dd",
  });
  $("#datepicker_8").on("change", function () {
    $("#datepicker_8").datepicker("option", "drop", $(this).val());
  });
});
//***BUTTONY */
$("#button-zapotrzebowanie").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#lista_polichlorek").offset().top,
    },
    500
  );
});
$("#zamowienia_button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#lista_zamowienia").offset().top,
    },
    500
  );
});
$("#zuzycie_button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#lista_zuzycie").offset().top,
    },
    500
  );
});
