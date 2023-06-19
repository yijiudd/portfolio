import Link from 'next/link';
import styles from './navbar.module.css'
const Navbar = () => {

    return (
        <nav>
            <ul className={styles.ul}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;