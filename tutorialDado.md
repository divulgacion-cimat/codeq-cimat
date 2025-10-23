# Dado

## {Introduction @unplugged}

Creemos unos dados digitales 

![Un dado de microbit](/static/mb/projects/dice.png)

## {Step 1}

El bloque `||input:si agitado||` ejecuta código cuando agitas la @boardname@ De la categoría `||basic:Básico||` arrastra un bloque `||basic:mostrar número||` y colócalo dentro del bloque `||input:si agitado||` para mostrar un número.

```blocks
input.onGesture(Gesture.Shake, function() {
    //@highlight
    basic.showNumber(0)
})
```

## {Step 2}

Pulsa el botón blanco **SHAKE** en la @boardname@ en la pantalla o mueve tu cursor rápidamente de lado a lado sobre el simulador. ¿Ves aparecer el número 0? ⭐ ¡Buen trabajo! ⭐

## {Step 3}

Pero no queremos que nuestro dado siempre muestre un 0. De la categoría `||math:Matemática||` de la Caja de herramientas arrastra un bloque `||Math:escoge al azar||` y colócalo dentro del bloque `||basic:mostrar número||` para reemplazar el **0**.

```blocks
input.onGesture(Gesture.Shake, function() {
    //@highlight
    basic.showNumber(randint(0, 10))
})
```

## {Step 4}

Un dado típico tiene en las caras entre 1 y 6 puntos. Así que en el bloque `||Math:escoge al azar||` cambia el valor mínimo a **1** y el valor máximo a **6**.

```blocks
input.onGesture(Gesture.Shake, function() {
    //@highlight
    basic.showNumber(randint(1, 6))
})
```

## {Step 5}

Pulsa el botón blanco **SHAKE** de nuevo en el simulador. ¿Ves aparecer números aleatorios entre 1 y 6? ⭐ ¡Buen trabajo! ⭐


## {Step 6}

Ve más allá: ¡intenta añadir algunos bloques de Música para que suene como si estuvieras agitando unos dados o usa las luces LED de la @boardname@ para mostrar los puntos del dado en lugar de números. ¿Quieres aprender cómo funcionan el detector de movimiento o el acelerómetro? [Mira este vídeo](https://youtu.be/byngcwjO51U).

```validation.global
# BlocksExistValidator
```

```template
input.onGesture(Gesture.Shake, function() {})
```