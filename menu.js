/* MENU ATIVO MENU NAVBAR */

const lista = document.querySelectorAll('.lista');


function ativarLink(){
	
	lista.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}

lista.forEach((item) =>
item.addEventListener('click', ativarLink));



/* funcao menu mobile navbar */
const btnMenu = document.querySelector('.menu')
const navBar = document.querySelector('.navegacao')

btnMenu.addEventListener('click', () => {
	navBar.classList.toggle('navegacao--ativo')
})