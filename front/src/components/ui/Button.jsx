import React from 'react';
import styled from 'styled-components';

// Definimos los colores de Tailwind como variables
const colors = {
  orange200: 'rgb(255, 183, 77)', // Equivalente a orange-200
  green200: 'rgb(76, 175, 80)', // Equivalente a green-200
  gray800: 'rgb(45, 55, 72)', // Equivalente a gray-800
  black: 'rgb(0, 0, 0)' // black
};

const Button = ({ children  }) => {
  return (
    <StyledWrapper colors={colors}>
      <button className="button">
        <div className="bgContainer">
          <span>{children}</span>
        </div>
        <div className="arrowContainer">
          <svg width={20} height={20} viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z" fill="black" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.8em 0em 0.8em 0.8em;
    background-color: ${props => props.colors.orange200}; /* orange-200 */
    cursor: pointer;
    box-shadow: 3px 4px 0px ${props => props.colors.black};
    border: 3px solid;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    z-index: 100;
    transition: box-shadow 250ms, transform 250ms, filter 50ms;
    font-size: 0.9em;
    max-width: fit-content;
  }
  button:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 2px 0px ${props => props.colors.black};
  }
  button:active {
    filter: saturate(0.75);
  }
  button::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${props => props.colors.green200}; /* green-200 */
    z-index: -1;
    transform: translateX(-100%);
    transition: transform 250ms;
  }
  button:hover::after {
    transform: translateX(0);
  }
  .bgContainer {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    max-width: 80%;
    font-size: 1em;
    font-weight: 600;
    padding-right: 0.8em;
    color: ${props => props.colors.gray800}; /* gray-800 */
  }
  .bgContainer span {
    position: relative;
    transform: translateX(0);
    transition: all 250ms;
    white-space: nowrap;
  }
  .arrowContainer {
    padding: 0.7em;
    margin-inline-end: 0.7em;
    border: 3px solid;
    border-radius: 50%;
    background-color: ${props => props.colors.green200}; /* green-200 */
    position: relative;
    overflow: hidden;
    transition: transform 250ms, background-color 250ms;
    z-index: 100;
  }
  .arrowContainer::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: ${props => props.colors.orange200}; /* orange-200 */
    transform: translateX(-100%);
    z-index: -1;
    transition: transform 250ms ease-in-out;
  }
  button:hover .arrowContainer::after {
    transform: translateX(0);
  }
  button:hover .arrowContainer {
    transform: translateX(5px);
  }
  button:active .arrowContainer {
    transform: translateX(8px);
  }
  .arrowContainer svg {
    vertical-align: middle;
    width: 16px;
    height: 16px;
  }`;

export default Button;