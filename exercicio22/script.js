//  Mariane Letícia Souza Moreira 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("checkout-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const cardInput = document.getElementById("card");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert("Pagamento realizado com sucesso!");
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            isValid = false;
            document.getElementById("name-error").innerText = "Por favor, insira seu nome.";
        } else {
            document.getElementById("name-error").innerText = "";
        }

        if (emailInput.value.trim() === "") {
            isValid = false;
            document.getElementById("email-error").innerText = "Por favor, insira seu email.";
        } else {
            document.getElementById("email-error").innerText = "";
        }

        if (cardInput.value.trim() === "") {
            isValid = false;
            document.getElementById("card-error").innerText = "Por favor, insira o número do cartão.";
        } else {
            document.getElementById("card-error").innerText = "";
        }

        return isValid;
    }
});
