import { podajDaneZRaportu } from "./api/api_raport.js";
import { podajDaneZKolejki } from "./api/api_kolejka.js";

let daneZRaportuValue = podajDaneZRaportu();
let daneZKolejkiValue = podajDaneZKolejki();
export let daneZRaportu;
export let daneZKolej;

Promise.all([daneZRaportuValue, daneZKolejkiValue]).then((values) => {
  daneZRaportu = values[0];
  daneZKolej = values[1];
  console.log(daneZRaportu);
  console.log(daneZKolej);
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
