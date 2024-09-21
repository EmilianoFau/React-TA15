import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';

const Display = ({ type }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  if (type === 'theme') {
    return (
      <div>
        <p>Tema actual: {theme === 'light' ? 'Claro' : 'Oscuro'}</p>
        <button onClick={toggleTheme}>
          Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
        </button>
      </div>
    );
  }

  if (type === 'language') {
    return (
      <div>
        <p>Idioma actual: {language === 'es' ? 'Español' : 'Inglés'}</p>
        <button onClick={toggleLanguage}>
          Cambiar a {language === 'es' ? 'Inglés' : 'Español'}
        </button>
      </div>
    );
  }

  return null;
};

export default Display;
