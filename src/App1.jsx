
import { createContext, useState } from 'react';
import './App.css'

import BotonConNumero from './BorrarPractica/BotonConNumero'
export const themeContext = createContext();

function App() {

  const [isDarkMode, setIsDarkMode] = useState(100);

  return (<div>
    <themeContext.Provider value={isDarkMode}>

      <BotonConNumero estadoBander={true} />

    </themeContext.Provider>
  </div>);
}

export default App
