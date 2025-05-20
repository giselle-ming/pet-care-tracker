import React, { useState } from "react";
import { useStorage } from "../utils/storage";

const PetMedicine = () => {
  const [medicines, setMedicines] = useStorage("petMedicine", []);
  const [medicineName, setMedicineName] = useState("");
  const [medicineDate, setMedicineDate] = useState("");
  const [medicineDosage, setMedicineDosage] = useState("");

  const addMedicine = () => {
    if (medicineName && medicineDate && medicineDosage) {
      const updatedMedicines = [
        ...medicines,
        { name: medicineName, date: medicineDate, dosage: medicineDosage },
      ];
      setMedicines(updatedMedicines);
      setMedicineName("");
      setMedicineDate("");
      setMedicineDosage("");
    }
  };

  const deleteMedicine = (index) => {
    const updatedMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(updatedMedicines);
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Medicine</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Medicine Name"
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <input
          type="date"
          value={medicineDate}
          onChange={(e) => setMedicineDate(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <input
          type="text"
          placeholder="Dosage"
          value={medicineDosage}
          onChange={(e) => setMedicineDosage(e.target.value)}
          className="flex-grow px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <button
          onClick={addMedicine}
          className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Add Medicine
        </button>
      </div>
      <ul className="space-y-3">
        {medicines.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <span>
              {item.name} - {item.dosage} - {item.date}
            </span>
            <button
              onClick={() => deleteMedicine(index)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetMedicine;
