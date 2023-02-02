const nomesAlunos = ['Samuel', 'Gabriel', 'Daniel'];
const notaAlunos = nomesAlunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    nota: '6'
  };
  return itemAtual;
});
console.log(notaAlunos);
notaAlunos.push({
  nome: ['Rafael', 'Emanuel'],
  nota: '5'
});
const alunosAprovados = notaAlunos.every(function (item) {
  return item.nota >= '6';
});
console.log(alunosAprovados);
const nomeAlunosAprovados = notaAlunos.filter(function (item) {
  return item.nota >= '6';
});
console.log(nomeAlunosAprovados);