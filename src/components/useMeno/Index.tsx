import { useMemo, useState } from "react";
import { initialItem } from "./Utile";

function Index() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItem);

  //Does note rerender unless the items is a new array
  //without useMemo there will be a delay sense it loops though a big array to find isSelected
  //It will loop though every time a new render as the button counts up fx.
  
  //const selectedItem =  items.find((item) => item.isSelected);


  //to use useMemo you would need an 1: inline function () => and 
  //2: an array that controls when it should be re-rendered 
  //So with useMemo it will still start with going though the the slow step of finding the isSelected item
  //But after it wont until the array in items are changed
  //This means it will remember where everything is in the array sense it doesn't change
  //And it will add the delay anymore to counting up  
  
  const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);

  return (
    <section>
      <h1>UseMemo</h1>
      <p>Count: {count}</p>
      <p>Selected Item: {selectedItem?.id}</p>
      <button onClick={() => setCount(count + 1)}>Incresse</button>
    </section>
  );
}

export default Index;
