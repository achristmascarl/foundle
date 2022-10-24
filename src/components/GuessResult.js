import { c } from "../utils";

function GuessResult({ index, guesses, processingGuess }) {
  const guess = guesses[index];
  const currentlyProcessing = index + 1 === guesses.length;
  console.log(guess);

  return (
    <div
      className={c(
        "w-full h-10 my-2 rounded-md flex flex-row",
        (processingGuess && currentlyProcessing) ?
          "animate-pulse bg-gray-300" :
          "bg-gray-100"
      )}
    >
      {!(processingGuess && currentlyProcessing) && guess && (
        `${guess.name} ${guess.emoji}`
      )}
    </div>
  );
}

export default GuessResult
