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
        { name: 'Отель', checked: false },
        { name: 'Аппартаменты', checked: false }
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

    return (
        <aside>
            <form>
                <div className={styles.countries}>
                    <input type='search' />
                    <div className={styles.countriesList}>
                        <h6>Страна</h6>
                        {countries.map((q, index) => (
                            <Fragment key={index}>
                                <input type='checkbox' name={q.name} id={q.name} checked={q.checked} data-id={q.name} onChange={() => handleChangeContries(q)} />
                                <label htmlFor={q.name}>{q.name}</label>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className={styles.hotelType}>
                    <h6>Тип</h6>
                    {hotelType.map((q, index) => (
                        <Fragment key={index}>
                            <input type="checkbox" name={q.name} id={q.name} checked={q.checked} onChange={() => handleHotelTypeChange(q)} />
                            <label htmlFor={q.name}>{q.name}</label>
                        </Fragment>
                    ))}

                </div>
                <div className={styles.countStars}>
                    {countStars.map((q, index) => (
                        <Fragment key={index}>
                            <input type="checkbox" name={q.name} id={q.name} checked={q.checked} onChange={() => handleChangeCountStars(q)} />
                            <label htmlFor={q.name}>{q.name}</label>
                        </Fragment>
                    ))}
                </div>
                <div className={styles.feedbackCount}>
                    <input type='text' />
                </div>
                <div className={styles.price}>
                    <div>
                        <input type='text' placeholder="От"/>
                        <input type="text" placeholder="До"/>
                    </div>
                    <div>
                        <input type="range" />
                        <input type="range" />
                    </div>

                </div>
                <div className={styles.btnsFilter}>
                    <button>Применить фильтр</button>
                    <button>Очистить фильтр</button>
                </div>
            </form>
        </aside>
    )
}
export default HotelFilter;