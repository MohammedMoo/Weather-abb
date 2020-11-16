/* Global Variables */
const but = document.getElementById('generate');
const zip = document.getElementById('zip').value;

// if zip = none

but.addEventListener('click',()=>{
    console.log('hello');
})

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


