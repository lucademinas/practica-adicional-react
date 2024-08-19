import './App.css'
import Family from './components/family/Family'

const persons = [
  { name: "Juan", age: 26 },
  { name: "Gabriel", age: 27 },
  { name: "Valentina", age: 22 },
  { name: "Paula", age: 25 },
  { name: "Andrés", age: 20 }
];

const sortedPersons = persons.sort((a, b) => b.age - a.age);


const App = () => {

  return (
    <Family sortedPersons = {sortedPersons}/>
  )
}

export default App
