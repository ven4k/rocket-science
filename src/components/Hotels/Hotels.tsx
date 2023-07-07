import { FC } from "react"
import { HotelItems } from "../HotelItems/HotelItems";
import styles from './Hotels.module.scss';


const Hotels: FC = () => {
    return (
        <div className={styles.hotels}>
            <HotelItems />
        </div>
    )
}
export default Hotels