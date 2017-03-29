var arregloListas = [];

//función principal
function main(){
  crearObjeto();
  arregloListas[arregloListas.length - 1].crearNuevaLista();
}

//declaración de Funciones;
//función para crear nuevas Instancias
function crearObjeto(){
  var nombreLista = document.getElementById("nombreNuevaLista").value;
  var nuevaLista = new Lista(nombreLista, "lista");
  arregloListas.push(nuevaLista);
}

//Constructor de Lista
function Lista(nombre){
  this.nombre = nombre;
  this.crearNuevaLista = function(){
    var nuevoElemento = document.createElement("div");
    var listaContenedora = document.getElementById("contenedorListas");
    nuevoElemento.innerHTML = this.nombre +
                              "<p style='padding:5px 15px 15px'>" +
                              "<input type='text'>" +
                              "<input type='button' value='nueva tarea' onclick='nuevaTarea()'>" +
                              "</p>";
    listaContenedora.appendChild(nuevoElemento);
  };
  this.nuevaTarea = function(){
    
  };
}
