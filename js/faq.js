function showMenu(){
  const menu = document.getElementById("toggle-menu");

  if(menu.style.display == "none"){
      menu.style.display = "block";
  }else{
     menu.style.display = "none";
  }
  
}

// creating toggle menu faqs
const question = document.querySelectorAll(".single-quiz");

question.forEach(function(singleQuiz){

  const btn = singleQuiz.querySelector(".top-section");

  const icons = btn.lastElementChild;

  const display = singleQuiz.lastElementChild;

  btn.addEventListener("click", function(){

    display.classList.toggle("show");

    icons.classList.toggle("flip");

  })
})