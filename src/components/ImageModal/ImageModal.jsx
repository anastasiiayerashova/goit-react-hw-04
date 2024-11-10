import s from './ImageModal.module.css';
import ReactModal from 'react-modal';
import { FaRegHeart } from "react-icons/fa6";
ReactModal.setAppElement('#root')
import LazyLoad from 'react-lazyload';

export default function ImageModal({ isOpen, onRequestClose, image }) {
   
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
        },
    }

    return (
        <LazyLoad offset={100}> 
        <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
                {image &&  
                <>  
                <img src={image.url} alt={image.alt} className={s.img} />
                <p className={s.author}>{image.username}</p>
                    <p className={s.text}>{image.like} <FaRegHeart /></p>
                </>
            }
            </ReactModal>
             </LazyLoad>
    )
}