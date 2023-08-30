const menu = document.querySelector(".menu");
const menu_icon = document.querySelector(".menu_icon");
const header_nav = document.querySelector(".header_nav");

menu.addEventListener("click", () => {
  menu_icon.classList.toggle("menuRoll_icon");
  header_nav.classList.toggle("headers_nav");
})



const slides = document.querySelectorAll('.slide');
const nextbtn = document.querySelector('.nextbtn');
const prevbtn = document.querySelector('.prevbtn');

slides.forEach(function(slide,index){slide.style.left=`${index * 100}%`});

let counter = 0;
nextbtn.addEventListener("click", function(){
  counter++;
  carousel()
})
prevbtn.addEventListener("click", function(){
  counter--;
  carousel()
})

function carousel(){
  slide.forEach(function(slide){
  slide.style.transform = translateX(-`$(counter * 200)%`);
  })
}
