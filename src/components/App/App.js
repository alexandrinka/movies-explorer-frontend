import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import PopupNavigation from "../PopupNavigation/PopupNavigation";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import * as auth from '../../utils/auth';
import { api } from "../../utils/MainApi";
import { setToken, getToken, removeToken } from '../../utils/token';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [likedMovies, setLikedMovies] = useState([]);
  const [token, setTokenState] = useState(getToken());
  const [infoMessage, setInfoMessage] = useState({
    isShown: false,
    message: '',
    code: 200,
  });

  const handlePopupOpen = () => {
    setPopupOpen(true);
  }

  const handlePopupClose = () => {
    setPopupOpen(false);
  }

  const navigate = useNavigate();

  function handleRegister(name, email, password) {
    auth.register(name, email, password)
      .then((res) => {
        if (res) {
          ResetInfoMessage();
          handleLogin(email, password);
        }
      })
      .catch(({ err, res }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message: err.message,
          code: res.status,
        });
      })
  }

  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then(res => {
        navigate('/movies', { replace: true });
        setTokenState(res.token);
        setLoggedIn(true);
        setToken(res.token);
        api._token = res.token;
        ResetInfoMessage();
      })
      .catch(({ err, res }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message: err.message,
          code: res.status,
        });
      })
  }

  function handleUpdateProfile(name, email) {
    api.updateInfoUser(name, email)
      .then((res) => {
        setCurrentUser(res);
        ResetInfoMessage();
      })
      .catch(({ err, res }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message: err.message,
          code: res.status,
        });
      })
  }

  function handleCreateMovie(movie) {
    api.createMovie(movie).then((newMovie) => {
      setLikedMovies([newMovie, ...likedMovies]);
      ResetInfoMessage();
    })
      .catch(err => console.log("Ошибка добавления фильма: " + err))
  }

  function handleDeleteMovie(movie) {
    api.deleteMovie(movie._id).then(
      () => {
        const newMoviesList = likedMovies.filter((m) => m._id === movie._id ? false : true);
        setLikedMovies(newMoviesList);
        ResetInfoMessage();
      })
      .catch(err => console.log("Ошибка удаления фильма: " + err))
  }

  const tokenCheck = () => {
    if (!token) {
      return;
    }
    auth.checkToken(token).then((res) => {
      if (res) {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      }
    })
      .catch(({ err, res }) => {
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          message: "При авторизации произошла ошибка. Токен не передан или передан не в том формате.",
          code: res.status,
        });
      })
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
        .then(data => {
          setCurrentUser(data);
          ResetInfoMessage();
        })
        .catch(err => console.log("Ошибка при получении данных о пользователе: " + err))
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api.getMovies()
        .then((data) => {
          setLikedMovies(data);
          ResetInfoMessage();
        })
        .catch(err => console.log("Ошибка при получении данных о фильмах: " + err))
    }
  }, [loggedIn]);

  function handleSignOut() {
    setCurrentUser({});
    setLoggedIn(false);
    navigate('/', { replace: true });
    removeToken();
    localStorage.clear();
  }

  function ResetInfoMessage() {
    if (infoMessage.isShown) {
      setInfoMessage({
        ...infoMessage,
        isShown: false,
        message: '',
        code: 200,
      });
    }
  };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Main loggedIn={loggedIn} onPopupOpen={handlePopupOpen} />} />

          <Route path="/movies" element={<ProtectedRouteElement
            element={Movies}
            loggedIn={loggedIn}
            onPopupOpen={handlePopupOpen}
            onLikeMovie={handleCreateMovie}
            onDislikeMovie={handleDeleteMovie}
            listLikedMovies={likedMovies} />} />

          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            loggedIn={loggedIn}
            onPopupOpen={handlePopupOpen}
            listLikedMovies={likedMovies}
            onDislikeMovie={handleDeleteMovie} />} />

          <Route path="/profile" element={<Profile
            loggedIn={loggedIn}
            onPopupOpen={handlePopupOpen}
            currentUser={currentUser}
            onProfile={handleUpdateProfile}
            infoMessage={infoMessage}
            onSignOut={handleSignOut}
          />} />

          <Route path="/signin" element={<Login onLogin={handleLogin} infoMessage={infoMessage} />} />
          <Route path="/signup" element={<Register onRegister={handleRegister} infoMessage={infoMessage} />} />
        </Routes>
        <PopupNavigation isOpen={isPopupOpen} onPopupClose={handlePopupClose} />
      </div>
    </CurrentUserContext.Provider>  
  );
}

export default App;
