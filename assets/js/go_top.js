const body = document.querySelector('body')
const goTop = document.createElement('button');
goTop.setAttribute('id', 'goToTop');
goTop.setAttribute('class', 'btn border-0');
body.appendChild(goTop);

const goTopBtn = document.getElementById('goToTop');

goTopBtn.addEventListener('click', function () { 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

