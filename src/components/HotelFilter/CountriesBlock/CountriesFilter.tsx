import { ChangeEvent, FC, useState } from "react"
import clsx from "clsx";
import { ReactComponent as Search } from '../../../assets/svg/search.svg';
import styles from './CountriesFilter.module.scss';
import { ICheckbox } from "../HotelFilter";
import { useAppSelector, useAppDispatch } from "../../../store/hoots";
import { addCountries } from "../../../store/hotelSlice";


export const CountriesBlock: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const dispatch = useAppDispatch();
    const countries = useAppSelector(state => state.hotelsList.filters.countries)
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
            <div className={styles.countries}>
                <h6 className={clsx([styles.country, styles.blockName])}>Страна</h6>
                <input type='search' className={styles.search} onChange={handleChangeSearchInput} value={searchValue} placeholder="Поиск cтран" />
                <Search className={styles.searchIco} />
                <div className={clsx([styles.countriesList, styles.formBlock])}>
                    {countries.map((q, index) => (
                        <div key={index} className={styles.item}>
                            <input type='checkbox' className={styles.checkbox} name={q.name} id={q.name} checked={q.checked} data-id={q.name} onChange={() => handleChangeContries(q)} />
                            <label className={styles.checkboxName} htmlFor={q.name}>{q.name}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}