$(document).ready(function () {
  var settings = {
    url: "http://10.66.225.152:8888/dashboard_proxy/Vinyl/Raport?dataOd=2024-01-01&dataDo=2024-02-06",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
