const nomes = [];
// Certifique-se de que o DOM esteja completamente carregado antes de adicionar os event listeners
// Isso garante que os elementos HTML estejam disponíveis para serem manipulados
document.addEventListener("DOMContentLoaded", () => {
    // Liga o clique do botão à função adicionarAmigo
    document.getElementById("btnAdicionar").addEventListener("click", adicionarAmigo);
    // Liga o clique do botão de sortear
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});

function adicionarAmigo() {
    const campo = document.getElementById("amigo");
    // Verifica se o campo existe no DOM
    if (!campo) {
        console.error("Elemento #amigo não encontrado no DOM");   // Se o campo não existir, exibe um erro no console
        return;
    }
    // Obtém o valor do campo e remove espaços em branco
    const nome = campo.value.trim();
    // Verifica se o nome é válido
    if (nome === "") {
        alert("Por favor, insira um nome válido.");    // Se o nome estiver vazio, exibe um alerta
        return;
    }
    // Adiciona o nome à lista
    nomes.push(nome);
    campo.value = "";
    atualizarLista();
}
// Função para atualizar a lista de amigos no DOM
// Esta função é chamada sempre que um novo nome é adicionado
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");    // Obtém o elemento da lista de amigos
    // Limpa a lista antes de adicionar os novos nomes
    lista.innerHTML = "";
    nomes.forEach((nome) => {
        const li = document.createElement("li");   // Cria um novo elemento de lista
        li.textContent = nome;  // Define o texto do item da lista como o nome do amigo
        lista.appendChild(li);  // Adiciona o novo item à lista visualmente
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");    // Verifica se há nomes na lista antes de sortear
        return;
    }
    // Gera um índice aleatório baseado no tamanho da lista de nomes
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];
    document.getElementById("resultado").textContent =
        `O amigo secreto é: ${amigoSorteado} 🎉`;
}
