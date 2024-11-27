import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'
import { useMutation } from 'react-query';
import { Product } from '../../interface';
import { createProduct } from '../../service';

const Dashboard = () => {

    const mutation = useMutation((newProduct: Product) => {
        return createProduct(newProduct);
    });

    const navigate = useNavigate()

    const [product, setProduct] = useState({
        amiiboSeries: '',
        character: '',
        gameSeries: '',
        head: '',
        image: '',
        name: '',
        releaseDate: '',
        tail: '',
        type: '',
        price: 0
    });

    useEffect(() => {
        const userLogin = localStorage.getItem('userLogin')
        if (!userLogin) {
            navigate('/login')
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('userLogin')
        navigate('/login')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate(product);
    }

    return (
        <div className={styles.container}>
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formControlLogin}>
                    <label htmlFor="amiiboSeries">Amiibo Series</label>
                    <input
                        type="text"
                        id="amiiboSeries"
                        name="amiiboSeries"
                        placeholder="Amiibo Series"
                        value={product.amiiboSeries}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="character">Character</label>
                    <input
                        type="text"
                        id="character"
                        name="character"
                        placeholder="Character"
                        value={product.character}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="gameSeries">Game Series</label>
                    <input
                        type="text"
                        id="gameSeries"
                        name="gameSeries"
                        placeholder="Game Series"
                        value={product.gameSeries}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="head">Head</label>
                    <input
                        type="text"
                        id="head"
                        name="head"
                        placeholder="Head"
                        value={product.head}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="image">Image</label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        placeholder="Image"
                        value={product.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="releaseDate">Release</label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        placeholder="releaseDate"
                        value={product.releaseDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="tail">Tail</label>
                    <input
                        type="text"
                        id="tail"
                        name="tail"
                        placeholder="Tail"
                        value={product.tail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="type">Type</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        placeholder="Type"
                        value={product.type}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.formControlLogin}>
                    <button>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Dashboard