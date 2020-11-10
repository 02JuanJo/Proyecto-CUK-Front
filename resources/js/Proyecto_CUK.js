var debug = false;
var BackEnd = "https://proyecto2-cuk.herokuapp.com/"

if (debug) {
    BackEnd = "http://127.0.0.1:5000/"
}

///////////////////////////////////////////////// Inicializar pantallas y vistas

var ModalInicioSesion = document.getElementById('ModalInicioSesion');
var ModalRegistroUsuario = document.getElementById('ModalRegistroUsuario');
var ModalAgregarReceta = document.getElementById('ModalAgregarReceta');
var ModalRecuperar = document.getElementById('ModalRecuperar');
var ModalTablaUsuarios = document.getElementById('ModalTablaUsuarios');
var ModalTablaRecetas = document.getElementById('ModalTablaRecetas');
var ModalModReceta = document.getElementById('ModalModReceta');
var ModalBuscarAdmin = document.getElementById('ModalBuscarAdmin');
var ModalEliminarAdmin = document.getElementById('ModalEliminarAdmin');
var ModalRecetaCompleta = document.getElementById('ModalRecetaCompleta');
var ModalPrueba = document.getElementById('ModalPrueba');

var botonReaccionar = document.getElementById('botonReaccionar');
var ingresarComentario = document.getElementById('ingresarComentario');

var botonInicio = document.getElementById('BotonInicioSesion');
var BotonCerrar = document.getElementById('BotonCerrarSesion');

var aggUsu = document.getElementById('AgregarUsuarioAdmin');
var listaUsu = document.getElementById('listaUsuarios');
var listaRec = document.getElementById('listaRecetas');
var aggRec = document.getElementById('Agregareceta');
var AdminControl = false;
var EstadoModificaciónUsuario = false;
var EstadoModificaciónReceta = false;
var contador = 1;
var ListadoDeRecetas, ListadoDeUsuarios;

////////////////////////////////////////////////////////////// Funciones botones

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

function login() {
    ModalInicioSesion.style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
}

function Registrarse() {
    ModalInicioSesion.style.display = "none";
    ModalRegistroUsuario.style.display = "block";
}

function Agregar() {
    ModalAgregarReceta.style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
}

function LostPSW() {
    ModalInicioSesion.style.display = "none";
    ModalRecuperar.style.display = "block";
}

function Modificar() {
    ModalModificarUsuario.style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
}

function AgregarUsuarioAdmin() {
    ModalRegistroUsuarioAdmin.style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
}

function listaUsuarios() {
    ModalTablaUsuarios.style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
}

function listaRecetas() {
    ModalTablaRecetas.style.display = "block";
    document.getElementById("mySidebar").style.display = "none";
}

function cerrarLogin() {
  privilegiosNoLogueado()
  console.log("Se salió");

}

function ModificarReceta(){
  ModalBuscarAdmin.style.display = "block";
  //ModalTablaRecetas.style.display = "block";
}

function EliminarReceta(){
  ModalEliminarAdmin.style.display = "block";
  //ModalTablaRecetas.style.display = "block";
}

function privilegiosdeAdmin() {
    botonInicio.style.display = "none";
    BotonCerrar.style.display = "block";
    ModalInicioSesion.style.display = "none";
    listaUsu.style.display = "block";
    listaRec.style.display = "block";
    aggRec.style.display = "block";
    IngresoAModificar.style.display = "block";
    aggUsu.style.display = "block";
    ingresarComentario.style.display = "block";
    AdminControl = true;
}

function privilegiosdeUsuario() {
    botonInicio.style.display = "none";
    BotonCerrar.style.display = "block";
    ModalInicioSesion.style.display = "none";
    aggRec.style.display = "block";
    IngresoAModificar.style.display = "block";
    ingresarComentario.style.display = "block";
}

function privilegiosNoLogueado(){
  botonInicio.style.display = "block"
  BotonCerrar.style.display = "none"
  ModalAgregarReceta.style.display = "none"
  listaUsu.style.display = "none";
  listaRec.style.display = "none";
  aggRec.style.display = "none";
  IngresoAModificar.style.display = "none";
  aggUsu.style.display = "none";
  ModalTablaUsuarios.style.display = "none";
  ModalModReceta.style.display = "none";
  ingresarComentario.style.display = "none";

 //TODO cambiar el botón comentar y reaccionar a none
  UsuarioLogeado = "No hay"
}

