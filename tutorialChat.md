# Micro chat

## {Introduction @unplugged}

![Dos @boardname@ conectadas vía radio](/static/mb/projects/a9-radio.png)

Usa la señal de radio de la micro:bit para mandar y recibir mensajes entre micro:bits.

## {Step 1}

De la categoría `||radio:Radio||` de la Caja de herramientas, arrastra un bloque `||radio:radio establecer grupo||` y déjalo dentro del bloque `||basic:al iniciar||`. El grupo representa el canal a través del que enviaremos los mensajes. Solo las micro:bit que estén en el mismo grupo podrán enviar y recibir mensajes entre ellas.

```blocks
radio.setGroup(1)
```

## {Step 2}

De la categoría `||input:Entrada||` de la Caja de herramientas arrastra un bloque `||input:al presionarse el botón A||` al Espacio de trabajo.

```blocks
input.onButtonPressed(Button.A, function() {})
```

## {Step 3}

Desde la categoría `||radio:Radio||` arrastra un bloque `||radio:radio enviar cadena||`, déjalo dentro del bloque `||input:al presionarse el botón A||` y escribe un mensaje. Cuando presionemos el botón A en nuestro micro:bit, enviaremos este mensaje a todos los micro:bits cercanos en el grupo 1.

```blocks
input.onButtonPressed(Button.A, function() {
    radio.sendString("Micro Chat!")
})
```

## {Step 4}

Desde la categoría `||radio:Radio||`, arrastra un bloque `||radio:al recibir cadena de radio||` al Espacio de trabajo.

```blocks
radio.onReceivedString(function (receivedString) {
})
```

## {Step 5}

Desde la categoría `||basic:Básico||`, toma un bloque `||basic:mostrar cadena||` y colócalo dentro del bloque `||radio:al recibir cadena de radio||`.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!");
})
```

## {Step 6}

Extrae el bloque de variable `||variables:recibirCadena||` del bloque `||radio:al recibir cadena||` y colócalo dentro del bloque `||basic:mostrar cadena||` reemplazando "Hello!"

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString);
})
```

## {Step 7}

¡Probemos nuestro código! En el simulador en pantalla pulsa el botón **A**. Deberías ver aparecer un segundo @boardname@. Ahora prueba a volver a pulsar **A** de nuevo. ¿Ves tu mensaje aparecer en el segundo micro:bit? ⭐ ¡Buen trabajo! ⭐

```blocks
input.onButtonPressed(Button.A, function() {
    radio.sendString("Micro Chat!");
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString);
})
```

## {Step 8}

Ve más allá: intenta usar botones diferentes para enviar mensajes variados o envía mensajes secretos a diferentes grupos de radio 

```template
//
```

```package
radio
```