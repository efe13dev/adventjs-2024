# 🎄 Verifica si los árboles son espejos mágicos

## 📝 Descripción

En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

## 🔍 Reglas

Dos árboles binarios son espejos si:
- Las raíces de ambos árboles tienen el mismo valor.
- Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.

## 💻 Estructura del árbol

El árbol se representa con tres propiedades: `value`, `left` y `right`. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):

```javascript
const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ... }
  }
}
```

## 📋 Ejemplos

### Ejemplo 1: Árboles sincronizados
```javascript
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']
```

Representación visual:
```
    tree1       tree2
     🎄          🎄
    /  \        /  \
   ⭐  🎅      🎅  ⭐
```

### Ejemplo 2: Árboles no sincronizados
```javascript
const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']
