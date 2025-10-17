import {NavLink} from "react-router";

export default function Navigate (){
    return (
        <nav>
            <ul className='nav'>
            <NavLink to="/" end >
                {({isActive})=>(
                <li className={isActive?"nav-link-active":""}>Астероид</li>
                )}
            </NavLink>
                <NavLink to="/destruction"  >
                    {({isActive})=>(
                        <li className={isActive?"nav-link-active":""}>Разрушить</li>
                    )}
                </NavLink>
            </ul>
        </nav>
    )
}