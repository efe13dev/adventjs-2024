# 🤖 ¿El robot está de vuelta?

En el Polo Norte 🎅, los elfos han creado un robot especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y comienza desde el origen (0, 0).

## 🎯 Objetivo

Determinar si, después de ejecutar una serie de movimientos, el robot vuelve a su posición inicial.

## 🎮 Comandos Básicos

- `L`: Mover hacia la izquierda
- `R`: Mover hacia la derecha
- `U`: Mover hacia arriba
- `D`: Mover hacia abajo

## ⚡ Modificadores Especiales

- `*`: Duplica la intensidad del movimiento (ejemplo: `*R` = `RR`)
- `!`: Invierte el siguiente movimiento (ejemplo: `R!L` = `RR`)
- `?`: El siguiente movimiento solo se realiza si no se ha hecho antes (ejemplo: `R?R` = `R`)

> **Nota**: Cuando un movimiento se invierte con `!`, se contabiliza el movimiento invertido y no el original. Por ejemplo, `!U?U` invierte el movimiento de `U`, contabilizando `D` pero no `U`. Así, `!U?U` se traduce como `D?U`.

## 🔄 Valor de Retorno

- `true`: Si el robot vuelve a su posición inicial
- `[x, y]`: Si el robot termina en una posición diferente, devuelve las coordenadas finales

## 📝 Ejemplos

```javascript
isRobotBack('R')      // [1, 0]
isRobotBack('RL')     // true
isRobotBack('RLUD')   // true
isRobotBack('*RU')    // [2, 1]
isRobotBack('R*U')    // [1, 2]
isRobotBack('LLL!R')  // [-4, 0]
isRobotBack('R?R')    // [1, 0]
isRobotBack('U?D')    // true
isRobotBack('R!L')    // [2, 0]
isRobotBack('U!D')    // [0, 2]
isRobotBack('R?L')    // true
isRobotBack('U?U')    // [0, 1]
isRobotBack('*U?U')   // [0, 2]
isRobotBack('U?D?U')  // true
```

## 🔍 Ejemplos Detallados

### Ejemplo 1:
```javascript
isRobotBack('R!U?U') // [1, 0]
// 1. 'R' -> se mueve a la derecha
// 2. '!U' -> se invierte y se convierte en 'D'
// 3. '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'
```

### Ejemplo 2:
```javascript
isRobotBack('UU!U?D') // [0, 1]
// 1. 'U' -> se mueve arriba
// 2. 'U' -> se mueve arriba
// 3. '!U' -> se invierte y se convierte en 'D'
// 4. '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
```
