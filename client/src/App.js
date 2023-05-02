import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  redirect,
} from "react-router-dom";
import "./App.css";
import LikedPlayList from "./Components/LikedPlayList/LikedPlayList";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import RoundedCardFullDetails from "./Components/musicCarosal/ProfileCrad/RoundedCardFullDetails";
import Player from "./Components/Player/Player";
import AudioPlayer from "./Components/Player/AudioPlayer";
import Search from "./Components/Search/Search";
import UploadMusic from "./Components/UploadMusic/UploadMusic";
import Explore from "./Components/Explore/Explore";
import Playlist from "./Components/Playlists/Playlist";
import Library from "./Components/Library/Library";
import Albums from "./Components/Albums/Albums";
import Internal from "./Internal/Internal";
import TopBar from "./Components/TopBar/TopBar";
import Playing from "./Components/Player/music/Playing";
// import Internal from "./Internal/Internal";
// import TopBar from "./Components/TopBar/TopBar";
import Dashboard from "./Components/Dashboard/Component";
import ProfileDashboard from "./Components/ProfileDashboard/ProfileDashboard";
import WalletDashboard from "./Components/ProfileDashboard/WalletDashboard";
import Gethelp from "./Components/Gethelp/Gethelp";
import ProfileSettings from "./Components/ProfileSettings/ProfileSettings";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    window.scrollTo(0, 0);

  })
  return (
   <>
   <Router>
   <Routes>
   <Route element={<Internal />}>
   <Route path="/" element={<Home />} />
   <Route path="/likedMusic" element={<LikedPlayList />} />
   <Route path="/RoundedCradFullDetails/:id" element={<RoundedCardFullDetails />}/>
   <Route path="/audioPlayer" element ={<AudioPlayer /> } />
   <Route path="/search" element={<Search />} />
   <Route path="/uploadMusic" element={<UploadMusic /> }/>
   <Route path="/exploreScreen" element={<Explore />}/>
   <Route path="/playlistPage" element={<Playlist />}/>
   <Route path="/yourlibrary" element={<Library />} />
   <Route path="/albums" element={<Albums />} />
   <Route path="/playing-music" element={<Playing />} />
   <Route path="/profile/dashboard" element={<ProfileDashboard />}/>
   <Route path="/profile/walletdashboard" element={<WalletDashboard/>}/>
   <Route path="/profile/settings" element={<ProfileSettings/>}/>
   <Route path="/profile/get-help" element={<Gethelp/>}/>
   
   </Route>
   <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
   </Router>
   </>
 );
}
export default App;
