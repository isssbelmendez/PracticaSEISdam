const agregarButton = document.getElementById('agregar');
const limpiarButton = document.getElementById('limpiar');
const contenidoDiv = document.getElementById('contenido');

agregarButton.addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const alineacion = document.getElementById('alineacion').value;
    const formato = document.getElementById('formato').value;
    const tamaño = document.getElementById('tamaño').value;

    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = texto;

    nuevoParrafo.style.textAlign = alineacion;

    if (formato === 'cursiva') {
        nuevoParrafo.style.fontStyle = 'italic';
    } else {
        nuevoParrafo.style.fontStyle = 'normal';
    }

    if (formato === 'subrayado') {
        nuevoParrafo.style.textDecoration = 'underline';
    } else {
        nuevoParrafo.style.textDecoration = 'none';
    }

    if (formato === 'negrita') {
        nuevoParrafo.style.fontWeight = 'bold';
    } else {
        nuevoParrafo.style.fontWeight = 'normal';
    }

    if (tamaño) {
        nuevoParrafo.style.fontSize = tamaño + 'px';
    }

    contenidoDiv.appendChild(nuevoParrafo);
});

limpiarButton.addEventListener('click', function() {
    contenidoDiv.innerHTML = '';
});
