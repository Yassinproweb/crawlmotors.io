// Navbar Actions JS \\
const nav = document.querySelector('nav')

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 25) {
        nav.classList.add('back-color')
    } else {
        nav.classList.remove('back-color')
    }
})

const menu = document.getElementById('nav_menu')
const menuBtn = document.getElementById('menu')
const menuShow = document.querySelector('.menu_open')
const menuClose = document.querySelector('.menu_close')

menuBtn.addEventListener('click', ()=> {
    menuShow.classList.toggle('hidden')
    menuClose.classList.toggle('hidden')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})



// Home Section Number Button Scripting \\
let home_back = document.getElementById('home_car')
const Car1 = document.getElementById('car1')
const Car2 = document.getElementById('car2')
const Car3 = document.getElementById('car3')
const Car4 = document.getElementById('car4')

Car1.addEventListener('click', async function nextCar() {
    const response = await fetch('/images/homebg.jpeg')
    const image = await response.blob()
    home_back.src = URL.createObjectURL(image)
})

Car2.addEventListener('click', async function nextCar() {
    const response = await fetch('/images/homebg1.jpeg')
    const image = await response.blob()
    home_back.src = URL.createObjectURL(image)
})

Car3.addEventListener('click', async function nextCar() {
    const response = await fetch('/images/homebg2.jpeg')
    const image = await response.blob()
    home_back.src = URL.createObjectURL(image)
})

Car4.addEventListener('click', async function nextCar() {
    const response = await fetch('/images/homebg3.jpeg')
    const image = await response.blob()
    home_back.src = URL.createObjectURL(image)
})

const showCar = document.querySelectorAll('.next_car')

function carShow() {
    showCar.forEach(l=> l.classList.remove('is-show'))
    this.classList.add('is-show')
}

showCar.forEach(l=> l.addEventListener('click', carShow))

// Mixitup Button Toggler
const activeFilter = document.querySelectorAll('.filter')

function isActive() {
    activeFilter.forEach(l=> l.classList.remove('active-filter'))
    this.classList.add('active-filter')
}

activeFilter.forEach(l=> l.addEventListener('click', isActive))

// FAQs button toggle show answer
const faqBtn = document.querySelectorAll('.show-btn')
const showFaq = document.querySelectorAll('.faq_show')
const closeFaq = document.querySelectorAll('.faq_close')
const answerFaq = document.querySelectorAll('.faq_answer')

faqBtn[0].addEventListener('click', ()=> {
    showFaq[0].classList.toggle('hidden')
    closeFaq[0].classList.toggle('hidden')
    answerFaq[0].classList.toggle('hidden')
})

faqBtn[1].addEventListener('click', ()=> {
    showFaq[1].classList.toggle('hidden')
    closeFaq[1].classList.toggle('hidden')
    answerFaq[1].classList.toggle('hidden')
})

faqBtn[2].addEventListener('click', ()=> {
    showFaq[2].classList.toggle('hidden')
    closeFaq[2].classList.toggle('hidden')
    answerFaq[2].classList.toggle('hidden')
})

