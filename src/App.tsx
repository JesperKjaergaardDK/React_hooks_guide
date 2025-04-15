import UseState from "./components/useState/Index";
import UseEffect from "./components/useEffect/Index";
import UserRef from "./components/useRef/Index";
import UserContext from "./components/useContext/Index";
import UserReducer from "./components/useReducer/Index";
import UserMemo from "./components/useMeno/Index";
import UseCallback from "./components/useCallback/Index";

function App() {
  return (
    <>
      <UseState />
      <UseEffect />
      <UserRef />
      <UserContext />
      <UserReducer />
      <UseCallback />
      <UserMemo />
    </>
  );
}

export default App;
