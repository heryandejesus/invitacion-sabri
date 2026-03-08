// --- Lógica de la Cuenta Regresiva ---
const countDownDate = new Date("Mar 14, 2026 19:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h2>¡Hoy es el gran día! 🎉</h2>";
    }
}, 1000);

// --- Lógica de Respuestas y WhatsApp ---
function responder(opcion) {
    // 1. Limpiar interfaz
    document.getElementById('button-container').style.display = 'none';
    document.getElementById('countdown').style.display = 'none';
    
    // 2. Mostrar el resultado (GIF del gato + mensaje)
    document.getElementById(`result-${opcion}`).style.display = 'block';

    // 3. Configuración de WhatsApp
    const telefono = "5491136892229"; 
    let mensaje = "";

    if (opcion === 'si') {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab']
        });
        mensaje = "¡Hola Sabri! Confirmo que voy a tu cumple el 14 de marzo. 🎉🎂";
    } else if (opcion === 'talvez') {
        mensaje = "Hola Sabri, aún no estoy seguro si puedo ir el 14, ¡te confirmo en unos días! 🤔";
    } else {
        mensaje = "Hola Sabri, mil gracias por invitarme pero no voy a poder ir. ¡Espero que pases un cumple increíble! 🥺❤️";
    }

    // 4. Redirección con Delay (para que vean el meme primero)
    setTimeout(() => {
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }, 3000); 
}