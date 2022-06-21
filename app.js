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
const speakers = [
    {
        name: 'Ashin Vimala',
        title: 'Founder of Moegok',
        bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
        img: 'assets/profile.png',
    },
    {
        name: 'Ashin Vimala',
        title: 'Founder of Moegok',
        bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
        img: 'assets/profile.png',
    },
    {
        name: 'Ashin Vimala',
        title: 'Founder of Moegok',
        bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
        img: 'assets/profile.png',
    },
    {
        name: 'Ashin Vimala',
        title: 'Founder of Moegok',
        bio: 'Listen to the speakers about the various countries about the messages of sharing and opening',
        img: 'assets/profile.png',
    }
]
