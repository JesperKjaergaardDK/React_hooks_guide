import { useUserContext } from "./context";

function Sidebar() {
  const user = useUserContext();
  return (
    <div>
      <div>Subscripe name: {user.name}</div>
      <div>Subscirpe status: {user.isSubscribed}</div>
    </div>
  );
}

function Profile() {
  const user = useUserContext();
  return <div>Profile name: {user.name}</div>;
}

export { Sidebar, Profile };