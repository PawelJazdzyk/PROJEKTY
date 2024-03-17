let daneKolejka;

export const podajDaneZKolejki = () => {
  return fetch(
    "http://10.66.225.152:8888/dashboard_proxy/Vinyl/Raport?dataOd=2024-03-08&dataDo=2024-03-11"
  ).then((daneKolejka) => daneKolejka.json());
};
