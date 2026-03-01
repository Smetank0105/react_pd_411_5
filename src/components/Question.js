import './Question.css';
import { ProgressBar } from './ProgressBar';

export function Question({question, onClickVairant, step, totalQuestions})
{
    const percentage = Math.round(step/totalQuestions*100);
    return(
        <div className='question'>
            <ProgressBar percentage={percentage} />
            <h3>{question.title}</h3>
            <ul>
                {
                    question.variants.map
                    (
                        (text, index) => 
                            <li key={index} onClick={(e)=>onClickVairant(e, index)} >
                                {text}
                            </li>
                    )
                }
            </ul>
        </div>
    )
}