import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
// @ts-ignore
import dino from './assets/dino.svg'
// @ts-ignore
import group from './assets/Group.svg'
// @ts-ignore
import vector from './assets/Vector (1).svg'
import type {
  AsteroidInterface,
  AsteroidApiResponse,
  RawAsteroid,
} from './AsteroidInterface.ts'
class AsteroidService {
  private axios: AxiosInstance
  constructor(baseURL: string) {
    this.axios = axios.create({ baseURL: baseURL })
  }

  async getAsteroidList(): Promise<AsteroidInterface[][]> {
    try {
      const response: AxiosResponse<AsteroidApiResponse> =
        await this.axios.get('/todos')

      const asteroidList: { [data: string]: RawAsteroid[] } =
        response.data.near_earth_objects

      if (!asteroidList) {
        throw new Error('Asteroid not found')
      }
      return this.mapDataAsteroid(asteroidList)
    } catch (error) {
      console.log(error)
      return []
    }
  }

  private mapDataAsteroid(asteroidList: {
    [data: string]: RawAsteroid[]
  }): AsteroidInterface[][] {
    return Object.entries(asteroidList)?.map(
      ([data, asteroid]: [string, RawAsteroid[]]): AsteroidInterface[] => {
        return asteroid?.map((elem: RawAsteroid): AsteroidInterface => {
          const lunar: number = Math.ceil(
            Number(elem.close_approach_data[0]?.miss_distance.lunar),
          )

          const { estimated_diameter_max, estimated_diameter_min } =
            elem.estimated_diameter.meters
          const asteroidSize: number = Math.ceil(
            (estimated_diameter_max + estimated_diameter_min) / 2,
          )
          const approachData: string = Math.ceil(
            Number(elem.close_approach_data[0]?.miss_distance.kilometers),
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
  }
}

export default new AsteroidService('https://jsonplaceholder.typicode.com')
