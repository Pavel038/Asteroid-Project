


export default function CardInfo({name, date, distance, size}) {




    return (
        <>
            <div className="card_info">
                <p className="year" style={{textDecorationLine: 'underline', marginBottom: '16px'}}>{name}
                </p>
                <div className="date">
                    <p>Дата</p>
                    <div className="line"></div>
                    <p>{date}</p>
                </div>
                <div className="date">
                    <p>Расстояние</p>
                    <div className="line"></div>
                    <p>{distance} км</p>
                </div>
                <div className="date">
                    <p>Размер</p>
                    <div className="line"></div>
                    <p>{size} м</p>
                </div>
            </div>
        </>
    )
}