let price = [];
function Render() {
  fetch("https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
    .then((response) => response.json())
    .then((data) => {
      price.push(data.lastPrice);

      let msg = document.querySelector("div");
      if (price[price.length - 1] > price[price.length - 2]) {
        msg.style.color = "green";
        msg = "increase";
      } else {
        msg.style.color = "red";
        msg = "decrease";
      }
      document.querySelector("div").innerText = `${
        price[price.length - 1]
      } ${msg}`;
    });
  setTimeout(() => Render(), 5000);
}

Render();
