const suma = (a,b) =>{
    /**
     * a y b son los parámetros de entrada.
     * La función debe devolver la suma de los parámetros de entrada
     * Debes generar el código para que la función haga lo solicitado.
     *                  1
     */
    return a+b;
    
}

const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Debes generar el código para que la función haga lo solicitado.
    //                    2
    
    if (x===y) {
      return true;
    }
    else
    {
      return false;
    }
}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    //                  3
    
    if (str1.length===str2.length) {
      return true;
    } else {
      return false;
    }
  }

  function esPositivo(numero) {
    /**
     * la función recibe como parámetro de entrada un número entero.
     * Devuelve como resultado una cadena de texto que indica si el 
     * número es positivo o negativo. 
     * Si el número es positivo, devolver ---> "Es positivo"
     * Si el número es negativo, devolver ---> "Es negativo"
     * Si el número es 0, devuelve false
     * Tu código:
     *                       4
     */ 

    if (numero > 0) 
    {
       return 'Es positivo'
    } else if(numero < 0)
    {
      return 'Es negativo'
    }
    else{
       return false;
    }
  
  }

  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    //                          5

      //var color="";
      switch (color)
       {
        case 'blue':         
         return 'This is blue'
         
         case 'red':
         return 'This is red'
        
         case 'green':
         return 'This is green'
        
         case 'orange':
        return 'This is orange'
              
         default:
         return 'Color not found'    
        
        }

  }

  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    //                          6
    if(  numero % 3 === 0 && numero % 5 === 0)
    {
      
      return 'fizzbuzz'
    }
     else if( numero % 3 === 0)
    {
      
      return 'fizz'
    }
    else if(numero % 5 === 0)
    {
      return 'buzz'
    }
    else
    {
      return numero;
    }

  }

  const devolverPrimerElemento = (array) => {
    /**
     * La función recibe como parámetro de entrada un arreglo.
     * La función debe regresar el primer elemento del arreglo
     *                      7
     */
    // Tu código:
    return array[0];
  }

  const agregarItemAlFinalDelArray = (array, elemento) =>{
    /**
     * La función recibe dos parámetros de entrada, un arreglo y un elemento
     * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
     *                         8
     */
    // Tu código:
    array.push(elemento);
    return array;
  }

  const nuevoUsuario = (nombre, email, password) => {
    /**
     * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
     * que se pasan a la función.  Devuelve el objeto
     *                          9
     */
    // Tu código:
    return{
      nombre:nombre,
      email:email,
      password:password,  
    }
   
  }

  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // Tu código:
    //                        10
    const sergio={password:123}
    if (usuario.password===password)
    {
      return true;
    }
    return false;
  }

  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    //                      11
    usuario.password=nuevaPassword;
    return usuario;
  }

  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    //                      12
    // // Tu código:
    usuario.amigos.push(nuevoAmigo);
    return usuario;
   
  }

  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    //                        13
    for(let m=0; m<usuarios.length; m++) 
    {
      usuarios[m].esPremium =true; 
    }
    return usuarios;
  }

  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    //                          14
    let contadorLikes =0;
    for(let m=0; m < usuario.posts.length; m++) 
    {
      contadorLikes=contadorLikes+usuario.posts[m].likes;
    }
    return contadorLikes;
  }

  

class Persona {
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //                        15
  //un ejemplo del objeto es el siguiente
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    constructor(nombre, apellido,edad,domocilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domocilio = domocilio;
    }
    detalle() {
      return{
      Nombre: this.nombre,
      Apellido: this.apellido,
      Edad: this.edad,
      Domicilio: this.domocilio
      }
      
    }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    //                              16
    const persona=new Persona(nombre, apellido, edad, dir);
    return persona;
}

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //                            17
    let totalSuma=0;
    for(let i=0; i<numeros.length; i++) {
      totalSuma=totalSuma + numeros[i];        
    }
    cb(totalSuma);
}

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    //                            18
    for(let m=0; m<array.length; m++)
    {
      cb(array[m]);
    }
  }

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
    //                            19
   return cb(n1,n2);
  }

  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    //                           20
    let nuevoArreglo =[];
    for(let m=0;m<array.length;m++)
    {
      if(array[m][0] ==='a' )
      {
        nuevoArreglo.push(array[m]);
      }
    }
    return nuevoArreglo;
  } 


  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

