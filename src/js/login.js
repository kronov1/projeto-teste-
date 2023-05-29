const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.log');
const register = document.querySelector('.register');
const entrarBtn = document.querySelector('.btn-entrar');
const noAcc = document.querySelector('.btn-no-account');
const voltar = document.querySelector('.voltar');


register.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.remove('no-acc');
});

login.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.classList.remove('no-acc');
});

noAcc.addEventListener('click', ()=> {
    wrapper.classList.add('no-acc')
});

voltar.addEventListener('click', ()=> {
    wrapper.classList.remove('no-acc')
});