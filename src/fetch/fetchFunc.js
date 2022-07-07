export const getData = (successCallback) => {
  fetch("https://api.iforbet.pl/rest/market/categories")
    .then((r) => r.json())
    .then((data) => {
      if (data && typeof successCallback === "function") {
        successCallback(data);
      }
    })
    .catch((err) => console.log(err));
};
