import { podajDaneZRaportu } from "./api/api_raport.js";
import { podajDaneZKolejki } from "./api/api_kolejka.js";
import { podajListe, drawTable_ListaProdukcji } from "./lista_V.js";
import { funkcjaDat } from "./funkcja_do_dat.js";

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
  // podajListe();
  // google.charts.setOnLoadCallback(drawTable_ListaProdukcji);
  $("#poka_liste-button_id").click(function () {
    podajListe();
    google.charts.setOnLoadCallback(drawTable_ListaProdukcji);
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
