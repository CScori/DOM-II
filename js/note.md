domElement.forEach(element => {
    element.style.color = blue
})


const nav = document.querySelectorAll('.nav-link');
nav.forEach(data => {
    data.style.color = red;
});

const name.classList.remove/add/('name')

^ d1

const $$$$ = document.querySelectorAll('.####');
$$$$.forEach(item => {
    item.addEventListener("evnt", e => {
        item.style.#### = 'stylepref';
    });
});

propogation
navs[1].addEventListener('mouseover', function (e) {
    navs[1].style.color = 'red';
    console.log('im over the mouse line');
    e.stopPropagation(); --- this stops it from running as it goes up the chain thru dom
});

Prevent Default
const link = document.querySelector('.');
link.addEventListener('click', e => {
    console.log('link is click);
    e.preventDefault(); --- stops the user from going thru this action -- can be used for backend or rerouting
})
