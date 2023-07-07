import Link from 'next/link';
import styles from './navbar.module.css'
const Navbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.name}><text>Yi Jiu </text></div>
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
            <div className={styles.home} id='home'></div>
            <div className={styles.about} id='about'></div>
            <div className={styles.contact} id='contact'></div>
        </div>

    );
};

export default Navbar;