import React from 'react';
import Sidebar from './COMPONENTS/01.Sidebar/Sidebar';
//import UserProfile from './999.UserRouter/UserRouter';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Sidebar />}></Route>
        <Route path="/user" element={<UserProfile />}></Route>
      </Routes> */}
      <Sidebar />
    </div>
  );
}

export default App;
