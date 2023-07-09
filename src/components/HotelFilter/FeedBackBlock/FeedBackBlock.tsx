import { ChangeEvent, FC, useState } from 'react';
import styles from './FeedBackBlock.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hoots';
import { addFeedbackCount } from '../../../store/hotelSlice';

export const FeedBackBlock: FC = () => {

    const feedbackValue = useAppSelector(state=> state.hotelsList.filters.feedbackCount)

    const dispatch = useAppDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const regExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~a-zA-ZА-ЯёЁ]/
    }

    return (
        <>
            <div className={styles.feedbackCount}>
                <h6 className={styles.blockName}>Количество отзывов (от)</h6>
                <input type='text' className={styles.formBlock} onChange={handleChange} placeholder="Например, от 10" />
            </div>
        </>
    )
}