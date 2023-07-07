import { FC, MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';


interface IButton {
    className: string,
    children: string | JSX.Element | React.ReactNode
    filter?: boolean,
    handleClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export const Button: FC<IButton> = ({ className, children, filter, handleClick }: IButton) => {
    return (
        <button className={clsx([className], { [styles.formButton]: filter, [styles.hotelsButton]: !filter })} onClick={(e) => handleClick && handleClick(e)}>{children}</button>
    )
}