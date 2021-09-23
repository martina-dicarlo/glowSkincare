const navSlide = () => {
    const hamburguesa = document.querySelector(".hamburguesa");
    const nav = document.querySelector(".navegacion");
    const navegacion = document.querySelectorAll (".navegacion li");

    hamburguesa.addEventListener("click", () => {
        //toggle nav//
        nav.classList.toggle("nav-active");

        //animate links//
        navegacion.forEach((link, index) => {
             if (link,style.animation) {
                 link.style.animation = '';
             } else {
                 link.style.animation = 'navegacionFade 0.5s ease forwards ${index /7 + 0'
             }
        });
    });
}
 
navSlide();