window.onclick = function(event) {
    if (event.target == ModalInicioSesion) {
        ModalInicioSesion.style.display = "none";
    }

    if (event.target == ModalRegistroUsuario) {
        ModalRegistroUsuario.style.display = "none";
        ModalInicioSesion.style.display = "block";
    }

    if (event.target == ModalRecuperar) {
        ModalRecuperar.style.display = "none";
        ModalInicioSesion.style.display = "block";
    }

    if (event.target == ModalAgregarReceta) {
        ModalAgregarReceta.style.display = "none";
    }

    if (event.target == ModalModificarUsuario) {
        ModalModificarUsuario.style.display = "none";
    }

    if (event.target == ModalBuscarAdmin) {
        ModalBuscarAdmin.style.display = "none";
    }

    if (event.target == ModalRegistroUsuarioAdmin) {
        ModalRegistroUsuarioAdmin.style.display = "none";
    }

    if (event.target == ModalTablaUsuarios) {
        ModalTablaUsuarios.style.display = "none";
    }

    if (event.target == ModalTablaRecetas) {
        ModalTablaRecetas.style.display = "none";
    }

    if (event.target == ModalModReceta) {
        ModalModReceta.style.display = "none";
    }

    if (event.target == ModalEliminarAdmin) {
        ModalEliminarAdmin.style.display = "none";
    }

    if (event.target == ModalRecetaCompleta) {
        ModalRecetaCompleta.style.display = "none";
    }

    if (event.target == ModalPrueba) {
        ModalPrueba.style.display = "none";
    }





}

////////////////////////////////////////////////////////////// Valores Iniciales
privilegiosNoLogueado()
UsuarioLogeado = "";
NombreLogeado = "";
ApellidoLogeado = "";
PswLogeada = "";
TipoUsuarioLogeado = "";

function sesionIniciada(){
  var sesionIniciada = {
      "url": BackEnd + "sesionIniciada/",
      "method": "POST",
      "timeout": 0,
      "headers": {
          "Content-Type": "application/json"
      },
      "data": "{}",
  };

  $.ajax(sesionIniciada).done(function(response) {

        console.log(response.usuario);
      if(response.usuario != "No hay"){
        ApellidoLogeado = response.Datos.apellido
        NombreLogeado = response.Datos.nombre
        UsuarioLogeado = response.Datos.usuario
        PswLogeada = response.Datos.psw
        TipoUsuarioLogeado = response.Datos.tipo

        console.log(ApellidoLogeado);
        console.log(NombreLogeado);
        console.log(UsuarioLogeado);
        console.log(PswLogeada);
        console.log(TipoUsuarioLogeado);

        if (response.Datos.tipo == "Administrador") {
          console.log("es admin");
            privilegiosdeAdmin();
        } else {
          console.log("normalin");
            privilegiosdeUsuario();
        }
      }else{
        console.log("no hay sesion");
        privilegiosNoLogueado()
      }
      });
}

////////////////////////////////////////////////////////////////Carga documento



$(document).ready(function () {
obtenerListaRecetas()
obtenerListaUsuarios()
sesionIniciada()
})

/////////////////////////////////////////////////////// Devolución recetas
function obtenerListaRecetas(){
 var settings = {
     "url": BackEnd + "publicarRecetas/",
     "method": "POST",
     "timeout": 0,
     "headers": {
         "Content-Type": "application/json"
     },
     "data": JSON.stringify(),
 };

 $.ajax(settings).done(function(response) {

 ListadoDeRecetas = response.Listado
 var disenoTabla = $("#TablaRecetasHead").html();
 var html = Mustache.render(disenoTabla);
 $("#TablaDatosRecetas").append(html)
 recetasRegistradas()

 });
}

function recetasRegistradas() {

    for (var receta in ListadoDeRecetas) {
        if (!ListadoDeRecetas.hasOwnProperty(receta)) {
            continue
        }

        console.log(ListadoDeRecetas[receta])

        var data = {
            titulo: ListadoDeRecetas[receta].titulo,
            imagen: ListadoDeRecetas[receta].imagen,
            resumen: ListadoDeRecetas[receta].resumen,
            tiempo: ListadoDeRecetas[receta].tiempo,
            autor: ListadoDeRecetas[receta].autor
        }


        var dataTabla = {
            titulo: ListadoDeRecetas[receta].titulo,
            autor: ListadoDeRecetas[receta].autor,
            tiempo: ListadoDeRecetas[receta].tiempo,

        }

        AgregarNuevaReceta(data)
        AgregarRecetasALaTabla(dataTabla)
    }
}

