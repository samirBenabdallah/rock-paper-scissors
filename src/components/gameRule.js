const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const SPOCK = "Spock";
const LIZARD = "Lizard";

export function getRandomHand(type) {
  let number = type === "normal" ? 3 : 5;
  let choices = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];
  const randomNumber = Math.floor(Math.random() * 100) % number;
  const result = choices[randomNumber];
  return result;
}
export function hundleGameResult(playerChoice, botChoice ,type = "normal") {
  if (botChoice === playerChoice) return "draw";
  if (type === "normal") {
    switch (playerChoice) {
      case PAPER:
        return botChoice === SCISSORS ? "lose" : "win";
      case ROCK:
        return botChoice === SCISSORS ? "win" : "lose";
      case SCISSORS:
        return botChoice === ROCK ? "lose" : "win";
      default:
        return false;
    }
  }
  switch (playerChoice) {
    case PAPER:
      return [ROCK, SPOCK].includes(botChoice) ? "win" : "lose";
    case ROCK:
      return [LIZARD, SCISSORS].includes(botChoice) ? "win" : "lose";
    case SCISSORS:
      return [PAPER, LIZARD].includes(botChoice) ? "win" : "lose";
    case LIZARD:
      return [PAPER, SPOCK].includes(botChoice) ? "win" : "lose";
    case SPOCK:
      return [SCISSORS, ROCK].includes(botChoice) ? "win" : "lose";
    default:
      return false;
  }
}

export { LIZARD, PAPER, ROCK, SCISSORS, SPOCK };
