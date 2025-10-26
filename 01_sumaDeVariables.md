# Suma de variables

## Suma de variables @unplugged

En esta actividad aprenderás a sumar dos variables y mostrar el resultado en la pantalla de tu micro:bit.


## Creación de variables

Primero, necesitamos crear nuestras variables.  Ve al menú ``||variables:Variables||``, haz click en **Crear una variable...** y crea dos variables llamadas ``||variables:a||`` y ``||variables:b||``.



## Asignando valores

En el bloque ``||basic: al iniciar||`` colocamos  dos bloques ``||variables:fijar||``. Ambos dirán "fijar b a 0", así que cambia uno de ellos para que diga "**fijar a a 0**". Luego, cambia los **0** por un número entre **1** y **10** para darles un valor inicial. 



## Mostando las variables

Ahora agrega dos bloques ``||basic:mostar número||`` y colócalos debajo de los bloques `||variables:fijar||`. Desde la categoría  ``||variables:Variables||``, arrastra las variables ``||variables:a||`` y ``||variables:b||`` para reemplazar el **0** de cada bloque ``||basic:mostar número||``.

Ejecuta el programa y observa cómo se muestran los valores de las variables en la pantalla.

```blocks
// @validate-exists
let a = 2
let b = 3
basic.showNumber(a)
basic.showNumber(b)
```

## Sumando las variables 

Ahora mostremos la suma de *a* y *b*. Para esto, utilizaremos un bloque de la categoría ``||math:Matemática||``. Coloca un bloque ``||basic:mostrar número||`` debajo de los anteriores y reemplaza el **0** por un bloque ``||math:+||``.
Posteriormente, en los dos espacios del boque, sustituye los **0** por bloques de nuestras ``||variables:variables||``.


```blocks
// @validate-exists
let a = 2
let b = 3
basic.showNumber(a)
basic.showNumber(b)
basic.showNumber(a + b)

```

## Toques Finales

¡Hagamos que el resultado sea más fácil de entender! Agrega un bloque  ``||basic:mostar cadena||`` con el símbolo "+" después de mostrar ``||variables:a||`` y otro con el símbolo "=" después de mostrar ``||variables:b||``. Ejecuta el programa y observa cómo el micro:bit muestra la suma paso a paso.

```blocks
// @validate-exists
let a = 2
let b = 3
basic.showNumber(a)
basic.showString("+")
basic.showNumber(b)
basic.showString("=")
basic.showNumber(a + b)

```

```validation.global
# BlocksExistValidator
```

```template
//
```
