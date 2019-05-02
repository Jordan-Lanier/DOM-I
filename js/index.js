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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navAnchor = document.querySelectorAll('a');
navAnchor[0].textContent = siteContent["nav"]["nav-item-1"];
navAnchor[1].textContent = siteContent["nav"]["nav-item-2"];
navAnchor[2].textContent = siteContent["nav"]["nav-item-3"];
navAnchor[3].textContent = siteContent["nav"]["nav-item-4"];
navAnchor[4].textContent = siteContent["nav"]["nav-item-5"];
navAnchor[5].textContent = siteContent["nav"]["nav-item-6"];

const newAnchor1 = document.createElement('a');
newAnchor1.setAttribute('href','#');
newAnchor1.textContent = 'Home';

const newAnchor2 = document.createElement('a');
newAnchor2.setAttribute('href','#');
newAnchor2.textContent = 'Help';

const nav = document.querySelector('nav');
nav.append(newAnchor2);
nav.prepend(newAnchor1);

document.querySelectorAll('a').forEach((element) => {
  element.style.color= 'limegreen';
});

const cta = document.querySelector('cta-text');
const ctaimg = document.querySelector("#cta-img");
ctaimg.setAttribute('src', siteContent['cta']['img-src']);

const h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]['h1'];

const button = document.querySelector('button');
button.textContent = siteContent["cta"]['button'];

const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']["about-h4"];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];


const pgraph = document.querySelectorAll('.main-content p');
pgraph[0].textContent = siteContent['main-content']["features-content"];
pgraph[1].textContent = siteContent['main-content']["about-content"];
pgraph[2].textContent = siteContent['main-content']["services-content"];
pgraph[3].textContent = siteContent['main-content']["product-content"];
pgraph[4].textContent = siteContent['main-content']["vision-content"];

const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);

const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent["contact"]['contact-h4'];

const contacttext = document.querySelectorAll('.contact p');
contacttext[0].textContent = siteContent['contact']['address'];
contacttext[1].textContent = siteContent['contact']['phone'];
contacttext[2].textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];