import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import styles from './Home.module.scss'
const Home = () => {
    return(
        <section className={styles.home}>
            <Navbar/>
            <Hero/>
            <Footer/>
        </section>
    )
}

export default Home;