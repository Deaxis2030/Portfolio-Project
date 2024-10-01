const project1 = document.querySelector ("#project-1");
const project2 = document.querySelector ("#project-2");
const project3 = document.querySelector ("#project-3");
const likeButton = document.querySelector ("#likesBTN");
const displayMessage = document.querySelector ("#displayMessage")

project1.onclick = function () {
    window.location = "https://github.com/Deaxis2030/flexbox-business-site-starting"
}

project2.onclick = function () {
    window.location = "https://github.com/Deaxis2030/Message-Generator"
}

project3.onclick = function () {
    window.location = "https://github.com/Deaxis2030/flexbox-business-site-starting"
}


const randNum = () => {
    return Math.floor ((Math.random()*9)+1);
 };
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
 
     }
 }
 
 
 likeButton.addEventListener("click", ()=>{
    
     displayMessage.innerText = changer(randNum());
     displayMessage.style.opacity = 0;
     setTimeout(() => {
         displayMessage.style.opacity = 1;
         displayMessage.style.transition = "opacity 2s";
         setTimeout(() => {
             displayMessage.style.opacity = 0;
             displayMessage.style.transition = "opacity 6s";
         }, 5000);
     }, 1000);
     
     
 });