document.querySelector('.mobile-menu').addEventListener ('click', () => {
    document.querySelector('.menu').classList.toggle('show')
    document.querySelector('body').classList.toggle('lock')
})
    document.querySelectorAll('.menu a').forEach((el) => {
        el.addEventListener('click', () => {
        document.querySelector('.menu').classList.remove('show')
    })
})
