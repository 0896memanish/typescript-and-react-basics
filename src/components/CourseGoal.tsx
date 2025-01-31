import { type ReactNode } from "react";

type CourseGoalsProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

//Another way for writing the above component

// const CourseGoals: FC<CourseGoalsProps> = ({ title, children }) => (
//   <article>
//     <div>
//       <h2>{title}</h2>
//       {children}
//     </div>
//     <button>Delete</button>
//   </article>
// );

// export default CourseGoals;
