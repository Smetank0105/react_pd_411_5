import './Final.css';

export function Final({totalQuestions, correctAnswers, onClickReplay})
{
    return(
        <div className='question'>
            <h2 style={{display:"flex", justifyContent:"space-between"}}><div>Всего вопросов:</div>{totalQuestions}</h2>
            <h2 style={{display:"flex", justifyContent:"space-between"}}><div>Правильных ответов:</div>{correctAnswers}</h2>
            <div className='replay'><button onClick={()=>onClickReplay()}>Пройти заново</button></div>
        </div>
    )
}