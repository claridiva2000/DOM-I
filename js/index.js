const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//body
const body= document.getElementsByTagName('body');


//logo-img
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//all a-tags
const links = document.querySelectorAll('a');
console.log(links);
//indv. a-tags
const navlink1 = links[0];
navlink1.textContent= siteContent["nav"]["nav-item-1"];

const navlink2 = links[1];
navlink2.textContent= siteContent["nav"]["nav-item-2"];

const navlink3 = links[2];
navlink3.textContent= siteContent["nav"]["nav-item-3"];

const navlink4 = links[3];
navlink4.textContent= siteContent["nav"]["nav-item-4"];

const navlink5 = links[4];
navlink5.textContent= siteContent["nav"]["nav-item-5"];

const navlink6 = links[5];
navlink6.textContent= siteContent["nav"]["nav-item-6"];

//circle-img
const circleimg = document.getElementById('cta-img');
circleimg.setAttribute('src', siteContent["cta"]["img-src"]);

//H1
const ctaText = document.querySelector("h1");
console.log(ctaText);
ctaText.textContent= siteContent["cta"]["h1"];

//BUTTON
const button = document.querySelector('button');
console.log(button);
button.textContent= siteContent["cta"]["button"];

//middle.img
const middleImg= document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
console.log(middleImg);

//all h4's
const hs = document.querySelectorAll('h4');
console.log(hs);
const h41 = hs[0];
h41.textContent= siteContent['main-content']['features-h4'];

const h42 = hs[1];
h42.textContent= siteContent["main-content"]["about-h4"];

const h43 = hs[2];
h43.textContent= siteContent["main-content"]["services-h4"];

const h44 = hs[3];
h44.textContent= siteContent["main-content"]["product-h4"];

const h45 = hs[4];
h45.textContent= siteContent["main-content"]["vision-h4"];

const h46 = hs[5];
h46.textContent= siteContent["contact"]["contact-h4"];

// all p's
const ps= document.querySelectorAll('p');
console.log(ps);

const ps1 = ps[0];
ps1.textContent= siteContent["main-content"]["features-content"]

const ps2 = ps[1];
ps2.textContent= siteContent["main-content"]["about-content"]

const ps3 = ps[2];
ps3.textContent= siteContent["main-content"]["services-content"]

const ps4 = ps[3];
ps4.textContent= siteContent["main-content"][""]

const ps5 = ps[4];
ps5.textContent= siteContent["main-content"]["features-content"]

const ps6 = ps[5];
ps6.textContent= siteContent["contact"]["address"];

const ps7 = ps[6];
ps7.textContent= siteContent["contact"]["phone"];

const ps8 = ps[7];
ps8.textContent= siteContent["contact"]["email"];

const ps9 = ps[8];
ps9.textContent= siteContent["footer"]["copyright"];

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
