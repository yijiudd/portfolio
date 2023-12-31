"use client"
import Link from 'next-intl/link';
import styles from './navbar.module.css'
import HeroPage from './pages/heroPage/heroPage';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import { usePathname, useRouter } from 'next-intl/client';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
const switchObject = {
    ja: 'English',
    en: 'Japanese'
}

const Navbar = () => {
    const pathname = usePathname();
    const locale = useLocale()
    const t = useTranslations('navbar')
    const jumpTo = locale === 'ja' ? 'en' : 'ja'
    const jaStyles = locale === 'ja' ? styles.heavy : ''
    const enStyles = locale !== 'ja' ? styles.heavy : ''
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    function OnLanguageClick() {
        startTransition(() => {
            router.replace(pathname, { locale: jumpTo });
        });
    }
    return (
        <div className={styles.navbar}>
            <nav>
                <ul className={styles.ul}>
                    <li>
                        <Link href="#home">
                            {t('Home')}
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            {t('About')}
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            {t('Contact')}
                        </Link>
                    </li>
                    <li>
                        <a href="resume.pdf" target='_blank'> {t('Resume')}</a>
                    </li>
                    <li>
                        {/* <Link href="/" locale={jumpTo}><text className={jaStyles}>{t('Jp')}</text>/<text className={enStyles}>{t('En')}</text></Link> */}
                        <div onClick={OnLanguageClick}><text className={jaStyles}>{t('Jp')}</text>/<text className={enStyles}>{t('En')}</text></div>
                    </li>


                </ul>
            </nav></div>

    );
};

export default Navbar;