import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Display from './components/Display';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div>
          <h1>Aplicación con Contextos</h1>

          <Display type="theme" />

          <Display type="language" />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
