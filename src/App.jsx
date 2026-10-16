import './App.css'
import { Header } from './components/header'

const user = window.prompt("Qual o Seu Nome?")|| "visitante";

function App() {
  return (
    <>
      <Header
      brand= "Geração tech"
      Description= "Sede Bezerra"
      >
        
        <a href="#equipe">Equipe</a>
        <a href="#aprendizado">Aprendizado</a>
      </Header>
      <Main className ='conteiner'>
        <Home/>
      </main>
    </>
  )
}

export default App
