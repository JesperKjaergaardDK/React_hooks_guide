import { useEffect, useRef, useState } from "react";

function Index() {
  //This is usestate and will cause a re-render when the value changes
  const [count, setCount] = useState<number>(0);

  // useRef is a React Hook that lets you reference a value that’s not needed for rendering.
  // useRef returns a ref object with a single current property initially set to the initial value you provided.
  // It does not trigger a re-render when the value changes.
  // It’s useful for keeping track of mutable values that don’t affect the rendering of your component.
  // To get it use the vaeiable name then .current sense its the only property of the object
  const countRef = useRef<number>(0);

  useEffect(() => {
    // This effect runs after every render
    handleIncrement();
  });

  const handleIncrement = () => {
    //Would make both usestate and ref to rerender and go on an infinite loop
    //Sense it changes a state value, it will cause a re-render in the useEffect
    //setCount(count + 1)

    //Meanwhie, useRef will not cause a re-render when the value changes.
    //It will just update the value of the ref object
    //So, it will not cause an infinite loop
    countRef.current = countRef.current + 1;
  };

  //when only gives info when it re-render
  return (
    <section>
      <h1>UseRef</h1>

      <p>UseState Count : {count}</p>
      <p>UseRef Count : {countRef.current}</p>

      <button onClick={() => setCount(count + 1)}>
        Incresse the number by one and re-render
      </button>
    </section>
  );
}

export default Index;
