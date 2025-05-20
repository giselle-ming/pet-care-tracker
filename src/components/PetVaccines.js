import React, { useState } from "react";
import { useStorage } from "../utils/storage";

const commonCatVaccines = [
  "Rabies",
  "Feline Triple (Rhinotracheitis, Calicivirus, Panleukopenia)",
  "Feline Leukemia",
  "Feline Chlamydia",
  "Feline Infectious Peritonitis (FIP)",
];

const PetVaccines = () => {
  const [vaccines, setVaccines] = useStorage("petVaccines", []);
  const [vaccineName, setVaccineName] = useState("");
  const [vaccineDate, setVaccineDate] = useState("");

  const addVaccine = () => {
    if (vaccineName && vaccineDate) {
      const updatedVaccines = [
        ...vaccines,
        { name: vaccineName, date: vaccineDate },
      ];
      setVaccines(updatedVaccines);
      setVaccineName("");
      setVaccineDate("");
    }
  };

  const deleteVaccine = (index) => {
    const updatedVaccines = vaccines.filter((_, i) => i !== index);
    setVaccines(updatedVaccines);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Vaccines</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          value={vaccineName}
          onChange={(e) => setVaccineName(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="">Select a vaccine</option>
          {commonCatVaccines.map((vaccine, index) => (
            <option key={index} value={vaccine}>
              {vaccine}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {vaccineName === "Other" && (
          <input
            type="text"
            placeholder="Specify the vaccine"
            value={vaccineName}
            onChange={(e) => setVaccineName(e.target.value)}
            className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        )}
        <input
          type="date"
          value={vaccineDate}
          onChange={(e) => setVaccineDate(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <button
          onClick={addVaccine}
          className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Add Vaccine
        </button>
      </div>
      <ul className="space-y-3">
        {vaccines.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <span>
              {item.name} - {item.date}
            </span>
            <button
              onClick={() => deleteVaccine(index)}
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

export default PetVaccines;
