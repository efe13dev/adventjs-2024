# Reto 19: Apilando cajas para el trineo 🎁

## Problema

¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

### Representación visual de las cajas

```
Caja de peso 1:
 _ 
|_|

Caja de peso 2:
 ___ 
|___|

Caja de peso 5:
 _____ 
|     |
|_____|

Caja de peso 10:
 _________ 
|         |
|_________|
```

### Representación en JavaScript

```javascript
const boxRepresentations = {
  1: [" _ ", "|_|"],
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
```

## Instrucciones

Tu misión es que al recibir el peso de los regalos:
- Uses las mínimas cajas posibles
- Las apiles de menos peso (arriba) a más peso (abajo)
- Siempre alineadas a la izquierda
- Reuses el borde inferior de la caja al apilarlas

## Ejemplos

```javascript
distributeWeight(1)
// Devuelve:
// _
// |_|

distributeWeight(2)
// Devuelve:
// ___
// |___|

distributeWeight(3)
// Devuelve:
// _
// |_|___
// |___|

distributeWeight(4)
// Devuelve:
// ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
// _____ 
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
// _
// |_|_____ 
// |     |
// |_____|
```

> **Nota:** ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.
