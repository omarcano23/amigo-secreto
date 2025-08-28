let amigos = [];

// Añadir un nombre
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("No se agregó un dato. Por favor escribe un nombre.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
}

// Mostrar la lista en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay nombres en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSorteado}</strong></li>`;

  // Vaciar la lista de amigos
  amigos = [];
  document.getElementById("listaAmigos").innerHTML = "";
}
