import { useDispatch } from "react-redux"
import peopleService from "../../services/people.service"

const Dialog = (props) => {
    const dispatch = useDispatch()
    const addNewPeople = () => {
        peopleService.toggleSpinner(dispatch, true)
        // TODO
        // Esto es para emular un llamado al back
        setTimeout(() => {
            props.onCallback()
            peopleService.toggleSpinner(dispatch, false)
        }, 1000)
    }
    return (
        <div className="dialog-background">
            <div className="dialog-container">
                <h3 className="dialog-title">Agregar nueva persona</h3>
                <div className="dialog-inputs">

                </div>
                <div className="dialog-alert">

                </div>
                <div className="dialog-buttons">
                    <button onClick={() => props.onClose()}>Cancelar</button>
                    <button onClick={() => addNewPeople()}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog