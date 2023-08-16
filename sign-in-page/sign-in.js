'use strict'

const passwordField = document.getElementById('password')

const passwordInput = document.getElementById('password-input')
const emailInput = document.getElementById('email-input')

const nextSignInButton = document.getElementById('next-sign-in-button')


disableButton()

emailInput.addEventListener('keyup',()=>{
    disableButton()
})

passwordInput.addEventListener('keyup',()=>{
    disableButton()
})

let buttonClicked = 0
nextSignInButton.addEventListener('click',()=>{
    buttonClicked++
    passwordField.style.display = 'block'
    passwordField.style.opacity = '1'
    nextSignInButton.innerText = 'Sign In'
    disableButton()
    if(buttonClicked>1){
        window.location.href = '../to-do-list/index.html'
    }
})







//Function to disable button

function disableButton(){
    if(emailInput.value == '' || (passwordField.style.display === 'block' && passwordInput.value == '')){
        nextSignInButton.disabled = true;
        nextSignInButton.style.cursor = 'not-allowed';
    }else{
        nextSignInButton.disabled = false;
        nextSignInButton.style.cursor = 'pointer';
    }
}