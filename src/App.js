import React, { useState } from "react";
import PetWeightTracker from "./components/PetWeightTracker";
import PetVetVisits from "./components/PetVetVisits";
import PetVaccines from "./components/PetVaccines";
import PetMedicine from "./components/PetMedicine";
import PetProfile from "./components/PetProfile";
import PetDashboard from "./components/PetDashboard";

const App = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <PetDashboard />;
      case "profile":
        return <PetProfile />;
      case "weight":
        return <PetWeightTracker />;
      case "visits":
        return <PetVetVisits />;
      case "vaccines":
        return <PetVaccines />;
      case "medicine":
        return <PetMedicine />;
      default:
        return <PetDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">PetCare</h1>
        <div className="flex justify-center mb-8 space-x-4 flex-wrap gap-2">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === "dashboard"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setCurrentPage("profile")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === "profile"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            profile
          </button>
          <button
            onClick={() => setCurrentPage("weight")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === "weight"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            weight
          </button>
          <button
            onClick={() => setCurrentPage("visits")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === "visits"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            visits
          </button>
          <button
            onClick={() => setCurrentPage("vaccines")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === "vaccines"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            vaccines
          </button>
          <button
            onClick={() => setCurrentPage("medicine")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === "medicine"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            medicine
          </button>
        </div>
        {renderPage()}
      </div>
    </div>
  );
};

export default App;

// DONE
