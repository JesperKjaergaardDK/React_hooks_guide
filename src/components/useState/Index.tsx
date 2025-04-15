import { ChangeEvent, useState } from "react";

function Index() {
  // useState is a React Hook that lets you add a state variable to your component.
  // It returns an array with two elements: 1: the current state value and 2: a function to update it.
  // 1: The current state of this state variable, initially set to the initial state you provided.
  // 2: The set function that lets you change it to any other value in response to interaction.

  const [name, setName] = useState<string>("");

  return (
    <section>
      <h1>UseState</h1>
      <p>My name is: {name}</p>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name"
      />
    </section>
  );
}

export default Index;
