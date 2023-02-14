fetch("https://go-apod.herokuapp.com/apod")
  .then((response) => response.json())
  .then((data) => {
    document.querySelector("h1").innerText = data.title;
    document.querySelector("#date").innerText = data.date;
    document.querySelector("img").src = data.url;
    document.querySelector("#copyright").innerText = data.copyright;
    document.querySelector("#explanation").innerText = data.explanation;
    let savedata = localStorage.setItem("savedata", JSON.stringify(data));
  });
