

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

 // Método para verificar o tipo e definir o ataque
 verificaTipo() {
    if (this.tipo === "mago") {
        return "magia";
    } else if (this.tipo === "Guerreiro") {
        return "espada";
    } else if (this.tipo === "Monge") {
        return "artes marciais";
    } else if (this.tipo === "Ninja") {
        return "shuriken";
    } else {
        return "Ops, o tipo não existe :(";
    }
}

// Método para realizar o ataque
atacar() {
    const ataque = this.verificaTipo();
    return `O ${this.tipo} atacou usando ${ataque}.`;
}
}




function criarHeroi() {
    // Pegando valores do input
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;

    // Criando um novo herói com os valores fornecidos
    const heroi = new Hero(nome, idade, tipo);

    // Mostrando o resultado do ataque no DOM
    document.getElementById('resultado').innerText = heroi.atacar();
}