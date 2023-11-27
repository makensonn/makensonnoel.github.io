import React from "react";

const WorkoutChart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:gap-8">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Lower body day</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Workout</th>
                <th className="px-4 py-2">Sets</th>
                <th className="px-4 py-2">Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Warm Up</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">2-5 mins</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Quad Curls</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">8-10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Hamstring Curls</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">8-10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Leg Press</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">8-10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Squats</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">8-10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Deadlifts</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">8-10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Calves</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">10-12</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Planks</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">1:00 min</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Cardio</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">10-15 min</td>
              </tr>
              {/* Add more lower body exercises here */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Glute Focused</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Workout</th>
                <th className="px-4 py-2">Sets</th>
                <th className="px-4 py-2">Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Warm Up</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">2-5 mins</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Glute bridges</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">10-12</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Hip thrusts</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">8-10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Walking lunges</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">12-15</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Single Leg Press</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">12-15</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Romain Deadlifts</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">12-15</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Hyper Extensions</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">12-15</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Planks</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">1:00 min</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Cardio</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">10-15 min</td>
              </tr>
              {/* Add more booty-focused exercises here */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Upper body day</h1>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Workout</th>
                <th className="px-4 py-2">Sets</th>
                <th className="px-4 py-2">Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Warm Up</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">2-5 mins</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Lat Pulldown</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">5-8</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Back Row</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">5-8</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Curls</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">5-8</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Tricep Press</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">5-8</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Bench press</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">6-8</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Dips</td>
                <td className="px-4 py-2">4</td>
                <td className="px-4 py-2">8-10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Planks</td>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">1:00 min</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Cardio</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">10-15 min</td>
              </tr>
              {/* Add more upper body exercises here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkoutChart;
