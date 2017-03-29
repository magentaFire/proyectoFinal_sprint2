//SIEMPRE HAGO UN DESMADRE!!!!!!!!!!!!!!! D:

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
  document.getElementById("nombreNuevaLista").value = "";
  arregloListas.push(nuevaLista);
}

//Constructor de Lista
function Lista(nombre){
  this.nombre = nombre;
  this.crearNuevaLista = function(){
    var nuevoElemento = document.createElement("div");
    var listaContenedora = document.getElementById("contenedorListas");
    nuevoElemento.innerHTML = this.nombre +
                              "   <button type='button' onclick='arregloListas[arregloListas.length - 1].borrarLista()'>borrar lista</button>" +
                              "<p style='padding:5px 15px 15px'>" +
                              "<input type='text'>" +
                              " <button type='button' onclick='arregloListas[arregloListas.length-1].nuevaTarea()'>nueva tarea</button>" +
                              "</p>";
    listaContenedora.appendChild(nuevoElemento);
  };
  this.nuevaListaOrdenada = document.createElement("ol");
  this.nuevaTarea = function(){
    //var nuevaListaOrdenada = document.createElement("ol");
    var nuevoElementoOL = document.createElement("li");
    var contenedorElementos = document.getElementById("contenedorListas").lastChild.lastChild;
    contenedorElementos.appendChild(this.nuevaListaOrdenada);
    nuevoElementoOL.innerText = document.getElementById("contenedorListas").lastChild.lastChild.firstChild.value; //YA SÉ!!!: ES HORRIBLE!!!... pero funciona.... :P
    contenedorElementos.appendChild(nuevoElementoOL);
  };
  this.borrarLista = function(){
    document.getElementById("contenedorListas").removeChild(document.getElementById("contenedorListas").firstChild);
    console.log("holi");
  };
}
