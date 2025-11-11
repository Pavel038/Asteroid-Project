import axios from 'axios'
import dino from './assets/dino.svg'
import group from './assets/Group.svg'
import vector from './assets/Vector (1).svg'

class AsteroidService {
  constructor(baseURL) {
    this.axios = axios.create({ baseURL: baseURL })
  }

  async getAsteroidList() {
    try {
      const response = await this.axios.get('/todos')
      const asteroidList = response.data.near_earth_objects
      if (!asteroidList) {
        throw new Error('Asteroid not found')
      }
      return this.mapDataAsteroid(asteroidList)
    } catch (error) {
      console.log(error)
    }
  }

  mapDataAsteroid(asteroidList) {
    const mappedAsteroids = Object.entries(asteroidList)?.map(
      ([data, asteroid]) => {
        return asteroid?.map((elem) => {
          const lunar = Math.ceil(
            elem.close_approach_data[0].miss_distance.lunar,
          )
          const { estimated_diameter_max, estimated_diameter_min } =
            elem.estimated_diameter.meters
          const asteroidSize = Math.ceil(
            (estimated_diameter_max + estimated_diameter_min) / 2,
          )
          const approachData = Math.ceil(
            elem.close_approach_data[0].miss_distance.kilometers,
          ).toLocaleString('ru-RU')

          return {
            id: elem.id,
            name: elem.name,
            data: data,
            asteroidSize,
            approachData,
            hazardousAsteroid: elem.is_potentially_hazardous_asteroid,
            dino,
            vector,
            group,
            lunar,
          }
        })
      },
    )
    return mappedAsteroids
  }
}

export default new AsteroidService('https://jsonplaceholder.typicode.com')
