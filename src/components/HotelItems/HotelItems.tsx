import { FC, Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import { Button } from "../Button/Button";
import data from '../../hotels.json';
import { ReactComponent as ActiveStar } from '../../assets/svg/activeStar.svg';
import { ReactComponent as NonActiveStar } from '../../assets/svg/star.svg';
import { ReactComponent as Geoposition } from '../../assets/svg/geoposition.svg';
import { ReactComponent as Reserve } from '../../assets/svg/reserve.svg';
import styles from './HotelItems.module.scss';


export const HotelItems: FC = () => {
    const [hotels] = useState(data.hotels);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = hotels.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(hotels.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (e: any) => {
        const newOffset = (e.selected * itemsPerPage) % hotels.length;
        setItemOffset(newOffset);
    };

    const renderItems = currentItems.map((el, index) => {
        const countActiveStars = new Array(Math.floor(el.stars)).fill('');
        let countNonActiveStars: string[] = [];
        if (countActiveStars.length < 5) {
            countNonActiveStars = new Array(5 - countActiveStars.length).fill('');
        }
        const formatPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, }).format(el.min_price);
        return (
            <Fragment key={index}>
                <div className={styles.hotelItem} key={index}>
                    <div className={styles.item1}>
                        <h5 className={styles.name}>{el.name}</h5>
                        <div className={styles.info}>
                            <div className={styles.starsBlock}>
                                {countActiveStars.map((_, index) => (
                                    <Fragment key={index}>
                                        {<ActiveStar className={styles.activeStar} />}
                                    </Fragment>
                                ))}
                                {countNonActiveStars.map((_, index) => (
                                    <Fragment key={index}>
                                        {<NonActiveStar className={styles.activeStar} />}
                                    </Fragment>
                                ))}
                            </div>
                            <div className={styles.hotelType}>{el.type}</div>
                            <div className={styles.dot}></div>
                            <div className={styles.reviews}>{el.reviews_amount} отзывов</div>
                            <div className={styles.country}>
                                <Geoposition className={styles.geopositionIco} />
                                {el.country}
                            </div>
                        </div>
                        <p className={styles.decription}>{el.description}</p>
                    </div>
                    <div className={styles.item2}>
                        <h4 className={styles.price}>{formatPrice}</h4>
                        <span className={styles.priceOneDay}>Цена за 1 день</span>
                        <Button className={styles.reserve}>
                            <div className={styles.btnBackground}></div>
                            <Reserve className={styles.reserveIco} />
                            <span>Забронировать</span>
                        </Button>
                    </div>

                </div>
            </Fragment>
        )
    });

    return (
        <>
            {renderItems}
            <ReactPaginate
                className={styles.paginatePage}
                breakLabel="..."
                nextLabel="Следующая >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< Назад"
                renderOnZeroPageCount={null}
                pageClassName={styles.page}
                previousClassName={styles.prevBtn}
                nextClassName={styles.nextBtn}
                pageLinkClassName={styles.link}
                activeLinkClassName={styles.activeLink}
                disabledLinkClassName={styles.disabledLink}

            />
        </>
    )

}