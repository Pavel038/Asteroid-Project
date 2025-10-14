
import {useEffect} from "react";






export default function AsteroidData(){

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/")
            .then(res => res.json())
            .then(json => console.log(json))
    }, []);

}