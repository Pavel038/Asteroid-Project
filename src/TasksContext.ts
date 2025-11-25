import { createContext } from 'react'
import type { DistanceContextType } from './AsteroidData.js'
export const TasksContext = createContext<DistanceContextType | null>(null)
export const DistanceContext = createContext<DistanceContextType | null>(null)
