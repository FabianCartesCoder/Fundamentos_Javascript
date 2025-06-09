// Uso de strings Ejemplo

function usarString() {
  let nombre = prompt("Ingrese su nombre: "); //Variable tipo texto
  let primeraLetra = nombre[0]; //Asignamos valor a primera Letra con poscición 0 de nombre
  let ultimaLetra = nombre[nombre.length - 1]; //Uso de lenght --> Largo de una variable
  alert("Primera letra es: " + primeraLetra +
    "\nÚltima letra es: " + ultimaLetra
  );
}

function manipularApellido() {
  let apellido = prompt("Ingrese su apellido: "); //Variable tipo texto
  let segundaLetraApellido = apellido[1]; //Asignamos valor a primera Letra con poscición 0 de nombre
  let penultimaLetraApellido = apellido[apellido.length - 2]; //Uso de lenght --> Largo de una variable
  alert("Segunda letra es: " + segundaLetraApellido +
    "\nPenultima letra es: " + penultimaLetraApellido
  );
}

