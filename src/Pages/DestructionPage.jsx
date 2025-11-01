import AsteroidData from "../AsteroidData.jsx";
import MainBody from "../Components/MainBody.jsx";
import Footer from "../Components/Footer.jsx";
import FilterAsteroid from "../Components/FilterAsteroid.jsx";

export default function DestructionPage() {
    return (
        <>
            <FilterAsteroid/>
            <div className="container">
                <MainBody/>
                <div className="cart__container">

                </div>

            </div>

        </>
    )
}