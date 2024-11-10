import s from './ImageCard.module.css';

export default function ImageCard({ urls: { small, regular }, alt_description, likes, onImageClick, user: {name}, created_at }) {
    return (
        <div className={s.itemDiv}>
                <img src={small} alt={alt_description}
                onClick={() => onImageClick({ url: regular, alt: alt_description, like: likes, username: name, date: created_at })}
                className={s.image}
                    ></img>
        </div>
    )
}