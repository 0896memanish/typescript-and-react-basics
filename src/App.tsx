import goalsImage from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";
import NewGoal from "./components/NewGoal";
import InfoBox from "./components/InfoBox";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, description: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: description,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(goalId: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "a list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal handleAddGoal={handleAddGoal} />
      {goals.length === 0 && (
        <InfoBox mode="hint">No goals found. Maybe add one?</InfoBox>
      )}
      <CourseGoalsList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
