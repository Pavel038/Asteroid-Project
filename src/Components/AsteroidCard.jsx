import CardInfo from "../CardInfo.jsx";
import AsteroidColumn from "./AsteroidColumn.jsx";
import EvaluationColumn from "./EvaluationColumn.jsx";

export default function AsteroidCard({element, onDestruction, showDestructionButton= true}) {
    console.log("AsteroidCard", showDestructionButton);

    return (
        <>
            <div className="cart__container">
                <div className="asteroid__card">
                    <div className="asteroid__column">
                        <AsteroidColumn dino={element.dino} vector={element.vector} group={element.group}/>
                    </div>
                    <div className="info__column">
                        <CardInfo name={element.name} date={element.data} distance={element.approachData} size={element.asteroidSize}/>
                    </div>
                        <div className="evaluation__column">
                            <EvaluationColumn onDestruction={onDestruction} showDestructionButton={showDestructionButton}/>
                        </div>
                </div>
            </div>
        </>
    )
}