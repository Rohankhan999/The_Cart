import './App.css';
import "@fontsource/poppins";
import "@fontsource/montserrat/600.css";
import Links from './Config/Links';
import NavBar from './Components/Navbar/NavBar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  return (
    <div>
        <NavBar />
        <Links />
    </div>
  );
}

export default App;
