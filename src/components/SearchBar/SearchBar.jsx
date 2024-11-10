import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import s from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.elements.query.value;

        if (form.elements.query.value.trim() === '') {
            toast.error('Please enter something...')
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