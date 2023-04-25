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
import RoundedCardFullDetails from "./Components/musicCarosal/ProfileCrad/RoundedCardFullDetails";

function App() {
  return (
   <>
   <Router>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/likedMusic" element={<LikedPlayList />} />
   <Route path="/RoundedCradFullDetails/:id" element={<RoundedCardFullDetails />}/>
   </Routes>
   <Footer />

   </Router>
   </>
  );
}

export default App;
