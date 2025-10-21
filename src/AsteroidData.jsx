import {useEffect, useState} from "react";
import AsteroidService from "./AsteroidService.js";
import {Route, Routes} from "react-router";
import AsteroidsPage from "./Pages/AsteroidsPage.jsx";
import DestructionPage from "./Pages/DestructionPage.jsx";
import App from "./App.jsx";


export default function AsteroidData(){
const [dataAsteroid, setDataAsteroid] = useState([]);
    const [destructionList, setDestructionList] = useState([]);
     useEffect(() => {
         AsteroidService.getAsteroidList().then(response => setDataAsteroid(response));
     },[])

    function onDestruction(asteroidId) {
        const allAsteroids  =  dataAsteroid.flat();
        const asteroidIndex = allAsteroids .findIndex(elem=>elem.id ===asteroidId)
        if(asteroidIndex!==-1) {
            const asteroidToMove = allAsteroids [asteroidIndex]
           const updatedAsteroids  = dataAsteroid.map(el=>el.filter(elem=>elem.id!==asteroidId));
            setDestructionList([...destructionList, asteroidToMove]);
            setDataAsteroid(updatedAsteroids )
        }
    }

    return(
        <>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route index element={<AsteroidsPage dataAsteroid={dataAsteroid} onDestruction={onDestruction} />}/>
                <Route path="destruction" element={<DestructionPage destructionList={destructionList}/>}/>
            </Route>
        </Routes>
        </>
    )
}