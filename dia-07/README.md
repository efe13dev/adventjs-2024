# 🎄 Reto #7: El ataque del Grinch 👹

## 🎯 Problema

¡El Grinch ha causado el caos en el taller de Santa Claus! Ha desordenado todos los paquetes de envío, comprometiendo la entrega de regalos. 

Por suerte, el elfo 🧝 Pheralb ha descubierto el patrón que siguió el Grinch para desordenarlos y nos ha proporcionado las reglas para revertir el desorden.

## 📝 Instrucciones

Debes crear una función que siga estas reglas:

1. Recibirás un string que contiene letras y paréntesis
2. Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos
3. Si hay paréntesis anidados, resuelve primero los más internos
4. El resultado final debe tener los paréntesis eliminados, pero con el contenido volteado correctamente

## 📊 Ejemplos

```javascript
fixPackages('a(cb)de')     // ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h') // ➞ "agdefcbh"
// 1º volteamos "def" → "fed"
// 2º volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk') // ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg"
// 2º volteamos "defhgi" → "ighfed"

fixPackages('a(b(c))e')    // ➞ "acbe"
// 1º volteamos "c" → "c"
// 2º volteamos "bc" → "cb"
