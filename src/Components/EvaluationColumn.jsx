import {useContext} from "react";
import {TasksContext} from "../TasksContext.js";
import AsteroidCard from "./AsteroidCard.jsx";

function EvaluationColumn({showDestructionButton, asteroidId, hazardousAsteroid}){
    const{dataAsteroid, destructionList, setDestructionList}=useContext(TasksContext)
    const isInDestructionList  = destructionList.some(elem=>elem.id === asteroidId);


    function onDestruction(){

        if(!isInDestructionList ) {
            const allAsteroids = dataAsteroid.flat();
            const asteroidToMove  = allAsteroids.find(elem => elem.id === asteroidId)
            if (asteroidToMove ) {
                setDestructionList([...destructionList, asteroidToMove]);

            }
        }
        else{
            const updatedDestructionList  = destructionList.filter(element=>element.id !== asteroidId);
            setDestructionList(updatedDestructionList );
        }
    }

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <p style={{marginBottom:'8px'}}>Оценка:</p>
                <p style={{marginBottom:'8px'}}><strong>{hazardousAsteroid?'Опасно':'не опасно'}</strong></p>
            </div>
            {showDestructionButton && <button onClick={onDestruction}>{isInDestructionList ?'Не уничтожать':'На уничтожение'}</button>}

        </div>
    )
}export default EvaluationColumn;