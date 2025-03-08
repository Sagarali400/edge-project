import { useNavigate } from "react-router";

const HighestScore = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const words = [
    "bat",
    "cat",
    "dog",
    "egg",
    "fox",
    "hat",
    "jet",
    "man",
    "pen",
    "rat",
    "sun",
    "tap",
    "top",
    "sit",
    "pat",
    "log",
    "bun",
    "lip",
    "pig",
    "mat",
    "nut",
    "pan",
    "fan",
    "pin",
    "kit",
    "dot",
    "cup",
    "pot",
    "box",
    "fig",
    "sit",
    "cap",
    "bed",
    "cot",
    "pet",
    "wet",
    "pit",
    "tot",
    "zip",
    "rip",
    "jug",
    "ram",
    "rod",
    "bun",
    "bud",
    "bag",
    "bid",
    "dig",
    "wig",
    "pup",
    "bus",
    "mop",
    "hop",
    "fan",
    "fan",
    "pit",
    "dot",
    "gun",
    "but",
    "ran",
    "tan",
    "mat",
    "cot",
    "fit",
    "web",
    "got",
    "hat",
    "pan",
    "sit",
    "cut",
    "dot",
    "run",
    "sip",
    "cup",
    "zip",
    "bet",
    "dip",
    "tan",
    "box",
    "run",
    "bat",
    "log",
    "nut",
    "pan",
    "pin",
    "dog",
    "jet",
    "kit",
    "rip",
  ];
  const mediumWord = [
    "word",
    "lamp",
    "step",
    "card",
    "bake",
    "mile",
    "sing",
    "tank",
    "jump",
    "fold",
    "mint",
    "trap",
    "grid",
    "gold",
    "rest",
    "coin",
    "help",
    "grow",
    "sick",
    "rake",
    "stop",
    "trip",
    "pale",
    "bore",
    "stone",
    "quiz",
    "boot",
    "flip",
    "test",
    "snug",
    "roll",
    "more",
    "leaf",
    "bite",
    "love",
    "tear",
    "core",
    "fool",
    "bash",
    "trap",
    "head",
    "nest",
    "cast",
    "fire",
    "rule",
    "loop",
    "maze",
    "bore",
    "hop",
    "tuck",
    "sure",
    "pace",
    "life",
    "mark",
    "done",
    "dash",
    "wake",
    "high",
    "slow",
    "care",
    "lead",
    "bark",
    "fair",
    "race",
    "turn",
    "belt",
    "blow",
    "fork",
    "bake",
    "blow",
    "send",
    "view",
    "talk",
    "pump",
    "band",
    "rock",
    "show",
    "mine",
    "take",
    "code",
    "lock",
    "bend",
    "book",
    "jump",
    "blue",
    "cake",
    "fine",
    "mark",
    "flip",
    "bake",
    "flip",
    "skip",
    "thin",
    "chip",
    "tip",
    "net",
    "bat",
    "pen",
    "ram",
    "fan",
  ];
  const hardWords = [
    "apple",
    "table",
    "chair",
    "smile",
    "plane",
    "liver",
    "water",
    "sweet",
    "straw",
    "grape",
    "lemon",
    "stone",
    "bread",
    "piano",
    "train",
    "apple",
    "peach",
    "tiger",
    "vowel",
    "flame",
    "shoes",
    "black",
    "color",
    "drake",
    "party",
    "drink",
    "light",
    "music",
    "money",
    "march",
    "stone",
    "plant",
    "heart",
    "pride",
    "glove",
    "quick",
    "grape",
    "sweet",
    "youth",
    "peace",
    "river",
    "brave",
    "chose",
    "click",
    "spark",
    "climb",
    "sight",
    "moist",
    "crisp",
    "clean",
    "bake",
    "pink",
    "fire",
    "leaf",
    "chip",
    "jump",
    "ship",
    "mint",
    "roll",
    "cold",
    "bend",
    "lace",
    "walk",
    "cook",
    "play",
    "talk",
    "show",
    "hurt",
    "mark",
    "code",
    "flip",
    "push",
    "trip",
    "turn",
    "slip",
    "pull",
    "kick",
    "grab",
    "skip",
    "beat",
    "wood",
    "bone",
    "task",
    "mind",
    "tone",
    "pace",
    "rate",
    "coat",
    "bath",
    "turn",
    "hope",
    "meal",
    "port",
    "shop",
    "lake",
    "star",
    "note",
    "game",
    "push",
    "fire",
    "fire",
    "rock",
    "roll",
    "blue",
    "rain",
    "goal",
    "land",
    "wave",
    "buzz",
    "trip",
  ];

  const handleBackClick = () => {
    navigate(-1); // This will navigate to the previous page in history
  };

  return (
    <div className="text-center p-5">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Easy level word learning
        </div>
        <div className="collapse-content text-sm">
          {/* Render words inline using flexbox */}
          <div className="flex flex-wrap justify-center gap-2">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 border rounded-md"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Medium level word learning.
        </div>
        <div className="collapse-content text-sm">
          {/* Render words inline using flexbox */}
          <div className="flex flex-wrap justify-center gap-2">
            {mediumWord.map((word, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 border rounded-md"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          {/* Render words inline using flexbox */}
          <div className="flex flex-wrap justify-center gap-2">
            {hardWords.map((word, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 border rounded-md"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline btn-accent btn-wide mt-5"
        onClick={handleBackClick}
      >
        Back
      </button>
    </div>
  );
};

export default HighestScore;
