let element = document.querySelector(".loader");

export const podajDaneZKolejki = () => {
  element.style.visibility = "visible";
  return fetch(
    "http://10.66.225.152:8888/dashboard_proxy/Vinyl/Raport?dataOd=2024-03-01&dataDo=2024-07-11"
  ).then((daneKolejka) => {
    if (daneKolejka.ok) {
      $(".loader").css({ visibility: "hidden" });
      return daneKolejka.json();
    }
  });
};
