import { useState } from "react";
import GameLevel from "./GameLevel";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Instruction from "./Instruction";


const StartGame = () => {
    const [showComponent, setShowComponent] = useState(false); // Game started state
    const [showHelp, setShowHelp] = useState(false); 
  
    // Toggle instructions visibility when Help button is clicked
    const handleHelpClick = () => {
      setShowHelp((prev) => !prev); // Toggle between true and false
    };
  
    return (
      <div className="text-center">
        {/* Show "Play Now" and "Instruction" buttons before the game starts */}
        {!showComponent && (
          <>
            <button
              onClick={() => setShowComponent(true)}
              className="text-3xl p-7 rounded-3xl btn btn-accent font-bold mt-10"
            >
              Play Now
            </button>
            <br />
            {/* Instruction Button */}
            <button
              onClick={handleHelpClick} // Toggle instructions when clicked
              className="text-2xl p-5 rounded-3xl btn btn-info font-bold mt-4"
            >
              <IoIosHelpCircleOutline />
            </button>
  
            {/* Show Instructions if Help button is clicked */}
            {showHelp && <Instruction />}
          </>
        )}
  
        {/* Show GameLevel, "Go Back" button, and Help icon after the game starts */}
        {showComponent && (
          <>
            <GameLevel />
  
            {/* "Go Back" button */}
            <button
              onClick={() => setShowComponent(false)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Go Back
            </button>
            
            {/* Help Button */}
            {/* Help button is not shown after the game starts */}
            <button
              onClick={handleHelpClick} // Toggle instructions when clicked
              className="btn btn-outline ml-4"
            >
              <IoIosHelpCircleOutline size={24} />
            </button>
  
            {/* Show Instructions if Help button is clicked */}
            {showHelp && <Instruction />}
          </>
        )}
      </div>
    );
  };
  
  export default StartGame;
