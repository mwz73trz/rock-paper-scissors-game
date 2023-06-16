import "./App.css";
import { useGlobalContext } from "./context";
import Main from "./components/Main";
import Game from "./components/Game";
import Decision from "./components/Decision";

function App() {
  const { startGame } = useGlobalContext();
  return (
    <div className="App">
      <Main />
      {startGame && <Game />}
      <Decision />
    </div>
  );
}

export default App;
