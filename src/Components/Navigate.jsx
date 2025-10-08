import {Link} from "react-router";

export default function Navigate (){
    return (
        <>
            <ul className="nav">
                <li><Link to="asteroids">Астероиды</Link></li>
                <li style={{textDecorationLine: 'underline'}}><Link to="destruction">Уничтожение</Link></li>
            </ul>
        </>
    )
}