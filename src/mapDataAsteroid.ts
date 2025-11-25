import axios, { type AxiosInstance, type AxiosResponse } from 'axios'
import dino from './assets/dino.svg'
import group from './assets/Group.svg'
import vector from './assets/Vector (1).svg'
import type {
  AsteroidInterface,
  AsteroidApiResponse,
  RawAsteroid,
} from './AsteroidInterface.ts'

export default function mapDataAsteroid(asteroidList: {
  [data: string]: RawAsteroid[]
}): AsteroidInterface[][] {
  return Object.entries(asteroidList)?.map(
    ([data, asteroid]: [string, RawAsteroid[]]): AsteroidInterface[] => {
      return asteroid?.map((elem: RawAsteroid): AsteroidInterface => {
        const lunar: number = Math.ceil(
          Number(elem.close_approach_data[0]?.miss_distance.lunar),
        )
        console.log('sadasd')
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
