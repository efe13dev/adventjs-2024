# 🎅 La Agenda Mágica de Santa 📇

## Problema

Santa Claus tiene una agenda mágica donde guarda las direcciones de los niños para entregar los regalos. Sin embargo, la información está mezclada y malformateada. Cada línea contiene:
- Un número de teléfono mágico
- El nombre de un niño
- Su dirección

## Detalles importantes

- Los números de teléfono tienen el formato: `+X-YYY-YYY-YYY`
  - X: uno o dos dígitos
  - Y: un dígito
- Los nombres de los niños están siempre entre `<` y `>`

## Tarea

Debes escribir una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.

### Reglas
- Si no encuentra coincidencias: devuelve `null`
- Si hay más de un resultado: devuelve `null`

## Ejemplos

```javascript
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null (No hay resultados)

findInAgenda(agenda, '1')
// null (Demasiados resultados)
