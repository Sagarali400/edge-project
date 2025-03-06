import React from "react";
import { useNavigate } from "react-router";

const GameLevel = () => {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      <button  onClick={() => navigate("/easy")} className="btn btn-outline btn-secondary text-2xl px-10 py-7 w-64">
        Easy
      </button>
      <button className="btn btn-accent text-2xl px-10 py-7 btn-outline w-64">
        Medium
      </button>
      <button className="btn btn-info text-2xl px-10 py-7 btn-outline w-64">
        Hard
      </button>
    </div>
  );
};

export default GameLevel;
