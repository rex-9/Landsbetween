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
  name: 'Ashin Vimala',
  title: 'Founder of Moegok',
  bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
  img: 'assets/profile.png',
},
{
  name: 'Ashin Vimala 2',
  title: 'Founder of Moegok',
  bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
  img: 'assets/profile.png',
},
{
  name: 'Ashin Vimala 3',
  title: 'Founder of Moegok',
  bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
  img: 'assets/profile.png',
},
{
  name: 'Ashin Vimala 4',
  title: 'Founder of Moegok',
  bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
  img: 'assets/profile.png',
},
];

const container = document.getElementById('speakers-container');

for (let i = 0; i < speakers.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('flex', 'items-center', 'teacher-card');

  const image = document.createElement('img');
  image.src = speakers[i].img;

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

  container.appendChild(card).appendChild(image);
  container.appendChild(card).appendChild(div).appendChild(nameElement);
  container.appendChild(card).appendChild(div).appendChild(title);
  container.appendChild(card).appendChild(div).appendChild(bio);
}