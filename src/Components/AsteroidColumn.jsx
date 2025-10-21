export default function AsteroidColumn({dino, vector, group}) {



    return (
        <>
            <div className= 'asteroid'>
                <img className='vector' src={vector} alt=""/>
                <img className='group' src={group} alt=""/>
            </div>
            <div className="dino">
                <img src={dino} alt=""/>
            </div>
        </>
    )
}