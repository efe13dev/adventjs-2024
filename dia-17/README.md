# 🎄 Reto #17: El buscador de minas del Grinch 💣

## 🎯 Problema

El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (`true`) y otras están vacías (`false`).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

## 📝 Ejemplos

### Ejemplo 1:
```javascript
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])

// Resultado:
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]
```

### Ejemplo 2:
```javascript
detectBombs([
  [true, false],
  [false, false]
])

// Resultado:
// [
//   [0, 1],
//   [1, 1]
// ]
```

### Ejemplo 3:
```javascript
detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// Resultado:
// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