function AgregarNuevaReceta(data) {
    var disenoPublicacion = $("#DiseñoReceta").html();
    var html = Mustache.render(disenoPublicacion, data);

    if ($(".fila-recetas").length == 0) {
      $('<div class="container fila-recetas"></div>').insertAfter(  $("#inicioFilasRecetas").last())
    }

    var hijos = $(".fila-recetas").last().children().length

    if (hijos < 3) {
      $(".fila-recetas").last().append(html)
    }
    else {
      //contenedor nuevo, luego agregar
      //<div class="container fila-recetas"></div>
      $('<div class="container fila-recetas"></div>').insertAfter(  $(".fila-recetas").last())

      //Ahora el ulltimo, es el que acabamos de ingresar
      $(".fila-recetas").last().append(html)

    }



    $("#SitioDeRecetas").append(html)
}

function AgregarRecetasALaTabla(dataTabla) {
  var disenoTabla = $("#TablaRecetas").html();
  var html = Mustache.render(disenoTabla, dataTabla);
  $("#TablaDatosRecetas").append(html)
}

function limpiarTablaRecetas() {
  $("#TablaDatosRecetas").empty();
}

function limpiarAreaRecetas() {
    $(".fila-recetas").remove();
}

/////////////////////////////////////////////////////// Usuarios Registrados
function obtenerListaUsuarios(){
  var settings = {
      "url": BackEnd + "usuariosRegistrados/",
      "method": "POST",
      "timeout": 0,
      "headers": {
          "Content-Type": "application/json"
      },
      "data": "{}",
  };

  $.ajax(settings).done(function(response) {

  ListadoDeUsuarios = response.Listado
  var disenoTabla = $("#TablaUsuariosHead").html();
  var html = Mustache.render(disenoTabla);
  console.log(html);
  $("#TablaDatosUsuario").append(html)
  usuariosRegistrados()
  });
}

function usuariosRegistrados() {

    for (var usuario in ListadoDeUsuarios) { if (!ListadoDeUsuarios.hasOwnProperty(usuario)) {continue}
        console.log(ListadoDeUsuarios[usuario])

        var data = {
            nombre: ListadoDeUsuarios[usuario].nombre,
            apellido: ListadoDeUsuarios[usuario].apellido,
            nombreUsuario: ListadoDeUsuarios[usuario].usuario,
            tipo: ListadoDeUsuarios[usuario].tipo
        }
        console.log("La data es:");
        console.log(data);
        AgregarUsuarioALaTabla(data)
    }
}

function AgregarUsuarioALaTabla(data) {
  var disenoTabla = $("#TablaUsuarios").html();
  var html = Mustache.render(disenoTabla, data);
  console.log("Renderizadso:");
  console.log(html);
  $("#TablaDatosUsuario").append(html)
}

function limpiarTablaUsuarios() {
  $("#TablaDatosUsuario").empty();
}
////////////////////////////////////////////////////////////////Inicio de Sesión

$("#InicioSesion").click(function(e) {
    e.preventDefault();
    var usuario = $("#usuario").val();
    var psw = $("#psw").val();

    let data = {
        nombreUsuario: usuario,
        psw: psw
    }

    var settings = {
        "url": BackEnd + "login/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

      console.log("Será admitido?");
      if (response.Tipo == "Admitido") {

        console.log("Si fue admitido");
        ModalInicioSesion.style.display = "none";
        location.reload()
        sesionIniciada()
      }
        window.alert(response.Message)
        $("input:text").val("");
        $("input:password").val("");
        return;
    });
})

///////////////////////////////////////////////////////////////////////Registrar

