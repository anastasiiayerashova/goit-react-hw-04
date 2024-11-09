import s from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({onSubmit}) {
    return (
        <div>
            <button type='submit' className={s.btn} onClick={onSubmit}>Load more</button>
        </div>
    )
}