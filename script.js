// --- Lógica de la Cuenta Regresiva ---
// Establecemos la fecha de la fiesta: 14 de Marzo de 2026 a las 20:00 hs
const countDownDate = new Date("Mar 14, 2026 20:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Renderizar en el DOM
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // Si la cuenta regresiva termina
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h2>¡Es la hora de la fiesta! 🎉</h2>";
    }
}, 1000);

// --- Lógica de los Botones ---
function responder(opcion) {
    // 1. Ocultar los botones y la cuenta regresiva para despejar la vista
    document.getElementById('button-container').style.display = 'none';
    document.getElementById('countdown').style.display = 'none';
    
    // 2. Mostrar la respuesta elegida
    document.getElementById(`result-${opcion}`).style.display = 'block';

    // 3. Si dice que "sí", disparamos el confeti
    if (opcion === 'si') {
        confetti({
            particleCount: 200,
            spread: 160,
            origin: { y: 0.6 },
            colors: ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab']
        });
    }
}