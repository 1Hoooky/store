document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão de envio do formulário

    // Esses valores devem ser os mesmos que você configurou no EmailJS
    const serviceID = 'service_0q5jdoj'; // Substitua "SEU_SERVICE_ID" pelo seu Service ID do EmailJS
    const templateID = 'template_uwnjjvh'; // Substitua "SEU_TEMPLATE_ID" pelo ID do template que você criou no EmailJS

    // Coletar os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Parâmetros para o template do EmailJS
    const templateParams = {
        from_name: name,  // Nome do remetente
        from_email: email, // Email do remetente
        message: message  // Mensagem
    };

    // Enviar o email usando o EmailJS
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            alert('Email enviado com sucesso!', response.status, response.text);
        }, function(error) {
            alert('Erro ao enviar email:', error);
        });
});
