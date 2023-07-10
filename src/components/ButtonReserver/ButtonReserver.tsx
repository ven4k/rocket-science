import { FC } from 'react';
import { ReactComponent as Reserve } from '../../assets/svg/reserve.svg';
import { ReactComponent as Galochka } from '../../assets/svg/reservedIco.svg';
import styles from './ButtonReserver.module.scss';

interface IButtonReserver {
    isReserver?: boolean,
    onClick: () => void;
}
export const ButtonReserver: FC<IButtonReserver> = (props) => {
    const { isReserver, onClick } = props;
    return (

        <button className={styles.reserve} onClick={onClick}>
            <>
                {!isReserver ? (
                    <>
                        <div className={styles.btnBackground}></div>
                        <Reserve className={styles.btnIco} />
                        <span className={styles.btnText}>Забронировать</span>
                    </>
                ) : (
                    <>
                        <div className={styles.btnBackgroundReserved}></div>
                        <Galochka className={styles.btnIco} />
                        <span className={styles.reservedBtnText}>Забронировано</span>
                    </>
                )}
            </>
        </button>

    )
}