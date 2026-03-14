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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;
    case random < 0.66:
      result = "Curva";
      break;
    default:
      result = "Confronto";
  }

  return result;
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}!`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);
  }

  let diceResult1 = await rollDice();
  let diceResult2 = await rollDice();

  // Teste de habilidade
  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;
}

// A presença dos parênteses no início e fim tornam a função auto invocável (auto invoke), permitindo que seja executada durante o Run do projeto
(async function main() {
  console.log(
    `Que comece a corrida entre ${player1.nome} e ${player2.nome}! Que vença o melhor! 🏁 \n`,
  );

  await playRaceEngine(player1, player2);
})();
