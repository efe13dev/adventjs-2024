# 🚂 El Tren Mágico

## 🎯 Descripción del Reto

Los elfos están jugando con un tren mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

## 🎮 Reglas del Juego

El tren está compuesto por:
- Una locomotora (`@`)
- Seguida de sus vagones (`o`)

El tren debe recoger frutas mágicas (`*`) que le sirven de combustible.

### 📝 Parámetros

Recibirás dos parámetros:
1. `board`: Array de strings que representa el tablero
2. `mov`: String que indica el próximo movimiento del tren

### 🎯 Elementos del Tablero

- `@` → Locomotora del tren
- `o` → Vagones del tren
- `*` → Fruta mágica
- `·` → Espacios vacíos

### 🎮 Movimientos Posibles

El movimiento se indica desde la cabeza del tren (`@`):
- `'L'` → Izquierda
- `'R'` → Derecha
- `'U'` → Arriba
- `'D'` → Abajo

### 📊 Resultados Posibles

Debes devolver una cadena de texto:
- `'crash'` → Si el tren choca contra los bordes del tablero o contra sí mismo
- `'eat'` → Si el tren recoge una fruta mágica (`*`)
- `'none'` → Si avanza sin chocar ni recoger ninguna fruta mágica

## 💻 Ejemplo

```javascript
const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha
