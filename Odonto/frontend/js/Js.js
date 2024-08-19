console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const loginForm = loginBtn.parentNode.parentNode;
const signupForm = signupBtn.parentNode;
const loginButton = document.getElementById('login-btn');
const errorMessage = document.getElementById('error-message');

const predefinedEmail = 'user@example.com';
const predefinedPassword = 'senhaexemplo123';

signupBtn.addEventListener('click', (e) => {
  if (!loginForm.classList.contains('slide-up')) {
    loginForm.classList.add('slide-up');
    signupForm.classList.remove('slide-up');
  }
});

loginBtn.addEventListener('click', (e) => {
  if (!signupForm.classList.contains('slide-up')) {
    signupForm.classList.add('slide-up');
    loginForm.classList.remove('slide-up');
  }
});

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email === predefinedEmail && password === predefinedPassword) {
    // Login bem-sucedido, redirecionar para a página da tabela
    window.location.href = 'tabela.html';
  } else {
    // Exibir mensagem de erro
    errorMessage.style.display = 'block';
  }
});

// Adicionar evento de teclado ao formulário de login
loginForm.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) { // Tecla Enter
    loginButton.click(); // Simular clique no botão de login
  }
});