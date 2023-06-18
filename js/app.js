const btnBurger = document.getElementById("hamburger-menu");
const navbarList = document.querySelector(".navbar-nav");
const btnDarkMOde = document.querySelector(".dark-mode");

btnBurger.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});

// klik anywhere for close sidebar
document.addEventListener("click", function (e) {
  if (!btnBurger.contains(e.target) && !navbarList.contains(e.target)) {
    navbarList.classList.remove("active");
  }
});

// scroll navbar
const nav = document.querySelector(".navbar");
const logo = document.querySelector(".navbar .logo");

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 50) {
    nav.classList.add("scroll-nav");
  } else {
    nav.classList.remove("scroll-nav");
  }
});

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const iconDarkMode = document.querySelector(".dark-mode .icon");
const iconMoon = document.querySelector(".dark-mode .icon .i");



btnDarkMOde.addEventListener('click', function(){

  const e = body.classList.toggle('dark-mode-active');
  iconDarkMode.classList.toggle('dark-mode-active');
  navbarList.classList.toggle('dark-mode-active');
  navbar.classList.toggle('dark-mode-active');
  document.querySelector(".contact .row").classList.toggle('dark-mode-active')


  if(e === true){
   
   iconDarkMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun" style="margin-top: 1px; position:relative; top:1px;"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }else{
    iconDarkMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon i" style="margin-top: 1px"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
})
