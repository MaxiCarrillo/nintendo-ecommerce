import { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        });
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userData.email.trim() === '' || userData.password === '') {
            alert('Please fill all the fields');
            return;
        }

        localStorage.setItem('userLogin', JSON.stringify(userData.email));

        navigate('/dashboard');
    }

    return (
        <div className={styles.containerLogin}>
            <h1>Login</h1>
            <form onSubmit={handleOnSubmit}>
                <div className={styles.formControlLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={userData.email}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleOnChange}
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login