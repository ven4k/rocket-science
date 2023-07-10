import { FC, useState } from "react"
import clsx from "clsx";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { ICheckbox } from "../../../types/types";
import { addHotelType } from "../../../store/hotelSlice";
import styles from './TypeBlock.module.scss';

export const TypeBlock: FC = () => {

    const hotelType = useAppSelector(state => state.hotelsList.filters.hotelType);
    const dispatch = useAppDispatch();
    const [isActive, setIsActive] = useState(false);
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
                <h6 className={styles.blockName} onClick={() => setIsActive(!isActive)}>Тип &#9660;</h6>
                <div className={clsx([styles.typeItem, styles.formBlock], { [styles.disabledBlock]: !isActive, [styles.activeBlock]: isActive, })}>
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