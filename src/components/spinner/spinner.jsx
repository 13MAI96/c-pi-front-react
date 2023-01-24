import { useSelector } from "react-redux";

const Spinner = () => {
    const show = useSelector((state) => state.people.spinnerState)
    return (
        <>
        { show && 
        <div className="spinner-container">  
            <div className="spinner-container-box">  
                <i className="spinner-container-spinner --7"></i>   
            </div>  
        </div>
        }  
        </>
    )
}

export default Spinner;