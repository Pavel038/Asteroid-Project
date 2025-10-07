export default function Header(){
    return(
        <>
            <header style={{borderBottom: '1px solid black', marginBottom: '26px'}}>
                <div className="header__container">
                    <div className="header__container__text_left">
                        <h1 style={{marginBottom: '8px'}} >ARMAGGEDON V</h1>
                        <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
                    </div>
                    <ul className="nav">
                        <li>Астероиды</li>
                        <li style={{textDecorationLine: 'underline'}}>Уничтожение</li>
                    </ul>
                </div>
            </header>
        </>
    )
}