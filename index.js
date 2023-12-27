/* guerreiro, mago, monge, ninja */ 

class Heroi {
    constructor(nome = "Desconhecido", idade = null, tipo = "Desconhecido"){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        const ataques = {
            guerreiro: "espada",
            mago: "magia",
            monge: "artes marciais",
            ninja: "shuriken"
        };
        const ataqueHeroi = ataques[this.tipo];

        if (ataqueHeroi) {
            return `O herói ${this.nome} do ${this.tipo} atacou usando ${ataqueHeroi}`;
        } else {
            return "Ataque falhou!";
        }
    }
    
}

let novoHeroi = new Heroi("Boni Souza", 17, "mago");

console.log(novoHeroi.ataque());