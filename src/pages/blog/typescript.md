---
layout: "../../layouts/BlogPostLayout.astro"
title: TypeScript
date: 28-03-24
author: ComunidadDev
description: ¡Descubre nuestras ultimas actualizaciones!
---

# TypeScript

## Características faltantes de Javascript:

- • Tipos de variables.
- • Errores en tiempo de escritura.
- • Auto completación dependiendo de la variable.
- • Método estático de programación.
- • Clases y módulos (antes de **ES6**).
- • Entre otras cosas...

## Problemas que suceden en Javascript:

- • Errores porque una variable no estaba definida.
- • Errores porque el objeto no tiene la propiedad esperada.
- • Errores porque no se tiene idea de como trabajan las **funciones** de otros compañeros.
- • Errores porque se sobre escriben **variables, clases, funciones o constantes**.
- • Errores porque el código colisiona con el de otro.
- • Errores porque el caché del navegador mantiene los archivos de **Javascript** viejos.
- • Errores porque colocamos una mayúscula o minúscula en el lugar incorrecto.
- • Errores porque simplemente no sabemos como funciona el código de los demás.
- • Errores porque el **IDE** no me dijo que eso no lo podía hacer.

**Y LO PEOR DE TODO** es que nos damos cuenta hasta que el programa está **"corriendo"**.

## ¿Que es Typescript?

- - • **Typescript** es un **super set**(que extiende características) de javascript que se compila a este mismo y tiene un tipado estricto como lo es **Java, C#, C**, etc. Además, **typescript** pueda tomar las características nuevas del estándar EcmaScript, así **typescript** puede utilizar las últimas versiones de **JS**.

- • Podemos usar características del futuro HOY, con la confianza que tenemos la compatibilidad óptima, con un código más ordenado y comprensivo.
  Ventajas de Typescript:
- • Es un super set de Javascript.
- • Ofrece tipado estricto y flexible.
- • Mejora enormemente la legibilidad del código.
- • Nos permite usar características modernas.
- • Mutación controlada (en caso de ser necesario).
- • Documentación automática de funciones, argumentos y métodos.
- • Control de **null**, **undefined**, **NaN**, etc.
- • Ayuda enormemente cuando se trabaja en equipo.

## Problemas comunes en typescript:

- • No sé qué tipo de dato poner.
- • No sé que argumento recibo.
- • El objeto que se recibe extiende de otro, ¿Qué hago?
- • **Mito:** **Typescript** le quita toda la flexibilidad que **Javascript** me ofrece.

## Comandos:

\***\*npm install -g typescript\*\***
Este comando instala **Typescript** de forma global. \***\*tsc\*\***
Este comando permite compilar todos los archivos **TS** existentes a **JS** al punto de salida que hayamos especificado. \***\*tsc nombre_archivo.ts\*\***
Este comando lo que hace es compilar un archivo typescript a javascript ya que typescript no corre en el navegador. \***\*tsc --init\*\***
Este comando genera un archivo **tsconfig.json** que lo que hace es manejar la configuración de typescript, como por ejemplo que mande errores cuando no se le declara el tipo de dato a una variable, etc.
¿Que es el archivo **tsconfig.js**?
Este archivo le dice al compilador de **Typescript** las reglas generales para la compilación.
Configuraciones de **Typescript**:
**"module": "commonjs"**
Esta configuración establece a commonjs como importador de módulos.
**"target": "es5"**

- • Esta configuración de **"target"** establece la versión de **JS** a la que compila **TS**, en este caso es **EcmaScript5**.

- • Puede compilar a **es3**, **es6**, etc...

**"noImplicitAny": true**
Esta configuración lo que hace es que si está en **false** a una variable que no tenga tipado por defecto le agrega el tipo de **any**.
**"strictNullChecks": true**
Por defecto, tiene asignado **false**, si se le asigna **true** deshabilita la posibilidad de asignar **null** o **undefined** a una variable con el tipado distinto a estas mismas.

