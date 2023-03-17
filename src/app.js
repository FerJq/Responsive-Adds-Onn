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
}, 6000);
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
}, 6000);

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
}, 6000);
