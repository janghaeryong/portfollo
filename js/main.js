function toggleMenu() {
  const $navMenu = document.getElementById('nav__menu');
  $navMenu.classList.toggle('show');
}

function handleFloatingButton() {
  const $floatingButton = document.getElementById('floating-button');
  $floatingButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function init() {
  const $navTooggle = document.getElementById('nav-toggle');

  $navTooggle.addEventListener('click', () => {
    toggleMenu();
  });

  const $navLinkList = document.querySelectorAll('.nav__link');
  $navLinkList.forEach((el) => el.addEventListener('click', toggleMenu));
  //$navLinkList.forEach((el) => el.addEventListener('click', () => {}));
  handleFloatingButton();
}

init();

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;

    if (entry.isIntersecting) {
      //entry.target.classList.add('bg-dark');
      const menu = document.querySelector(`.nav__link[href*=${sectionId}]`);
      menu.classList.add('active-link');
      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`,
      );
      $items.forEach((el) => {
        el.classList.remove('active-link');
      });
    } else {
      //menu.classList.remove('active-link');
    }
    console.log('work감지 : ', sectionId);
  });
}, options);

const $sectionList = document.querySelectorAll('.section');
$sectionList.forEach((el) => observer.observe(el));

// observer.observe($sectionList);
// observer.observe($workSection);
// observer.observe($workSection);
// observer.observe($workSection);
// observer.observe($workSection);
const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
});
scrollreveal.reveal('.home__data, .about__img, .skills__text');
scrollreveal.reveal('.home__img, .about__data, .skills__img', { delay: 400 });

scrollreveal.reveal('.skills__data, .work__link, .contact__input', {
  interval: 200,
});

//const document.querySelectorAll('')

const typeit = new TypeIt('#typeit', {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true,
});

typeit
  .type('안녕하세요. <br />')
  .type('<strong class="home__title-color">코딩 교육 받고 있는</strong><br />')
  .type(
    '<span><strong class="home__title-color">촙 코딩</strong> 입니다.</span>',
  )
  .go();