**"sourceMap": true**
Por defecto es **false**, si se le asigna **true** permite generar un **Source Map**(**archivo.map.js**) que nos es útil para depurar un archivo de **TS** en el navegador.
**"removeComments": true**
Por defecto es **false**, si se le asigna **true** permite borrar los comentarios realizados en el código al momento de compilar a **Javascript**
**"outFile": "./build/main.js"**

- • Esta configuración permite agregar una ruta de un archivo de **Javascript** donde se compilarán todos los archivos de **TS** creados, así solo se importará solo un archivo de **JS** al cargar la app.

- • En este caso se creará la carpeta **build** y dentro se compilaran en el archivo **main.js** los archivos **TS**.

- • Esto no funcionará si está la configuración de **"module": "commonjs"**
  **"outDir": "./dist"**
- • Esta configuración es parecida a usar **"outFile"** la diferencia es que en**"outDir"** en vez de ser un archivo **JS** en donde compilaran todos los archivos de **TS** es una carpeta en donde compilará cada archivo de **TS** a **JS** manteniendo su nombre original de archivo.

**"experimentalDecorators": true**
Por defecto es **false**, si se le asigna **true** activa la característica de los **decoradores** que están en una false experimental.
Incluir o excluir archivos a la compilación de **TS**:
Si se desea incluir archivos a la compilación se usa **"include"** y se desea excluir archivos se usa **"exclude"**.

**Ejemplo:**

```ts
"include": [
  "app/**/*"
],
"exclude": [
  "node_modules",
  "src/"
]
```

**tsc nombreArchivo.ts -w**
Este comando compila **TS** a **JS** de un archivo específico en tiempo real.
**tsc -w**

- • Este comando crea un compilador de typescript a javascript para que se compile en tiempo real(es como un observador que guarda automáticamente la compilación).

- • Para que funcione este comando hay que asegurarse de que exista el archivo de configuración **tsconfig.json**, sino nos dará un error.
  **npm start**
  Este comando corre una app typescript en un servidor usando webpack.

## Tipos de datos:

### Primitivos:

- • String
- • Numeros
- • Booleanos
- • Null / Undefined
  **boolean**
  Este es el tipado de un **boolean** en **TS**.

**Ejemplo:**

```ts
// Sin valor inicializado
let esBatman: boolean;
// Con valor inicializado
let esSuperman: boolean = true;
```

**number**
Este es el tipado de un **number** en **TS**.

**Ejemplo:**

```ts
// Sin valor inicializado
let villanos: number;
// Con valor inicializado
let avengers: number = 5;
```

**string**
Este es el tipado de un **string** en **TS**.

**Ejemplo:**

```ts
// Sin valor inicializado
let batman: string;
// Con valor inicializado
let linternaVerde: string = **Linterna Verde**;
```

**any**
Este es el tipado de un **any** en **TS**. No es muy buena práctica usarlo ya que permite cualquier tipo de dato, siendo igual al tipado dinámico de **JS**.

**Ejemplo:**

```ts
// Implícito
let existe;
// Explícito
let vengador: any = "Superman";
```

**void**
Este es el tipado de un **void** hace lo contrario a **any**, es decir, que no permite ningún tipo de dato. Este tipado **void** es útil para especificar que que una función no retorna nada.

**Ejemplo:**

```ts
function llamarBatman(): void {
  console.log("Mostrar la batiseñal");
  return;
}
```

En este caso la función no retorna nada, pero si retorna un tipo de dato nos daría error, ya que **void** establece que la función debe no retornar nada.
**never**
Este tipado **never** sirve para hacer puntos críticos en nuestro programa o líneas de código que nunca deben de suceder, es decir, para manejar excepciones de código personalizados. Se usa en el tipo de retorno de una función.

**Ejemplo:**

```ts
function error(mensaje: string): never {
  throw new Error(mensaje);
}

error("Error critico... línea 11 alcanzada...");
```

Como se puede observar **never** se usa para retornar una excepción personalizada.
**null**
Este es el tipado de un **null** en **TS**, que solo se le puede inicializar el valor de **null**.

