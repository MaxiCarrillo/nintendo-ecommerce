import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { toast } from 'sonner';
import styles from './CardCredit.module.css';
import useCartContext from '../../../hooks/useCartContext';
import { CartProduct } from '../../../interface';

export const CardCredit = () => {

    const { dispatch } = useCartContext();

    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focused: ''
    });

    const { number, name, expiry, cvc, focused } = cardData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardData({
            ...cardData,
            [name]: value
        });
    }

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setCardData({
            ...cardData,
            focused: e.target.name
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ([number, name, expiry, cvc].includes('')) {
            toast.error('All fields are required');
            return;
        }
        setCardData({
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: ''
        });
        toast.success('Payment successful');
        dispatch({ type: 'CLEAR_CART', payload: {} as CartProduct });
    }

    return (
        <div className={styles.container}>
            <div>
                <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focused as any}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.formControl}>
                    <label htmlFor="number">Card Number</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        onChange={handleInputChange}
                        value={number}
                        onFocus={handleInputFocus}
                    />
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="name">Card Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        value={name}
                        onFocus={handleInputFocus}
                    />
                </div>

                <div className={styles.formInputGrup}>
                    <div className={styles.formControl}>
                        <label htmlFor="expiry">Card Expiry</label>
                        <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            onChange={handleInputChange}
                            value={expiry}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="cvc">Card CV</label>
                        <input
                            type="text"
                            id="cvc"
                            name="cvc"
                            onChange={handleInputChange}
                            value={cvc}
                            onFocus={handleInputFocus}
                        />
                    </div>
                </div>

                <button className={styles.buyButton}>Buy now</button>

            </form>
        </div>
    )
}
