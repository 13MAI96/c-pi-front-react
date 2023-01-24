import { useSelector } from "react-redux";
import Card from "../card/card";

const CardList = () => {
    const cards = useSelector((state) => state.people.filterValue)
    return (
        <div className="card-list">
            {
                cards.map((card,index) => {
                    return <Card key={index} index={index} data={card}></Card>
                })
            }
        </div>
    )
}

export default CardList;