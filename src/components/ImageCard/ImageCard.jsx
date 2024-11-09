import s from './ImageCard.module.css';
import { FcLike } from "react-icons/fc";

export default function ImageCard({ urls: { small, regular }, alt_description, likes }) {
    console.log(likes)
    return (
        <div className={s.itemDiv}>
            <img src={small} alt={alt_description}></img>
            <div>
                <p className={s.text}>Likes <FcLike className={s.likeIcon} /></p>
                <span>{likes}</span>
            </div>
        </div>
    )
}