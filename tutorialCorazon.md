# Corazón parpadeante

## Programa un Corazón parpadeante @unplugged

¡Programa las luces de la micro:bit para que muestren la animación de un corazón parpadeante! 

![Forma de corazón en los LEDs](/static/mb/projects/flashing-heart/sim.gif)

## {Step 1 @fullscreen}

Pulsa en la categoría `||basic:Básico||` en la Caja de Herramientas. Arrastra el bloque `||basic:mostrar leds||` dentro del bloque `||basic:para siempre||`. A continuación, en el bloque `||basic:mostrar leds||`, haz clic en los cuadrados para dibujar un corazón.

![Una animación que muestra cómo arrastrar un bloque y pintar un corazón](/static/mb/projects/flashing-heart/showleds.gif)

## {Step 2}

Arrastra otro bloque `||basic:mostrar leds||` debajo del primero.

```blocks
basic.forever(function() {
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
       `)
     basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
       `)
```

## {Step 3}

Mira a la @boardname@ en tu pantalla. ¿Ves parpadear el corazón? ⭐ ¡Buen trabajo! ⭐


## {Step 4}

Aprende más acerca de cómo funcionan las luces de la @boardname@ viendo [este vídeo](https://youtu.be/qqBmvHD5bCw).

```template
basic.forever(function() {})
```