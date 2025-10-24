# Suma de variables

## {Introduction @unplugged}

Vamos a sumar dos variables y mostrar el resultado


## Creación de variables

Creamos las variables ``||variables:a||`` y ``||variables:b||`` yendo al menú ``||variables:Variables||`` y dando click en **Crear una variable...**



## Cambiando el valor

En ``||basic: al iniciar||`` colocamos  dos bloques ``||variables:fijar||``. Ambos dicen "fijar b a 0", así que cambiamos uno de los dos por a y colocamos un valor entre 1 y 10 en lugar de 0.




## Mostando las variables

Ahora creamos dos bloques ``||basic:mostar número||`` y los colocamos debajo de los que teníamos.
Vamos a  ``||variables:Variables||`` y sustituimos el **0** de los bloques por los bloques ``||variables:a||`` y  ``||variables:b||``.
Ejecute el programa y vea lo que sucede.

```blocks
// @validate-exists
let a = 2
let b = 3
basic.showNumber(a)
basic.showNumber(b)
```

## Sumando las variables 

Para lograr esto usaremos un bloque de la sección ``||math:Matemática||``. Primero colocamos un bloque ``||basic:mostrar número||`` al final y reemplazamos el **0** por un bloque ``||math:+||``.
Finalmente reemplazamos los **0** de este nuevo bloque por bloques de nuestras ``||variables:variables||``.


```blocks
// @validate-exists
let a = 2
let b = 3
basic.showNumber(a)
basic.showNumber(b)
basic.showNumber(a + b)

```

## Toques Finales

¡Mostremos lo que está pasando! Agreguemos finalmente unos bloques ``||basic:mostar cadena||`` para indicar las operaciones. Uno que muestre el signo de "+" después de mostrar ``||variables:a||`` y otro con el signo "=" después de mostrar ``||variables:b||``. Ejecute el programa y vea la suma en acción.

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
