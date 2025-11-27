import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
  AsteroidApiResponse,
  AsteroidInterface,
  RawAsteroid,
} from './AsteroidInterface.ts'
import mapDataAsteroid from './mapDataAsteroid.js'

export const asteroidApi = createApi({
  reducerPath: 'asteroidApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getAllAsteroid: builder.query<AsteroidInterface[], void>({
      query: () => '/todos',
      transformResponse(resp: AsteroidApiResponse): AsteroidInterface[] {
        const rawAsteroidsByDate: { [data: string]: RawAsteroid[] } =
          resp.near_earth_objects

        if (!rawAsteroidsByDate) return []

        return mapDataAsteroid(rawAsteroidsByDate)
      },
    }),
  }),
})
export const { useGetAllAsteroidQuery } = asteroidApi
