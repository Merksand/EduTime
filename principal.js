document.addEventListener('DOMContentLoaded', function() {
    ejecutarScript();
});

function ejecutarScript() {
  
const filtroPrincipal = [
    { nombre: 'Juan', apellido: 'Pérez', materia: 'Mecánica Industrial', aula: 'Aula 101', horario: ['Lunes: 8:00 - 10:00', 'Miércoles: 10:00 - 12:00'] },
    { nombre: 'María', apellido: 'González', materia: 'Mecánica Automotriz', aula: 'Aula 102', horario: ['Martes: 9:00 - 11:00', 'Jueves: 11:00 - 13:00'] },
    { nombre: 'Carlos', apellido: 'Martínez', materia: 'Electrónica', aula: 'Aula 103', horario: ['Lunes: 10:00 - 12:00', 'Miércoles: 12:00 - 14:00'] },
    { nombre: 'Laura', apellido: 'López', materia: 'Electricidad Industrial', aula: 'Aula 104', horario: ['Martes: 11:00 - 13:00', 'Jueves: 13:00 - 15:00'] },
    { nombre: 'Pedro', apellido: 'Hernández', materia: 'Construcción Civil', aula: 'Aula 105', horario: ['Lunes: 14:00 - 16:00', 'Miércoles: 16:00 - 18:00'] },
    { nombre: 'Ana', apellido: 'Díaz', materia: 'Química Industrial', aula: 'Aula 106', horario: ['Martes: 14:00 - 16:00', 'Jueves: 16:00 - 18:00'] },
    { nombre: 'Diego', apellido: 'Pérez', materia: 'Contaduría General', aula: 'Aula 107', horario: ['Lunes: 16:00 - 18:00', 'Miércoles: 18:00 - 20:00'] },
    { nombre: 'Sofía', apellido: 'Gutiérrez', materia: 'Sistemas Informáticos', aula: 'Aula 108', horario: ['Martes: 16:00 - 18:00', 'Jueves: 18:00 - 20:00'] },
    { nombre: 'Luis', apellido: 'Rodríguez', materia: 'Mecánica Industrial', aula: 'Aula 109', horario: ['Miércoles: 8:00 - 10:00', 'Viernes: 10:00 - 12:00'] },
    { nombre: 'Elena', apellido: 'Martín', materia: 'Mecánica Automotriz', aula: 'Aula 110', horario: ['Jueves: 9:00 - 11:00', 'Viernes: 11:00 - 13:00'] },
    { nombre: 'José', apellido: 'Sánchez', materia: 'Electrónica', aula: 'Aula 111', horario: ['Miércoles: 10:00 - 12:00', 'Viernes: 12:00 - 14:00'] },
    { nombre: 'Ana', apellido: 'Romero', materia: 'Electricidad Industrial', aula: 'Aula 112', horario: ['Jueves: 11:00 - 13:00', 'Viernes: 13:00 - 15:00'] },
    { nombre: 'Miguel', apellido: 'Pérez', materia: 'Construcción Civil', aula: 'Aula 113', horario: ['Miércoles: 14:00 - 16:00', 'Viernes: 16:00 - 18:00'] },
    { nombre: 'Carla', apellido: 'Gómez', materia: 'Química Industrial', aula: 'Aula 114', horario: ['Jueves: 14:00 - 16:00', 'Viernes: 16:00 - 18:00'] },
    { nombre: 'Fernando', apellido: 'Hernández', materia: 'Contaduría General', aula: 'Aula 115', horario: ['Miércoles: 16:00 - 18:00', 'Viernes: 18:00 - 20:00'] },
    { nombre: 'Lucía', apellido: 'Torres', materia: 'Sistemas Informáticos', aula: 'Aula 116', horario: ['Jueves: 16:00 - 18:00', 'Viernes: 18:00 - 20:00'] },
    { nombre: 'Daniel', apellido: 'Díaz', materia: 'Mecánica Industrial', aula: 'Aula 117', horario: ['Viernes: 8:00 - 10:00', 'Sábado: 10:00 - 12:00'] },
    { nombre: 'Paula', apellido: 'Martínez', materia: 'Mecánica Automotriz', aula: 'Aula 118', horario: ['Sábado: 9:00 - 11:00', 'Domingo: 11:00 - 13:00'] },
    { nombre: 'Javier', apellido: 'López', materia: 'Electrónica', aula: 'Aula 119', horario: ['Viernes: 10:00 - 12:00', 'Sábado: 12:00 - 14:00'] },
    { nombre: 'Carmen', apellido: 'González', materia: 'Electricidad Industrial', aula: 'Aula 120', horario: ['Sábado: 11:00 - 13:00', 'Domingo: 13:00 - 15:00'] },
    { nombre: 'Pablo', apellido: 'Sánchez', materia: 'Construcción Civil', aula: 'Aula 121', horario: ['Viernes: 14:00 - 16:00', 'Sábado: 16:00 - 18:00'] },
    { nombre: 'Rosa', apellido: 'Romero', materia: 'Química Industrial', aula: 'Aula 122', horario: ['Sábado: 14:00 - 16:00', 'Domingo: 16:00 - 18:00'] },
    { nombre: 'Alejandro', apellido: 'Pérez', materia: 'Contaduría General', aula: 'Aula 123', horario: ['Viernes: 16:00 - 18:00', 'Sábado: 18:00 - 20:00'] },
    { nombre: 'Eva', apellido: 'Gómez', materia: 'Sistemas Informáticos', aula: 'Aula 124', horario: ['Sábado: 16:00 - 18:00', 'Domingo: 18:00 - 20:00'] },
    { nombre: 'Roberto', apellido: 'Hernández', materia: 'Mecánica Industrial', aula: 'Aula 125', horario: ['Domingo: 8:00 - 10:00', 'Lunes: 10:00 - 12:00'] },
    { nombre: 'Inés', apellido: 'Torres', materia: 'Mecánica Automotriz', aula: 'Aula 126', horario: ['Domingo: 9:00 - 11:00', 'Lunes: 11:00 - 13:00'] },
    { nombre: 'Santiago', apellido: 'Díaz', materia: 'Electrónica', aula: 'Aula 127', horario: ['Domingo: 10:00 - 12:00', 'Lunes: 12:00 - 14:00'] },
    { nombre: 'Marina', apellido: 'Martínez', materia: 'Electricidad Industrial', aula: 'Aula 128', horario: ['Domingo: 11:00 - 13:00', 'Lunes: 13:00 - 15:00'] },
    { nombre: 'César', apellido: 'González', materia: 'Construcción Civil', aula: 'Aula 129', horario: ['Domingo: 14:00 - 16:00', 'Lunes: 16:00 - 18:00'] },
    { nombre: 'Alba', apellido: 'Romero', materia: 'Química Industrial', aula: 'Aula 130', horario: ['Domingo: 14:00 - 16:00', 'Lunes: 16:00 - 18:00'] },
    { nombre: 'Raúl', apellido: 'Pérez', materia: 'Contaduría General', aula: 'Aula 131', horario: ['Domingo: 16:00 - 18:00', 'Lunes: 18:00 - 20:00'] },
    { nombre: 'Marta', apellido: 'Gómez', materia: 'Sistemas Informáticos', aula: 'Aula 132', horario: ['Domingo: 16:00 - 18:00', 'Lunes: 18:00 - 20:00'] },
    { nombre: 'Luis', apellido: 'Martínez', materia: 'Electrónica', aula: 'Aula 133', horario: ['Martes: 8:00 - 10:00', 'Jueves: 10:00 - 12:00'] },
    { nombre: 'Laura', apellido: 'Fernández', materia: 'Construcción Civil', aula: 'Aula 134', horario: ['Lunes: 10:00 - 12:00', 'Miércoles: 12:00 - 14:00'] },
    { nombre: 'Carlos', apellido: 'Sánchez', materia: 'Química Industrial', aula: 'Aula 135', horario: ['Martes: 11:00 - 13:00', 'Jueves: 13:00 - 15:00'] },
    { nombre: 'Ana', apellido: 'López', materia: 'Mecánica Industrial', aula: 'Aula 136', horario: ['Lunes: 14:00 - 16:00', 'Miércoles: 16:00 - 18:00'] },
    { nombre: 'Pedro', apellido: 'Martín', materia: 'Mecánica Automotriz', aula: 'Aula 137', horario: ['Martes: 14:00 - 16:00', 'Jueves: 16:00 - 18:00'] },
    { nombre: 'María', apellido: 'Rodríguez', materia: 'Electricidad Industrial', aula: 'Aula 138', horario: ['Lunes: 16:00 - 18:00', 'Miércoles: 18:00 - 20:00'] },
    { nombre: 'David', apellido: 'Hernández', materia: 'Contaduría General', aula: 'Aula 139', horario: ['Martes: 16:00 - 18:00', 'Jueves: 18:00 - 20:00'] },
    { nombre: 'Sofía', apellido: 'García', materia: 'Sistemas Informáticos', aula: 'Aula 140', horario: ['Lunes: 8:00 - 10:00', 'Miércoles: 10:00 - 12:00'] },
    { nombre: 'Pablo', apellido: 'Romero', materia: 'Electrónica', aula: 'Aula 141', horario: ['Martes: 9:00 - 11:00', 'Jueves: 11:00 - 13:00'] },
    { nombre: 'Elena', apellido: 'Martínez', materia: 'Construcción Civil', aula: 'Aula 142', horario: ['Lunes: 10:00 - 12:00', 'Miércoles: 12:00 - 14:00'] },
    { nombre: 'Lucas', apellido: 'Gómez', materia: 'Química Industrial', aula: 'Aula 143', horario: ['Martes: 11:00 - 13:00', 'Jueves: 13:00 - 15:00'] },
    { nombre: 'Ana', apellido: 'Pérez', materia: 'Mecánica Industrial', aula: 'Aula 144', horario: ['Lunes: 14:00 - 16:00', 'Miércoles: 16:00 - 18:00'] },
    { nombre: 'Diego', apellido: 'López', materia: 'Mecánica Automotriz', aula: 'Aula 145', horario: ['Martes: 14:00 - 16:00', 'Jueves: 16:00 - 18:00'] },
    { nombre: 'María', apellido: 'González', materia: 'Electricidad Industrial', aula: 'Aula 146', horario: ['Lunes: 16:00 - 18:00', 'Miércoles: 18:00 - 20:00'] },
    { nombre: 'Marta', apellido: 'Gómez', materia: 'Química', aula: 'Aula 201', horario: ['Lunes: 8:00 - 10:00', 'Miércoles: 10:00 - 12:00'] },
    { nombre: 'Santiago', apellido: 'López', materia: 'Química', aula: 'Aula 202', horario: ['Martes: 9:00 - 11:00', 'Jueves: 11:00 - 13:00'] },
    { nombre: 'Laura', apellido: 'Martínez', materia: 'Química', aula: 'Aula 203', horario: ['Lunes: 10:00 - 12:00', 'Miércoles: 12:00 - 14:00'] },
    { nombre: 'Carlos', apellido: 'González', materia: 'Química', aula: 'Aula 204', horario: ['Martes: 11:00 - 13:00', 'Jueves: 13:00 - 15:00'] },
    { nombre: 'Ana', apellido: 'Fernández', materia: 'Química', aula: 'Aula 205', horario: ['Lunes: 14:00 - 16:00', 'Miércoles: 16:00 - 18:00'] },
    { nombre: 'Diego', apellido: 'Sánchez', materia: 'Química', aula: 'Aula 206', horario: ['Martes: 14:00 - 16:00', 'Jueves: 16:00 - 18:00'] },
    { nombre: 'Sofía', apellido: 'Hernández', materia: 'Química', aula: 'Aula 207', horario: ['Lunes: 16:00 - 18:00', 'Miércoles: 18:00 - 20:00'] },
    { nombre: 'Luis', apellido: 'Martínez', materia: 'Química', aula: 'Aula 208', horario: ['Martes: 16:00 - 18:00', 'Jueves: 18:00 - 20:00'] },
    { nombre: 'Elena', apellido: 'Romero', materia: 'Química', aula: 'Aula 209', horario: ['Miércoles: 8:00 - 10:00', 'Viernes: 10:00 - 12:00'] },
    { nombre: 'José', apellido: 'García', materia: 'Química', aula: 'Aula 210', horario: ['Jueves: 9:00 - 11:00', 'Viernes: 11:00 - 13:00'] },
    { nombre: 'Ana', apellido: 'Gómez', materia: 'Química', aula: 'Aula 211', horario: ['Miércoles: 10:00 - 12:00', 'Viernes: 12:00 - 14:00'] },
    { nombre: 'Miguel', apellido: 'Martínez', materia: 'Química', aula: 'Aula 212', horario: ['Jueves: 11:00 - 13:00', 'Viernes: 13:00 - 15:00'] },
    { nombre: 'Carla', apellido: 'Gutiérrez', materia: 'Química', aula: 'Aula 213', horario: ['Miércoles: 14:00 - 16:00', 'Viernes: 16:00 - 18:00'] },
    { nombre: 'Fernando', apellido: 'López', materia: 'Química', aula: 'Aula 214', horario: ['Jueves: 14:00 - 16:00', 'Viernes: 16:00 - 18:00'] },
    { nombre: 'Lucía', apellido: 'Sánchez', materia: 'Química', aula: 'Aula 215', horario: ['Miércoles: 16:00 - 18:00', 'Viernes: 18:00 - 20:00'] }
];

let btn = document.querySelector(".btn");

if (btn) { 
  btn.addEventListener("click", () => {
      const materiaSeleccionada = document.getElementById("materia").value;
      const fechaSeleccionada = document.getElementById("fecha").value;
  
      console.log(materiaSeleccionada, fechaSeleccionada);
      const materiaFiltradas = filtroPrincipal.filter((materia) => {
        if (materiaSeleccionada === "Todas") {
          return true; // Mostrar todos los profesores
        } else {
          return materia.materia === materiaSeleccionada;
        }
      });
      console.log(materiaFiltradas);
  
      mostrarProfesores(materiaFiltradas);
    });
    function mostrarProfesores(materiaFiltradas) {
      const tablaProfesores = document.getElementById("tabla-profesores");
      
      const lista = document.createElement('li')
      // lista.innerHTML=44
      // listaDocentes.appendChild(lista)
      tablaProfesores.innerHTML = ""; // Limpiar la tabla antes de agregar los nuevos resultados
      materiaFiltradas.forEach((profesor) => {
        const fila = document.createElement("div");
        fila.classList.add("fila-profesor");
        fila.innerHTML = `
        <span> ${`${profesor.nombre} ${profesor.apellido}`}</span>
        <span> ${profesor.materia}</span>
        <span> ${profesor.aula}</span>
        <span> ${profesor.horario}</span>
    `;
    
        tablaProfesores.appendChild(fila);
      });
      // materiaFiltradas.forEach(profesor => {
      //   const fila = document.createElement('div');
      //   fila.classList.add('fila-profesor');
      
      //   // Crear subelementos para cada categoría de información
      //   const nombre = document.createElement('span');
      //   nombre.innerHTML = `${profesor.nombre}`;
      //   const materia = document.createElement('span');
      //   materia.innerHTML = `${profesor.materia}`;
      //   const horario = document.createElement('span');
      //   horario.innerHTML = `${profesor.horario}`;
      //   const aula = document.createElement('span');
      //   aula.innerHTML = `${profesor.aula}`;
      
      //   // Agregar los subelementos a la fila
      //   fila.appendChild(nombre);
      //   fila.appendChild(materia);
      //   fila.appendChild(aula);
      //   fila.appendChild(horario);
      
      //   tablaProfesores.appendChild(fila);
      // });
    }
} else{
  console.log("No hay boton ");
}
}


