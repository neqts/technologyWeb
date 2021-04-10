const btn = document.querySelector(".resp")
const ul  = document.querySelector("ul")
const li  = document.querySelector("li")
const nav = document.querySelector("nav")
const img  = document.querySelector(".img")
const snow = document.querySelector(".snow")

btn.addEventListener("click",show)

function show() {
    ul.style.display="inline"
    ul.classList.add("test")
    nav.classList.add("throw")
   btn.classList.add("beks")
   img.classList.add("beks")
    snow.classList.remove("beks")
 
}

snow.addEventListener('click',function () {
    ul.style.display="none"
    ul.classList.toggle("test")
    snow.classList.add("beks")
    nav.classList.remove("throw")
    btn.classList.remove("beks")
   img.classList.remove("beks")


   ul.classList.remove=("beks")
  
})

function myFunction(x) {
    if (x.matches) { // If media query matches
        ul.style.display="none"
    } else {
        ul.style.display="flex"
    }
  }
  
  const x = window.matchMedia("(max-width: 1350px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes