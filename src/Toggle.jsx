import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled toggle button container
const ToggleContainer = styled.button`
    font-size: 1rem;
    width: 5.5em;
    height: 3em;
    border: 0.125em solid ${({ theme: { text } }) => text};
    border-radius: 1.5em;
    margin: 0 auto;
    padding: 0.125em;
    overflow: hidden;
    background: ${({ theme: { body } }) => body};
    cursor: pointer;
    transition: all 0.3s linear;
`;

// Styled switch component
const Switch = styled.div`
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    background-color: ${({ theme: { text } }) => text};
    position: relative;
    transform: ${({ theme: { name } }) =>
        name === 'light' ? 'translateX(0)' : 'translateX(2.5em)'};
    transition: inherit;
`;

// Toggle component
const Toggle = ({ onToggle }) => {
    return (
        <ToggleContainer onClick={onToggle}>
            {/* Switch component with sun and moon icons */}
            <Switch>
                <label className="swap swap-rotate">
                    {/* Hidden checkbox to control the state */}
                    <input type="checkbox" />

                    {/* sun icon */}
                    <svg
                        className="swap-on fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path d="Insert SVG Path" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-off fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
<                       path d="Insert SVG Path" />
                    </svg>
                </label>
            </Switch>
        </ToggleContainer>
    );
};

// PropTypes for the Toggle component
Toggle.propTypes = {
    onToggle: PropTypes.func.isRequired
};

export default Toggle;
