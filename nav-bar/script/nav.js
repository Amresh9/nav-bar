let navMenu = document.getElementById('nav-menu');

let ham = document.getElementById('hamburger');
let close = document.getElementById('close-div');


ham.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

close.addEventListener('click',()=>{
    navMenu.classList.remove('show')
});