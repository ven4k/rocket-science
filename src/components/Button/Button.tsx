import { FC, MouseEvent, useState } from 'react';
import clsx from 'clsx';
import { ReactComponent as Reserve } from '../../assets/svg/reserve.svg';
import {ReactComponent as Galochka } from '../../assets/svg/reservedIco.svg';
import styles from './Button.module.scss';



interface IButton {
    className: string,
    children?: string | JSX.Element | React.ReactNode
    filter?: boolean,
    handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    reservedBtn?: boolean
}
export const Button: FC<IButton> = ({ className, children, filter, handleClick, reservedBtn }: IButton) => {
    const [reserved, setReserved] = useState(false)
    const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (reservedBtn) {
            setReserved(!reserved)
            console.log('123')
        }
        if(reserved) {
            console.log('qwe')
        }
        if (handleClick) {
            handleClick(e)
            console.log('321')
        }
    }
    return (
        <button className={clsx([className], { [styles.formButton]: filter, [styles.hotelsButton]: !filter, [styles.reserve] : reservedBtn })} onClick={handleBtnClick}>{children ? children
            : (
                <>
                    {!reserved ? (
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
            )
        }</button>
    )
}