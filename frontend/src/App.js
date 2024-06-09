import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './components/LoginRegisterPage';

const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegisterPage/>} />
      </Routes>
    </BrowserRouter>
    );
};

export default App;