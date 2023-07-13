import Link from 'next/link';
import styles from './navbar.module.css'
import HeroPage from './pages/heroPage/heroPage';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        <Link href="#home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav></div>

    );
};

export default Navbar;