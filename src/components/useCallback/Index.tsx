import { useCallback, useState } from "react";

import Search from "./Search";

const allusers = ["john", "alex", "kevin", "thomas", "ben"];

function Index() {
  const [users, setUsers] = useState(allusers);
  const [hasChecked, setHasChecked] = useState(false);

  //without the useCallback hook it will continue running the serach function without care and hurt the preformanece 
  /* function handleSearch(text: string) {
    console.log(users[0]);
    
    const filteredUsers = allusers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  } */

  //useCallback is a React Hook that lets you cache a function definition between re-renders.
  //So now useCallback uses the funciton and returns a new variable and only runs when the users change
  //This will imporve preformence with it dosent have to run the funcktion again when it re-renders when cliking the button
  //Where as before when cliking it would waste the preformance running the function now should do nothign unless its when finding the name on the list
  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);

      const filteredUsers = allusers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <section>
      <h1>UseCallback</h1>
      <Search onChange={handleSearch} />
      <button onClick={() => setHasChecked(!hasChecked)}>Click</button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </section>
  );
}

export default Index;
