var empleados = [
    {nombre: "Ruth Molly Sepulveda Mejia",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Clínica Universitaria Bolivariana",
    correo:"ruth.sepulveda@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Luis Fernando Bohorquez Uribe",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Clínica Universitaria Bolivariana",
    correo:"luisf.bohorquez@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Catalina Martinez Betancur",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Clínica Universitaria Bolivariana",
    correo:"catalinam.martinez@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Silvia Elena Betancur Alvarez",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Clínica Universitaria Bolivariana",
    correo:"silviae.betancur@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Daniel David Usuga",
    cargo:"Técnico Administrativo en salud",
    ips:"Clínica Universitaria Bolivariana",
    correo:"daniel.usuga@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
    {nombre: "Vanessa Viana Sáenz",
    cargo:"Tecnólogo Administrativo en salud",
    ips:"Clínica Universitaria Bolivariana",
    correo:"vanessa.viana@upb.edu.co",
    contacto:"Tel 4455900 ext. 1608 - 1609 - 1611"
    },
];

// Me trae nombre de Empleados

var nombreEmpleados = empleados.map(function(empleado){
    return empleado.nombre;
});

// Me trae datos de cargo

var nombreCargo = empleados.map(function(empleado){
    return empleado.cargo
});

// Me trae datos e correo

var nombreCorreo = empleados.map(function(empleado){
    return empleado.correo
});

//Filtro me trae datos de objeto 

var empleadosFiltrados = empleados.filter(function(empleado){
    return empleado.nombre
});

// Me trae informacion de arrays

var encuentraEmpleados = empleados.find(function(empleado){
    return empleado.nombre === nombreEmpleados;
});

console.log(nombreEmpleados);
console.log(nombreCargo);
console.log(nombreCorreo);
console.log(empleadosFiltrados);

// Aqui van los datos del funcionario

var usuario1 ="Molly"
var usuario2 ="Fernando"
var usuario3 ="Catalina"
var usuario4 ="Silvia"
var usuario5 ="Daniel"
var usuario6 ="Vanessa"

function mostrarNombreUsuario(usuario){
    var Molly = nombreEmpleados[0];
    var Fernando = nombreEmpleados[1];
    var Catalina = nombreEmpleados[2];
    var Silvia = nombreEmpleados[3];
    var Daniel = nombreEmpleados[4];
    var Vanessa = nombreEmpleados[5];

    if(usuario === usuario1){
        return Molly
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Catalina
    };
    if(usuario === usuario4){
        return Silvia
    };
    if(usuario === usuario5){
        return Daniel
    };
    if(usuario === usuario6){
    return Vanessa
    };
};

function mostrarNombreCargo(usuario){
    var Molly = nombreCargo[0];
    var Fernando = nombreCargo[1];
    var Catalina = nombreCargo[2];
    var Silvia = nombreCargo[3];
    var Daniel = nombreCargo[4];
    var Vanessa = nombreCargo[5];

    if(usuario === usuario1){
        return Molly
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Catalina
    };
    if(usuario === usuario4){
        return Silvia
    };
    if(usuario === usuario5){
        return Daniel
    };
    if(usuario === usuario6){
    return Vanessa
    };
};

function mostrarNombreCorreo(usuario){
    var Molly = nombreCorreo[0];
    var Fernando = nombreCorreo[1];
    var Catalina = nombreCorreo[2];
    var Silvia = nombreCorreo[3];
    var Daniel = nombreCorreo[4];
    var Vanessa = nombreCorreo[5];

    if(usuario === usuario1){
        return Molly
    };
    if(usuario === usuario2){
        return Fernando
    };
    if(usuario === usuario3){
        return Catalina
    };
    if(usuario === usuario4){
        return Silvia
    };
    if(usuario === usuario5){
        return Daniel
    };
    if(usuario === usuario6){
    return Vanessa
    };
};

var motivo1 ="Cercania"
var motivo2 ="Disponibilidad"
var motivo3 ="Oportunidad"
var motivo4 ="Tope (ambulatorio)"
var motivo5 ="Tope (Hospitalario)"
var motivo6 ="Tramites"
var motivo7 ="Otra"

function mostrarMotivo(motivo){
    if(motivo === motivo1){
        return ", se expide carta, ya que paciente indica que gestionara servicio con institución cercana a su lugar de residencia."
    };
    if(motivo === motivo2){
        return ", se expide carta, ya que la institución no cuenta con el servicio."
    };
    if(motivo === motivo3){
        return ", se expide carta, ya que la institución no cuenta con disponibilidad de citas, paciente indica que gestionara servicio con otra institución."
    };
    if(motivo === motivo4){
        return "Paciente que supera tope de SOAT, se expide carta para gestión de servicios por parte de la EPS."
    };
    if(motivo === motivo5){
        return "Paciente el cual, durante la hospitalización y tratamiento quirúrgico, supero el tope establecido por el SOAT y requiere seguir la atención y/o excedentes en su EPS."
    };
    if(motivo === motivo6){
        return "Paciente solicita corte de cuenta para trámites legales, personales y/o administrativos."
    };
    if(motivo === motivo7){
        return ""
    };
};
