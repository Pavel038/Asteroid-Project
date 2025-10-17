import axios from 'axios';
class AsteroidService {
    constructor(baseURL) {
        this.axios = axios.create({baseURL: baseURL});
    }

    async render() {
        try {
            const response = await this.axios.get('/todos')
            const asteroidList = response.data.near_earth_objects
            if (!asteroidList) {
                throw new Error('Asteroid not found')
            }
            return this.mapDataAsteroid(asteroidList)
        }
        catch(error) {console.log(error)}
        }

    mapDataAsteroid(asteroidList) {
        const mappedAsteroids = Object.entries(asteroidList).map(([data, asteroid]) => {
            return asteroid.map(elem => ({
                id: elem.id,
                name: elem.name,
                data: data
            }))
        })
        return mappedAsteroids;
    }

    getAsteroidList(){
       return this.render()
    }
}
export default new AsteroidService('https://jsonplaceholder.typicode.com').getAsteroidList();