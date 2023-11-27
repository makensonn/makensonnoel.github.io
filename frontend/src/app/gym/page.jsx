import React from "react";
import GymWorkoutTracker from "../components/GymWorkoutTracker";
import WorkoutChart from "../components/WorkoutChart";

const Gym = () => {
  return (
    <>
      <WorkoutChart />
      <GymWorkoutTracker />
    </>
  );
};

export default Gym;
