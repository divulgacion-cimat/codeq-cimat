# Animación con LEDs

## {Introduction @unplugged}

En esta actividad aprenderás a crear una animación con los LEDs de tu micro:bit utilizando ciclos **for**.

## {Step 1}

Comencemos por aprender cómo encender los LEDs del micro:bit meidante código. De la categoría `||led:Led||` toma el bloque `||led:graficar||` y colócalo dentro del bloque `||basic:para siempre||`. Al ejecutar el programa, observarás que se enciende un LED en la placa.

```blocks
basic.forever(function() {
    //@highlight
    led.plot(0,0);
})
```

## {Step 2}

Como habrán observado, el LED en la posición *x=0* y *y=0* corresponde a la esquina superior izquierda. Si aumentas los valores de *x* o *y*, el LED encendido se desplazará hacia la derecha o hacia abajo, respectivamente. 

Modifica los valores de *x* y *y* para encender el LED del centro.

```blocks
basic.forever(function() {
    //@highlight
    led.plot(2,2);
})
```


## {Step 3}

Ahora intentemos apagarlo. Debajo del bloque anterior, agrega un bloque `||led:ocultar||` con las mismas coordenadas en *x* y *y*. Al ejecutar el programa veremos que... ¿No pasó nada?

```blocks
basic.forever(function() {
    led.plot(2,2);
    led.unplot(2,2)
})
```

## {Step 4}

Esto sucede porque ambas instrucciones se ejecutan demasiado rápido y no alcanzamos a notar el cambio. Agrega un bloque `||basic:pausa||` entre ambas instrucciones y observa cómo el LED comienza a parpadear.

```blocks
basic.forever(function() {
    led.plot(2,2);
    basic.pause(1000)
    led.unplot(2,2)
})
```

## {Step 5}


Pasemos ahora a utilizar un **ciclo for** para encender varios LEDs. De la sección ``||loops:Bucles||``, toma un ciclo ``||loops:para índice de 0 a 4||`` y conéctalo al inicio del bloque  `||basic:para siempre||`. Luego, coloca dentro del ciclo los bloques que ya habíamos usado.


```blocks
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(2, 2)
        basic.pause(1000)
        led.unplot(2, 2)
    }
})

```

## {Step 6}

En el ciclo for verá la variable  `||variable:index||`. Esta variable toma valores desde 0 hasta 4. Arrástrala para reemplazar los valores de *x* en los bloques `||led:graficar||` y `||led:ocultar||`. 

Ahora verás cómo se encienden uno por uno los LEDs de la fila central.

```blocks
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(1000)
        led.unplot(index, 2)
    }
})

```


## {Step 7}

¡Excelente!
Para reforzar lo aprendido, modifica el código para que se enciendan uno por uno los LEDs de la **columna central**.

💡 Reto: ¿Cómo harías para que se iluminen los LEDs de la **diagonal**?

```blockconfig.global
basic.pause(1000)
```

```template
basic.forever(function() {})
```
