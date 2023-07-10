import { FC, MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';



interface IButton {
    className: string,
    children?: string | JSX.Element | React.ReactNode
    filter?: boolean,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

}
export const Button: FC<IButton> = (props) => {
    const { className, children, filter, onClick } = props;
    return (
        <button className={clsx([className], { [styles.formButton]: filter, [styles.hotelsButton]: !filter, })} onClick={onClick}>
            {children}
        </button>
    )
}