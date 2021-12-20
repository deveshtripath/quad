import './App.css';
import Value from "./Value"
import Main from "./Main"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    
    <Router>
    <div className="">
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/purcahse" element={<Value/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


