import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

function App()
{
  return (
    <Router>
      <Routes>
        <Route path='/welcome'>
          <Welcome />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
