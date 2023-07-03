import { FC, Fragment, useState } from "react";
import styles from './HotelFilter.module.scss';

interface ICheckbox {
    name: string,
    checked: boolean,
    id?: string;
}

const enum countriesEnum {
    Azerbaijan = 'Азербайджан',
    Greece = 'Греция',
    Algeria = 'Алжир',
    Angola = 'Ангола',
    Russia = 'Россия',
    Germany = 'Германия'
}
const HotelFilter: FC = () => {

    const [countries, setCountries] = useState<ICheckbox[]>([
        { name: countriesEnum.Azerbaijan, checked: false },
        { name: countriesEnum.Greece, checked: false },
        { name: countriesEnum.Algeria, checked: false },
        { name: countriesEnum.Angola, checked: false },
        { name: countriesEnum.Russia, checked: false },
        { name: countriesEnum.Germany, checked: false }
    ])
    const [hotelType, setHotelType] = useState([
        { name: 'Аппартаменты', checked: false },
        { name: 'Отель', checked: false }
    ])

    const [countStars, setCountStars] = useState<ICheckbox[]>([
        { name: '1 звезда', checked: false },
        { name: '2 звезды', checked: false },
        { name: '3 звезды', checked: false },
        { name: '4 звезды', checked: false },
        { name: '5 звёзд', checked: false },
    ])

    const handleChangeContries = (item: ICheckbox) => {
        let newCountries = countries.map(w => {
            if (w.name === item.name) {
                return {
                    ...w, checked: !w.checked
                }
            } else {
                return w
            }
        })
        setCountries(newCountries)
    }
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
        setHotelType(newType)
    }
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
        setCountStars(newStars)
    }

    //clsx для стилей в замену ${styles.formBlock}
    return (
        <aside>
            <form>
                <div className={styles.countries}>
                    <h6 className={styles.country}>Страна</h6>
                    <input type='search' className={styles.search} placeholder="Поиск cтран" />
                    <div className={`${styles.countriesList} ${styles.formBlock}`}>
                        {countries.map((q, index) => (
                            <div key={index} className={styles.item}>
                                <input type='checkbox' name={q.name} id={q.name} checked={q.checked} data-id={q.name} onChange={() => handleChangeContries(q)} />
                                <label htmlFor={q.name}>{q.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.hotelType}>
                    <h6>Тип</h6>
                    <div className={`${styles.typeItem} ${styles.formBlock}`}>
                    {hotelType.map((q, index) => (
                        <div key={index} className={styles.item}>
                            <input type="checkbox" name={q.name} id={q.name} checked={q.checked} onChange={() => handleHotelTypeChange(q)} />
                            <label htmlFor={q.name}>{q.name}</label>
                        </div>
                    ))}
                    <div className={styles.hotelLine}></div>
                    </div>

                </div>
                <div className={styles.countStars}>
                    <h6>Количество звёзд</h6>
                    <div className={`${styles.starItem} ${styles.formBlock}`}>
                    {countStars.map((q, index) => (
                        <div key={index} className={styles.item}>
                            <input type="checkbox" name={q.name} id={q.name} checked={q.checked} onChange={() => handleChangeCountStars(q)} />
                            <label htmlFor={q.name}>{q.name}</label>
                        </div>
                    ))}
                    </div>
                </div>
                <div className={styles.feedbackCount}>
                    <h6>Количество отзывов (от)</h6>
                    <input type='text' className={styles.formBlock} placeholder="Например, от 10"/>
                </div>
                <div className={styles.price}>
                    <h6>Цена</h6>
                    <div className={styles.priceItems}>
                        <div><input type='text' placeholder="от 0 ₽"/></div> 
                        <div className={styles.priceLine}></div>
                        <div><input type="text" placeholder="до 100 500 ₽" /></div>
                    </div>
                    <div className={styles.rangeBlock}>
                        <input type="range" />
                        <input type="range" />
                    </div>

                </div>
                <div className={styles.btnsFilter}>
                    <button className={`${styles.formButton} ${styles.accept}`}>Применить фильтр</button>
                    <button className={`${styles.formButton} ${styles.reset}`}>Очистить фильтр</button>
                </div>
            </form>
        </aside>
    )
}
export default HotelFilter;