// Contenido del curso
// Conceptos basicos de React 
// Descargar e instalar Node.js
// JavaScript XML (JSX)
// Estructura basica de una aplicacion de React

// Proyectos
// 1. Clon de testimonios de freeCodeCamp
// 2. Contador de clocks
// 3. Calculadora
// 4. Aplicacion de tareas

// Seccion final
// Componentes de clase
// Adaptar los primeros dos proyectos con conponentes de clase.

// Que es React?
// React es una libreria de JavaScript de codigo abierto
// diseñada para crear interfaces de usuario.

// Libreria
// Conjunto de implementaciones o 
// subprogramas que podemos usar en nuestro codigo.

// Ventajas de React
// Facil de aprender y usar.
// Componentes reutilizables
// Crear aplicacoines dinamicas
// Buen desempeño

// Conceptos Basicos
// Componente : Parte de la interfaz de usuario que es independiente
// y reusable.
// Part of the UI that is independent and rehusable.

// Tipos de componentes
// Funcionales y de clase.
// Componente Funcional: Funcion de JavaScript/ES6 que retorna
// un elemento de React(JSX).
// ejemplo de componente funcional
function Saludo(props) {
    return <h1> Hola, {props.nombre}!</h1>;
}
//Caracteristicas de Componentes funcionales
//1. Debe retornar un elemento de React (JSX).
//2. Debe comenzar con una letra mayuscula.
//3. Puede recibir valores si es necesario.

// props = "properties"

// Props
// Son Arguments que puede recibir un componente de React.
// Los props solo pueden ser enviados de padre a hijo.

// Componentes de Clase
// Es una Clase de ES6 (JavaScript moderno) que retorna
// un elemento JSX.

class Saludo extends React.Component {
    render (){
        return <h1> Hola, {this.props.nombre} </h1>;
    }
}

// Caracteristicas de un componente de Clase
// 1. Extiende una funcionalidad de un componente de React, React.Component.
// 2. Debe tener un metodo render() para retornar un elemento de JSX.
// 3. Puede recibir valores si es necesario.

// Estado = State
// Es la representacion en JavaScript del conjunto de caracteristicas
// de un componente y sus valores actuales.

// Porque componentes de Clase??
// Anteriormente, usabamos componentes de clase para poder trabajar
// con "estados" de nuestros componentes.
// En versiones anteriores de React (anteriores a 16.8), no podiamos
// hacerlo en componentes funcionales.
// Luego vinieron los hooks o anzuelos, esto nos permite usar componentes
// funcionales.
// Ahora si podemos asignar y actualizar el estado de un componente funcional
// en React con los hooks.

// Hooks
// Es una funcion especial definida en React
// que nos permite trabajar con estados en componentes funcionales
// y otros aspectos de React.

// Event Listener
// Es una funcion en JavaScript que es ejecutada cuando ocurre
// un evento especifico.
// Tambien podemos referirnos a esta funcion como "Event Handler"

// Conceptos Importantes
// Componente
// Props
// Estado
// Hooks
// Event Listener

// Node.js
// Es un entorno de ejecucion para JS construido con motor V8
// Nos permite ejecutar JavaScript fuera del browser.

// JSX
// Es una extension de React para la sintaxis de JavaScript.
// JSX = JavaScript XML
// Nos permite describir en JavaScript como se veran los componentes
// usando una estructura similar a HTML.
// Ventajas de JSX
// Estructura mas facil de visualizar
// Errores y advertencias mas utiles
// JSX es opcional
JS                     HTML
const elemento = <h1> Hola, mundo! </h1>;

// Elementos
// Son las unidades mas pequeñas en React. 
// Definen lo que se ve en la pantalla.

// Elementos VS Componentes
// Los componentes en React estan "hechos"
// de elementos
// Los elementos son los mas basicos, divs, h1
// Los componentes son mas complejos.

<div id="root"></div>;
// La aplicacion de React estara colocada en el "root".
// Manejado por React DOM

//React DOM
// Es un paquete que facilita la interaccion y
// actualizacion del DOM en aplicaciones React.

// DOM
// Document Object Model
// Representacion en el navegador de todos loe elementos que
// conforman una pagina o aplicacion web.

// React DOM - nos permite interactual con los elementos del DOM.

// Elementos - som mas basicos que los componentes, son las unidades mas basicas

// Con JSX, es posible crear y usar cualquier elemento HTML.
// <div>, <img>, <a>, <header>, <nav>, <p>, <h1>, <button>, <h2>

// Como reconocer aun elemento de un componente???
// En JSX, los elementos HTML se representan con etiquetas en letras minusculas.

//Los componentes definidos por el usuario comienzan con una letra
// Mayuscula.

// Atributos = 
// Es posible agregar atributos a tus elementos en JSX para especificar
// ciertas caracteristicas.
// Pero... algunos se escriben de forma distinta si los comparamos con HTML.
<h1 className="titulo-azul"></h1>; // JSX

// class es una palabra reservada en JavaScript que podemos usar
// para crear una clase. Por eso necesitamos escribir este atributo
// de forma distinta en JSX.

// for 
<label htmlfor="css">CSS</label>;

// El atributo style acepta un objeto JavaScript con propiedades CSS
// escritas en cameCase.
// css = background-image
// JSX = backgroundImage
// css = background-color
// JSX = backgroundColor
// css = font-family
// JSX = fontFamily

const estiloDiv = {
    color: 'yellow',
    backgroundColor:'black'
};

<div style={estiloDiv}> Hola, Mundo! </div>;

<div style={{color: 'yellow'}}> Hola, Mundo! </div>;
// las primeras llaves permiten ingresar javascript
// las segundas llaves crean un objeto de javascript

// Atributos del DOM reconocidos en React.

/////////////////////////////////////////////////////////

// Estructura de un Componente con JSX
// Al igual que en HTML, los elementos pueden ser anidados en JSX para formar
// estructuras mas complejas.

// Renderizar componentes
// <div id="root"></div> == es el contenedor principal de todos los elemtos de la estructura.

const elemento = <h1>Hola, mundo!</h1>; // esto es un elemento.

ReactDOM.render(
    elemento, //este es el primer argumento
    document.getElementById('root') // contenedor para el elemento.
);

import RactDOM from 'react-dom';

// Self-Closing Tags
// Elemento que solo posee una etiqueta de apertura ya que no contiene
// texto u otros elementos.
<img src='logo.png' alt='Mi imagen' />;

// es posible incluir JavaScript en JSX
// las llaves {}, dentro de ellas tenemso un codigo de JS.

let adjetivo = "Interesante";
<p>React es {adjetivo}</p>;

//Posemos escrbir cualquier expresion valida de JavaScript
// entre las llaves y su valor sera reemplazado.

<p> El resultado es: {5 * 6}</p>; // 5*6 se resolvera

let nombre = "Gino";
<p>Su nombre es: {nombre.toUpperCase()}</p>;

///////////////////////////////////////////////////////////////

// Crear una aplicacion de React








