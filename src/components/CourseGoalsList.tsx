import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

type CourseGoalListProp = {
  goals: CGoal[];
  handleDeleteGoal: (goalId: number) => void;
};

export default function CourseGoalsList({
  goals,
  handleDeleteGoal,
}: CourseGoalListProp) {
  return (
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
  );
}
