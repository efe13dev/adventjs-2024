# 🎄 Decorando el árbol de navidad

## Problema

¡Es hora de poner el árbol de Navidad en casa! 🎄

Este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

## Detalles

La función debe devolver un string que represente el árbol de Navidad con las siguientes características:

- El árbol está compuesto de triángulos de caracteres especiales
- Los espacios en blanco a los lados se representan con guiones bajos (`_`)
- Todos los árboles tienen un tronco de dos líneas, representado por el carácter `#`
- El árbol siempre debe tener la misma longitud por cada lado
- Se deben usar saltos de línea `\n` para cada línea del árbol

## Ejemplos

### Ejemplo 1: Árbol de altura 5

```javascript
const tree = createXmasTree(5, '*');
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
```

### Ejemplo 2: Árbol de altura 3

```javascript
const tree2 = createXmasTree(3, '+');
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/
```

### Ejemplo 3: Árbol de altura 6

```javascript
const tree3 = createXmasTree(6, '@');
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

## Nota

Asegúrate de utilizar saltos de línea `\n` al final de cada línea, excepto en la última.
