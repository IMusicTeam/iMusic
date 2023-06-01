import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  redirect,
  Navigate,
  json,
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
import ContactUs from "./Components/ContactUs/ContactUs";
import UpdatedLandingPage from "./Components/UpdatedLandingPage/UpdatedLandingPage";
import SeeAll from "./Components/SeeAll/SeeAll";
import AlbumsViewPage from "./Components/AlbumsViewPage/AlbumsViewPage";
import AdminDetails from "./Components/AdminDetails/AdminDetails";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import EmailAuthentication from "./Components/EmailAuthentication/EmailAuthentication";
import PrivateRoute from "./ProtectedRoute";
import ListSongs from "./Components/Playlists/ListSongs/ListSongs";
import Music from "./Components/Music/Music";
import { ethers } from "ethers";
// import contractInstance from "./web3";
import axios from "axios";
import { APIConstants } from "./Services/api-constants";
import { updateAuthVerification, updateUserData } from "./Redux/Redux";
import { useDispatch } from "react-redux";
import NoMetaMask from "./ReusableComponents/NoMetaMask";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const reqBody = localStorage.getItem("emailAuth");
    const payload = JSON.parse(reqBody);
    console.log(payload);
    if (payload) {
      axios
        .put(APIConstants.otpVerification, payload)
        .then((res) => {
          localStorage.setItem("id", res.data.data._id);
          localStorage.setItem("emailAuth", reqBody);
          if (payload.email == "admin@inspireTk.com") {
            dispatch(
              updateUserData({ data: { ...res.data.data, isAdmin: true } })
            );
          } else {
            dispatch(updateUserData({ data: { ...res.data.data } }));
          }
          dispatch(updateAuthVerification({ data: { id: res.data.data._id } }));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });

  return window?.ethereum ? (
    <>
      <Router>
        <Routes>
          <Route path="/landingpage" element={<UpdatedLandingPage />} />
          <Route path="/verify-email" element={<ForgotPassword />} />
          <Route
            path="/email-authentication"
            element={<EmailAuthentication />}
          />
          <Route path="/" element={<PrivateRoute />}>
            <Route element={<Internal />}>
              {/* <Route path="/rythamic" element={<RythamicBackground />} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/likedMusic" element={<LikedPlayList />} />
              <Route
                path="/RoundedCradFullDetails/:id"
                element={<RoundedCardFullDetails />}
              />
              <Route path="/audioPlayer" element={<AudioPlayer />} />
              <Route path="/search" element={<Search />} />
              <Route path="/uploadMusic" element={<UploadMusic />} />
              <Route path="/exploreScreen" element={<Explore />} />
              <Route path="/playlists" element={<Playlist />} />
              <Route path="/yourlibrary" element={<Library />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/playing-music" element={<Playing />} />
              <Route path="/profile/dashboard" element={<ProfileDashboard />} />
              <Route
                path="/profile/walletdashboard"
                element={<WalletDashboard />}
              />
              <Route path="/profile/settings" element={<ProfileSettings />} />
              <Route path="/profile/get-help" element={<Gethelp />} />
              <Route
                path="/profiles/getHelp/contactUs"
                element={<ContactUs />}
              />
              <Route path="/see-all/:path" element={<SeeAll />} />
              <Route path="/admin-details" element={<AdminDetails />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/albumsView" element={<AlbumsViewPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/playlist-list" element={<ListSongs />} />
              <Route path="/music-player" element={<Music />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  ) : (
    <NoMetaMask />
  );
}
export default App;
