const player1 = {
  nome: "Mario",
  velocidade: 4,
  manobrabilidade: 3,
  poder: 3,
  pontos: 0,
};

const player2 = {
  nome: "Luigi",
  velocidade: 4,
  poder: 4,
  pontos: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

 // A presença dos parênteses no início e fim tornam a função auto invocável (auto invoke), permitindo que seja executada durante o Run do projeto
(async function main() {
  console.log(`Que comece a corrida entre ${player1.nome} e ${player2.nome}! 🏁`);
})(); 