import { ChangeEvent, FC, useState } from "react";
import clsx from "clsx";
import ReactSlider from 'react-slider';
import { ReactComponent as Search } from '../../assets/svg/search.svg';
// import search from '../../assets/svg/search.svg';
import { ReactComponent as Exit } from '../../assets/svg/exit.svg';
// import exit from '../../assets/svg/exit.svg';
import styles from './HotelFilter.module.scss';
import { Button } from "../Button/Button";


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

    const [minPrice, setMinPrice] = useState<number>();
    const [maxPrice, setMaxPrice] = useState<number>();
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

    const handlePriceChange = (min: boolean, e: ChangeEvent<HTMLInputElement>) => {
        if (min) {
            if (Number(e.target.value) > 100500) {
                setMinPrice(100500)
            } else {
                setMinPrice(Number(e.target.value))
            }
        } else {
            if (Number(e.target.value) > 100500) {
                setMaxPrice(100500)
            } else {
                setMaxPrice(Number(e.target.value))
            }
        }
    }
    return (
        <aside>
            <form>
                <div className={styles.countries}>
                    <h6 className={styles.country}>Страна</h6>
                    <input type='search' className={styles.search} placeholder="Поиск cтран" />
                    <Search className={styles.searchIco} />
                    <div className={clsx([styles.countriesList, styles.formBlock])}>
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
                    <div className={clsx([styles.typeItem, styles.formBlock])}>
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
                    <div className={clsx([styles.starItem, styles.formBlock])}>
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
                    <input type='text' className={styles.formBlock} placeholder="Например, от 10" />
                </div>
                <div className={styles.price}>
                    <h6>Цена</h6>
                    <div className={styles.priceItems}>
                        <div><input type='text' placeholder="от 0 ₽" max={50250} value={minPrice} onChange={(e) => handlePriceChange(true, e)} /></div>
                        <div className={styles.priceLine}></div>
                        <div><input type="text" placeholder="до 100 500 ₽" max={100500} value={maxPrice} onChange={(e) => handlePriceChange(false, e)} /></div>
                    </div>
                    <div className={styles.rangeBlock}>
                        <ReactSlider
                            className={styles.horizontalSlider}
                            thumbClassName={styles.exampleThumb}
                            trackClassName={styles.exampleTrack}
                            defaultValue={[0, 100500]}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            ariaValuetext={state => `Thumb value ${state.valueNow}`}
                            pearling
                            min={0}
                            max={100500}
                            minDistance={0}
                            onChange={(value) => {
                                setMinPrice(value[0])
                                setMaxPrice(value[1])
                            }}
                        />
                    </div>
                </div>
                <div className={styles.btnsFilter}>
                    <Button filter className={styles.accept} handleClick={(e) => { e.preventDefault() }}>Применить фильтр</Button>
                    <Button filter className={styles.reset} handleClick={(e) => { e.preventDefault() }}>
                        <Exit className={styles.exitIco} />
                        Очистить фильтр
                    </Button>
                </div>
            </form>
        </aside>
    )
}
export default HotelFilter;