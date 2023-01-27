import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FormErrors from "../../models/formErrors"
import { People } from "../../models/people"
import peopleService from "../../services/people.service"

const Dialog = (props) => {
    const dispatch = useDispatch()
    const [formError, setFormError] = useState(false)
    const formErrorsMessages = [
        new FormErrors(/^[0-9]{1,5}$/, "Debe ingresar un numero entre 0 y 99999"),
        new FormErrors(/^[a-zA-Z0-9_-\s]{3,24}$/, "Debe ingresar un nombre valido"),
    ]
    const addNewPeople = (event) => {
        event.preventDefault()
        const formElements = event.target.elements
        let newPeople = new People(
            formElements.nombre.value, 
            formElements.altura.value, 
            formElements.gender.value
        ) 
        let prevError = formErrorsMessages[1].validate(newPeople.nombre) ?? formError
        prevError = formErrorsMessages[0].validate(newPeople.altura) ?? prevError
        prevError === formError ? undefined : setFormError("Ingrese todos los datos para continuar")
        if(!prevError){
            peopleService.toggleSpinner(dispatch, true)
            // TODO
            // Esto es para emular un llamado al back
            setTimeout(() => {
                peopleService.addPeople(dispatch, newPeople)
                props.onCallback()
                peopleService.toggleSpinner(dispatch, false)
            }, 1000)
        }
    }
    const [selectedRadio, setSelectedRadio] = useState("n/a")
    const selectOption = (e) => {
        setSelectedRadio(e.target.id)
    }
    const validateForm = (event) => {
        if(event.target.id === "nombre"){
            setFormError(formErrorsMessages[1].validate(event.target.value) ?? false)
        } else if(event.target.id === "altura") {
            setFormError(formErrorsMessages[0].validate(event.target.value) ?? false)
        }

    }
    return (
        <div className="dialog-background">
            <form className="dialog-container" onSubmit={(event) => {addNewPeople(event)}}>
                <h3 className="dialog-title">Agregar nueva persona</h3>
                <div className="dialog-inputs">
                    <input className="dialog-input-text" id="nombre" type="text" onChange={(event) => validateForm(event)} placeholder="Nombre" />
                    <input className="dialog-input-text" id="altura" type="text" onChange={(event) => validateForm(event)} placeholder="Altura" />
                    <div className="dialog-input-radio">
                        <input type="radio" name="gender" value="male" id="male" onChange={(event) => {selectOption(event)}}/>
                        <label htmlFor="male" className={selectedRadio === "male" ? "selected" : "unselected" }>Masculino</label>
                        <input type="radio" name="gender" value="female" id="female" onChange={(event) => {selectOption(event)}}/>
                        <label htmlFor="female" className={selectedRadio === "female" ? "selected" : "unselected" }>Femenino</label>
                        <input defaultChecked type="radio" name="gender" id="n/a" value="n/a" onChange={(event) => {selectOption(event)}}/>
                        <label htmlFor="n/a" className={selectedRadio === "n/a" ? "selected" : "unselected" }>n/a</label>
                    </div>
                </div>
                <div className="dialog-alert">
                    {formError && <p>{formError}</p>}
                </div>
                <div className="dialog-buttons">
                    <button className="dialog-button" onClick={() => props.onClose()}>Cancelar</button>
                    <button className="dialog-button" type="submit">Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default Dialog