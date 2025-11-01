import {useContext} from "react";
import {TasksContext} from "../TasksContext.js";


function EvaluationColumn({showDestructionButton, asteroidId, hazardousAsteroid}) {

    const {asteroidsData, destructionList, dispatch} = useContext(TasksContext)

    const isInDestructionList = destructionList.some(elem => elem.id === asteroidId);

    function onDestruction() {

        if (!isInDestructionList) {
            const allAsteroids = asteroidsData.flat();
            const asteroidToMove = allAsteroids.find(elem => elem.id === asteroidId)
            if (asteroidToMove) {
                dispatch({type: 'ADD_TO_DESTRUCTION_LIST', payload: asteroidToMove});

            }
        } else {
            const updatedDestructionList = destructionList.filter(element => element.id !== asteroidId);
            dispatch({type: 'REMOVE_FROM_DESTRUCTION_LIST', payload: updatedDestructionList});
        }
    }

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <p style={{marginBottom: '8px'}}>Оценка:</p>
                <p style={{marginBottom: '8px'}}><strong>{hazardousAsteroid ? 'Опасно' : 'не опасно'}</strong></p>
            </div>
            {showDestructionButton &&
                <button onClick={onDestruction}>{isInDestructionList ? 'Не уничтожать' : 'На уничтожение'}</button>}

        </div>
    )
}

export default EvaluationColumn;