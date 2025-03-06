import { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const EasyMode = () => {
  const words = [
    "ant", "bat", "cat", "dog", "egg", "fox", "hat", "jet", "man", "pen",
    "rat", "sun", "tap", "top", "sit", "pat", "log", "bun", "lip", "pig",
    "mat", "nut", "pan", "pat", "fan", "tap", "pin", "kit", "dot", "cup",
    "pot", "top", "bat", "box", "fox", "fig", "sun", "sit", "hat", "cap",
    "pan", "lip", "log", "bed", "cot", "pet", "wet", "pit", "hat", "tot",
    "net", "bet", "pat", "zip", "rip", "tip", "jug", "ram", "pan", "rod",
    "sun", "bun", "bud", "bag", "bid", "dig", "wig", "pup", "bus", "mop",
    "hop", "fan", "fan", "pit", "dot", "gun", "jet", "tap", "but", "ran",
    "fan", "tan", "mat", "cot", "lip", "fit", "top", "web", "got", "hat",
    "pan", "sit", "cut", "top", "pat", "dot", "run", "pin", "sip", "cup",
    "pan", "zip", "bet", "fig", "cut", "dip", "hat", "tan", "box", "log"
  ];

  const [randomWord, setRandomWord] = useState('');
  const [userInput, setUserInput] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0); // Track correct answers
  const totalQuestions = 10; // Set total number of questions

  // Function to scramble the word
  const scrambleWord = (word) => {
    if (word.length <= 2) return word; // If word is too short, don't scramble
    if (word.length === 3) {
      // For words with exactly 3 letters, swap the first and last letters
      return word[2] + word[1] + word[0];
    }
  };

  // Function to get a random word and update the state
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
    setUserInput(''); // Clear input field when a new word is shown
  };

  // Function to check if the user input is correct
  const handleSubmit = () => {
    if (userInput.trim() === '') {
      toast.error('You did not enter any word.'); // Toast for empty input
    } else if (userInput.toLowerCase() === randomWord.toLowerCase()) {
      toast.success('The word is correct!'); // Correct toast message
      setCorrectAnswers(prev => prev + 1); // Increment correct answers
      getRandomWord(); // Go to the next word automatically
    } else {
      toast.error('Try again, the word is incorrect.'); // Error toast message
    }
    setUserInput(''); // Clear input field after submitting
  };

  // Initialize with a random word when the component mounts
  useEffect(() => {
    getRandomWord(); // Call to set a random word when the component mounts
  }, []);

  return (
    <div className="text-center space-y-5">
      <div className="grid grid-cols-3">
        <p></p>
        <h2 className="text-3xl font-bold">Incorrect Word</h2>
        <p>Answers: {correctAnswers}/{totalQuestions}</p> {/* Display number of correct answers */}
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
          <button className="btn btn-outline" onClick={handleSubmit}>Submit</button>
        </div>
      </fieldset>

      <button className="btn btn-outline btn-success" onClick={getRandomWord}>Next Word</button>

      <Toaster /> {/* Place Toaster here to display toast messages */}
    </div>
  );
};

export default EasyMode;
