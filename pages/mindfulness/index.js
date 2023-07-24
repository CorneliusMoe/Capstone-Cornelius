import Header from "@/components/Header";

export default function MindfulnessPage() {
  // Define an array of exercises/tips (you can replace this with your actual data)
  const exercises = [
    { id: 1, title: "Exercise 1", description: "Description for Exercise 1" },
    { id: 2, title: "Exercise 2", description: "Description for Exercise 2" },
    // Add more exercises as needed
  ];

  return (
    <>
      <Header title="be mindful" />
      <div>
        {exercises.map((exercise) => (
          <div key={exercise.id}>
            <h2>{exercise.title}</h2>
            <p>{exercise.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
