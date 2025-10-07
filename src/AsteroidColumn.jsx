export default function AsteroidColumn({dino, vector, group, id}) {



    return (
        <>
            <div className={`asteroid`}>
                <img className={`vector${id}`} src={vector} alt=""/>
                <img className={`group${id}`} src={group} alt=""/>
            </div>
            <div className="dino">
                <img src={dino} alt=""/>
            </div>
        </>
    )
}