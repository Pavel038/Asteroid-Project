import {useEffect, useState} from "react";
import AsteroidService from "./AsteroidService.js";
import {Route, Routes} from "react-router";
import AsteroidsPage from "./Pages/AsteroidsPage.jsx";
import DestructionPage from "./Pages/DestructionPage.jsx";
import App from "./App.jsx";
import {TasksContext} from "./TasksContext.js";


export default function AsteroidData(){
const [dataAsteroid, setDataAsteroid] = useState([]);
    const [destructionList, setDestructionList] = useState([]);
     useEffect(() => {
         AsteroidService.getAsteroidList().then(response => setDataAsteroid(response));
     },[])

    return(
        <>
            <TasksContext value={{dataAsteroid, destructionList, setDestructionList}}>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<AsteroidsPage dataAsteroid={dataAsteroid}/>}/>
                <Route path="destruction" element={<DestructionPage />}/>
            </Route>
        </Routes>
        </TasksContext>
        </>
    )
            }