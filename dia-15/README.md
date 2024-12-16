# 🎄 Reto 15: Dibujando Tablas

## 📝 Descripción

Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños. Para mejorar la presentación, necesita crear una función `drawTable` que reciba un array de objetos y lo convierta en una tabla de texto.

## 🎯 Requisitos

La tabla debe cumplir con las siguientes especificaciones:

- Tiene una cabecera con el nombre de la columna
- El nombre de la columna pone la primera letra en mayúscula
- Cada fila debe contener los valores de los objetos en el orden correspondiente
- Cada valor debe estar alineado a la izquierda
- Los campos dejan siempre un espacio a la izquierda
- Los campos dejan a la derecha el espacio necesario para alinear la caja

## 📊 Ejemplos

### Ejemplo 1: Nombres y Ciudades

```javascript
drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])

// Resultado:
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+
```

### Ejemplo 2: Regalos y Cantidades

```javascript
drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])

// Resultado:
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
