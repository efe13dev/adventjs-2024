# 🎄 Día 2: Marco Mágico ✨

## 📝 Descripción

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️. Tu tarea es ayudar a los elfos a generar este marco mágico que debe cumplir unas reglas específicas.

## 🎯 Reglas

1. Dado un array de nombres, debes crear un marco rectangular que los contenga a todos
2. Cada nombre debe estar en una línea, alineado a la izquierda
3. El marco está construido con `*` y tiene un borde de una línea de ancho
4. La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado

## 🌟 Ejemplos

### Ejemplo 1:
```javascript
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado:
*************
* midu      *
* madeval   *
* educalvolpz *
*************
```

### Ejemplo 2:
```javascript
createFrame(['midu'])

// Resultado:
********
* midu *
********
```

### Ejemplo 3:
```javascript
createFrame(['a', 'bb', 'ccc'])

// Resultado:
*******
* a   *
* bb  *
* ccc *
*******
```

### Ejemplo 4:
```javascript
createFrame(['a', 'bb', 'ccc', 'dddd'])

// Resultado:
*********
* a    *
* bb   *
* ccc  *
* dddd *
*********
``` 
