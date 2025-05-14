// if(window.innerWidth <=425)
// {
//     document.querySelector(".para").style.display="none";
//     document.querySelector(".para1").style.display="block";
//     document.querySelector(".para2").style.display="block";
// }
// else
// {
//     document.querySelector(".para").style.display="block";
//     document.querySelector(".para1").style.display="none";
//     document.querySelector(".para2").style.display="none";
// }

// //     document.addEventListener("DOMContentLoaded", function () {
// //     const audio = new Audio("audio/Miss U - Everet Almond.mp3");
// //     audio.volume = 1; // from 0 to 1
// //     audio.loop = false;
// //     audio.play();
// // });



let no=document.querySelector(".nobtn")
no.addEventListener("mouseover",()=>{
let top = Math.floor(Math.random() * (window.innerHeight - no.offsetHeight));
    let left = Math.floor(Math.random() * (window.innerWidth - no.offsetWidth));
no.style.position="absolute";
no.style.top=`${top}px`;
no.style.left=`${left}px`;
})