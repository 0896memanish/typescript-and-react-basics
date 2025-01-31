import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  handleAddGoal: (eneterdgoal: string, enteredDescription: string) => void;
};

export default function NewGoal({ handleAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredDescription = description.current!.value;

    event.currentTarget.reset();
    handleAddGoal(enteredGoal, enteredDescription);
    goal.current!.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Add new goal</label>
        <input ref={goal} type="text" id="title" />
      </p>
      <p>
        <label htmlFor="description">Add a short summary</label>
        <input ref={description} type="text" id="description" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