**Ejemplo:**

```ts
// Sin valor inicializado
let papelHigienico: null;
// Con valor inicializado
let confort: null = null;
```

**undefined**
Este es el tipado de un **undefined** en **TS**, que solo se le puede inicializar el valor de **undefined**.

**Ejemplo:**

```ts
// Sin valor inicializado
let papelHigienico: undefined;
// Con valor inicializado
let confort: undefined = undefined;
```

### Compuestos:

- • Objetos literales
- • Clases
- • Funciones

### Funciones:

Parámetros obligatorios en funciones:
Al agregar tipado en los parámetros usando **":"** hace obligatorio agregar la misma cantidad de argumentos que la de parámetros.

**Ejemplo:**

```ts
function nombreCompleto(nombre: string, apellido: string): string {
  return **${nombre} ${apellido}**;
}

let nombre = nombreCompleto("Clark", "Kent");
console.log(nombre);
```

Parámetros opcionales en funciones:

- • Al agregar tipado usando **"?:"** hace opcional el parámetro al que se le aplica.
- • Si en la invocación de la función no agrega el argumento del parámetro opcional, este por defecto se convierte en **undefined**.

**Ejemplo:**

```ts
function nombreCompleto(nombre: string, apellido?: string): string {
  if (apellido) {
    // undefined
    return **${nombre} ${apellido}**;
  } else {
    return nombre;
  }
}

let nombre = nombreCompleto("Clark");
console.log(nombre);
```

### Tipado de función:

- - • Es posible agregarle tipado a una variable que se le asigna una **función**, que posteriormente se invocará con el nombre de esta variable.
- - • La sintaxis del tipado se crea con una **Arrow function** y se le puede establecer el tipado de los parámetros y del valor de retorno de esta.

**Ejemplo:**

```ts
function sumar(num1: number, num2: number): number {
  return num1 + num2;
}

let sumatoria: (a: number, b: number) => number;

sumatoria = sumar;

console.log(sumatoria(12, 4));
```

Como se puede observar, en la variable **sumatoria** se aplica el **tipado de función**, ya sea a los parámetros y valor de retorno
Objetos y tipos personalizados:
Objetos con tipos específicos:

- • Es cuando en los **Objetos literales** se agrega tipado a sus **propiedades** y **métodos** usando los **":"** y las llaves **"{}"** despues del nombre del **objeto**.

- • No es muy buena práctica usar los **objetos** con **tipos específicos** ya que se agrega
  mucho código en una sola línea.
- • Además no es muy escalable ya que si hay muchos objetos con el mismo tipado habría que
  modificarlos todos, así no siendo reutilizable.
  Ejemplo de sintaxis:
  Como se puede observar, dentro de las llaves se agrega tipado a las **propiedades** y a un **método**.

```ts
let flash: {
  nombre: string;
  edad: number;
  poderes: string[];
  getNombre: () => string;
} = {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Correr Rápido", "Viajar en el tiempo"],
  getNombre() {
    return this.nombre;
  },
};

flash.getNombre();
```

## Tipos personalizados:

- • Los tipos personalizados solucionan el problema de los **objetos con tipos específicos**
  para que el tipado para esto sea más reutilizable.
- • Este método es más escalable para definir tipado en los objetos.
  Ejemplo de sintaxis:

```ts
// Definicion de tipo personalizado
type Heroe = {
  nombre: string;
  edad: number;
  poderes: string[];
  getNombre: () => string;
};

let flash: Heroe = {
  nombre: "Barry Allen",
  edad: 24,
  poderes: ["Correr Rápido", "Viajar en el tiempo"],
  getNombre() {
    return this.nombre;
  },
};

let superman: Heroe = {
  nombre: "Clark Kent",
  edad: 500,
  poderes: ["Puede volar", "Super velocidad"],
  getNombre() {
    return this.nombre;
  },
};
```

### Múltiples tipos o Unión de tipos:

