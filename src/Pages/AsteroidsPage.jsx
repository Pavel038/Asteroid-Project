import AsteroidCard from "../Components/AsteroidCard.jsx";
import FilterAsteroid from "../Components/FilterAsteroid.jsx";

export default function AsteroidsPage({dataAsteroid}) {

    return (
        <>
            <FilterAsteroid/>
            {dataAsteroid?.map(asteroid => asteroid.map(elem => <AsteroidCard key={elem.id} element={elem}/>))}

        </>
    )
}