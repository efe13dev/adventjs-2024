# 🎁 Genera combinaciones de regalos

## 📝 Descripción

Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes, asegurándose de que cada combinación contenga al menos un juguete.

## ⚡ El Reto

Escribe una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

### 📋 Requisitos:
- Debes devolver las combinaciones en el orden que aparecen los juguetes
- Las combinaciones deben ir de 1 a n juguetes
- El array de entrada siempre tendrá al menos un juguete
- Nunca habrá juguetes duplicados

## 🌟 Ejemplos

```javascript
generateGiftSets(['car', 'doll', 'puzzle'])
// Resultado:
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// Resultado:
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// Resultado:
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
```

## 💡 Pista
Hay varias formas de resolver este problema, pero el backtracking puede ser una excelente opción para generar todas las combinaciones posibles. 😉