- • Los **múltiples tipos** o **unión de tipos** nos dará la flexibilidad de establecer más de un tipo a una variable.
- • Para agregar múltiples tipos se usa el símbolo del pipe **"|"** para ir separando cada tipo

Ejemplo de sintaxis:

```ts
type Heroe = {
  nombre: string;
  edad: number;
};

// Múltiples tipos o unión de tipos
let loquesea: string | number | Heroe = "Fernando";

loquesea = 10;

loquesea = {
  nombre: "Flash",
  edad: 56,
};
```

### Arrays (Arreglos):

Para el tipado de arreglos en **TS** se usa el tipo de dato que contiene este seguido de el **[]**.

**Ejemplo:**

```ts
// Tipado para arreglo de numeros
let arreglo: number[] = [1, 2, 3, 4, 5, 6, 7];
// Tipado para arreglo de cadenas
let villanos: string[] = ["Galactus", "Dormammu", "Kang"];
```

Tuples (Tuplas):
Las **tuplas** permiten agregarle un tipo de dato distinto a cada posición de un arreglo y que solo tenga la longitud establecida por el tipado.

**Sintaxis de ejemplo:**

```ts
let heroe: [string, number] = ["Dr. strange", 100];
```

## Enum (Enumeraciones):

- • Los **enum** tienen como objetivo darle un sentido lógico a un conjunto de números.

- • Por defecto si no se le inicializan valores a una **enumeración** el 1er número tiene un valor de **0** y se le va sumando **1** por cada número definido en la **enumeración**.

- • Si se inicializan valores a una **enumeración** los números tendras estos valores definidos, si hubiera el caso de que un número no esté inicializado su valor sería la suma de el número anterior más **1**.
  Sintaxis de ejemplo:
- • **Enumeración** sin valores inicializados:

```ts
enum Volumen {
  min, // 0
  medio, // 1
  max, // 2
}
```

Como parte en **0** y se le suma **1** cada número definido de la **enumeración** va incrementando en **1**.

- • **Enumeración** con valores inicializados y sin inicializar:

```ts
enum Volumen {
  min = 3, // 3
  medio, // 4
  max = 11, // 11
}
```

El valor de la variable **medio** es **4** ya que el número anterior es **3** y a este se le suma **1** siguiendo la lógica de las **enumeraciones**.
Aserciones de tipo:

- • Esto lo quk.- • Es como el **casteo** en otros lenguajes de programación, que es más estricto explicando el tipo de dato de una variable.
- • Se usa la siguiente sintaxis antes de la variable para definir su tipado: **(<tipoDato>variable)**

**Ejemplo:**

```ts
let cualquierValor: any = "Cualquier cosa";

let largoDelString: number = (<string>cualquierValor).length;

console.log(largoDelString);
```

En el ejemplo anterior, estrictamente establecemos que la variable **cualquierValor** es de tipo **string** al ser guardada en otra variable, **TS** al conocer su tipado activa el **intelisense** para poder acceder a los métodos o propiedades de este tipo de dato.
Es posible...

- • Crear tipos nuevo
- • Interfaces
- • Tipos genericos

## Clases en TypeScript:

Modificadores de acceso de propiedades y métodos:
**public**

- • Este modificador de acceso es el que tienen por defecto las **propiedades** y **métodos**, que quiere decir que estos tendrán acceso público, es decir, ya sea fuera o dentro de su **clase**.

- • Aunque por defecto los **miembros** de una **\_clase** tienen este modificador de acceso es buena práctica siempre declarar **public** para enfatizar que estas son públicas.
  **protected**
- • Este modificador de acceso lo que hace es establecer que las **propiedades** y **métodos** esten protegidos, es decir, los **miembros** de la **clase** solo tendrán acceso dentro de esta y dentro de sus **clases hijas** o **subclases**.
  **private**
- • Este modificador de acceso lo que hace es establecer que las **propiedades** y **métodos** esten privadas, es decir, los **miembros** de la **clase** solamente tendrán acceso dentro de esta.