$("#Registrar").click(function(e) {
    e.preventDefault();
    var nombre = $("#nombreNew").val();
    var apellido = $("#apellidosNew").val();
    var usuario = $("#usuarioNew").val();
    var psw = $("#pswNew").val();
    var pswConfirm = $("#pswConfirmNew").val();
    var tipo = "Cliente"
    console.log(usuario)

    if ((nombre === "") || (apellido === "") || (usuario === "") || (psw === "") || (pswConfirm === "")) {
        window.alert("No se llenó alguno de los campos")
        return;
    }

    if (!(psw == pswConfirm)) {
        window.alert("Las contraseñas no coinciden")
        $("#pswNew").val("");
        $("#pswConfirmNew").val("");
        return;
    }

    let data = {
        nombre: nombre,
        apellido: apellido,
        nombreUsuario: usuario,
        psw: psw,
        tipo: tipo
    }
    var settings = {
        "url": BackEnd + "registrarse/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

        if (response.Tipo == "Admitido") {
            UsuarioRegistrado = data.nombreUsuario;

            console.log(UsuarioLogeado)
        }

        if (response.Tipo == "Letra Inicial") {
            window.alert(response.Message)
            $("#usuarioNew").val("");
            return;
        }

        window.alert(response.Message)
        ModalRegistroUsuario.style.display = "none";
        $("input:text").val("");
        $("input:password").val("");
        location.reload()
        return;

    });

})

/////////////////////////////////////////////////////////////////////// Lost PSW

$("#Recuperar").click(function(e) {
    e.preventDefault();
    var nombre = $("#usuarioLOST").val();
    console.log(nombre)
    let data = {
        nombreUsuario: nombre
    }

    var settings = {
        "url": BackEnd + "lostpsw/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {
        ModalRecuperar.style.display = "none";
        window.alert(response.Message)
        $("input:text").val("");
        return;
    });

})

/////////////////////////////////////////////// Ingreso al Modal Modificar Admin

$("#IngresoAModificar").click(function(e) {
    e.preventDefault();

    if (!EstadoModificaciónUsuario) {
        $("#nombreMod").val(NombreLogeado);
        $("#apellidosMod").val(ApellidoLogeado);
        $("#usuarioMod").val(UsuarioLogeado);
        $("#pswMod").val(PswLogeada);
        ModalModificarUsuario.style.display = "block";
    } else {
        $("#nombreMod").val(nombrexMod);
        $("#apellidosMod").val(apellidoxMod);
        $("#usuarioMod").val(usuarioxMod);
        $("#pswMod").val(pswxMod);
        ModalModificarUsuario.style.display = "block";
    }

})

//////////////////////////////////////////////////////////////// Modificar Admin

$("#Buscar2Modificar").click(function(e) {
    e.preventDefault();
    var titulo2ModAdmin = $("#tituloModAdmin").val();
    var autor2ModAdmin = $("#autorModAdmin").val();

    if ((titulo2ModAdmin === "")||(autor2ModAdmin === "")) {
        window.alert("No se llenó el campo especificado")
        return;
    }

    let data = {
        titulo: titulo2ModAdmin,
        autor: autor2ModAdmin
    }

    var settings = {
        "url": BackEnd + "encontrarReceta/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

        if (response.Tipo == "Encontrado") {
            tituloPorModificar = response.Datos.titulo
            autorPorModificar = response.Datos.autor

            autorEncontrado = response.Datos.autor
            tituloEncontrado = response.Datos.titulo
            resumenEncontrado = response.Datos.resumen
            ingredientesEncontrados = response.Datos.ingredientes
            procedimientoEncontrado = response.Datos.procedimiento
            tiempoEncontrado = response.Datos.tiempo
            imagenEncontrada  = response.Datos.imagen
            reaccionesEncontradas = response.Datos.reacciones
            comentariosEncontrados =  response.Datos.reacciones

            $("#tituloMod").val(tituloEncontrado);
            $("#autorMod").val(autorEncontrado);
            $("#resumenMod").val(resumenEncontrado);
            $("#ingredientesMod").val(ingredientesEncontrados);
            $("#procedimientoMod").val(procedimientoEncontrado);
            $("#tiempoMod").val(tiempoEncontrado);
            $("#imgMod").val(imagenEncontrada);

            ModalModReceta.style.display = "Block";
            ModalBuscarAdmin.style.display = "none";
        }

        window.alert(response.Message)
        $("#tituloModAdmin").val("");
        $("#autorModAdmin").val("");
        return;

    });

})

///////////////////////////////////////////////////////////// Modificar Usuarios

