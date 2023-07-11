import {FC} from "react";
import { CountriesBlock } from "./CountriesBlock/CountriesFilter";
import { TypeBlock } from "./TypeBlock/TypeBlock";
import { CountStarsBlock } from "./CountStarsBlock/CountStarsBlock";
import { FeedBackBlock } from "./FeedBackBlock/FeedBackBlock";
import { PriceBlock } from "./PriceBlock/PriceBlock";
import { ButtonsBlock } from "./ButtonsBlock/ButtonsBlock";
import styles from './HotelFilter.module.scss';



const HotelFilter: FC = () => {
    return (
        <aside className={styles.aside}>
            <form>
                <CountriesBlock />
                <TypeBlock />
                <CountStarsBlock />
                <FeedBackBlock />
                <PriceBlock />
                <ButtonsBlock />
            </form>
        </aside>
    )
}
export default HotelFilter;