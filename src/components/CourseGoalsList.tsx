import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";
import { type ReactNode } from "react";
import InfoBox from "./InfoBox";

type CourseGoalListProp = {
  goals: CGoal[];
  handleDeleteGoal: (goalId: number) => void;
};

export default function CourseGoalsList({
  goals,
  handleDeleteGoal,
}: CourseGoalListProp) {
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You have too many goals. Delete some.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              key={goal.id}
              onDelete={handleDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
