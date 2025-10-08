import AsteroidCard from "./AsteroidCard.jsx";
import Vector1 from "../assets/Vector (1).svg";
import Vector2 from "../assets/Vector (2).svg";
import Vector3 from "../assets/Vector (3).svg";
import Group from "../assets/Group.svg";
import Group1 from "../assets/Group (1).svg";
import Group2 from "../assets/Group (2).svg";
import dino from "../assets/dino.svg";



export default function AsteroidData(){
    const info = [
        {
            id:1,
            name: '2021 FQ',
            date: '12 сентября 2021',
            distance: '7 235 024 км',
            size: '85 м',
            vector:Vector1,
            group: Group,
            dino:dino,
            danger:false
        },
        {
            id:2,
            name: '2021 ER',
            date: '2 ноября 2021',
            distance: '9 331 775 км',
            size: '300 м',
            vector:Vector2,
            group: Group1,
            dino:dino,
            danger:false
        },
        {
            id:3,
            name: '2022 QQ',
            date: '3 марта 2022',
            distance: '2 866 012 км',
            size: '850 м',
            vector:Vector3,
            group: Group2,
            dino:dino,
            danger:true
        }

    ]

    return (
        <>
        {info.map((elem,index)=>(
            <AsteroidCard key ={index} elem={elem}/>
            ))}
        </>
    )
}