$("#ModReceta").click(function(e) {
    e.preventDefault();
    tituloxMod = $("#tituloMod").val();
    autorxMod = $("#autorMod").val();
    resumenxMod = $("#resumenMod").val();
    ingredientesxMod = $("#ingredientesMod").val();
    procedimientoxMod = $("#procedimientoMod").val();
    tiempoxMod = $("#tiempoMod").val();
    imgxMod = $("#imgMod").val();

    if ((autorxMod === "") || (tituloxMod === "") ||
        (resumenxMod === "") || (ingredientesxMod === "") ||
        (procedimientoxMod === "") || (tiempoxMod === "") ||
        (imgxMod === "")) {
        window.alert("No se llenó alguno de los campos")
        return;
    }

    let data = {
        tituloPorModificar: tituloPorModificar,
        autorPorModificar: autorPorModificar,
        autor: autorxMod,
        titulo: tituloxMod,
        resumen: resumenxMod,
        ingredientes: ingredientesxMod,
        procedimiento: procedimientoxMod,
        tiempo: tiempoxMod,
        imagen: imgxMod
    }

    console.log(data)

    var settings = {
        "url": BackEnd + "modificarReceta/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

      console.log(response);

      if (response.Tipo == "Modificado") {
          console.log("Se modificó nítido")
          EstadoModificaciónReceta = true;
          ModalModReceta.style.display = "none";
          limpiarAreaRecetas()
          limpiarTablaRecetas()
          obtenerListaRecetas()
      }
      window.alert(response.Message)
      $("input:text").val("");
      return;
    });
})

///////////////////////////////////////////////////////////// Modificar Usuarios

$("#Modificar").click(function(e) {
    e.preventDefault();
    nombrexMod = $("#nombreMod").val();
    apellidoxMod = $("#apellidosMod").val();
    usuarioxMod = $("#usuarioMod").val();
    pswxMod = $("#pswMod").val();

    if ((nombrexMod === "") || (apellidoxMod === "") || (usuarioxMod === "") || (pswxMod === "")) {
        window.alert("No se llenó alguno de los campos")
        return;
    }

    let data = {
        nombreUsuarioPorModificar: UsuarioLogeado,
        nombre: nombrexMod,
        apellido: apellidoxMod,
        nombreUsuario: usuarioxMod,
        psw: pswxMod
    }

    console.log(data)

    var settings = {
        "url": BackEnd + "modificarUsuario/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

      console.log(response);

      if (response.Tipo == "Modificado") {
          console.log("Se modificó nítido")
          EstadoModificaciónUsuario = true;
          ModalModificarUsuario.style.display = "none";
          limpiarTablaUsuarios()
          obtenerListaUsuarios()
      }
      window.alert(response.Message)
      $("input:text").val("");
      return;
    });
})

///////////////////////////////////////////////////////////// Modificar Usuarios

$("#Buscar2Eliminar").click(function(e) {
    e.preventDefault();
    var titulo2EliAdmin = $("#tituloEliAdmin").val();
    var autor2EliAdmin = $("#autorEliAdmin").val();

    if ((titulo2EliAdmin === "")||(autor2EliAdmin === "")) {
        window.alert("No se llenó el campo especificado")
        return;
    }

    let data = {
        titulo: titulo2EliAdmin,
        autor: autor2EliAdmin
    }

    var settings = {
        "url": BackEnd + "eliminarRecetas/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

        if (response.Message == "Eliminado") {
            limpiarAreaRecetas()
            limpiarTablaRecetas()
            obtenerListaRecetas()
            ModalEliminarAdmin.style.display = "none";
        }

        window.alert(response.Message)
        $("#tituloEliAdmin").val("");
        $("#autoreliAdmin").val("");
        return;

    });

})

////////////////////////////////////////////////////// Agregar Receta a la lista

