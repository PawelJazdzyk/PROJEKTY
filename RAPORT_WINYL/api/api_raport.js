import { daty } from "../index.js";

export const podajDaneZRaportu = () => {
  return fetch(
    `http://10.66.225.152:8888/dashboard_proxy/PawelDB/GetData?dateFrom=2024-03-01&dateTo=${daty.dzis}`
  ).then((daneRaport) => daneRaport.json());
};
