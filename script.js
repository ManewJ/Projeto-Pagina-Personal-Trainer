
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const celular = document.getElementById("celular").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome) {
            alert("Por favor, informe seu nome completo.");
            return;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Por favor, informe um e-mail válido.");
            return;
        }
        if (!celular) {
            alert("Por favor, informe seu número de celular.");
            return;
        }
        if (!mensagem) {
            alert("Escreva uma mensagem para nós.");
            return;
        }

        // Exibe a mensagem do usuário no alert
        alert(`Obrigado, ${nome}! Recebemos sua mensagem e responderemos em breve.`);

        document.getElementById("contactForm").reset(); 
    });
});