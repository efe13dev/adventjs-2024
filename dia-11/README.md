# 🔐 Nombre de archivos codificados

## 🎯 Problema

El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

## 📝 Formato del archivo

Cada archivo sigue este formato:

1. Comienza con un número (puede contener cualquier cantidad de dígitos)
2. Luego tiene un guion bajo `_`
3. Continúa con un nombre de archivo y su extensión
4. Finaliza con una extensión extra al final (que no necesitamos)

> **Nota**: El nombre de los archivos pueden contener:
> - Letras (a-z, A-Z)
> - Números (0-9)
> - Guiones bajos (_)
> - Guiones (-)

## ⚡ Tu tarea

Implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.

## 📋 Ejemplos

```javascript
decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"
