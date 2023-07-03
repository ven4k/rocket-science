import { FC, Fragment, useState } from "react"
import data from '../../hotels.json';
import styles from './Hotels.module.scss';


const Hotels: FC = () => {

    const [hotels, setHotels] = useState(data.hotels);


    return (
        <div className={styles.hotels}>
            {hotels.map((_, index) => (
                <Fragment key={index}>
                    {hotels.map((el, index) => (
                        <div className={styles.hotelItem} key={index}>
                            <div className={styles.item1}>
                                <h5>{el.name}</h5>
                                <div className={styles.info}>
                                    <div>{el.stars} stars</div>
                                    <div>{el.type}</div>
                                    <div>{el.reviews_amount}</div>
                                    <div>{el.country}</div>
                                </div>
                                <p>{el.description}</p>
                            </div>
                            <div className={styles.item2}>
                                <h4>{Math.round(el.min_price)} ₽</h4>
                                <span>Цена за 1 день</span>
                                <div><button>Забронировать</button></div>
                            </div>

                        </div>
                    ))
                    }
                </Fragment>
            ))}

        </div>
    )
}
export default Hotels