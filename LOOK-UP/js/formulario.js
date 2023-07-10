const login = document.querySelector('#login');
const register = document.querySelector('#register');
const forgot = document.querySelector('#forgot'); // Corregido
const registerLink = document.querySelector('#register-link');
const loginLink = document.querySelector('#login-link');
const forgotLink = document.querySelector('#forgot-link');

registerLink.addEventListener('click', () => mostrarocultarlogreg());
loginLink.addEventListener('click', () => mostrarocultarlogreg());
forgotLink.addEventListener('click', () => mostrarocultarlogreg());

const mostrarocultarlogreg = () => {
    login.classList.toggle('hidden');
    register.classList.toggle('hidden');
    forgot.classList.toggle('hidden');
};

