const listaAmigos = [];

        function agregarAmigo() {
            const input = document.getElementById("amigo");
            const nombre = input.value.trim();

            if (nombre === "") {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }

            listaAmigos.push(nombre);
            actualizarLista();
            input.value = "";
        }

        function actualizarLista() {
            const ul = document.getElementById("listaAmigos");
            ul.innerHTML = "";
            listaAmigos.forEach((amigo, index) => {
                const li = document.createElement("li");
                li.textContent = `${index + 1}. ${amigo}`;
                ul.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (listaAmigos.length === 0) {
                alert("No hay nombres en la lista para realizar el sorteo.");
                return;
            }

            const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
            const amigoSorteado = listaAmigos[indiceAleatorio];

            const resultado = document.getElementById("resultado");
            resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
        }