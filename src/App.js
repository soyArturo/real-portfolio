import React, { useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Sidebar from './components/Sidebar';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    let mode;
    if (localStorage) {
      mode = localStorage.getItem('darkMode');
    }

    if (mode === 'true') {
      theme.dispatch({ type: 'DARKMODE' });
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      theme.dispatch({ type: 'LIGHTMODE' });
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, []);
  return (
    <>
      <Sidebar />
    </>
  );
};

export default App;
