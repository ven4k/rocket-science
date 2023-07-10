import { ChangeEvent, FC } from 'react';
import ReactSlider from 'react-slider';
import { useAppSelector, useAppDispatch } from "../../../store/hoots";
import { addMaxPrice, addMinPrice } from '../../../store/hotelSlice';
import styles from './PriceBlock.module.scss';


export const PriceBlock: FC = () => {
    const dispatch = useAppDispatch()
    const minPrice = useAppSelector(state => state.hotelsList.filters.minPrice);
    const maxPrice = useAppSelector(state => state.hotelsList.filters.maxPrice);

    const handlePriceChange = (min: boolean, e: ChangeEvent<HTMLInputElement>) => {
        if (min) {
            if (Number(e.target.value) > 100500) {
                dispatch(addMinPrice(100500))
            } else {
                dispatch(addMinPrice(Number(e.target.value)))
            }
        } else {
            if (Number(e.target.value) > 100500) {
                dispatch(addMaxPrice(100500))
            } else {
                dispatch(addMaxPrice(Number(e.target.value)))
            }
        }
    }
    return (
        <>
            <div className={styles.price}>
                <h6 className={styles.blockName}>Цена</h6>
                <div className={styles.priceItems}>
                    <div><input className={styles.priceInput} type='text' placeholder="от 0 ₽" max={50250} value={minPrice} onChange={(e) => handlePriceChange(true, e)} /></div>
                    <div className={styles.priceLine}></div>
                    <div><input className={styles.priceInput} type="text" placeholder="до 100 500 ₽" max={100500} value={maxPrice} onChange={(e) => handlePriceChange(false, e)} /></div>
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
                            dispatch(addMinPrice(value[0]))
                            dispatch(addMaxPrice(value[1]))
                        }}
                    />
                </div>
            </div>
        </>
    )
}