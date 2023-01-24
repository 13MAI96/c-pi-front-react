import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import CardList from "./components/card-list/card-list"
import SearchForm from './components/search-form/search-form'
import Spinner from './components/spinner/spinner'
import { People } from './models/people'
import Dialog from './components/dialog/dialog'
import { setInitialPeople } from './store/people-slice'
import peopleService from './services/people.service'

function App() {
  const dispatch = useDispatch()
  const [showDialog, setShowDialog] = useState(false)
  useEffect(() => {
    fetch("https://swapi.dev/api/people").then(data => {
      return data.json()
    }).then(result => {
      let peoplesArray = result.results.map( (people, index) => {
        return new People(people.name, people.height, people.gender, index)
      })
      dispatch(setInitialPeople(peoplesArray))
    }).finally(() => {
      peopleService.toggleSpinner(dispatch, false)
    })
  }, [])

  const callbackModelFunction = () => {
    setShowDialog(false)
  }

  return (
    <div className="App">
      <div className='header-container'>
        <SearchForm></SearchForm>
        <div className='add-button-container'>
          <button className='add-button' onClick={() => {setShowDialog(true)}}>Agregar</button>
        </div>
      </div>
      <div className="card-list-container">
        <CardList></CardList>
      </div>
      <Spinner></Spinner>
      {showDialog && <Dialog onCallback={callbackModelFunction} onClose={callbackModelFunction}></Dialog>}
    </div>
  )
}

export default App
