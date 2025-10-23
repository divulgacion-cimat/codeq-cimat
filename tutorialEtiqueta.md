# Etiqueta de nombre

## Convierte tu micro:bit en una etiqueta digital con tu nombre @unplugged

Puedes ver tu nombre en 

![Desplazamiento del nombre en los LEDs](/static/mb/projects/name-tag/name-tag.gif)

## {Step 1}

Pulsa en la categoría `||basic:Básico||` en la Caja de herramientas. Arrastra un bloque `||basic:mostrar cadena||` en el bloque `||basic:para siempre||`. A continuación, en el bloque `||basic:mostrar cadena||`, cambia el texto de "Hello!" por tu nombre.

```blocks
basic.forever(function() {
    basic.showString("Tu nombre");
})
```

## {Step 2}

Mira el simulador de la @boardname@ en la pantalla. ¿Ves tu nombre pasar? ⭐ ¡Buen trabajo! ⭐ ¡Has convertido la @boardname@ en una etiqueta digital con tu nombre!


## {Step 4}

Aprende más acerca de cómo funcionan las luces de la @boardname@ viendo [este vídeo](https://youtu.be/qqBmvHD5bCw).


```template
basic.forever(function() {})
```