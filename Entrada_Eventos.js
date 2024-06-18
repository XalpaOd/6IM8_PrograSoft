document.addEventListener("DOMContentLoaded", function() {
    generarQRCode('123456789'); // Generar QR para el Fan ID inicial
});

function actualizarBoleto() {
    const eventos = {
        rock: {
            titulo: 'Concierto de Rock',
            fecha: '30 de Junio, 2024',
            hora: '8:00 PM',
            lugar: 'Estadio Nacional',
            tipo: 'Rock',
            fanID: '123456789'
        },
        jazz: {
            titulo: 'Concierto de Jazz',
            fecha: '15 de Julio, 2024',
            hora: '7:00 PM',
            lugar: 'Teatro Municipal',
            tipo: 'Jazz',
            fanID: '987654321'
        },
        pop: {
            titulo: 'Concierto de Pop',
            fecha: '20 de Agosto, 2024',
            hora: '9:00 PM',
            lugar: 'Arena Ciudad',
            tipo: 'Pop',
            fanID: '456789123'
        }
    };

    const eventoSeleccionado = document.getElementById('eventos').value;
    const evento = eventos[eventoSeleccionado];

    document.getElementById('evento-titulo').innerText = evento.titulo;
    document.getElementById('evento-fecha').innerText = evento.fecha;
    document.getElementById('evento-hora').innerText = evento.hora;
    document.getElementById('evento-lugar').innerText = evento.lugar;
    document.getElementById('evento-tipo').innerText = evento.tipo;
    document.getElementById('fan-id').innerText = evento.fanID;

    generarQRCode(evento.fanID);
}

function generarQRCode(fanID) {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Limpiar el contenedor antes de generar un nuevo QR
    new QRCode(qrcodeContainer, {
        text: fanID,
        width: 128,
        height: 128,
    });
}
