import dino from '../assets/dino.svg'
import group from '../assets/Group.svg'
import group2 from '../assets/Group (1).svg'
import group3 from '../assets/Group (2).svg'
import vector from '../assets/Vector (1).svg'
import vector2 from '../assets/Vector (2).svg'
import vector3 from '../assets/Vector (3).svg'
import React from 'react'

export default function AsteroidColumn({ size }) {
  let asteroidAssets
  switch (true) {
    case size > 300:
      asteroidAssets = {
        vector: vector3,
        group: group3,
        classVector: 'vector3',
        classGroup: 'group3',
      }
      break
    case size > 100:
      asteroidAssets = {
        vector: vector2,
        group: group2,
        classVector: 'vector2',
        classGroup: 'group2',
      }
      break
    default:
      asteroidAssets = {
        vector: vector,
        group: group,
        classVector: 'vector',
        classGroup: 'group',
      }
  }

  return (
    <>
      <div className="asteroid">
        <img
          className={asteroidAssets.classVector}
          src={asteroidAssets.vector}
          alt=""
        />
        <img
          className={asteroidAssets.classGroup}
          src={asteroidAssets.group}
          alt=""
        />
      </div>
      <div className="dino">
        <img src={dino} alt="" />
      </div>
    </>
  )
}
