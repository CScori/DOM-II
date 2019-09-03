// Your code goes here
const navs = document.querySelectorAll('.nav-link');
const title = document.querySelector('h1');
const sectionImg = document.querySelector(".content-destination img")
sectionImg.style.cursor = "pointer"
const locPick = document.querySelectorAll('.destination .btn');
console.log(locPick.length);

navs[0].addEventListener('mouseleave', function (e) {
    navs[0].style.color = 'crimson';
    console.log('i left');
});

navs[1].addEventListener('mouseover', function (e) {
    navs[1].style.color = 'red';
    console.log('im over the mouse line');
});

navs[2].addEventListener('mouseenter', function (e) {
    navs[2].style.color = 'orange';
    console.log('this is working');
});

navs[3].addEventListener('mousemove', function (e) {
    navs[3].style.color = 'yellow';
    console.log('the contact is active');
})

title.addEventListener('select', function (e) {
    title.style.fontSize = '20 rem';
    console.log('this is first');
});


sectionImg.addEventListener('drop', function (event) {
    sectionImg.style.transform = 'scale(1.1)';
    sectionImg.style.transition = 'transform 0.5s';
})

locPick[0].addEventListener('keydown', function () {
    locPick[0].style.display = 'none';
    console.log('I disapeared');
})

locPick[1].addEventListener('dblclick', function () {
    locPick[1].style.color = 'red';
    console.log('i see red');
})

locPick[2].addEventListener('mouseup', function () {
    locPick[2].style.background = 'purple';
    console.log('purple rain');
})

window.addEventListener("scroll", event => {
    if (scrollX < 400) {
        window.scroll(0, scrollX += 6)
    }
})