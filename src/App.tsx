import React from 'react';
import Sidebar from './COMPONENTS/01.Sidebar/Sidebar';
import LoginPage from './COMPONENTS/9999.AuthSignIn/Login';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from './INTERFACES/Auth';

function App() {

  const dispatch = useDispatch();
  //const isLoggedIn = useSelector((state: any) => state.auth.isAuthenticated);

  const isLoggedIn = true;
  const setLogin = () => {
    //Mock data that will be replaced with the actual data from the backend
    const auth: Auth = {
      isAuthenticated: true,
      token: '',
      refreshToken: '',
      role: '',
      expiresAt: 0,
      loading: false,
      sessionId: '',
      userId: '',
      username: '',
      email: '',
    }
    dispatch({ type: 'userAuthenticated', payload: auth });
  }

  return (
    <div className="App">
      {isLoggedIn ? <Sidebar /> : <LoginPage SetLogin={setLogin} />}
    </div>
  );
}

export default App;
