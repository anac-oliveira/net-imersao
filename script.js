// Script para implementar a funcionalidade de alternância entre dark mode e light mode
// Seleciona o botão de alternância de tema pelo ID
const themeToggle = document.getElementById('theme-toggle');
// Seleciona o elemento body da página
const body = document.body;

// Verifica se há uma preferência de tema salva no localStorage
const savedTheme = localStorage.getItem('theme');
// Se uma preferência foi encontrada, aplica a classe correspondente ao body
if (savedTheme) {
    // Adiciona a classe do tema salvo ao body
    body.classList.add(savedTheme);
    // Atualiza o ícone do botão com base no tema salvo
    updateButton(savedTheme);
}

// Adiciona um ouvinte de evento de clique ao botão de alternância
themeToggle.addEventListener('click', () => {
    // Verifica se o body atualmente tem a classe 'light-mode'
    if (body.classList.contains('light-mode')) {
        // Remove a classe 'light-mode' do body
        body.classList.remove('light-mode');
        // Adiciona a classe 'dark-mode' ao body
        body.classList.add('dark-mode');
        // Salva a preferência 'dark-mode' no localStorage
        localStorage.setItem('theme', 'dark-mode');
        // Atualiza o ícone do botão para 'dark-mode'
        updateButton('dark-mode');
    } else {
        // Se não estiver em light-mode, assume que está em dark-mode
        // Remove a classe 'dark-mode' do body
        body.classList.remove('dark-mode');
        // Adiciona a classe 'light-mode' ao body
        body.classList.add('light-mode');
        // Salva a preferência 'light-mode' no localStorage
        localStorage.setItem('theme', 'light-mode');
        // Atualiza o ícone do botão para 'light-mode'
        updateButton('light-mode');
    }
});

// Função para atualizar o texto/ícone do botão com base no tema atual
function updateButton(theme) {
    // Se o tema for 'light-mode', define o ícone como sol
    if (theme === 'light-mode') {
        themeToggle.textContent = '☀️'; // Ícone de sol para representar light mode
    } else {
        // Caso contrário (dark-mode), define o ícone como lua
        themeToggle.textContent = '🌙'; // Ícone de lua para representar dark mode
    }
}