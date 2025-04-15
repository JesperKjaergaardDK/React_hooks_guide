import { useEffect, useState } from 'react'

function Index() {
  let [count, setCount] = useState<number>(0);


  // useEffect is a React Hook that lets you synchronize a component with an external system.
  // It runs a function after every render, and you can optionally specify dependencies to control when it runs.
  // The first argument is a function that contains the code you want to run after the render.
 
  useEffect(() => {
    console.log("Component mounted or updated");
    // This code will run after every render of the component.
    // You can also return a cleanup function that will run before the component unmounts or before the effect runs again.

    return () => {
      console.log("Component unmounted or effect cleaned up");
      // This code will run before the component unmounts or before the effect runs again.
      // You can use this to clean up any resources or subscriptions that were created in the effect.
    };

    // The second argument is an array of dependencies that determine when the effect should run.
    // If you pass an empty array, the effect will only run once after the initial render.
    // And if removed will continue to update after every render.
  }, [count]);


  return (
  <section>
    <h1>UseEffect</h1>
    <p>Look op in the console to opserve its effect</p>
    <p>{count}</p>
    <button onClick={() => setCount(count += 1) }>Incresse number</button>
  </section>
  )
}

export default Index