import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({ navToggle, setNavToggle }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      try {
        if (
          !ref.current.contains(event.target) &&
          !event.target.classList.contains('MuiSvgIcon-root')
        ) {
          setNavToggle(false);
        }
      } catch (e) {}
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [ref]);

  return (
    <SidebarStyled ref={ref} className={`${navToggle ? 'nav-toggle' : ''}`}>
      <Navigation />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
    z-index: 20;
  }
`;

export default Sidebar;
