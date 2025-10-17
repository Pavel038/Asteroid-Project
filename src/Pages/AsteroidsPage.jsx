import AsteroidCard from "../Components/AsteroidCard.jsx";

export default function AsteroidsPage({dataAsteroid}) {
console.log(dataAsteroid);
    return (
        <>
            {dataAsteroid.map(asteroid=>asteroid.map(elem=> <AsteroidCard key = {elem.id} element={elem}/>))}

        </>
    )
}