import axios from 'axios';
import dino from "./assets/dino.svg"
import group from "./assets/Group.svg"
import vector from "./assets/Vector (1).svg"

class AsteroidService {
    constructor(baseURL) {
        this.axios = axios.create({baseURL: baseURL});
    }

    mapDataAsteroid(asteroidList) {
        const mappedAsteroids = Object.entries(asteroidList)?.map(([data, asteroid]) => {
            return asteroid.map(elem => {
                const {estimated_diameter_max, estimated_diameter_min}= elem.estimated_diameter.meters
                const  asteroidSize=  Math.ceil((estimated_diameter_max + estimated_diameter_min) / 2) + ' м'
                const approachData = Math.ceil(elem.close_approach_data[0].miss_distance.kilometers).toLocaleString('ru-RU') + ' км'


                console.log(approachData)
                return {
                    id: elem.id,
                    name: elem.name,
                    data: data,
                    asteroidSize,
                    approachData,
                    hazardousAsteroid:elem.is_potentially_hazardous_asteroid,
                    dino,
                    vector,
                    group,

                }
            })
        })
        console.log(mappedAsteroids);
        return mappedAsteroids;
    }

    async getAsteroidList(){
        try {
            const response = await this.axios.get('/todos')
            const asteroidList = response.data.near_earth_objects
            console.log(asteroidList)
            if (!asteroidList) {
                throw new Error('Asteroid not found')
            }
            return this.mapDataAsteroid(asteroidList)
        }
        catch(error) {console.log(error)}
    }
}
export default new AsteroidService('https://jsonplaceholder.typicode.com');