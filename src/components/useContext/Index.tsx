import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboradContext } from "./context";

export interface User {
  isSubscribed: string;
  name: string;
}

function Index() {
  //So this is the useState data we want deeper in our tree of components
  const [user] = useState<User>({ isSubscribed: "true", name: "Jesper" });

  // Here we give our info to the DashboradContext.Provider inside the context.ts
  return (
    <section>
      <h1>UseContext</h1>
      <DashboradContext.Provider value={user}>
        <Dashboard />
      </DashboradContext.Provider>
    </section>
  );
}

export default Index;