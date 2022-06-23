// Menu
const sideNav = document.querySelector('.sideNav');
const ham = document.querySelector('.ham');
const menuX = document.querySelector('.menuX');
const menuItems = document.querySelectorAll('.menuLink');

function toggleHamburger() {
  sideNav.classList.toggle('showNav');
}

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', toggleHamburger);
});

ham.addEventListener('click', toggleHamburger);
menuX.addEventListener('click', toggleHamburger);

// Dynamic
const speakers = [{
  name: 'Radagon of the Golden Order',
  title: 'King of the Lands Between',
  bio: ' the "other half" of Queen Marika, is a tall, fractured god wielding the hammer that shattered the Elden Ring, and is found in the Elden Throne.',
  img: 'assets/radagon.png',
},
{
  name: 'Brother Corhyn',
  title: 'Prophet of the Roundtable Hold',
  bio: 'A holy practitioner who was inspired by the Royal Goldmask. He will teach you practical faith-based Incantations',
  img: 'assets/corhyn.png',
},
{
  name: 'Renella of the Full Moon',
  title: 'Founder of Raya Lucaria Academy',
  bio: 'Rennala is the last Carian Queen, imprisoned in the Grand Library. Still distraught over Radagon’s departure, she obsesses over rebirth, and her scholars will protect her at all costs.',
  img: 'assets/renella.png',
},
{
  name: 'Ranni the witch',
  title: 'Pioneer in Dark Moon Magic',
  bio: 'I am the witch Ranni. I stole Death long ago, and search now for the dark path.',
  img: 'assets/ranni.jpg',
},
];

const container = document.getElementById('speakers-container');

for (let i = 0; i < speakers.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('flex', 'items-center', 'teacher-card');
  card.style.cssText = 'position: relative; height: 300px;';

  const cardBg = document.createElement('div');
  cardBg.style.cssText = "position: absolute; bottom: 150px; z-index: -1; background-image: url('./assets/img-bg.png'); background-repeat: no-repeat; height: 100px; width: 100%;";

  const image = document.createElement('img');
  image.src = speakers[i].img;
  image.style.cssText = 'width: 150px; padding-left: 30px;';

  const div = document.createElement('div');

  const nameElement = document.createElement('div');
  nameElement.innerHTML = speakers[i].name;
  nameElement.classList.add('name');

  const title = document.createElement('div');
  title.innerHTML = speakers[i].title;
  title.classList.add('primary-color', 'title');

  const bio = document.createElement('div');
  bio.innerHTML = speakers[i].bio;
  bio.classList.add('bio');

  container.appendChild(card).appendChild(cardBg);
  container.appendChild(card).appendChild(image);
  container.appendChild(card).appendChild(div).appendChild(nameElement);
  container.appendChild(card).appendChild(div).appendChild(title);
  container.appendChild(card).appendChild(div).appendChild(bio);
}