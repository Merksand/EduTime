document.addEventListener("DOMContentLoaded", () => {
    const profesores = [
        { nombre: 'Juan Pérez', carrera: 'Mecánica Industrial', fecha: '2024-04-18' },
        { nombre: 'María López', carrera: 'Mecánica Automotriz', fecha: '2024-04-18' },
        // Agrega más objetos para representar a otros profesores
    ];

    const btnFiltrar = document.getElementById('btn-filtrar');
    btnFiltrar.addEventListener('click', () => {
        const materiaSeleccionada = document.getElementById('materia').value;
        const fechaSeleccionada = document.getElementById('fecha').value;
        
        const profesoresFiltrados = profesores.filter(profesor => {
            return (materiaSeleccionada === '' || profesor.carrera === materiaSeleccionada) &&
                   (fechaSeleccionada === '' || profesor.fecha === fechaSeleccionada);
        });

        mostrarProfesores(profesoresFiltrados);
    });

    function mostrarProfesores(profesores) {
        const tablaProfesores = document.getElementById('tabla-profesores');
        tablaProfesores.innerHTML = '';  

        profesores.forEach(profesor => {
            const fila = document.createElement('div');
            fila.classList.add('fila-profesor');
            fila.innerHTML = `
                <span>${profesor.nombre}</span>
                <span>${profesor.carrera}</span>
                <span>${profesor.fecha}</span>
            `;
            tablaProfesores.appendChild(fila);
        });
    }

    mostrarProfesores(profesores);
});