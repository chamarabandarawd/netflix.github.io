import React, { useEffect } from 'react';
import './App.css';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //Looed in
        console.log("This user already in", userAuth);
        dispatch(login({
          uid: userAuth.id,
          email:userAuth.email,
        }));
      } else {
        // Logged out
        dispatch(logout);
      }
    });

    return unsubcribe;

  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path='/profile'>
              <ProfileScreen/>
            </Route>

            <Route exact path='/' element={<HomeScreen />} />
          </Routes>
        )}
      </Router>

    </div>
  );
}

export default App;
