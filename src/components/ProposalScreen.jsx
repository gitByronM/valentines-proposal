import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

const ProposalScreen = ({
  gif,
  heading,
  message,
  buttons,
  containerStyle,
  showButtons = true
}) => {
  const location = useLocation();
  const [dynamicStyles, setDynamicStyles] = useState({});

  useEffect(() => {
    // Pre-carga el GIF al montar el componente
    preloadImage('/assets/home.gif');
    preloadImage('/assets/no1.gif');
    preloadImage('/assets/no2.gif');
    preloadImage('/assets/yes.gif');
  }, []);

  const handleMouseEnter = (index) => {
    if (buttons?.[index]?.randomMove) {
      setDynamicStyles(prev => ({
        ...prev,
        [index]: {
          position: 'absolute',
          top: `${Math.floor(Math.random() * 90 + 5)}%`,
          left: `${Math.floor(Math.random() * 90 + 5)}%`,
        }
      }));
    }
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="gif-container">
        <img 
          src={`/assets/${gif}`} 
          alt="Animación"
          className="responsive-gif"
          loading="lazy"
        />
      </div>

      <h1>{heading}</h1>
      {message && <p>{message}</p>}
      
      {showButtons && buttons && (
        <div className="btn">
          {buttons.map((btn, index) => {
            const style = btn.randomMove ? dynamicStyles[index] || {} : btn.style;

            // Función combinada para manejar el click
            const handleClick = (e) => {
              if (location.pathname === '/no2') {
                handleMouseEnter(index);
              }
              // Ejecutar el onClick original si existe
              if (btn.onClick) {
                btn.onClick(e);
              }
            };

            return btn.to ? (
              <Link
                key={index}
                to={btn.to}
                style={style}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={handleClick}
                id={btn.id}
              >
                {btn.text}
              </Link>
            ) : (
              <button
                key={index}
                style={style}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={handleClick}
                id={btn.id}
              >
                {btn.text}
              </button>
            );
          })}
        </div>
      )}


      {location.pathname === '/yes' && (
        <>
          <div className="btn">
            <a 
              href="https://surpriseforsuset.netlify.app/" 
              rel="noopener noreferrer"
              target='_blank'
            >
              Ver sorpresa 1
            </a>
          </div>
          <div className="btn">
            <a 
              href="https://letterforsuset.netlify.app/" 
              rel="noopener noreferrer"
              target='_blank'
            >
              Ver sorpresa 2
            </a>
          </div>
        </>
      )}

    </div>
  );
};

ProposalScreen.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.shape({
      randomMove: PropTypes.bool,
      text: PropTypes.string.isRequired,
      to: PropTypes.string,
      onClick: PropTypes.func,
      style: PropTypes.object,
      id: PropTypes.string
    })),
    gif: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    message: PropTypes.string,
    containerStyle: PropTypes.object,
    showButtons: PropTypes.bool
  };

export default ProposalScreen;