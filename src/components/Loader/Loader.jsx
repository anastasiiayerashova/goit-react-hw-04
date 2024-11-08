import { ThreeDots } from "react-loader-spinner";
import s from './Loader.module.css';

export default function Loader({ loading }) {
    return ( loading && (<ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4141f7"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass={s.loader}
    />)
    )
}