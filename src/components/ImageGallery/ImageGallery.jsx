import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({data}) {
    return (
        <ul className={s.list}>
            {data.map((item) => {
               return (
                    <li key={item.id} className={s.item}>
                       <ImageCard {...item} />
        </li>
    )
})}
        </ul>
    )
}