

class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

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


atacar() {
    const ataque = this.verificaTipo();
    return `O ${this.tipo} atacou usando ${ataque}.`;
}
}




function criarHeroi() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;

    const heroi = new Hero(nome, idade, tipo);

    
    document.getElementById('resultado').innerText = heroi.atacar();
}




