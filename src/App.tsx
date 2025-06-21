
import './App.css'
import Hero from "./components/Hero.tsx";
import Portfolio from "./components/Portfolio.tsx";
import Sobre from "./components/Sobre.tsx";
import Galeria from "./components/Galeria.tsx";
import Contato from "./components/Contato.tsx";

function App() {
  return (
    <>
      <Hero></Hero>
        <Sobre></Sobre>
        <Portfolio></Portfolio>
        <Galeria></Galeria>
      <Contato></Contato>
    </>
  )
}

export default App
