function actualizarBoleto() {
    const eventos = {
        rock: {
            titulo: 'Concierto de Rock',
            fecha: '30 de Junio, 2024',
            hora: '8:00 PM',
            lugar: 'Estadio Nacional',
            tipo: 'Rock'
        },
        jazz: {
            titulo: 'Concierto de Jazz',
            fecha: '15 de Julio, 2024',
            hora: '7:00 PM',
            lugar: 'Teatro Municipal',
            tipo: 'Jazz'
        },
        pop: {
            titulo: 'Concierto de Pop',
            fecha: '20 de Agosto, 2024',
            hora: '9:00 PM',
            lugar: 'Arena Ciudad',
            tipo: 'Pop'
        }
    };

    const eventoSeleccionado = document.getElementById('eventos').value;
    const evento = eventos[eventoSeleccionado];

    document.getElementById('evento-titulo').innerText = evento.titulo;
    document.getElementById('evento-fecha').innerText = evento.fecha;
    document.getElementById('evento-hora').innerText = evento.hora;
    document.getElementById('evento-lugar').innerText = evento.lugar;
    document.getElementById('evento-tipo').innerText = evento.tipo;
}
