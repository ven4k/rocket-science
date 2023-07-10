import { FC } from "react"
import clsx from "clsx";
import { ICheckbox } from "../HotelFilter";
import { useAppSelector, useAppDispatch } from "../../../store/hoots";
import { addCountStars } from "../../../store/hotelSlice";
import styles from './CountStarsBlock.module.scss';

export const CountStarsBlock: FC = () => {

    const countStars = useAppSelector(state => state.hotelsList.filters.countStars);
    const dispatch = useAppDispatch();
    const handleChangeCountStars = (item: ICheckbox) => {
        let newStars = countStars.map(w => {
            if (w.name === item.name) {
                return {
                    ...w, checked: !w.checked
                }
            } else {
                return w
            }
        })
        dispatch(addCountStars(newStars))
    }
    return (
        <>
            <div className={styles.countStars}>
                <h6 className={styles.blockName}>Количество звёзд</h6>
                <div className={clsx([styles.starItem, styles.formBlock])}>
                    {countStars.map((q, index) => (
                        <div key={index} className={styles.item}>
                            <input type="checkbox" className={styles.checkbox} name={q.name} id={q.name} checked={q.checked} onChange={() => handleChangeCountStars(q)} />
                            <label className={styles.checkboxName} htmlFor={q.name}>{q.name}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}