import {useContext, useState} from "react";
import {DistanceContext, TasksContext} from "../TasksContext.js";

export default function FilterAsteroid() {
    const {distanceUnit, setDistanceUnit} = useContext(DistanceContext);
    const [isDangerousOnly, setIsDangerousOnly] = useState(false);
    const {asteroidsData, dispatch} = useContext(TasksContext);


    function handleHazardousFilterToggle() {
        const newValue = !isDangerousOnly;

        if (newValue) {
            const newElem = asteroidsData.flat().filter(elem => elem.hazardousAsteroid)
            dispatch({type: 'FILTER_HAZARDOUS_ASTEROIDS', payload: newElem})

        } else {
            dispatch({type: 'SHOW_ALL_ASTEROIDS'})
        }
        setIsDangerousOnly(newValue)

    }

    return (
        <>
            <div className="main__container__head">
                <div className="dangerous">
                    <input onChange={handleHazardousFilterToggle} className='dangerousOnly' type="checkbox"
                           id="dangerousOnly" checked={isDangerousOnly}/>
                    <label htmlFor="dangerousOnly">Показать только опасные</label>
                </div>
                <div className="distans">
                    <span style={{
                        cursor: 'pointer',
                        textDecoration: distanceUnit.isKilometers ? 'underLine' : 'none',
                    }}
                          onClick={() => setDistanceUnit({type: 'SET_KILOMETERS'})}>Расстояние в километрах,</span>
                    <span style={{
                        cursor: 'pointer',
                        textDecoration: !distanceUnit.isKilometers ? 'underLine' : 'none',
                    }}
                          onClick={() => setDistanceUnit({type: 'SET_LUNAR_ORBITS'})}>в дистанциях до луны </span>
                </div>
            </div>
        </>
    )
}