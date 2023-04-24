import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  redirect,
} from "react-router-dom";
import './App.css';
import Home from "./Components/RecentlyPlayed/Home";

function App() {
  return (
   <>
   <Router>
   <Routes>
   <Route path="/" element={<Home />} />
    
   </Routes>

   </Router>
   </>
  );
}

export default App;
