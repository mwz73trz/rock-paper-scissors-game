import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <Button variant="text" sx={{ m: 2 }}>
        Hello World
      </Button>
      <Button variant="contained" sx={{ m: 2 }}>
        Hello World
      </Button>
      <Button variant="outlined" sx={{ m: 2 }}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
