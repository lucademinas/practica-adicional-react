import './App.css'
import Persons from './components/persons/Persons';


const names = ["Parker","Simmons","Lewis","Poe"];

const App = () => {
  
  return (
    <Persons names = {names}/>
  )
}

export default App
