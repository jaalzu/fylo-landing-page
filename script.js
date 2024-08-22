
    // MENU DESPEGABLE 

const navMenu = document.getElementById('nav-list'),
      toggleMenu = document.getElementById('toggle-menu'),
      closeMenu = document.getElementById('close-menu')

    //   TO OPEN MENU 
if(toggleMenu){
    toggleMenu.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
        toggleMenu.style.display = 'none'
        closeMenu.style.display = 'block'
    })
}

        // TO CLOSE MENU 
if(closeMenu){
    closeMenu.addEventListener('click',() => {
        navMenu.classList.remove('show-menu');
        toggleMenu.style.display = 'block'
        closeMenu.style.display = 'none'


    })
}









// SWEET ALERT FUNC 

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('my-form');

    form.addEventListener('submit', function(event) {
        // Validación de campos requeridos por el navegador
        if (!form.checkValidity()) {
            event.preventDefault(); // Previene el envío del formulario si no es válido
            form.reportValidity(); // Muestra los mensajes de error
            return;
        }

        event.preventDefault(); // Evita que el formulario se envíe normalmente

        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent.',
                    background: 'hsl(216, 53%, 9%)', // Fondo del alert
                    icon: 'success',
                    confirmButtonText: 'Great!',
                    confirmButtonColor: 'hsl(176, 68%, 64%)', // Fondo del botón
                    color: 'white', // Color de la letra del alert
                    customClass: {
                        confirmButton: 'swal2-confirm' // Aplica estilos personalizados al botón
                    }
                    
                });
                const style = document.createElement('style');
                style.innerHTML = `
                    .swal2-popup {
                        font-family: 'Raleway', sans-serif !important; // Fuente primaria para el alert
                    }
                    .swal2-confirm {
                        color: white !important; // Color de las letras del botón
                    }
                `;
                document.head.appendChild(style);
                form.reset(); // Opcional: Resetea el formulario después del envío
            } else {
                swal.fire({
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        }).catch(error => {
            swal.fire({
                title: 'Oops!',
                text: 'There was a problem submitting your form. Please try again later.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
    });
});



// // SCROLL REVEAL FUNC 

// // SCROLL REVEAL HIDE IN MOBILE 
// function initScrollReveal(){
//     const isMobile = window.matchMedia("(max-width:868px)").matches


// if(!isMobile){
// ScrollReveal().reveal('.access', {
//     delay:500,
//     origin:'left',
//     distance:'40px',
//     easing: 'ease-in-out', 
//     opacity: 0, duration: 1000
// });




// ScrollReveal().reveal('.stay-productive', {
//      origin:'bottom',
//      delay: 400,
//      distance:'50px',
//      easing: 'ease-in-out' ,
//      interval:500,
//      opacity: 0, duration: 1000
//     });


// ScrollReveal().reveal('.comments', {
//      delay: 600,
//      origin:'left',
//      distance:'30px',
//      easing: 'ease' ,
//      interval:200,
//      opacity: 0, duration: 1000

//     });


// ScrollReveal().reveal('.early__access', {
//      delay: 1000,
//      origin:'right',
//      distance:'30px',
//      easing: 'ease' ,
//      interval:600,
//      opacity: 0, duration: 1000
//     });

    
// ScrollReveal().reveal('.footer', {
//      delay: 600,
//      origin:'left',
//      distance:'20px',
//      easing: 'ease' ,
//      interval:400,
//      opacity: 0, duration: 1000

//     });
// }};

// document.addEventListener('DOMContentLoaded', initScrollReveal);

// window.addEventListener('resize', initScrollReveal);
