import React, { useState } from "react";
import { useStorage } from "../utils/storage";

const PetWeightTracker = () => {
  const [weights, setWeights] = useStorage("petWeights", []);
  const [newWeight, setNewWeight] = useState("");
  const [weightDate, setWeightDate] = useState("");

  const addWeight = () => {
    if (newWeight && weightDate) {
      const updatedWeights = [
        ...weights,
        { weight: parseFloat(newWeight), date: weightDate },
      ];
      setWeights(updatedWeights);
      setNewWeight("");
      setWeightDate("");
    }
  };

  const deleteWeight = (index) => {
    const updatedWeights = weights.filter((_, i) => i !== index);
    setWeights(updatedWeights);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Weight Tracker</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="number"
          placeholder="Weight (kg)"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <input
          type="date"
          value={weightDate}
          onChange={(e) => setWeightDate(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <button
          onClick={addWeight}
          className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Add Weight
        </button>
      </div>
      <ul className="space-y-3">
        {weights.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <span>
              {item.weight} kg - {item.date}
            </span>
            <button
              onClick={() => deleteWeight(index)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetWeightTracker;
