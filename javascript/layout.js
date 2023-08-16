'use strict'

window.addEventListener('scroll',()=>{
    const navBar = document.getElementById('nav-bar')
    if(window.scrollY>0){
        navBar.classList.add('nav-scrolled')
    }else{
        navBar.classList.remove('nav-scrolled')
    }
})