- • Si los **miembros** de la **clase** son privados no tendran acceso fuera de esta **clase** y tampoco tendrán acceso sus **clases hijas** o **subclases**.

## Getters y Setters:

### Getters:

- • Se usan para retornar obligatoriamente un **propiedad** o dato.
- • Se debe usar **get** antes de la definición de este y establecer que retornan algo.

### Setters:

- • Se usan para modificar una o más **propiedades** por uno o más parámetros especificados.
- • Es obligatorio definirle al menos un parámetro.
- • Se debe usar **set** antes de la definición de este.
  propiedades y métodos estáticos:
- • Las **propiedades** y **métodos** **estáticos** se pueden llamar sin instanciar o definir un **objeto**.
- • Las **propiedades** y **métodos** **estáticos** se pueden invocar usando la **clase** como referencia y no un **objeto**.
- • Se usa **static** para definir los **miembros** **estáticos** en una **clase**.
  Clases Abstractas:
- • Son como un molde para definir **propiedades**, **métodos** y un **constructor** que se pueden heredar a otras **clases**.
- • Las **clases abstractas** no se pueden instanciar ya que solo sirven para definir **propiedades** y **métodos** que usarán posteriormente otras clases, por lo que no las pueden implementar o invocar.
- • Antes de la palabra reservada **class** se usa **abstract** para definir una **clase abstracta**.
  Constructores Privados:
- • Si hace **privado** un **constructor** no sería posible instanciar un **objeto**, daría error.
- • Los **constructores privados** son útiles para solamente instanciar un único objeto.
  Sintaxis de ejemplo:

## Interfaces:

- • Las **interfaces** son importantes ya que permiten agregar tipado a un **objeto** y definir ciertas reglas para definir desde un inicio que **propiedades** tendrá dicho **objeto**.
  Interfaz básica:
  **Sintaxis de **interface**:**

```ts
interface Xmen {
  nombre: string;
  poder: string;
}

function enviarMision(xmen: Xmen) {
  // Daria error ya que 'nombreXmen' no existe en la interfaz
  console.log("Enviando a: " + xmen.nombreXmen);
}

let wolverine: Xmen = {
  nombre: "Wolverine",
  poder: "Regeneración",
  // Da error ya que 'nombreReal' no existe en la interfaz
  nombreReal: "Logan",
};
```

### Propiedades opcionales:

- • Al igual que en los parámetros de las **funciones** las **interfaces** pueden usar el operador **?:** para que el tipado de una **propiedad** de un **objeto** sea opcional.
  **Ejemplo:**

```ts
interface Xmen {
  nombre: string; // Propiedad obligatoria
  poder?: string; // Propiedad opcional
}
```

Propiedades readonly:

- • En las **interfaces** se puede agregar un tipado \***\*readonly\*\***, es decir, que los valores de las propiedades de un objeto sean de solo lectura y no se pueden modificar.
  **Ejemplo:**

```ts
interface Point {
  readonly x: number; // Propiedad solo lectura
  readonly y: number; // Propiedad solo lectura
}
```

### Métodos en una **interface**:

- • En las **interfaces** se puede agregar un tipado a un **método** indicando su tipo en sus parámetros y en su valor de retorno.

- • Este tipado de método tambien puede ser opcional indicando el simbolo de **?** entre el nombre del método y su paréntesis de apertura.
  **Ejemplo**:

```ts
interface Xmen {
  nombre: string;
  poder?: string;
  // Puede ser opcional, tiene un parámetro string y no retorna nada
  regenerar?(nombreReal: string): void;
}
```

Extender una **interface**:

- • Las **interfaces** pueden heredar otras interfaces siendo más reutilizables.
  **Ejemplo:**

```ts
interface Employee extends Person{
  departament: string:
}
```

**interface** con propiedades con indices:
Ejemplo:

```ts
interface Dictionary<T> {
  [key: string]: T;
}
```

**interface** con génericos:
**Ejemplo:**

```ts
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
```

**interface** en una Clase:

