import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../themeSlice';
import styled from 'styled-components';
import { FaAdjust } from 'react-icons/fa';

const ToggleButton = styled.button`
  display: none;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  background-color: ${(props) => (props.theme === 'light' ? '#ffce00' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#333' : '#ffce00')};

  &:hover {
    background-color: ${(props) => (props.theme === 'light' ? '#ffd633' : '#555')};
  }
`;

const ToggleIcon = styled(FaAdjust)`
  cursor: pointer;
  color: ${(props) => (props.theme === 'light' ? '#333' : '#ffce00')};
  font-size: 1.5rem;
  margin-left: 20px;
`;

const ThemeToggle = ({ theme }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ToggleButton theme={theme} onClick={() => dispatch(toggleTheme())}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </ToggleButton>
      <ToggleIcon theme={theme} onClick={() => dispatch(toggleTheme())} />
    </>
  );
};

export default ThemeToggle;
