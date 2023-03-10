// DOM Document Object Model
/*abre e fecha o menu quando clicar o icone:hamburguer e x  */
const nav = document.querySelector('#header nav')
const toggle = document.querySelector('nav .toggle')

var div_list = document.querySelectorAll('.toggle')
var div_array = [...div_list]
div_array.forEach(div => {
  div.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
})
/* quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* mudar o header da pagina quando der scroll*/

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}
/*===========TESTIMONIALS SLIDER===========*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
/*ScrollReveal:  Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image,#home .text,
#about .image, #about .text,
#services  header, #services .card,
#testimonials header, #testimonals 
.testimonials,#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/* Botão voltar para o topo*/

function backToTop() {
  const backTotopButton = document.querySelector('.back-to-top')
  if (this.window.scrollY >= 560) {
    backTotopButton.classList.add('show')
  } else {
    backTotopButton.classList.remove('show')
  }
}
/* MENU ATIVO CONFORME A PÁGINA*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/* When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
