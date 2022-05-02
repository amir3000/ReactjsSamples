import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Pages";
function App() {
  return (
    <>
      <Router className="App">
        <Home />
      </Router>
    </>
  );
}

export default App;
