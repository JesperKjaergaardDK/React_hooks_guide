import { useReducer } from "react";

//The type of the state that is going to chagne though out the reducer function
interface State {
  count: number;
  error: string | null;
}

//This action could be other options but worked beste with a counting button
interface Action {
  type: "increment" | "decrement";
}

//This reducer is what helps decide the outcome of the data from the buttons
function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "max reach" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "min reach" : null,
      };
    }
    default:
      return state;
  }
}

function Index() {  
  //useReducer is a React Hook that lets you add a reducer to your component.
  //And help reduce the amount of useState hooks so insted of having 5 usestate the option for UseReducer is an improvement
  //useReducer needs a function and an state a value
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <section>
      <p>Count: {state.count}</p>
      {state.error && <p>{state.error}</p>}

    {/*The dispatch is part of the useReducer to go though the switch case and what it should do */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </section>
  );
}

export default Index;
