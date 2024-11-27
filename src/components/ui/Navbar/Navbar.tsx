import Logo from '../../../assets/logo.svg';
import Cart from '../../../assets/cart.svg';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { CartModal } from '../CartModal';
import useCartContext from '../../../hooks/useCartContext';
import { useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const [showCartModal, setShowCartModal] = useState(false);

    const { state: { cartItems } } = useCartContext();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigateToHome = () => {
        navigate('/');
    }

    const handleShowCartModal = () => {
        setShowCartModal(!showCartModal);
    }

    return (
        <header className={styles.navbarContainer}>
            <section className={styles.navbarDetail} onClick={handleNavigateToHome}>
                <img src={Logo} alt="Logo de Ecommerce" width={50} height={50} />
                <div>
                    <span>Nintendo</span>
                </div>
            </section>
            {location.pathname !== '/checkout' && (
                <>
                    <section className={styles.navbarCartContainer}>
                        <p className={styles.navbarTextAmount}>{cartItems.length}</p>
                        <img src={Cart} alt="Cart" onClick={handleShowCartModal} />
                    </section>
                    {showCartModal && (<CartModal handleShowCartModal={handleShowCartModal} />)}
                </>
            )}
        </header>
    )
}
