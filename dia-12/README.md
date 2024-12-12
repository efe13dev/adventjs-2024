# 🎄 ¿Cuánto cuesta el árbol?

En este mercado navideño especial, cada árbol de Navidad tiene un precio basado en sus adornos. ¡Descubre cómo se calcula!

## 🎯 Detalles

Cada adorno tiene un valor específico:

| Adorno | Descripción | Valor |
|--------|-------------|-------|
| * | Copo de nieve | 1 |
| o | Bola de Navidad | 5 |
| ^ | Arbolito decorativo | 10 |
| # | Guirnalda brillante | 50 |
| @ | Estrella polar | 100 |

## 📝 Reglas especiales

- Los valores normalmente se suman
- Si un adorno está inmediatamente a la izquierda de otro de mayor valor, su valor se resta en lugar de sumarse

## 📋 Ejemplos

```javascript
calculatePrice('***')   // 3  (1 + 1 + 1)
calculatePrice('*o')    // 4  (5 - 1)
calculatePrice('o*')    // 6  (5 + 1)
calculatePrice('*o*')   // 5  (-1 + 5 + 1)
calculatePrice('**o*')  // 6  (1 - 1 + 5 + 1)
calculatePrice('o***')  // 8  (5 + 3)
calculatePrice('*o@')   // 94 (-5 - 1 + 100)
calculatePrice('*#')    // 49 (-1 + 50)
calculatePrice('@@@')   // 300 (100 + 100 + 100)
calculatePrice('#@')    // 50 (-50 + 100)
calculatePrice('#@Z')   // undefined (Z es desconocido)
```

## ⚠️ Notas
- Si se encuentra un carácter desconocido, la función devuelve `undefined`
