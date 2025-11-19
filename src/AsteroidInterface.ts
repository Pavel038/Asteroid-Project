export interface RawAsteroid {
  id: number
  name: string
  close_approach_data: {
    close_approach_date: string
    miss_distance: {
      lunar: string
      kilometers: string
    }
  }[]
  estimated_diameter: {
    meters: {
      estimated_diameter_max: number
      estimated_diameter_min: number
    }
  }
  is_potentially_hazardous_asteroid: boolean
}

export interface AsteroidApiResponse {
  near_earth_objects: {
    [data: string]: RawAsteroid[]
  }
}

export interface AsteroidInterface {
  id: number
  name: string
  data: string
  asteroidSize: number
  approachData: string
  hazardousAsteroid: boolean
  dino: string
  vector: string
  group: string
  lunar: number
}
