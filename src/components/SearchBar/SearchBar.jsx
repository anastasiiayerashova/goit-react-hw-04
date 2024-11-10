import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import s from './SearchBar.module.css';
import { VscError } from "react-icons/vsc";

export default function SearchBar({ onSubmit }) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.elements.query.value;

        if (query.trim() === '') {

           toast.error('Please enter something...', {
                icon: <VscError size={24} />,
                style: {
                     border: '1px solid black',
                     padding: '16px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                     cursor: 'pointer',
                     borderRadius: '10px', 
                },
                duration: 3000,
           })
            
            return
        }

        onSubmit(query)
        form.reset()
   }

    return (
        <header> 
            <form onSubmit={handleSubmit} className={s.form}>
                <div className={s.inputWrapper}>  
            <button type='submit' className={s.btn}><FiSearch className={s.icon} /></button>
            <input type='text' name='query' autoComplete='off' autoFocus placeholder='Search images and photos' className={s.input}></input>
            </div>
            </form>
            <Toaster />
            </header>
    )
}