

import AsteroidCard from "./AsteroidCard.jsx";
import {useContext} from "react";
import {TasksContext} from "../TasksContext.js";

export default function MainBody() {
    const {destructionList} = useContext(TasksContext)
    return (
        <div className="main__container">
            <div className="main__container__head">
                <div className="dangerous">
                    <input type="checkbox" id="dangerousOnly"/>
                    <label htmlFor="dangerousOnly">Показать только опасные</label>
                </div>
                <p>Расстояние в километрах, <u>в дистанциях до луны</u></p>
            </div>
            {destructionList.map(destruction => <AsteroidCard key={destruction.id} element={destruction} showDestructionButton={false}/>
            )}
        </div>
                )
                }