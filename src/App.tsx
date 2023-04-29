import './App.css'
import  {NavBar}  from './components/navbar'
import MostPopular from './components/popular'


function App() {
  return (
    <div className='mainContainer'>
      <NavBar/>
      <div>
      <MostPopular/>
      </div>

    </div>
  )
}

export default App