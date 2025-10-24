# Piedra, papel o tijeras

## {Introduction @unplugged}

![Cartoon of the Rock Paper Scissors game](/static/mb/projects/a4-motion.png)

¡Hagamos que podamos jugar **pidra, papel o tijeras** contra la microbit!

## {Step 1}

Primero tenemos que crear una variable para saber si tenemos Piedra, Papel o Tijeras en la mano. Una variable es un contenedor para almacenar valores. Pulsa en la categoría ``||variables:Variables||`` de la Caja de Herramientas. Haga click en el botón **Crear una variaable**. Ponle a tu nueva variable el nombre "mano" y haz clic en Aceptar.

![A animation that shows how to create a variable](/static/mb/projects/rock-paper-scissors/newvar.gif)

## {Step 2}

Pulsa en la categoría ``||variables:Variables||``en la Caja de Herramientas de nuevo. Notarás que han aparecido algunos bloques nuevos. Arrastra un bloque ``||variables:fijar mano||`` dentro del bloque ``||input:si agitado||``. El juego comenzará cuando agitemos nuestra micro:bit.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = 0
})
```

## {Step 3}

Pulsa en la categoría ``||math:Matemática||`` en la Caja de Herramientas. Arrastra un bloque ``||math:escoger al azar||`` y suéltalo dentro del bloque ``||variables:fijar mano||`` reemplazando el número 0. Ahora, cuando agitemos la micro:bit, la variable **mano** contendrá un valor entre 1 y 3.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
})
```

## {Step 4}

Pulsa en la categoría ``||logic:Lógica||`` de la Caja de Herramientas. Arrastra el bloque ``||logic:si verdadero entonces si no||`` al espacio de trabajo y suéltalo dentro del bloque ``||input:si agitado||`` debajo del bloque ``||variables:fijar mano||``.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (true) {
    	
    } else {
    	
    }
})
```

## {Step 5}

De la categoría ``||logic:Lógica||``, arrastra un bloque de comparación ``||logic:0 = 0||`` y suéltalo dentro del bloque ``||logic:si verdadero entonces si no||`` reemplazando **verdadero**.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (0 == 0) {
    	
    } else {
    	
    }
})
```

## {Step 6}

Pulsa en la categoría ``||variables:Variables||``  de la Caja de Herramientas. Arrastra un bloque ``||variables:mano||`` y suéltalo dentro del bloque de comparación  ``||logic:0 = 0||``, reemplazando el primer **0**.  Haz click en el segundo **0** del bloque y cambia el valor a **1**.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (mano == 1) {
    	
    } else {
    	
    }
})
```

## {Step 7}

Pulsa en la categoría ``||basic:Básico||`` en la Caja de Herramientas. Arrastra un bloque ``||basic:mostrar ícono||`` y suéltalo debajo de ``||logic:si mano = 1 entonces||``. En el bloque ``||basic:mostrar ícono||``, pulsa el ícono de *Corazón* y cambialo por el ícono de *Cuadrado Pequeño* para representar la 💎 **piedra**.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (mano == 1) {
    	basic.showIcon(IconNames.SmallSquare)
    } else {
    	
    }
})
```

## {Step 8}

Después de bloque ``||logic:si entonces si no||``, haz click en el símbolo **'+'** . Esto hará que el código se expanda y se incluya una cláusula ``||logic:si no, si||``.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (mano == 1) {
    	basic.showIcon(IconNames.SmallSquare)
    } else if (false) {
    	
    } else {
    	
    }
})
```

## {Step 9}

Desde la categoría ``||logic:Lógica||``, arrastra otro bloque de comparación ``||logic:0 = 0||`` y reemplaza el **falso** junto a la cláusula ``||logic:si no, si||``.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (mano == 1) {
    	basic.showIcon(IconNames.SmallSquare)
    } else if (0 == 0) {
    	
    } else {
    	
    }
})
```

## {Step 10}

De la categoría ``||variables:Variables||``, arrastra un bloque ``||variables:mano||`` y suéltalo en el bloque de comparación ``||logic:0 = 0||`` reemplazando el primer **0**.  Haz click en el segundo **0** y cambia su valor a **2**.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (mano == 1) {
    	basic.showIcon(IconNames.SmallSquare)
    } else if (mano == 2) {
    	
    } else {
    	
    }
})
```

## {Step 11}

De la categoría ``||basic:Básico||``, arrastra un bloque  ``||basic:mostrar ícono||`` y suéltalo debajo de ``||logic:si no, si mano = 2 entonce||``. En el bloque ``||basic:mostrar ícono||``, ahora selecciona el ícono de *Cuadrado* para representar el 📃 **papel**.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (mano == 1) {
    	basic.showIcon(IconNames.SmallSquare)
    } else if (mano == 2) {
    	basic.showIcon(IconNames.Square)
    } else {
    	
    }
})
```

## {Step 12}

Ahora vamos a tratar con la última condición. - ¡si nuestra variable mano no contiene los valores 1 (Piedra) o 2 (Papel), entonces debe ser 3 (Tijeras)! Desde la categoría ``||basic:Básico||``, arrastra otro bloque ``||basic:mostrar ícono||`` y suéltalo en el último hueco bajo la categoría ``||logic:si no||``.  En el bloque ``||basic:mostrar ícono||``, pulsa en el ícono de *Corazón* y selecciona el ícono de *Tijeras*.

```blocks
let mano = 0;
input.onGesture(Gesture.Shake, function() {
    mano = randint(1, 3)
    if (mano == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mano == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
```

## {Step 13}

¡Vamos a probar tu código!  Presiona el botón blanco **SHAKE** en el simulador de micro:bit o mueve rápidamente tu cursor sobre el simulador. ¿Ves los iconos de piedra, papel y tijeras aparecer aleatoriamente? ⭐ ¡Buen trabajo! ⭐

![Shaking a @boardname@ simulator](/static/mb/projects/rock-paper-scissors/rpssim3.gif)


```blockconfig.global
randint(1, 3)
```

```template
input.onGesture(Gesture.Shake, function() {})
```