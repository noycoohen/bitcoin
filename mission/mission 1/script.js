//mission 1

document.querySelector("button").addEventListener("click", () => {
  let url =
    "https://api.agify.io/?name=" + document.querySelector("#name").value;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#msg").innerText = `The age is:` + data.age;
    });
});