- • Las **interfaces** se pueden usar en una **Clase** para definir el tipado de los objetos de esta misma.
- • Para usar una **interfaz** en una **Clase** se usa la palabra reservada **implements** seguido del nombre de la **interfaz**
  **Ejemplo**:

```ts
// Definición de interfaz
interface Xmen {
  nombre: string;
  poder?: string;
  // Como esta propiedad no está definida en la clase nos daría error.
  // Si fuera opcional el error no lo daría
  nombreReal: string;
  regenerar(nombreReal: string): void;
}

// Implementando interfaz en una clase
class Mutante implements Xmen {
  nombre: string;
  poder: string;

  constructor(nombre: string, poder: string) {
    this.nombre = nombre;
    this.poder = poder;
  }

  regenerar(nombre: string) {
    console.log("Hola " + nombre);
  }
}
```

**interface** para las funciones:

- • Tambén es posible agregar las **interface** a funciones siguiendo para siga ciertas reglas en sus parámetros y valor de retorno.
  **Ejemplo**:

```ts
// Definicion de interfaz para reutilizar en varias funciones
interface DosNumerosFunc {
  (num1: number, num2: number): number;
}

// Agregando tipado a funcion sumar()
let sumar: DosNumerosFunc;

sumar = function (a: number, b: number) {
  return a + b;
};

// Agregando tipado a funcion restar()
let restar: DosNumerosFunc;

restar = function (n1: number, n2: number) {
  return n1 - n2;
};
```

## Genéricos:

- • Los **genéricos** es una característica que nos permiten trabajar con cualquier tipo de dato.
- • Aprovecha las ventajas de **Typescript** para que ayude con la autocompletación y los
  posibles errores que podamos cometer a la hora de escribir código o al manejar la data.
  Funciones genéricas:
- • Como se comentó anteriormente los genéricos permiten trabajar con cualquier tipo de
  dato, por lo que las **funciones genéricas** pueden recibir cualquier tipo de dato como
  parámetro.
- • Es una convención o estándar usar una **T** al momento de definir la función  
   genérica de la siguiente forma: **function nombreFuncion<T>(parametro: T){ }**
  Sintaxis de función genérica:

```ts
// Función Genérica
function regresar<T>(arg: T) {
  return arg;
}

console.log(regresar(15.456789).toFixed(2));
console.log(regresar("Ricardo Tapia").charAt(0));
console.log(regresar(new Date()).getTime());
```

Función genérica al pasar como argumento un objeto:

- • Es posible agregarle a la invocación de la **función genérica** un **tipo personalizado**
  o **interface** si se pasa como argumento un **objeto**, así el **objeto** solo tendrá
  acceso a las propiedades y métodos de su tipado pasado como genérico.
  Sintaxis de ejemplo:

```ts
// Tipos personalizados
type Heroe = {
  nombre: string;
  nombreReal: string;
};

type Villano = {
  nombre: string;
  poder: string;
};

// Función Genérica
function funcionGenerica<T>(arg: T) {
  return arg;
}

let deadpool = {
  nombre: "Deadpool",
  nombreReal: "Wade Wilson",
  poder: "Regeneración",
};

// Tipado genérico de objeto como parámetro
console.log(funcionGenerica<Villano>(deadpool));
console.log(funcionGenerica<Heroe>(deadpool));
```

### Arreglos genéricos:

- • Es posible agregar **genéricos** en los arreglos para definir su tipado, de la siguiente
  forma: **variable: Array<tipado>**.
- • Esta es una alternativa a agregar tipado de arreglo general que se define de la siguiente manera:
  **variable: tipado[]**.
  Ejemplo de sintaxis:

```ts
// Tipado de arreglos con genéricos.
let heroes: Array<string> = ["Flash", "Batman", "Superman"];

heroes.push(1); // Daría error por no ser string

// Tipado de arregos con su tipado general.
let villanos: string[] = ["Lex Luthor", "Reverse Flash"];
```

### Clases genéricas:

