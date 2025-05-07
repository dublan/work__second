document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const telefono = document.getElementById('telefono').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
      
  
      emailjs.send('service_k98xho9', 'template_pd1nm2b', {
        name: nombre,
        email: email,
        message: mensaje,
        phone: telefono,
        lastname: apellido
      })
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('¡Mensaje enviado! Se ha enviado una confirmación a tu correo electrónico.');
        form.reset();
      }, function(error) {
        console.log('FAILED...', error);
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      });
    });
  });