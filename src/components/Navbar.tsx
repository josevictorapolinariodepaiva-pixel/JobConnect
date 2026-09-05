import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(): import("react").JSX.Element {
  return (
    <nav>
      <h1>JobConnect</h1>

      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/vagas">Vagas</Link></li>
        <li><Link to="/empresas">Empresas</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>

      <button>Entrar</button>
    </nav>
  )
}

export default Navbar