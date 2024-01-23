"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Chart from "./Chart";

function GymWorkoutTracker() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [startingReps, setStartingReps] = useState("");
  const [startingWeight, setStartingWeight] = useState("");
  const [endingReps, setEndingReps] = useState("");
  const [endingWeight, setEndingWeight] = useState("");
  const [workoutData, setWorkoutData] = useState({});
  const [name, setName] = useState(""); // Added name state

  const workouts = [
    "Bench Press",
    "Squat",
    "Deadlift",
    "Shoulder Press",
    "Quad Curls",
    "Hamstring Curls",
    "Leg Press",
    "Calves",
    "Glute bridges",
    "Hip thrusts",
    "Walking lunges",
    "Single Leg Press",
    "Romain Deadlifts",
    "Hyper Extensions",
    "Lat Pulldown",
    "Back Row",
    "Curls",
    "Tricep Press",
    "Dips",

    // Add more weight training workouts here
  ];

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (event) => {
    setSelectedDate(formatDate(event.target.value));
  };

  const handleWorkoutChange = (event) => {
    setSelectedWorkout(event.target.value);
  };

  const handleStartingRepsChange = (event) => {
    setStartingReps(event.target.value);
  };

  const handleStartingWeightChange = (event) => {
    setStartingWeight(event.target.value);
  };

  const handleEndingRepsChange = (event) => {
    setEndingReps(event.target.value);
  };

  const handleEndingWeightChange = (event) => {
    setEndingWeight(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedDate || !selectedWorkout || !name) {
      return; // Do not add if date, workout, or name is not selected
    }

    const newWorkout = {
      name,
      workout: selectedWorkout,
      startingReps,
      startingWeight,
      endingReps,
      endingWeight,
    };

    // Check if the selected date already has a workout list, and add the new workout accordingly
    if (workoutData[selectedDate]) {
      workoutData[selectedDate].push(newWorkout);
    } else {
      workoutData[selectedDate] = [newWorkout];
    }

    setWorkoutData({ ...workoutData });

    // Clear the input fields after submission
    setSelectedWorkout("");
    setStartingReps("");
    setStartingWeight("");
    setEndingReps("");
    setEndingWeight("");
    setName("");
  };

  const handleDeleteWorkout = (date, index) => {
    const updatedWorkouts = workoutData[date].filter((_, i) => i !== index);
    setWorkoutData({
      ...workoutData,
      [date]: updatedWorkouts,
    });
  };

  const WorkoutTable = ({ date }) => (
    <table className="w-full mt-4">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Workout</th>
          <th className="px-4 py-2">Starting Weight</th>
          <th className="px-4 py-2">Starting Reps</th>
          <th className="px-4 py-2">Ending Weight</th>
          <th className="px-4 py-2">Ending Reps</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {workoutData[date].map((workout, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{workout.name}</td>
            <td className="border px-4 py-2">{workout.workout}</td>
            <td className="border px-4 py-2">{workout.startingWeight}</td>
            <td className="border px-4 py-2">{workout.startingReps}</td>
            <td className="border px-4 py-2">{workout.endingWeight}</td>
            <td className="border px-4 py-2">{workout.endingReps}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => handleDeleteWorkout(date, index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="container mx-auto mt-8 p-4 sm:p-8 items-center">
          <h1 className="text-2xl mb-4">
            Gym Workout Tracker - Screenshot Results
          </h1>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-1">Select Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full border rounded p-2"
            />
          </div>

          {selectedDate && (
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">
                Select Workout:
              </label>
              <select
                value={selectedWorkout}
                onChange={handleWorkoutChange}
                className="w-full border rounded p-2"
              >
                <option value="">Select a Workout</option>
                {workouts.map((workout, index) => (
                  <option key={index} value={workout}>
                    {workout}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedWorkout && (
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">
                Starting Weight:
              </label>
              <input
                type="number"
                value={startingWeight}
                onChange={handleStartingWeightChange}
                className="w-full border rounded p-2"
              />
              <label className="block text-sm font-bold mb-1 mt-2">
                Starting Reps:
              </label>
              <input
                type="number"
                value={startingReps}
                onChange={handleStartingRepsChange}
                className="w-full border rounded p-2"
              />
              <label className="block text-sm font-bold mb-1 mt-2">
                Ending Weight:
              </label>
              <input
                type="number"
                value={endingWeight}
                onChange={handleEndingWeightChange}
                className="w-full border rounded p-2"
              />
              <label className="block text-sm font-bold mb-1 mt-2">
                Ending Reps:
              </label>
              <input
                type="number"
                value={endingReps}
                onChange={handleEndingRepsChange}
                className="w-full border rounded p-2"
              />
            </div>
          )}

          {selectedWorkout && (
            <div className="mb-4 button-container flex justify-center">
              <button
                className="py-2 px-4 rounded w-full sm:w-auto"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          )}

          {Object.keys(workoutData).map((date) => (
            <div key={date} className="mt-4">
              <h2 className="text-lg font-bold mb-2">{date}</h2>
              <div className="overflow-x-auto">
                <WorkoutTable date={date} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Chart />
    </>
  );
}

export default GymWorkoutTracker;
