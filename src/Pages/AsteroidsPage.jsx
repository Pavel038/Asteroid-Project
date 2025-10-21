import AsteroidCard from "../Components/AsteroidCard.jsx";

export default function AsteroidsPage({dataAsteroid,onDestruction}) {

    return (
        <>
            {dataAsteroid.map(asteroid=>asteroid.map(elem=> <AsteroidCard key = {elem.id} element={elem} onDestruction={()=>onDestruction(elem.id)}/>))}

        </>
    )
}