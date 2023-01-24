import { useSelector, useDispatch } from 'react-redux'
import { deletePeople } from '../../store/people-slice';

const Card = (props) => {
    const dispatch = useDispatch()
    return (
        <div className="card-container">
            <div className="card-data-container">
                <h2>{props.data.nombre}</h2>
                <p>Altura: {props.data.altura}</p>
                <p>Genero: {props.data.genero}</p>
            </div>
            <div className="card-delete-button">
                <button onClick={() => dispatch(deletePeople(props.index))}>Eliminar</button>
            </div>
        </div>
    )
}

export default Card;