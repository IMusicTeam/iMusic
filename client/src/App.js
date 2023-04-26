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
import Player from "./Components/Player/Player";
import AudioPlayer from "./Components/Player/AudioPlayer";
import Search from "./Components/Search/Search";
import UploadMusic from "./Components/UploadMusic/UploadMusic";

function App() {
  return (
   <>
   <Router>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/likedMusic" element={<LikedPlayList />} />
   <Route path="/RoundedCradFullDetails/:id" element={<RoundedCardFullDetails />}/>
   <Route path="/audioPlayer" element ={<AudioPlayer /> } />
   <Route path="/search" element={<Search />} />
   <Route path="/uploadMusic" element={<UploadMusic /> }/>
   </Routes>
   <Player />
   <Footer />

   </Router>
   </>
  );
}

export default App;
