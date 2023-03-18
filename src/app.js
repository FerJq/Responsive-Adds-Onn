//background

let body = document.querySelector("body");

function background_theme() {
  if (body.classList.contains("color-theme")) {
    body.classList.remove("color-theme");
  } else {
    body.classList.add("color-theme");
  }
}
setInterval(background_theme, 2000);
//bg darktheme

function darkbg_theme() {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
}

setInterval(darkbg_theme, 2000);

//navbar dark theme
let navbar_dark = document.querySelector(".navbar-container");
let darknav = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#aboutme">FjS.</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutme">About me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#bestfriend">Best Friend</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#music">Music</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#changetheme">Theme</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;
let lightnav = `<nav
        class="navbar navbar-expand-lg navbar-light"
        style="background-color: #e3f2fd"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#aboutme">FjS.</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutme">About me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#bestfriend">Best Friend</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#music">Music</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#changetheme">Theme</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;
let change_theme = document.getElementById("changetheme");
change_theme.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    navbar_dark.innerHTML = lightnav;
  } else {
    body.classList.add("dark");
    navbar_dark.innerHTML = darknav;
  }
});
///RANDOM PICTURES
let random = [1, 2, 3, 4];

//slice-one
let img_one = document.querySelector(".section-2");
setInterval(function () {
  let number = Math.floor(Math.random() * 4);
  let images = random[number];
  img_one.innerHTML = `            <img
              src="image/slice-one/${[images]}.jpg"
              alt=""
              class="image-fluid"
            />`;
}, 4000);
//slice-two
let img_two = document.querySelector(".galery-1");
setInterval(function () {
  let number = Math.floor(Math.random() * 4);
  let images = random[number];
  img_two.innerHTML = `<a href="https://www.pexels.com/search/husky"
            ><img
              src="image/slice-two/${[images]}.jpg"
              alt=""
              class="image-fluid"
          /></a>`;
}, 4000);

//slice-three
let img_three = document.querySelector(".galery-2");
setInterval(function () {
  let number = Math.floor(Math.random() * 4);
  let images = random[number];
  img_three.innerHTML = `
          <a href="https://www.pexels.com/search/husky"
            ><img
              src="image/slice-three/${[images]}.jpg"
              alt=""
              class="image-fluid"
          /></a>`;
}, 4000);
