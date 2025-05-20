import React from "react";
import { useStorage } from "../utils/storage";

const PetDashboard = () => {
  const [profile] = useStorage("petProfile", {});
  const [weights] = useStorage("petWeights", []);
  const [visits] = useStorage("petVetVisits", []);
  const [vaccines] = useStorage("petVaccines", []);
  const [medicines] = useStorage("petMedicine", []);

  const latestWeight = weights.length > 0 ? weights[weights.length - 1] : null;
  const latestVisit = visits.length > 0 ? visits[visits.length - 1] : null;
  const latestVaccine =
    vaccines.length > 0 ? vaccines[vaccines.length - 1] : null;
  const latestMedicine =
    medicines.length > 0 ? medicines[medicines.length - 1] : null;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-6">
        Dashboard {profile.name || "Pet Name"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center space-x-4">
          {profile.picture ? (
            <img
              src={profile.picture}
              alt="Pet Photo"
              className="w-16 h-16 object-cover rounded-full shadow-md"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm">
              Photo
            </div>
          )}
          <div>
            <h3 className="text-lg font-medium">
              {profile.name || "Name not defined"}
            </h3>
            <p className="text-sm text-gray-600">
              Birth: {profile.dob || "N/A"}
            </p>
            <p className="text-sm text-gray-600">
              Adoption: {profile.adoptionDate || "N/A"}
            </p>
          </div>
        </div>

        {/* Latest Weight */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Latest Weight</h3>
          {latestWeight ? (
            <p className="text-gray-700">
              {latestWeight.weight} kg ({latestWeight.date})
            </p>
          ) : (
            <p className="text-gray-500">There are no weight records.</p>
          )}
        </div>

        {/* Latest Vet Visit */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Latest Vet Visit</h3>
          {latestVisit ? (
            <p className="text-gray-700">
              {latestVisit.date} - {latestVisit.reason}
            </p>
          ) : (
            <p className="text-gray-500">There are no vet visit records.</p>
          )}
        </div>

        {/* Latest Vaccine */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Latest Vaccine</h3>
          {latestVaccine ? (
            <p className="text-gray-700">
              {latestVaccine.name} ({latestVaccine.date})
            </p>
          ) : (
            <p className="text-gray-500">There are no vaccine records.</p>
          )}
        </div>

        {/* Latest Medicine */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Latest Medicine</h3>
          {latestMedicine ? (
            <p className="text-gray-700">
              {latestMedicine.name} ({latestMedicine.dosage}) -{" "}
              {latestMedicine.date}
            </p>
          ) : (
            <p className="text-gray-500">There are no medicine records.</p>
          )}
        </div>

        {/* Personality */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-medium mb-2">Personality</h3>
          <p className="text-gray-700">
            {profile.personality || "Not defined"}
          </p>
        </div>

        {/* Food */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Food</h3>
          <p className="text-gray-700">{profile.food || "Not defined"}</p>
        </div>

        {/* Food Schedule */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-2">Food Schedule</h3>
          <p className="text-gray-700">
            {profile.foodSchedule || "Not defined"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetDashboard;
