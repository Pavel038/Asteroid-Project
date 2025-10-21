export default function EvaluationColumn({onDestruction,showDestructionButton}){

    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <p style={{marginBottom:'8px'}}>Оценка:</p>
                <p style={{marginBottom:'8px'}}><strong>не опасен</strong></p>
            </div>
            {showDestructionButton && <button onClick={onDestruction}>На уничтожение</button>}

        </div>
    )
}