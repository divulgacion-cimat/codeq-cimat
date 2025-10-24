# Animación con LEDs

## {Introduction @unplugged}

Vamos a crear una animación con los LEDs usando ciclos For.

## {Step 1}

Comencemos por aprender como prender LEDs en el micro:bit usando código. De la categoría `||led:Led||` tomamos el bloque `||led:graficar||` y lo colocamos dentro del bloque `||basic:para siempre||`. Si ejecutamos el programa veremos que se prende un LED en la placa.

```blocks
basic.forever(function() {
    //@highlight
    led.plot(0,0);
})
```

## {Step 2}

Como habrán observado, el LED en la posición *x=0* y *y=0* es el de la esquina superior izquierda. Al aumentar el valor de ambas variables, el LED encendido se recorrerá hacia la derecha y abajo, respectivamente. Cambie los valores de *x* y *y* para encender el LED del centro.

```blocks
basic.forever(function() {
    //@highlight
    led.plot(2,2);
})
```


## {Step 3}

Ahora vamos a apagarlo. Debajo del bloque anterior colocamos ahora un bloque `||led:ocultar||` con las mismas coordenadas en *x* y *y*. Al ejecutar el programa veremos que... ¿No pasó nada?

```blocks
basic.forever(function() {
    led.plot(2,2);
    led.unplot(2,2)
})
```

## {Step 4}

Esto es porque dichas instrucciones se ejecutan de forma muy rápida. Coloque un bloque `||basic:pausa||` entre ambas instrucciones y observe como ahora parpadea el LED. 

```blocks
basic.forever(function() {
    led.plot(2,2);
    basic.pause(1000)
    led.unplot(2,2)
})
```

## {Step 5}


Pasemos ahora a utilizar el ciclo for para encender diversas luces. De la sección ``||loops:Bucles||`` toma un ciclo ``||loops:para índice de 0 a 4||`` y conéctalo al inicio con  `||basic:para siempre||`. Posteriormente, arrastra los bloques que ya habíamos colocado dentro del ciclo.


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

En el ciclo for veremos una variable  `||variable:index||`. Esa variable es la que tomará valores comenzando en 0 hasta 4. Arrástrela para sustituir los valores de *x* en los bloques `||led:graficar||` y `||led:ocultar||`. Observe como se iluminan uno por uno los LEDs de la fila central.

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

Reforcemos lo aprendido. Ahora cambie el código y haga que se enciendan uno por uno los LEDs de la columna central. ¿Cómo haría para que se enciendan los de la diagonal?

```blockconfig.global
basic.pause(1000)
```

```template
basic.forever(function() {})
```
