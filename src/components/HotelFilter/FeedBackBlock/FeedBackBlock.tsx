import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addFeedbackCount } from '../../../store/hotelSlice';
import styles from './FeedBackBlock.module.scss';

export const FeedBackBlock: FC = () => {

    const feedbackValue = useAppSelector(state => state.hotelsList.filters.feedbackCount)

    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const regExp = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~a-zA-ZА-ЯёЁ]/
        const target = e.target.value.replace(regExp, '');
        dispatch(addFeedbackCount(Number(target)))
    }

    return (
        <>
            <div className={styles.feedbackCount}>
                <h6 className={styles.blockName}>Количество отзывов (от)</h6>
                <input type='text' className={styles.formBlock} value={feedbackValue} onChange={handleChange} placeholder="Например, от 10" />
            </div>
        </>
    )
}