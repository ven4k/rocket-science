import { Button } from "../../Button/Button"
import styles from './ButtonsBlock.module.scss';
import { ReactComponent as Exit } from '../../../assets/svg/exit.svg';
import { useAppDispatch, useAppSelector } from "../../../store/hoots";
import { filters } from "../../../store/hotelSlice";

export const ButtonsBlock = () => {
    const dispatch = useAppDispatch();
    const countries = useAppSelector(state => state.hotelsList.filters.countries)
    const hotels = useAppSelector(state => state.hotelsList.hotelData);

    
    const newData = hotels.map(el => el.country)
    console.log(newData);

    return (
        <>
            <div className={styles.btnsFilter}>
                <Button filter className={styles.accept} handleClick={(e) => { e.preventDefault()
                dispatch(filters())
                }}>Применить фильтр</Button>
                <Button filter className={styles.reset} handleClick={(e) => { e.preventDefault() }}>
                    <Exit className={styles.exitIco} />
                    Очистить фильтр
                </Button>
            </div>
        </>
    )
}