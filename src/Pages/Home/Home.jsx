import Hero from '../../Components/Hero/Hero';
import styles from './Home.module.scss'
const Home = () => {
    return(
        <section className={styles.home}>
            <Hero/>
        </section>
    )
}

export default Home;