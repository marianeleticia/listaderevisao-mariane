// Mariane Letícia Souza Moreira
function makeReservation() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    document.getElementById('reservationStatus').innerText = "Reserva feita para " + date + " às " + time;
}
