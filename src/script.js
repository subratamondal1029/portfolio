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

// adding lazi loading in image
const images = document.querySelectorAll('img')
images.forEach((img) => img.setAttribute('loading', "lazy"))

// scripting for switch content
const leftContainer = document.getElementById('leftContainer')
const rightContainer = document.getElementById('rightContainer')

const switchBtns = document.querySelectorAll('.switchBtn')
switchBtns.forEach((btn) =>{
  btn.addEventListener('click', (e) =>{
    e.preventDefault()
    const className = btn.textContent.toLowerCase().replaceAll(' ', '')
    
    const leftContent = leftContainer.querySelector(`.${className}`)
    const rightContent = rightContainer.querySelector(`.${className}`)

    if (leftContent) {
      leftContent.style.display = "block"

      if(leftContent && !rightContent){
        leftContainer.style.animationName = "scrollUp"
      }else{
        leftContainer.style.animationName = "scrollDown"
      }
      
    }
    if(rightContent){
      rightContent.style.display = "block"
        rightContainer.style.animationName = "scrollUp"
    }
  toggleScrolBar('block')
  })
})


// back content scripting 
const backBtns = document.querySelectorAll('.backBtn')

backBtns.forEach((btn) =>{
btn.addEventListener('click', () =>{
  const parent = btn.parentElement
  const className = parent.classList[1]

  const leftContent = leftContainer.querySelector(`.${className}`)
  const rightContent = rightContainer.querySelector(`.${className}`)

  if(leftContent){

      if(leftContent && !rightContent){
        leftContainer.style.animationName = "scrollDown"
      }else{
        leftContainer.style.animationName = "scrollUp"
      }


    setTimeout(() => {
      leftContent.style.display = "none"
       leftContainer.style.animationName = "none"
    },600)
  }
  if(rightContent){
    rightContainer.style.animationName = "scrollDown"
    setTimeout(() => rightContent.style.display = "none",600)
  }

  toggleScrolBar('none')
})
})

//scroll indicator for content 

function toggleScrolBar(displayVal){
  document.querySelectorAll('.scrollBar').forEach((bar) =>bar.style.display = displayVal)
}


const leftWork = leftContainer.querySelector('.works')
const rightWork = rightContainer.querySelector('.works')

leftWork.addEventListener('scroll', scrollPage)
rightWork.addEventListener('scroll', scrollPage)

function scrollPage() {
  const container = this

  const conScroll = container.scrollTop
  const height = container.scrollHeight - container.clientHeight;
  const scrolled = (conScroll / height) * 100;
  container.parentElement.querySelector('.progress').style.height = scrolled + "%";
}