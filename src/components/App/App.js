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
  return (
    <div className="page">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <PopupNavigation />
      <Preloader />
    </div>
  );
}

export default App;
