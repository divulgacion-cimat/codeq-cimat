# Botones sonrientes

## ¡Programa un emoji en la micro:bit! @unplugged

Programa los botones de la @boardname@ para que muestren una cara feliz o una cara triste 

![Pulsando los botones A y B](/static/mb/projects/smiley-buttons/sim.gif)

## {Step 1}

Hagamos que aparezca una cara feliz al pulsar el botón **A**.   
Haz clic en la categoría `||basic:Básico||` en la Caja de herramientas. Arrastra un bloque `||basic:mostrar icono||` al interior del bloque `||input:al presionarse el botón A||`.  
En el bloque `||basic:mostrar icono||`, haz clic en el Corazón para que se abra el menú. Elige un icono con una cara sonriente.

```blocks
input.onButtonPressed(Button.A, function() { 
    basic.showIcon(IconNames.Happy)
})
```

## {Step 2}

En el simulador de @boardname@ que ves en pantalla pulsa el botón **A**. ¿Ves una cara feliz? ⭐¡Buen trabajo! ⭐

## {Step 3}

Ahora mostremos una cara triste al pulsar el botón **B**.  
Haz clic en la categoría `||input:Entrada||` de la Caja de herramientas. Arrastra otro bloque de `||input:al presionarse el botón A||` al espacio de trabajo (colócalo donde quieras). Haz clic en el menú del botón **A** para desplegarlo y elige **B**.

```blocks
input.onButtonPressed(Button.B, function() {})
```

## {Step 4}

Desde la categoría `||basic:Básico||` arrastra otro bloque `||basic:mostrar icono||` dentro del bloque `||input:al presionarse el botón B||`. En este bloque `||basic:mostrar icono||` haz clic en el icono del corazón para abrir el menú. Elige el icono con la cara triste.

```blocks
input.onButtonPressed(Button.B, function() {
    basic.showIcon(IconNames.Sad)
})
```

## {Step 5}

En el simulador de la @boardname@ en pantalla presiona el botón **B**. ¿Ves una cara triste? ⭐ ¡Buen trabajo! ⭐


## {Step 7}

Aprende más acerca de cómo funcionan los botones de la @boardname@ viendo [este vídeo](https://youtu.be/t_Qujjd_38o).

```template
input.onButtonPressed(Button.A, function() {})
```