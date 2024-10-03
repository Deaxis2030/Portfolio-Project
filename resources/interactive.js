//Variables from the DOM
const project1 = document.querySelector ("#project-1");
const project2 = document.querySelector ("#project-2");
const project3 = document.querySelector ("#project-3");
const likeButton = document.querySelector ("#likesBTN");
const displayMessage = document.querySelector ("#displayMessage");

//Onclick function linking project photos to their websites 
project1.onclick = function () {
    window.location = "https://deaxis2030.github.io/flexbox-business-site-starting/"
};

project2.onclick = function () {
    window.location = "https://deaxis2030.github.io/Message-Generator/"
};

project3.onclick = function () {
    window.location = "https://github.com/Deaxis2030/flexbox-business-site-starting"
};


//Function that provides the list of things shown when likes button is clicked
 const changer = num => {
     
     switch (num){
         case 1:
             
             return "Jazz Music!";
             break;
 
         case 2:
             return "The Color Blue!";
             break;
         
         case 3:
             return "Coding!";
             break;
         
         case 4:
             return "Pineapples!";
             break;
         
         case 5:
             return "Chicken!!!";
             break;
         
         case 6:
             return "A girl named Alice :) !!!";
             break;
         
         case 7:
             return "MMORPGS and MOBAS (Neverwinter and League of Legends more specifically)!!!";
             break;
 
         case 8:
             return "Philosophical conversations!";
             break;
 
         case 9:
             return "Growing and learning new things in life!";
             break;
         
         default:
             return "something went wrong";
             break;
 
     };
 };

//Variable used to iterate through list of likes
 let value = 0;

 //Click event listener that lets the likes button show fade in and fade out of likes
 likeButton.addEventListener("click", ()=>{

    if (value < 9) {
        value++; 
    }   else {
        value = 1;
    };

     displayMessage.innerText = changer(value);
     displayMessage.style.opacity = 0;
     
     //fade in and fade out function 
     setTimeout(() => {
         displayMessage.style.opacity = 1;
         displayMessage.style.transition = "opacity 1s";
         setTimeout(() => {
             displayMessage.style.opacity = 0;
             displayMessage.style.transition = "opacity 1s";
         }, 3000);
     }, 1000);
     
    
     console.log (value);
 });