const home=document.getElementById("home").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".container-1").scrollIntoView({behaviour:'smooth'});
})

const about=document.getElementById("about").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".container-2").scrollIntoView({behaviour:'smooth'});
})

const button=document.getElementById("menu").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".container-3").scrollIntoView({behaviour:'smooth'});
})
const contact=document.getElementById("contact").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".container-5").scrollIntoView({behaviour:'smooth'});
})
const explorebutton=document.getElementById("explorebtn").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".container-2").scrollIntoView({behavior:'smooth'});
})
const orderbutton=document.getElementById("orderbtn").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".container-5").scrollIntoView({behavior:'smooth'});
})