import { useSelector } from "react-redux";
import Card from "../card/card";

const CardList = () => {
    const filterText = useSelector((state) => state.people.filterText)
    const cards = useSelector((state) => state.people.value)
    return (
        <div className="card-list">
            {
                cards.map((card,index) => {
                    if(filterText == "" || card.nombre.toLowerCase().includes(filterText)){
                        return <Card key={index} data={card}></Card>
                    }
                })
            }
        </div>
    )
}

export default CardList;