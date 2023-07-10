import { filters, resetFilters } from "../../../store/hotelSlice";
import { useAppDispatch } from "../../../store/hoots";
import { Button } from "../../Button/Button"
import { ReactComponent as Exit } from '../../../assets/svg/exit.svg';
import styles from './ButtonsBlock.module.scss';


export const ButtonsBlock = () => {
    const dispatch = useAppDispatch();


    return (
        <>
            <div className={styles.btnsFilter}>
                <Button filter className={styles.accept} onClick={(e) => {
                    e.preventDefault()
                    dispatch(filters())
                }}>Применить фильтр</Button>
                <Button filter className={styles.reset} onClick={(e) => {
                    e.preventDefault()
                    dispatch(resetFilters())
                }}>
                    <Exit className={styles.exitIco} />
                    Очистить фильтр
                </Button>
            </div>
        </>
    )
}