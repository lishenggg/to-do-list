var menuTogglerButton= document.getElementById('menu-toggler')
var sidebar = document.querySelector('.sidebar')
var hideSideBarCounter = 1
menuTogglerButton.addEventListener('click',()=>{
    hideSideBarCounter ++
    if(hideSideBarCounter%2 != 0){
        sidebar.style.display = 'block'
    }else{
        sidebar.style.display = 'none'
    }
})

