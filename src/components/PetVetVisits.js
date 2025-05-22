import React, { useState } from "react";
import { useStorage } from "../utils/storage";

const commonVisitReasons = [
  "Annual check-up",
  "Vaccination",
  "Deworming",
  "Digestive problems",
  "Skin problems",
  "Injury",
  "Neutering/Spaying",
  "Respiratory problems",
  "Urinary problems",
  "Dental problems",
];

const PetVetVisits = () => {
  const [visits, setVisits] = useStorage("petVetVisits", []);
  const [visitDate, setVisitDate] = useState("");
  const [visitReason, setVisitReason] = useState("");

  const addVisit = () => {
    if (visitDate && visitReason) {
      const updatedVisits = [
        ...visits,
        { date: visitDate, reason: visitReason },
      ];
      setVisits(updatedVisits);
      setVisitDate("");
      setVisitReason("");
    }
  };

  const deleteVisit = (index) => {
    const updatedVisits = visits.filter((_, i) => i !== index);
    setVisits(updatedVisits);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Veterinary Visits</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          value={visitReason}
          onChange={(e) => setVisitReason(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="">Select a reason</option>
          {commonVisitReasons.map((reason, index) => (
            <option key={index} value={reason}>
              {reason}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {visitReason === "Other" && (
          <input
            type="text"
            placeholder="Specify the reason"
            value={visitReason}
            onChange={(e) => setVisitReason(e.target.value)}
            className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          />
        )}
        <input
          type="date"
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <button
          onClick={addVisit}
          className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Add Visit
        </button>
      </div>
      <ul className="space-y-3">
        {visits.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <span>
              {item.date} - {item.reason}
            </span>
            <button
              onClick={() => deleteVisit(index)}
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

export default PetVetVisits;
