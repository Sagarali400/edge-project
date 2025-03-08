
const GameOver = () => {
    return (
        <div className="text-center space-y-5">
          <h2 className="text-3xl font-bold">Game Over</h2>
          <p className="text-xl">Correct Answers: {correctAnswers}/{totalQuestions}</p>
          <button className="btn btn-outline btn-success" onClick={() => window.location.reload()}>
            Restart Game
          </button>
        </div>
      );
};

export default GameOver;