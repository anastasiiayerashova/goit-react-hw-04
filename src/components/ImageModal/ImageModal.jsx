import s from './ImageModal.module.css';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root')
import { BiLike } from "react-icons/bi";
import { format } from 'date-fns';

export default function ImageModal({ isOpen, onRequestClose, image }) {
   
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            cursor: 'pointer',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%) scale(1)',
            padding: '0 0 20px 0',
            backgroundColor: 'white',
            border: 'none',
            cursor: 'default',
        },
    }

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
                {image &&  
                <>  
                <img src={image.url} alt={image.alt} className={s.img} />
                <p className={s.author}>Author: {image.username}</p>
                <p className={s.author}>{format(new Date(image.date), 'dd.MM.yyyy')}</p>
                    <p className={s.text}>{image.like} <BiLike /></p>
                </>
            }
            </ReactModal>
    )
}