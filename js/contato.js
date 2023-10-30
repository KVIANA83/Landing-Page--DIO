document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Validação dos campos
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        // Envio do formulário (substitua isso com sua lógica de envio real)
        alert("Formulário enviado com sucesso!");

        // Limpa o formulário
        form.reset();
    });
});


