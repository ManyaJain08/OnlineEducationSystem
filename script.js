
/*------Defining variables-----*/
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('header .flex .navbar');


/*--on click it will change the function----*/
menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
