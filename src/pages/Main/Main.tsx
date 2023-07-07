import { FC } from "react";
import HotelFilter from "../../components/HotelFilter/HotelFilter";
import Hotels from "../../components/Hotels/Hotels";
import styles from './Main.module.scss';

const Main: FC = () => {
    return (
        <main className={styles.main}>
            <HotelFilter />
            <Hotels />
        </main>
    )
}
export default Main;