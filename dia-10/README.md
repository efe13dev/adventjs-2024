# 🎄 El ensamblador élfico

## 🎯 Problema

Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

## 📝 Instrucciones

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

- `MOV x y`: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
- `INC x`: Incrementa en 1 el contenido del registro x
- `DEC x`: Decrementa en 1 el contenido del registro x
- `JMP x y`: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.

## ⚙️ Comportamiento esperado

- Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
- El salto con `JMP` es absoluto y lleva al índice exacto indicado por y.
- Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.

## 💻 Ejemplo

```javascript
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C',    // incrementa el valor del registro 'C'
  'JMP C 1',  // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A',  // copia el registro 'C' al registro 'a',
  'INC A'     // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2
```

### 📋 Ejecución paso a paso:

1. `MOV -1 C` -> El registro C recibe el valor -1
2. `INC C` -> El registro C pasa a ser 0
3. `JMP C 1` -> C es 0, salta a la instrucción en el índice 1
4. `INC C` -> El registro C pasa a ser 1
5. `JMP C 1` -> C es 1, ignoramos la instrucción
6. `MOV C A` -> Copiamos el registro C en A. Ahora A es 1
7. `INC A` -> El registro A pasa a ser 2
