import { addPeople, deletePeople, updateFilter, toggleSpinnerState } from "../store/people-slice"

// TODO
// Verificar si se puede realizar esto sin tener que pasar el contexto siempre
class PeopleService{
    updateFilter = (context, value) => {
        context(updateFilter(value.toLowerCase()))
    }

    deletePeople = (context, value) => {
        context(deletePeople(value))
    }

    addPeople = (context, value) => {
        context(addPeople(value))
    }

    toggleSpinner = (context, status) => {
        context(toggleSpinnerState(status))
    }
} 

const peopleService = new PeopleService()
export default peopleService;