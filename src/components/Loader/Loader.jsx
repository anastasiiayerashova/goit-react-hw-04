import { ThreeDots } from "react-loader-spinner";
import s from './Loader.module.css';

export default function Loader() {
    return ( <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="black"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass={s.loader}
    />
    )
}