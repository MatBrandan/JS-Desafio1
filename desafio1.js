let nombre = prompt("Ingresa tu nombre:")
let saludosVeces = parseInt(prompt("Decí cuantos saludos querés:"))

for (i = 0; i < saludosVeces; i++){
    console.log(`Hola ${nombre}!`)
}
console.log("Me quedé sin saludos!");