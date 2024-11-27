import { useState } from "react"
import { useQuery } from "react-query"
import { CardProduct } from "../../components/ui/CardProduct"
import { Hero } from "../../components/ui/Hero"
import { getProducts } from "../../service"
import styles from './Home.module.css'

const Home = () => {

    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useQuery(
        ["products", page],
        () => getProducts(page),
        { keepPreviousData: true }
    );


    return (
        <>
            <Hero />
            {isLoading && <p>Loading...</p>}
            {error && <p>There was an error</p>}
            <div className={styles.container}>
                {
                    data?.map((product) => (
                        <CardProduct key={product.tail} product={product} />
                    ))
                }
            </div>
            <div className={styles.paginationContainer}>
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className={styles.paginationButton}
                >
                    Previous
                </button>
                <div className={styles.paginationActive}>
                    <span>{page}</span>
                </div>
                <button
                    onClick={() => setPage(page + 1)}
                    className={styles.paginationButton}>
                    Next
                </button>
            </div>
        </>
    )
}

export default Home