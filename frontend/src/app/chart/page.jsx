'use client'
import React from 'react';
import Navbar from '../components/Navbar';

const WorkoutChart = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col md:flex-row justify-center md:gap-8">
        <div className="w-full max-w-md">
          <div className="mb-8 p-4 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Lower Body Day 1</h1>
            <table className="w-full border-collapse border rounded-md">
              <thead className="bg-gray-400">
                <tr>
                  <th className="p-4">Workout</th>
                  <th className="p-4">Sets</th>
                  <th className="p-4">Reps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">Warm Up</td>
                  <td className="p-4"></td>
                  <td className="p-4">2-5 mins</td>
                </tr>
                <tr>
                  <td className="p-4">Quad Curls</td>
                  <td className="p-4">4</td>
                  <td className="p-4">8-10</td>
                </tr>
                <tr>
                  <td className="p-4">Hamstring Curls</td>
                  <td className="p-4">4</td>
                  <td className="p-4">8-10</td>
                </tr>
                <tr>
                  <td className="p-4">Leg Press</td>
                  <td className="p-4">4</td>
                  <td className="p-4">8-10</td>
                </tr>
                <tr>
                  <td className="p-4">Squats</td>
                  <td className="p-4">4</td>
                  <td className="p-4">8-10</td>
                </tr>
                <tr>
                  <td className="p-4">Deadlifts</td>
                  <td className="p-4">4</td>
                  <td className="p-4">8-10</td>
                </tr>
                <tr>
                  <td className="p-4">Calves</td>
                  <td className="p-4">3</td>
                  <td className="p-4">10-12</td>
                </tr>
                <tr>
                  <td className="p-4">Planks</td>
                  <td className="p-4">3</td>
                  <td className="p-4">1:00 min</td>
                </tr>
                <tr>
                  <td className="p-4">Cardio</td>
                  <td className="p-4"></td>
                  <td className="p-4">10-15 min</td>
                </tr>
                {/* Add more lower body exercises here */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="mb-8 p-4 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Upper Body Day</h1>
            <table className="w-full border-collapse border rounded-md">
              <thead className="bg-gray-400">
                <tr>
                  <th className="p-4">Workout</th>
                  <th className="p-4">Sets</th>
                  <th className="p-4">Reps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">Warm Up</td>
                  <td className="p-4"></td>
                  <td className="p-4">2-5 mins</td>
                </tr>
                <tr>
                  <td className="p-4">Lat Pulldown</td>
                  <td className="p-4">4</td>
                  <td className="p-4">5-8</td>
                </tr>
                <tr>
                  <td className="p-4">Back Row</td>
                  <td className="p-4">4</td>
                  <td className="p-4">5-8</td>
                </tr>
                <tr>
                  <td className="p-4">Curls</td>
                  <td className="p-4">4</td>
                  <td className="p-4">5-8</td>
                </tr>
                <tr>
                  <td className="p-4">Tricep Press</td>
                  <td className="p-4">4</td>
                  <td className="p-4">5-8</td>
                </tr>
                <tr>
                  <td className="p-4">Bench press</td>
                  <td className="p-4">4</td>
                  <td className="p-4">6-8</td>
                </tr>
                <tr>
                  <td className="p-4">Dips</td>
                  <td className="p-4">4</td>
                  <td className="p-4">8-10</td>
                </tr>
                <tr>
                  <td className="p-4">Planks</td>
                  <td className="p-4">3</td>
                  <td className="p-4">1:00 min</td>
                </tr>
                <tr>
                  <td className="p-4">Cardio</td>
                  <td className="p-4"></td>
                  <td className="p-4">10-15 min</td>
                </tr>
                {/* Add more upper body exercises here */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="mb-8 p-4 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">Lower Body Day 2</h1>
            <table className="w-full border-collapse border rounded-md">
              <thead className="bg-gray-400">
                <tr>
                  <th className="p-4">Workout</th>
                  <th className="p-4">Sets</th>
                  <th className="p-4">Reps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">Warm Up</td>
                  <td className="p-4"></td>
                  <td className="p-4">2-5 mins</td>
                </tr>
                <tr>
                  <td className="p-4">Glute bridges</td>
                  <td className="p-4">4</td>
                  <td className="p-4">10-12</td>
                </tr>
                <tr>
                  <td className="p-4">Hip thrusts</td>
                  <td className="p-4">4</td>
                  <td className="p-4">8-10</td>
                </tr>
                <tr>
                  <td className="p-4">Walking lunges</td>
                  <td className="p-4">3</td>
                  <td className="p-4">12-15</td>
                </tr>
                <tr>
                  <td className="p-4">Single Leg Press</td>
                  <td className="p-4">3</td>
                  <td className="p-4">12-15</td>
                </tr>
                <tr>
                  <td className="p-4">Romain Deadlifts</td>
                  <td className="p-4">3</td>
                  <td className="p-4">12-15</td>
                </tr>
                <tr>
                  <td className="p-4">Hyper Extensions</td>
                  <td className="p-4">3</td>
                  <td className="p-4">12-15</td>
                </tr>
                <tr>
                  <td className="p-4">Planks</td>
                  <td className="p-4">3</td>
                  <td className="p-4">1:00 min</td>
                </tr>
                <tr>
                  <td className="p-4">Cardio</td>
                  <td className="p-4"></td>
                  <td className="p-4">10-15 min</td>
                </tr>
                {/* Add more booty-focused exercises here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutChart;
