import css from './Option.module.css';
import clsx from "clsx";

export default function Option({ onGood, onNeutral, onBad, total, onReset }) {
    return (
        <div className="s.container">
            <div className={clsx(css.list)}>
                <button onClick={onGood}>Good</button>
                <button onClick={onNeutral}>Neutral</button>
                <button onClick={onBad}>Bad</button>
                {total > 0 && (
                <button onClick={onReset}>Reset</button>
            )}
            </div>
        </div>
    );
}