$("#AggRecetaNueva").click(function(e) {
    e.preventDefault();

    var autor_nuevo = $("#autorNew").val();
    var titulo_nuevo = $("#tituloReceta").val();
    var resumen_nuevo = $("#resumenNew").val();
    var ingredientes_nuevos = $("#ingredientesNew").val();
    var procedimiento_nuevo = $("#procedimientoNew").val();
    var tiempo_nuevo = $("#tiempoNew").val();
    var imagen_nueva = $("#imgNew").val();

    console.log(titulo_nuevo)

    if ((autor_nuevo == "") || (titulo_nuevo == "") ||
        (resumen_nuevo == "") || (ingredientes_nuevos == "") ||
        (procedimiento_nuevo == "") || (tiempo_nuevo == "") ||
        (imagen_nueva == "")) {
        window.alert("No se llenó alguno de los campos")
        return;
    }

    let data = {
        autor: autor_nuevo,
        titulo: titulo_nuevo,
        resumen: resumen_nuevo,
        ingredientes: ingredientes_nuevos,
        procedimiento: procedimiento_nuevo,
        tiempo: tiempo_nuevo,
        imagen: imagen_nueva
    }
    console.log(contador)
    console.log(data)

    var settings = {
        "url": BackEnd + "agregarReceta/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

        window.alert(response.Message)
        ModalAgregarReceta.style.display = "none";
        $("input:text").val("");
        $("#resumenNew").val("");
        $("#ingredientesNew").val("");
        $("#procedimientoNew").val("");
        limpiarAreaRecetas()
        limpiarTablaRecetas()
        obtenerListaRecetas()
        //return;
    });
    contador++;
    console.log(contador)
})

/////////////////////////////////////////////////////// Agregar Usuario al Admin

$("#RegistrarUsuAdmin").click(function(e) {
    e.preventDefault();
    var nombre = $("#nombreNewAdmin").val();
    var apellido = $("#apellidosNewAdmin").val();
    var usuario = $("#usuarioNewAdmin").val();
    var psw = $("#pswNewAdmin").val();
    var pswConfirm = $("#pswConfirmNewAdmin").val();
    var tipo = $("#tipos").val();
    console.log(tipo)

    if ((nombre === "") || (apellido === "") || (usuario === "") || (psw === "") || (pswConfirm === "")) {
        window.alert("No se llenó alguno de los campos")
        return;
    }

    if (!(psw == pswConfirm)) {
        window.alert("Las contraseñas no coinciden")
        $("#pswNew").val("");
        $("#pswConfirmNew").val("");
        return;
    }

    let data = {
        nombre: nombre,
        apellido: apellido,
        nombreUsuario: usuario,
        psw: psw,
        tipo: tipo
    }
    var settings = {
        "url": BackEnd + "registrarUsuario/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {

        if (response.Tipo == "Admitido") {
            UsuarioRegistrado = data.nombreUsuario;
            AgregarUsuarioALaTabla(data)
        }

        if (response.Tipo == "Letra Inicial") {
            window.alert(response.Message)
            $("#usuarioNewAdmin").val("");
            return;
        }

        window.alert(response.Message)
        ModalRegistroUsuarioAdmin.style.display = "none";
        $("input:text").val("");
        $("input:password").val("");
        return;

    });

})

$(document).click(function(event){
  console.log($(event.target).attr("class"));

  if ($(event.target).attr("class").includes("botonVerReceta")) {
    var tituloReceta = $(event.target).prev().prev().prev().prev().prev()
    var autorReceta = $(event.target).prev().prev().prev()
    console.log(tituloReceta.text());
    console.log(autorReceta.text());

    let data = {
        titulo: tituloReceta.text(),
        autor: autorReceta.text()
    }

    var settings = {
        "url": BackEnd + "encontrarReceta/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {
      $("#areaComentarios").empty();
        if (response.Tipo == "Encontrado") {
            autorAMostrar = response.Datos.autor
            tituloAMostrar = response.Datos.titulo
            resumenAMostrar= response.Datos.resumen
            ingredientesAMostrar = response.Datos.ingredientes
            procedimientoAMostrar= response.Datos.procedimiento
            tiempoAMostrar = response.Datos.tiempo
            imagenAMostrar  = response.Datos.imagen
            reaccionesAMostrar = response.Datos.reacciones
            comentariosAMostrar =  response.Datos.comentarios

            $("#mostrarTitulo").text(tituloAMostrar);
            $("#mostrarAutor").text(autorAMostrar);
            $("#mostrarTiempo").text(tiempoAMostrar);
            $("#mostrarIngredientes").text(ingredientesAMostrar);
            $("#mostrarProcedimiento").text(procedimientoAMostrar);
            $("#mostrarImagen").attr("src",imagenAMostrar)
            $("#mostrarComentarios").text(comentariosAMostrar)

            console.log(comentariosAMostrar);

            for(var i = 0; i < comentariosAMostrar.length; i++){
              var data = {
                  autorComentario: comentariosAMostrar[i].autor,
                  contenido: comentariosAMostrar[i].contenido,
                  fecha: comentariosAMostrar[i].fecha
              }

              //
              var disenoTabla = $("#areaComentariosInfo").html();
              var html = Mustache.render(disenoTabla, data);
              $("#areaComentarios").append(html)

            }
            ModalPrueba.style.display = "block";
        return;
      }

    });

  }
})

