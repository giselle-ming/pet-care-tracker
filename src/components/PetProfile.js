import React, { useState } from "react";
import { useStorage } from "../utils/storage";

const PetProfile = () => {
  const [profile, setProfile] = useStorage("petProfile", {
    name: "",
    picture: "",
    dob: "",
    adoptionDate: "",
    personality: "",
    food: "",
    foodSchedule: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, picture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          {profile.picture ? (
            <img
              src={profile.picture}
              alt="Pet"
              className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
              No photo
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureUpload}
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Adoption Date
            </label>
            <input
              type="date"
              name="adoptionDate"
              value={profile.adoptionDate}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Personality
            </label>
            <textarea
              name="personality"
              value={profile.personality}
              onChange={handleInputChange}
              rows="3"
              className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food
            </label>
            <input
              type="text"
              name="food"
              value={profile.food}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Schedule
            </label>
            <input
              type="text"
              name="foodSchedule"
              value={profile.foodSchedule}
              onChange={handleInputChange}
              className="w-full mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
