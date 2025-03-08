import { useState, useEffect } from "react";

const Hard = () => {
  const words = [
    "apple", "table", "chair", "smile", "plane", "liver", "water", "sweet", "straw", "grape",
    "lemon", "stone", "bread", "piano", "train", "apple", "peach", "tiger", "vowel", "flame",
    "shoes", "black", "color", "drake", "party", "drink", "light", "music", "money", "march",
    "stone", "plant", "heart", "pride", "glove", "quick", "grape", "sweet", "youth", "peace",
    "river", "brave", "chose", "click", "spark", "climb", "sight", "moist", "crisp", "clean",
    "bake", "pink", "fire", "leaf", "chip", "jump", "ship", "mint", "roll", "cold",
    "bend", "lace", "walk", "cook", "play", "talk", "show", "hurt", "mark", "code",
    "flip", "push", "trip", "turn", "slip", "pull", "kick", "grab", "skip", "beat",
    "wood", "bone", "task", "mind", "tone", "pace", "rate", "coat", "bath", "turn",
    "hope", "meal", "port", "shop", "lake", "star", "note", "game", "push", "fire",
    "fire", "rock", "roll", "blue", "rain", "goal", "land", "wave", "buzz", "trip"
  ];

  const [randomWord, setRandomWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [topScores, setTopScores] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [answerHistory, setAnswerHistory] = useState([]);
  const totalQuestions = 10;

  const scrambleWord = (word) => {
    if (word.length <= 2) return word;
    let swappedFirstTwo = word[1] + word[0] + word.slice(2, -2) + word.slice(-2);
    let swappedLastTwo = swappedFirstTwo.slice(0, -2) + swappedFirstTwo.slice(-1) + swappedFirstTwo.slice(-2, -1);
    return swappedLastTwo[swappedLastTwo.length - 1] + swappedLastTwo.slice(1, -1) + swappedLastTwo[0];
  };

  const recordAttempt = () => {
    if (randomWord) {
      const isCorrect = userInput.trim().toLowerCase() === randomWord.toLowerCase();
      setAnswerHistory(prevHistory => [
        ...prevHistory,
        { attempt: totalAttempts + 1, given: userInput, correct: randomWord, isCorrect }
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
      setTimeLeft(30);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getRandomWord();
    }, 0);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      getRandomWord();
    }
  }, [timeLeft]);

  useEffect(() => {
    if (totalAttempts === totalQuestions) {
      if (correctAnswers > bestScore) {
        setBestScore(correctAnswers);
      }
      
      const updatedTopScores = [...topScores, correctAnswers]
        .sort((a, b) => b - a)
        .slice(0, 5);
      setTopScores(updatedTopScores);
    }
  }, [totalAttempts, correctAnswers]);

  const timeClass = timeLeft <= 5 ? "text-red-600 font-bold" : "text-black";

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
        <p>Answers: {totalAttempts}/{totalQuestions} <br />Time Left: <span className={timeClass}>{timeLeft}s</span></p>
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

export default Hard;
