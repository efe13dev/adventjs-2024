# 🦌 Acomodando Renos

## 🎯 Problema

Los renos necesitan moverse para ocupar los establos, pero no puede haber más de un reno por establo. Además, para que los renos estén cómodos, debemos minimizar la distancia total que recorren para acomodarse.

## 📝 Parámetros

- `reindeer`: Array de enteros que representan las posiciones de los renos.
- `stables`: Array de enteros que representan las posiciones de los establos.

## ⚠️ Notas importantes

- Solo puede haber un reno por establo
- El array de establos siempre tendrá el mismo tamaño que el array de renos
- Los establos siempre serán únicos

## 🌟 Objetivo

Calcular el mínimo número de movimientos necesarios para que todos los renos acaben en un establo.

## 📊 Ejemplos

### Ejemplo 1:
```javascript
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3

// Explicación:
// Renos en posiciones:  [2, 6, 9]
// Establos en posiciones: [3, 8, 5]
// 
// 1. Primer reno: 2 -> 3 (1 movimiento)
// 2. Segundo reno: 6 -> 5 (1 movimiento)
// 3. Tercer reno: 9 -> 8 (1 movimiento)
// 
// Total: 1 + 1 + 1 = 3 movimientos
```

### Ejemplo 2:
```javascript
minMovesToStables([1, 1, 3], [1, 8, 4]) // -> 8

// Explicación:
// Renos en posiciones: [1, 1, 3]
// Establos en posiciones: [1, 8, 4]
//
// 1. Primer reno: 1 -> 1 (0 movimientos)
// 2. Segundo reno: 1 -> 4 (3 movimientos)
// 3. Tercer reno: 3 -> 8 (5 movimientos)
//
// Total: 0 + 3 + 5 = 8 movimientos
```
