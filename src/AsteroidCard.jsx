import CardInfo from "./CardInfo.jsx";
import AsteroidColumn from "./AsteroidColumn.jsx";
import EvaluationColumn from "./EvaluationColumn.jsx";

export default function AsteroidCard({elem}) {
    return (
        <div className={elem.danger?"asteroid__card__danger":"asteroid__card"}>
            <div className="asteroid__column">
            <AsteroidColumn dino={elem.dino} vector={elem.vector} group={elem.group} id={elem.id} />
            </div>
            <div className="info__column">
            <CardInfo name={elem.name} date={elem.date} distance={elem.distance} size={elem.size}/>
            </div>
            <div className="evaluation__column">
                <EvaluationColumn/>
            </div>
        </div>
    )
}