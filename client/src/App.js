import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  redirect,
} from "react-router-dom";
import './App.css';
import LikedPlayList from "./Components/LikedPlayList/LikedPlayList";
import Home from './Components/Home/Home'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
   <>
   <Router>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/likedMusic" element={<LikedPlayList />} />
   </Routes>
   <Footer />

   </Router>
   </>
  );
}

export default App;
