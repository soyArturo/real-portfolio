import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const SSidebar = styled.div`
  width: ${({ isOpen }) => (!isOpen ? `auto` : `300px`)};
  background: ${({ light }) => (light ? `var(--dark-component)` : `var(--light-sidebar-bg)`)};
  height: 100vh;
  padding: 24px;
  position: relative;
`;

const Sidebar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return <SSidebar isOpen={sidebarOpen} light={darkMode}></SSidebar>;
};

export default Sidebar;
