function Aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;
}

const alunos = [
    new Aluno('João', 3),
    new Aluno('Maria', 9),
    new Aluno('Pedro', 6),
    new Aluno('Ana', 8),
];

function aprovado(aluno) {
    return aluno.nota >= 6;
}

const alunosAprovados = alunos.filter(aprovado);

console.log(alunosAprovados);