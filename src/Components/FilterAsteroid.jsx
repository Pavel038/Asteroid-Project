import {useContext} from "react";
import {DistanceContext} from "../TasksContext.js";

export default function FilterAsteroid() {
    const {distanceUnit, setDistanceUnit} = useContext(DistanceContext);

    return (
        <>
            <div className="main__container__head">
                <div className="dangerous">
                    <input className='dangerousOnly' type="checkbox" id="dangerousOnly"/>
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