let element = document.querySelector(".loader");

export const podajDaneZKolejki = () => {
  element.style.visibility = "visible";
  return fetch(
    "http://10.66.225.152:8888/dashboard_proxy/Vinyl/Raport?dataOd=2024-03-01&dataDo=2024-06-11"
  )
    .then((daneKolejka) => daneKolejka.json())
    .then((element.style.visibility = "hidden"))
    .then($(".container-right").css({ visibility: "visible" }));
};
