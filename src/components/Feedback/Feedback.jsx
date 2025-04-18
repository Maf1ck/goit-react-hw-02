import css from './Feedback.module.css';

export default function Feedback({ total, positive, counterGood, counterNeutral, counterBad}) {
    return (
        <div className={css.feedback}>
            <p>Good: {counterGood}</p>
            <p>Neutral: {counterNeutral}</p>
            <p>Bad: {counterBad}</p>
            <p>Total: {total}</p>
            <p>Positive: {positive}%</p>
        </div>
    );
}