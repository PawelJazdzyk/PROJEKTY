export const podajDaneZRaportu = () => {
  return fetch(
    "http://10.66.225.152:8888/dashboard_proxy/PawelDB/GetData?dateFrom=2024-03-08&dateTo=2024-03-18"
  ).then((daneRaport) => daneRaport.json());
};