- • Es posible agregar **genéricos** a una clase para definir el tipado de sus propiedades.
- • En una **clase genérica** se pueden agregar tipos múltiples.
- • Al momento de instanciar un objeto se puede decidir de que tipo pueden ser las
  propiedades de este agregando la siguiente sintaxis: **let objeto = new Clase<tipado|tipado>()**
  Ejemplo sintaxis:

```ts
class Cuadrado<T extends number | string> {
  base: T;
  altura: T;

  area(): number {
    return +this.base * +this.altura;
  }
}

let cuadrado = new Cuadrado<number | string>();

cuadrado.base = "10";
cuadrado.altura = 10;

console.log(cuadrado.area());
```

**type** genérico:
**Ejemplo:**

```ts
type Queu<T> = T[];
```

## Utility Types:

- • A la hora de trabajar con **interfaces** y **types**, **Typescript** nos da ciertos **'utility types'** para facilitar la transformación de nuestros tipos.

- • Esto nos permite lograr que nuestro tipado sea más seguro.

**Ejemplos:** [Utility Types](https://www.linkedin.com/feed/update/urn:li:activity:7018952395300724736?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7018952395300724736%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29)

```ts
Omit<Interface | Type, keys>;
Required<Interface | Type>;
Partial<Interface | Type>;
Readonly<Interface | Type>;
Record<tipo_dato, Type>;
```

- • se utiliza para crear un nuevo tipo que consiste en un conjunto de propiedades con nombres específicos y tipos de datos específicos.

- • El tipo **Record** toma dos argumentos genéricos: el **nombre de la propiedad** y el **tipo de dato de la propiedad**.

- • El tipo **Record** es útil para definir objetos con un conjunto de propiedades fijo y conocido de antemano.

- • Es especialmente útil en casos en los que se espera que el conjunto de propiedades sea consistente a lo largo del tiempo y no cambie con frecuencia.
  Ejemplo con **type**:

```ts
type Person = {
  name: string;
  age: number;
};

// Define que un objeto tendrá una propiedad string y un valor de tipo "Person".
type People = Record<string, Person>;

const people: People = {
  john: { name: "John", age: 25 },
  jane: { name: "Jane", age: 30 },
  bob: { name: "Bob", age: 40 },
};
```

## Decoradores:

- • Un **Decorador** es una **función** que se define antes de una **función, método,
  propiedad o clase** usando la siguiente sintaxis: **@nombreFuncionDecoradora**.
- • Un **Decorador** permite expandir la funcionalidad de una **función, método,
  propiedad o clase** agregandoles cosas nuevas.
  Decoradores de **Clase**:
- • Al definir una **Función decoradora** en una clase, este decorador debe acceder al
  constructor de la misma clase, pasandole este como parámetro.
- • Al momento de llamar el **decorador** en la clase, este mismo tiene acceso a su
  constructor automáticamente.
  Sintaxis ejemplo:

```ts
// Función decoradora
function consola(constructor: Function) {
  console.log(constructor);
}

// Estableciendo decorador en clase
@consola
class Villano {
  constructor(public nombre: string) {
    this.nombre = nombre;
  }
}
```

Otro ejemplo de un decorador de clase:

```ts
// Función decoradora
function planVillano(constructor: Function) {
  // Agregando método a la clase desde el decorador
  constructor.prototype.imprimirPlan = function () {
    console.log(**El plan de ${this.nombre} es dominar el mundo!**);
  };
}

// Estableciendo decorador a la clase
@planVillano
class Villano {
  constructor(public nombre: string) {
    this.nombre = nombre;
  }
}

let lex = new Villano("Lex Luthor");
// Casteo de objeto a tipo 'any' para evitar errores
(<any>lex).imprimirPlan();
```

Decoradores de fábrica - Factory Decorators:
Sintaxis ejemplo:

```ts
// Decorador de clase
function consola(constructor: Function) {
  console.log(constructor);
}

// Decorador Factory
function imprimirConsola(imprimir: boolean): Function {
  if (imprimir) {
    return consola;
  } else {
    return null;
  }
}

@imprimirConsola(true)
class Villano {
  constructor(public nombre: string) {
    this.nombre = nombre;
  }
}
```

### Decoradores Anidados:

- • Los **Decoradores Anidados** es cuando se puede agregar más de un **decorador** a una **función, clase, etc...**
  Sintaxis ejemplo:

```ts
// Función decoradora
function planVillano(constructor: Function) {
  // Agregando método a la clase desde el decorador
  constructor.prototype.imprimirPlan = function () {
    console.log(**El plan de ${this.nombre} es dominar el mundo!**);
  };
}

// Función decoradora
function imprimible(constructor: Function) {
  // Agregando método a la clase desde el decorador
  constructor.prototype.imprimir = function () {
    console.log(this);
  };
}

// Estableciendo más de un decorador a la clase
@imprimible
@planVillano
class Villano {
  constructor(
    public nombre: string,
    public poder: string,
  ) {
    this.nombre = nombre;
  }
}

let lex = new Villano("Lex Luthor", "Super mente  ");
// Casteo de objeto a tipo 'any' para evitar errores
(<any>lex).imprimirPlan();
(<any>lex).imprimir();
```

### Decoradores de métodos:

Sintaxis de ejemplo:

```ts
// Decorador de método
function editable(esEditable: boolean) {
  return function (
    target: any,
    nombrePropiedad: string,
    descriptor: PropertyDescriptor,
  ) {
    if (!esEditable) {
      console.log("No me haran cambiar de opinión.");
    }
    descriptor.writable = esEditable;
  };
}

class Villano {
  constructor(public nombre: string) {
    this.nombre = nombre;
  }

  // Invocando decorador de método
  @editable(false)
  plan() {
    console.log("Es dominar el mundo");
  }
}

let lex = new Villano("Lex Luthor");

// Da error si se le pasa false al decorador, ya que establece si una funcion se puede modificar
lex.plan = function () {
  console.log("Es cortar flores");
};

lex.plan();
```

### Decoradores de propiedades:

Sintaxis Ejemplo:

```ts
// Decorador de propiedad
function editableProp(esEditable: boolean): any {
  return function (target: any, nombrePropiedad: string) {
    let descriptor: PropertyDescriptor = {
      writable: esEditable,
    };

    return descriptor;
  };
}

class Villano {
  @editableProp(false)
  public nombre: string;

  constructor(nombre: string) {
    // Da error en esta linea ya que el decorador permite que las
    // propiedades  sean de solo lectura
    this.nombre = nombre;
  }
}

let lex = new Villano("Lex Luthor");
console.log(lex);
```

Decoradores de parámetros:
Sintaxis ejemplo:

```ts
// Decorador de parámetro
function parametro(target: any, metodo: string, index: number) {
  console.log(target, metodo, index);
}

class Villano {
  constructor(public nombre: string) {}

  // Invocando decorador de parametro
  imprimir(plan: boolean, @parametro mensaje: string): void {
    if (plan) {
      console.log(**El plan es: ${mensaje}**);
    } else {
      console.log(mensaje);
    }
  }
}
```

## Operadores:

- • El operador **!** en **TypeScript** se conoce como el operador de afirmación de tipo no nulo o **"non-null assertion operator"**.

- • Sirve para indicar al compilador que una expresión no será **null** o **undefined**, a pesar de que el sistema de tipos podría considerar que existe esa posibilidad.

- • Cuando se utiliza el operador **!** después de una expresión que podría ser **null** o **undefined**, se le está diciendo al compilador que se tiene la certeza de que la expresión no tendrá esos valores.

- • Es una forma de anular la verificación de tipo y decirle al compilador que confíe en que la expresión tendrá un valor válido en tiempo de ejecución.
  Ejemplo:

```ts
function getStringLength(str: string | null): number {
  // Utilizando el operador ! para afirmar que str no es null
  return str!.length;
}

const result = getStringLength("Hola"); // Resultado esperado: 4
```
