import { ChangeEvent, FC, useState } from "react"
import clsx from "clsx";
import { ICheckbox } from "../../../types/types";
import { ReactComponent as Search } from '../../../assets/svg/search.svg';
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { addCountries } from "../../../store/hotelSlice";
import styles from './CountriesFilter.module.scss';


export const CountriesBlock: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isActive, setIsActive] = useState(false)
    const dispatch = useAppDispatch();
    const countries = useAppSelector(state => state.hotelsList.filters.countries)

    const newCountries = countries.filter(el => el.name.includes(searchValue));
    console.log(newCountries)
    const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
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

        dispatch(addCountries(newCountries))
    }
    return (
        <>
            <div className={styles.countries} onFocus={() => setIsActive(true)}>
                <h6 className={clsx([styles.country, styles.blockName])} onClick={() => setIsActive(!isActive)}>Страна</h6>
                <input type='search' className={styles.search} onChange={handleChangeSearchInput} value={searchValue} placeholder="Поиск cтран" />
                <Search className={styles.searchIco} />
                {(isActive && newCountries.length > 0) && (
                    <div className={clsx([styles.countriesList, styles.formBlock])}>
                        {newCountries.map((q, index) => (
                            <div key={index} className={styles.item}>
                                <input type='checkbox' className={styles.checkbox} name={q.name} id={q.name} checked={q.checked} data-id={q.name} onChange={() => handleChangeContries(q)} />
                                <label className={styles.checkboxName} htmlFor={q.name}>{q.name}</label>
                            </div>
                        ))}
                    </div>
                )}
                {(isActive && newCountries.length <= 0) && (
                    <div className={clsx([styles.emptyList, styles.formBlock])}>
                        <p> К сожалению, по вашему запросу ничего не найдено :(</p>
                    </div>
                )}
            </div>
        </>
    )
}