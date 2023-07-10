import { FC, Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import { ReactComponent as ActiveStar } from '../../../assets/svg/activeStar.svg';
import { ReactComponent as NonActiveStar } from '../../../assets/svg/star.svg';
import { ReactComponent as Geoposition } from '../../../assets/svg/geoposition.svg';
import styles from './HotelItems.module.scss';
import { useAppDispatch, useAppSelector } from "../../../store/hoots";
import { reserveHotel, unreserveHotel } from "../../../store/hotelSlice";
import { ButtonReserver } from "../../ButtonReserver/ButtonReserver";


export const HotelItems: FC = () => {
    const hotels = useAppSelector(state => state.hotelsList.hotelData)
    const dispatch = useAppDispatch();
    const hotelsReserved = useAppSelector(state => state.hotelsList.reservedHotels)
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = hotels.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(hotels.length / itemsPerPage);


    const renderItems = currentItems.map((el) => {
        const countActiveStars = new Array(Math.floor(el.stars)).fill('');
        let countNonActiveStars: string[] = [];
        if (countActiveStars.length < 5) {
            countNonActiveStars = new Array(5 - countActiveStars.length).fill('');
        }
        const formatPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0, }).format(el.min_price);

        const isReserved = hotelsReserved.includes(el);

        const handleClickReserve = () => {
            if (isReserved) {
                dispatch(unreserveHotel({ hotel: el }));
            } else {
                dispatch(reserveHotel({ hotel: el }));
            }
        }

        return (
            <Fragment key={el.name}>
                <div className={styles.hotelItem} >
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
                        <ButtonReserver isReserver={isReserved} onClick={handleClickReserve} />
                    </div>

                </div>
            </Fragment>
        )
    });

    return (
        <div>
            {renderItems}
            <ReactPaginate
                className={styles.paginatePage}
                breakLabel="..."
                nextLabel="Следующая >"
                onPageChange={(e) => {
                    const newOffset = (e.selected * itemsPerPage) % hotels.length;
                    setItemOffset(newOffset);
                    setCurrentPage(e.selected);
                }}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< Назад"
                pageClassName={styles.page}
                previousClassName={styles.prevBtn}
                nextClassName={styles.nextBtn}
                pageLinkClassName={styles.link}
                activeLinkClassName={styles.activeLink}
                disabledLinkClassName={styles.disabledLink}
                renderOnZeroPageCount={null}
                forcePage={currentPage}
            />
        </div>
    )

}