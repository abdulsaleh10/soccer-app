import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export function Button2() {
  return (
    <Link to='coming-soon'>
      <button className='btn'>Coming Soon</button>
    </Link>
  );
}


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  targetSectionId
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const scrollToSection = () => {
    const section = document.getElementById(targetSectionId);
    const navbar = document.querySelector('.navbar'); // Replace 'navbar' with the actual classname of your navbar
  
    if (section && navbar) {
      const navbarHeight = navbar.getBoundingClientRect().height;
  
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={() => {
        scrollToSection();
        if (onClick) onClick();
      }}
      type={type}
    >
      {children}
    </button>
  );
};
