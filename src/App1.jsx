
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Pokemons from './componentesBorrar/Pokemons';
import PokemonByName from './componentesBorrar/PokemonByName';
import { NAVBAR_ROUTES } from './routes/routes';

function App() {
  return (<div>
    <BrowserRouter>

      <nav>
        <ul className="navbar">
          {NAVBAR_ROUTES.map((route) => (
            <li key={route.name}>
              <NavLink to={route.path}
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <Routes>
        <Route exact path="/" element={<h1>Home</h1>} />
        <Route exact path="/pokemons" element={<Pokemons/>} />
        <Route exact path="/pokemon/:pokemonName" element={<PokemonByName />} />
        <Route path="*" element={<h1>Not Fout</h1>} />
      </Routes>
    </BrowserRouter>

  </div>);
}

export default App
