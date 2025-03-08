import { useState, useEffect } from "react";

const Medium = () => {
  const words = [
    "word", "lamp", "step", "card", "bake", "mile", "sing", "tank", "jump", "fold", 
    "mint", "trap", "grid", "gold", "rest", "coin", "help", "grow", "sick", "rake", 
    "stop", "trip", "pale", "bore", "stone", "quiz", "boot", "flip", "test", "snug", 
    "roll", "more", "leaf", "bite", "love", "tear", "core", "fool", "bash", "trap", 
    "head", "nest", "cast", "fire", "rule", "loop", "maze", "bore", "hop", "tuck", 
    "sure", "pace", "life", "mark", "done", "dash", "wake", "high", "slow", "care", 
    "lead", "bark", "fair", "race", "turn", "belt", "blow", "fork", "bake", "blow", 
    "send", "view", "talk", "pump", "band", "rock", "show", "mine", "take", "code", 
    "lock", "bend", "book", "jump", "blue", "cake", "fine", "mark", "flip", "bake", 
    "flip", "skip", "thin", "chip", "tip", "net", "bat", "pen", "ram", "fan", 
  ];

  const [randomWord, setRandomWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [answerHistory, setAnswerHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Timer starts at 30 seconds
  const totalQuestions = 10;

  // Scramble word function
  const scrambleWord = (word) => {
    if (word.length <= 2) return word; // If the word is too short, no swap

    // Step 1: Swap the first two letters
    let swappedFirstTwo = word[1] + word[0] + word.slice(2, -2) + word.slice(-2);

    // Step 2: Swap the last two letters
    let swappedLastTwo = swappedFirstTwo.slice(0, -2) + swappedFirstTwo.slice(-1) + swappedFirstTwo.slice(-2, -1);

    // Step 3: Swap the first and last letters
    return swappedLastTwo[swappedLastTwo.length - 1] + swappedLastTwo.slice(1, -1) + swappedLastTwo[0];
  };

  const recordAttempt = () => {
    if (randomWord) {
      const isCorrect = userInput.trim().toLowerCase() === randomWord.toLowerCase();
      setAnswerHistory(prevHistory => [
        ...prevHistory, 
        { attempt: totalAttempts + 1, given: userInput || "No input", correct: randomWord, isCorrect }
      ]);

      if (isCorrect) {
        setCorrectAnswers(prev => prev + 1);
      }
    }
  };
  
  const getRandomWord = () => {
    if (totalAttempts < totalQuestions) {
      recordAttempt();
      setTotalAttempts(prev => prev + 1);

      const randomIndex = Math.floor(Math.random() * words.length);
      setRandomWord(words[randomIndex]);
      setUserInput('');
      setTimeLeft(30); // Reset timer for the new word
    }
  };

  useEffect(() => {
    // Call getRandomWord only after the first render (after mounting)
    const timeoutId = setTimeout(() => {
      getRandomWord();
    }, 0);

    // Cleanup timeout when component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      getRandomWord(); // Automatically go to the next word when time runs out
    }
  }, [timeLeft]);

  if (totalAttempts >= totalQuestions) {
    return (
      <div className="text-center space-y-5">
        <h2 className="text-3xl font-bold">Game Over</h2>
        <p className="text-2xl">Correct Answers: {correctAnswers}/{totalQuestions}</p>

        <button 
          className="btn btn-outline btn-info mt-3"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide Answers" : "See Answers"}
        </button><br />

        {showHistory && (
          <div className="mt-4 p-4 border rounded-lg bg-gray-400">
            <h3 className="text-lg font-bold">Answer History:</h3>
            <ul className="text-lg">
              {answerHistory.map((entry, index) => (
                <li key={index}>
                  <h2 className="text-xl">
                    {entry.attempt}. Your Answer: 
                    <span className={`font-bold ${entry.isCorrect ? 'text-blue-700' : 'text-red-600'}`}>
                      {entry.given} {entry.isCorrect ? '✅' : '❌'}
                    </span>
                  </h2> 
                  Correct answer: <span className="text-teal-700 text-xl font-bold">{entry.correct}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="btn btn-outline btn-success mt-3" onClick={() => window.location.reload()}>
          Restart Game
        </button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-5">
      <div className="grid grid-cols-3">
        <p></p>
        <h2 className="text-3xl font-thin">Guess the correct Word</h2>
        <p>Answers: {totalAttempts}/{totalQuestions} <br />Time Left: {timeLeft}s</p>
      </div>
      <h1 className="text-3xl font-bold">{scrambleWord(randomWord)}</h1>

      <fieldset className="fieldset text-center mx-auto">
        <legend className="fieldset-legend justify-center text-xl">What is the correct word?</legend>
        <div className="flex items-center justify-center space-x-4">
          <input
            type="text"
            className="input text-center"
            placeholder="Type here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button className="btn btn-outline" onClick={getRandomWord}>Submit</button>
        </div>
      </fieldset>

      <button className="btn btn-outline btn-success" onClick={getRandomWord}>Next Word</button>
    </div>
  );
};

export default Medium;
