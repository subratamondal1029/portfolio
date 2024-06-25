import Typed from "typed.js";

const typed = new Typed("#autotext", {
  strings: [
    'Web <span class="defaultcolor">Developer</span>',
    `<span class="defaultcolor">Programer</span>`,
    `Frontend <span class="defaultcolor">Developer</span>`,
    `Software <span class="defaultcolor">Engineer</span>`,
  ],
  typeSpeed: 150,
  backSpeed: 150,
  smartBackspace: true,
  backDelay: 800,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
});


// scripting for switch content
const leftContainer = document.getElementById('leftContainer')
const rightContainer = document.getElementById('rightContainer')


document.querySelectorAll('.switchBtn').forEach((btn) =>{
  btn.addEventListener('click', (e) =>{
    e.preventDefault()
    const btnType = e.target.textContent.toLowerCase().replaceAll(' ', "")
    const typedElm = document.querySelectorAll(`.${btnType}`)
    
      goNext(leftContainer, typedElm)
    
  })
})


function goNext(side, content){

  if(side !== "both"){
   content[0].style.display = "block"

    side.style.animationName = "scrollUp"
  }

}


// back Content switching scripting
document.querySelectorAll('.backBtn').forEach((btn) =>{
  btn.addEventListener('click', () =>{
    const parent = btn.parentElement;
    leftContainer.style.animationName = "scrollDown"
    setTimeout(() => parent.style.display = "none" ,1000)
  })
})