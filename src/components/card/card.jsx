import { useDispatch } from 'react-redux';
import peopleService from '../../services/people.service';

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
                <button onClick={() => peopleService.deleteAndFilter(dispatch, props.data.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Card;