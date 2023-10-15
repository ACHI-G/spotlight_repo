import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styling the container for the toggle button
const ToggleContainer = styled.div`
    width: 1.7em;
    height: 1.7em;
    margin: 0 auto;
    background: ${({ theme: { switchButton } }) => switchButton} no-repeat center center;
    background-size: 100%;
    border-radius: 1.5em;
    cursor: pointer;
    transition: all 0.1s linear;
    transform: rotate(-90deg);
`;

// Defining the Toggle component that displays the ToggleContainer
const Toggle = ({ onToggle }) => {
    return <ToggleContainer onClick={onToggle}></ToggleContainer>;
};

Toggle.propTypes = {
    onToggle: PropTypes.func.isRequired
};

export default Toggle;
