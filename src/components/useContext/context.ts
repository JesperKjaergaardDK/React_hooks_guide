import { createContext, useContext } from "react";
import { User } from "./Index";

//To retrive the data we have to make a createContext that is the holder for the data we need
//And will be retrived with the useContext hook 
//Here we say we need only accept of the data type of a User
export const DashboradContext = createContext<User | undefined>(undefined);

//Here we use the useContext hook to retrive the data that was given from Index.tsx but only as read no edit
export function useUserContext() {
  const user = useContext(DashboradContext);

  if (user === undefined) {
    throw new Error("User is not sat on dashborad.provider");
  }

  return user;
}