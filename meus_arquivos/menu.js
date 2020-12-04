let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

/* menu toggle, quando eu clicar em vc, oque vc vai fazer?
- vai rodar uma função, qu vai ser executado quando eu clicar no menu
toggle.
*/
/* ()=> (significado érol function) */
menuToggle.addEventListener("click",()=>{

  /* quando menu toggle esta on, vai desabilitar a rolagem da página
  se o show for true, o overflow será hidden, senão, initial
  */
 /*quando eu clicar no meu menuToggle, ele vai ver que é true e vai aplicar o hidden no meu body*/
  document.body.style.overflow = show ? "hidden" : "initial"

  /* vai colocar a classe on no menu section  */
  menuSection.classList.toggle("on",show)
  /* faz com que o show seja false novamente */
  show = !show;

})