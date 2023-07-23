"use client"
import Link from 'next-intl/link';
import styles from './navbar.module.css'
import HeroPage from './pages/heroPage/heroPage';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import { usePathname, useRouter } from 'next-intl/client';
import { useLocale } from 'next-intl';
const switchObject = {
    ja: 'English',
    en: 'Japanese'
}

const Navbar = () => {
    const pathname = usePathname();
    const locale = useLocale()
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
                    <li>
                        {locale === 'ja' ? <Link href="/" locale="en"><text className={styles.japan}>Jp</text>/<text>En</text></Link> : <Link href="/" locale="ja"><text >Jp</text>/<text className={styles.eng}>En</text></Link>}
                    </li>


                </ul>
            </nav></div>

    );
};

export default Navbar;