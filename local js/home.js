const logo = document.querySelector(".logo");
const fb = document.querySelector(".fb");
const insta = document.querySelector(".insta");
const tw = document.querySelector(".tw");
const you = document.querySelector(".you");
const link = document.querySelector(".link");
const card = document.querySelectorAll(".card");
const cc = document.querySelectorAll(".cc");
const auto_t = document.querySelector(".auto_t");
const auto_p = document.querySelector(".auto_p");
const lef = document.querySelector(".lef");
const rg = document.querySelector(".rg");


logo.onmouseover = function () {
  logo.classList.add("logo_animate");
};

logo.onmouseleave = function () {
  logo.classList.remove("logo_animate");
};

for (let i = 0; i < card.length; i++) {
  card[i].onmouseover = function () {
    cc[i].style["transform"] = "scale(1.1,1.2)";
   
  };

  card[i].onmouseleave = function () {
    cc[i].style["transform"] = "scale(1,1)";
   
  };
}

const up = document.querySelector(".up");
up.onclick = function () {
  window.location.href = "home.html#navbar";
};

fb.onclick = function () {
  window.location.href = "http://www.facebook.com";
};

insta.onclick = function () {
  window.location.href = "http://www.instagram.com";
};

link.onclick = function () {
  window.location.href = "http://www.linkedin.com";
};

tw.onclick = function () {
  window.location.href = "http://www.twitter.com";
};

you.onclick = function () {
  window.location.href = "http://www.youtube.com";
};

let str = "Are You Looking To Buy A Car ?";

let num = 0;

function text() {
  num++;
  auto_t.textContent = str.slice(0, num);

  if (num > str.length) {
    num = 0;
  }
}

let s1 = setInterval(text, 130);

let str2 =
  "Buying a new car is tricky, but with some helpful advice, you’ll be driving off in your new vehicle in no time.";

let num1 = 0;

function txt() {
  num1++;
  auto_p.textContent = str2.slice(0, num1);

  if (num1 > str2.length) num1 = 0;
}

setInterval(txt, 90);

let img_box = [
  {
    h1: "ELECTRIFIED",
    h3: "The balance of  efficiency and power.",
    store: "photo/f1.png",
    bg: "yellow",
  },

  {
    h1: "SAFETY-COROLLA HATCHBACK",

    h3: "We’ll help you monitor your blind spots. Even in reverse.",
    store: "photo/f2.png",
    bg: "red",
  },

  {
    h1: "FEATURES – 4RUNNER",
    h3: " Expertly navigate almost any terrain with Crawl Control ",

    store: "photo/f8.png",
    bg: "orange",
  },

  {
    h1: "2022  TUNDRA",
    h3: "The first-class cabin that  takes off without ever leaving the ground.",
    store: "photo/f12.png",
    bg: "white",
  },

  {
    h1: " PERFORMANCE-HIGHLANDER HYBRID",  
    

    h3: " Choose a mode for Any mood: Normal, Eco, Sport, EV * or Trail.",
    store: "photo/f10.png",
    bg: "blue",
  },
];

let gl_bg = document.querySelector(".gl_bg");

let count = 0;

let img_sl_h1 = document.querySelector(".img_sl_h1");
let img_sl_h3 = document.querySelector(".img_sl_h3");

let main_slide_img = document.querySelector(".main_slide_img");

lef.onclick = function () {
  count--;

  if (count < 0) {
    count = img_box.length - 1;
  }

  main_slide_img.src = img_box[count].store;

  img_sl_h1.textContent = img_box[count].h1;

  img_sl_h3.textContent = img_box[count].h3;

  gl_bg.style["background-color"] = img_box[count].bg;
};

rg.onclick = function () {
  count++;

  if (count >= img_box.length) {
    count = 0;
  }

  main_slide_img.src = img_box[count].store;

  img_sl_h1.textContent = img_box[count].h1;

  img_sl_h3.textContent = img_box[count].h3;

  gl_bg.style["background-color"] = img_box[count].bg;
};


const choose_up = document.querySelector('.choose_up');
const choose_late = document.querySelector('.choose_late');
const choose_pop = document.querySelector('.choose_pop');

let list_car = document.querySelector('.list_car');

let upcoming = document.querySelector('.upcoming');
let popular = document.querySelector('.popular');
let latests = document.querySelector('.latests');


choose_up.onclick=function(){
   
    upcoming.style['display'] = 'flex';

    latests.style['display'] = 'none';

    popular.style['display'] = 'none';
   
    list_car.style['background-image'] = 'linear-gradient(black 50%,blue 20%)';


}

choose_pop.onclick=function(){
  
    upcoming.style['display'] = 'none';

    latests.style['display'] = 'none';

    popular.style['display'] = 'flex';

   list_car.style['background-image'] = 'linear-gradient(darkblue 50%,blue 20%)';
}





choose_late.onclick=function(){

    upcoming.style['display'] = 'none';

    latests.style['display'] = 'flex';

    popular.style['display'] = 'none';

    list_car.style['background-image'] = 'linear-gradient(#6666ff 50%,blue 20%)';

}


