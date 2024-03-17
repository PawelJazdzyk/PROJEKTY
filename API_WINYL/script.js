fetch(
  "http://10.66.225.152:8888/dashboard_proxy/PawelDB/GetData?dateFrom=2024-02-01&dateTo=2024-03-08"
)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
