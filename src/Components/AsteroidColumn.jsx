import dino from '../assets/dino.svg'
import group from '../assets/Group.svg'
import group2 from '../assets/Group (1).svg'
import group3 from '../assets/Group (2).svg'
import vector from '../assets/Vector (1).svg'
import vector2 from '../assets/Vector (2).svg'
import vector3 from '../assets/Vector (3).svg'
export default function AsteroidColumn({size}) {

let proba;
    if(size>300){
        proba={vector:vector3, group:group3, classVector:'vector3', classGroup:'group3'}
    }else if(size>100){
        proba={vector:vector2, group:group2, classVector:'vector2', classGroup:'group2'}
    }else{
        proba={vector:vector, group:group, classVector:'vector', classGroup:'group'}
    }


    return (
        <>
            <div className= 'asteroid'>
                <img className = {proba.classVector} src={proba.vector} alt=""/>
                <img className={proba.classGroup} src={proba.group} alt=""/>
            </div>
            <div className="dino">
                <img src={dino} alt=""/>
            </div>
        </>
    )
}