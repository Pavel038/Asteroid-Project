
import {useEffect} from "react";






export default function AsteroidData(){

    useEffect(() => {

        fetch("https://api.nasa.gov/neo/rest/v1/feed")
            .then(res => res.json())
            .then(json => console.log(json))
    }, []);

}