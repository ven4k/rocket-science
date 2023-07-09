import { FC } from "react"
import { ICheckbox } from "../HotelFilter";
import { useAppSelector, useAppDispatch } from "../../../store/hoots";
import { addHotelType } from "../../../store/hotelSlice";
import styles from './TypeBlock.module.scss';
import clsx from "clsx";

export const TypeBlock: FC = () => {

    const hotelType = useAppSelector(state => state.hotelsList.filters.hotelType);
    const dispatch = useAppDispatch();

    const handleHotelTypeChange = (item: ICheckbox) => {
        let newType = hotelType.map(w => {
            if (w.name === item.name) {
                return {
                    ...w, checked: !w.checked
                }
            } else {
                return w
            }
        })
        dispatch(addHotelType(newType))
    }
    return (
        <>
            <div className={styles.hotelType}>
                <h6 className={styles.blockName}>Тип</h6>
                <div className={clsx([styles.typeItem, styles.formBlock])}>
                    {hotelType.map((q, index) => (
                        <div key={index} className={styles.item}>
                            <input type="checkbox" className={styles.checkbox} name={q.name} id={q.name} checked={q.checked} onChange={() => handleHotelTypeChange(q)} />
                            <label className={styles.checkboxName} htmlFor={q.name}>{q.name}</label>
                        </div>
                    ))}
                    <div className={styles.hotelLine}></div>
                </div>

            </div>
        </>
    )
}