$("#botonComentar").click(function(e) {

  contenido = $("#comentario").val();

  if(contenido == ""){
    window.alert("No se llenó alguno de los campos")
    return;
  }

    let data = {
        recetaAutor: autorAMostrar,
        recetaTitulo: tituloAMostrar,
        autorComentario: UsuarioLogeado,
        contenido: contenido
    }
    console.log(data)

    var settings = {
        "url": BackEnd + "agregarComentario/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };
    $.ajax(settings).done(function(response) {

        window.alert(response.Message)

        if(response.Tipo == "Listo"){

          console.log(response.Datos);
          console.log(response)

          let dataComentario = {
              autorComentario: UsuarioLogeado,
              fecha: response.Datos,
              contenido: contenido
          }

          var disenoTabla = $("#areaComentariosInfo").html();
          var html = Mustache.render(disenoTabla, dataComentario);
          $("#areaComentarios").append(html)
          //ModalPrueba.style.display = "none";
          $("input:text").val("");
        }

  });


})

$("#salirBuscarReceta").click(function(e) {
    location.reload()
})

$("#buscarReceta").click(function(e) {
    e.preventDefault();
    var tituloBusqueda = $("#search").val();


    if (tituloBusqueda == "") {
        window.alert("No se llenó el campo especificado")
        return;
    }

    let data = {
        titulo: tituloBusqueda
    }

    var settings = {
        "url": BackEnd + "buscarReceta/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
    };

    $.ajax(settings).done(function(response) {
    limpiarAreaRecetas()
    ListadoDeRecetasEncontradas = response.Listado
    console.log(ListadoDeRecetasEncontradas);
        if (response.Tipo == "Encontrado") {

          for (var receta in ListadoDeRecetasEncontradas) {
              if (!ListadoDeRecetasEncontradas.hasOwnProperty(receta)) {
                  continue
              }

              console.log(ListadoDeRecetasEncontradas[receta])

              var data = {
                  titulo: ListadoDeRecetasEncontradas[receta].titulo,
                  imagen: ListadoDeRecetasEncontradas[receta].imagen,
                  resumen: ListadoDeRecetasEncontradas[receta].resumen,
                  tiempo: ListadoDeRecetasEncontradas[receta].tiempo,
                  autor: ListadoDeRecetasEncontradas[receta].autor
              }
              AgregarNuevaReceta(data)

          }
        }

        $("#tituloEliAdmin").val("");
        $("#autoreliAdmin").val("");
        return;

    });

})

function generarReporteUsuarios(){
  $("#tablaImpresionUsuarios").html($("#TablaDatosUsuario").html())

  html2canvas(document.querySelector("#tablaImpresionUsuarios")).then(canvas =>{

    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p','mm','letter');

    pdf.text(10, 10, 'Reporte de Usuarios Registrados');
    pdf.text(10, 20, 'Juan José López Pérez // 201908075');
    pdf.text(10, 30, 'Proyecto C U K');
    pdf.addImage(imgData, 'JPEG', 2, 50);
    pdf.save("Registro_Usuarios.pdf");

  });
}

function generarReporteRecetas(){
  $("#tablaImpresionRecetas").html($("#TablaDatosRecetas").html())

  html2canvas(document.querySelector("#tablaImpresionRecetas")).then(canvas =>{

    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p','mm','letter');

    pdf.text(10, 10, 'Reporte de Recetas Registradas');
    pdf.text(10, 20, 'Juan José López Pérez // 201908075');
    pdf.text(10, 30, 'Proyecto C U K');
    pdf.addImage(imgData, 'JPEG', 2, 50);
    pdf.save("Registro_Recetas.pdf");

  });
}
