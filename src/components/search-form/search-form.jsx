import { useDispatch } from "react-redux"
import peopleService from "../../services/people.service"

const SearchForm = () => {
    const dispatch = useDispatch()
    return (
        <div className="search-form-container">
            <input className="search-form-input" type="text" onChange={(event)=>peopleService.updateFilter(dispatch, event.target.value)}></input>
        </div>
    )
}

export default SearchForm;