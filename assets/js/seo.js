const seo = document.querySelectorAll('.seo-head');

seo.forEach(s => {
    s.addEventListener('click', () => {
        s.parentElement.classList.toggle('showSeo')
    })
})