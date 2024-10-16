
let nome;
let idade;
let tipo;


class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

const heroi1 = new hero("Hercules", 24, "Guerreiro");


atacar(heroi1.tipo, verificaTipo(heroi1.tipo));

console.log(heroi1);

function verificaTipo(tipo){
    if(tipo === "mago"){
        return "magia";
    }else if(tipo === "Guerreiro"){
        return "espada";
    }else if(tipo === "Monge"){
        return "artes marciais";
    }else if(tipo === "Ninja"){
        return "shuriken";
    }else{
        return "Ops,o tipo não existe :(";
    }
}

function atacar(tipo, ataque){
    console.log("O "+ tipo+" atacou usando "+ ataque);
}
