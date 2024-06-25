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
