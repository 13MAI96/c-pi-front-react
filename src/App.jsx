import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import CardList from "./components/card-list/card-list"
import SearchForm from './components/search-form/search-form'
import { People } from './models/people'
import { setInitialPeople } from './store/people-slice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("https://swapi.dev/api/people").then(data => {
      return data.json()
    }).then(result => {
      let peoplesArray = result.results.map( (people) => {
        return new People(people.name, people.height, people.gender)
      })
      dispatch(setInitialPeople(peoplesArray))
    })
  }, [])
  return (
    <div className="App">
      <div className='search-container'>
        <SearchForm></SearchForm>
      </div>
      <div className="card-list-container">
        <CardList></CardList>
      </div>
    </div>
  )
}

export default App
