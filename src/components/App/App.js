import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import Preloader from '../Preloader/Preloader';


function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopupOpen(true);
  }

  const handlePopupClose = () => {
    setPopupOpen(false);
  }
  return (
    <div className="page">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Main onPopupOpen={handlePopupOpen} />} />
        <Route path="/movies" element={<Movies onPopupOpen={handlePopupOpen} />} />
        <Route path="/saved-movies" element={<SavedMovies onPopupOpen={handlePopupOpen} />} />
        <Route path="/profile" element={<Profile onPopupOpen={handlePopupOpen} />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <PopupNavigation isOpen={isPopupOpen} onPopupClose={handlePopupClose} />
      <Preloader />
    </div>
  );
}

export default App;
