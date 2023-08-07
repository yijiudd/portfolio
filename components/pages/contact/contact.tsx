"use client"
import { useEffect, useRef, useState } from 'react'
import styles from './contact.module.css'
import { useTranslations } from 'next-intl'
const contentAnim1 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay1} `]
const contentAnim2 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay2} `]
const contentAnim3 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay3} `]
const contentAnim4 = [`${styles.education} ${styles.novisible}`, `${styles.education} ${styles.educationAnim} ${styles.delay4} `]
const Contact = () => {
    const t = useTranslations("contactPage")
    const myRef = useRef(null)
    const [count, setCount] = useState(0)
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setCount((prevCount) => prevCount + 1)
            }
        }, { threshold: 0.3 });
        if (myRef.current) {
            observer.observe(myRef.current)

        }
        return () => {
            if (myRef.current) {
                observer.unobserve(myRef.current)
            }
        }
    }, [])
    return <div className={styles.contact} ref={myRef} >
        <div className={styles.introText}><p>{t('Want to know more about me')}?</p></div>
        <h2> {t('My Education and Work Experience')}</h2>
        <div className={styles.contentArea}>
            <div className={styles.left}>
                <div className={(count <= 1 ? contentAnim1[count] : `${styles.educationEnd}`)}>
                    <div className={styles.headArea}>
                        <div>  <img src='/education.png'></img></div>
                        <div className={styles.iconArea}>
                            <img src='/waseda.png'></img>
                            <img src='/bupt.png'></img>
                        </div>
                    </div>

                    <h3>{t('Education')}</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2023</span>
                        <text> {t('Waseda University')} </text>
                        <span className={styles.badge}>{t('Master')}</span>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2017</span>
                        <text> {t('Beijing University of Posts and Telecommunications')} </text>
                        <span className={styles.badge}>{t('Bachelor')}</span>
                    </div>
                </div>
                <div className={(count <= 1 ? contentAnim2[count] : `${styles.educationEnd}`)}>
                    <img src='/award.png'></img>
                    <h3>{t('Awards')}</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2017-2020</span>
                        <text> {t('BUPT School-Level third-class Scholarship (top 30%)')} </text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2020</span>
                        <text> {t('China College Student Internet+ Competition Beijing third Price')}</text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2019</span>
                        <text> {t('Beijing Electronic Design Competition Second Price')}</text>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={(count <= 1 ? contentAnim3[count] : `${styles.educationEnd}`)}>
                    <div className={styles.headArea}>
                        <div><img src='/tool.png'></img></div>
                        <div className={styles.iconArea}>
                            <img src='/typescript-64.png'></img>
                            <img src='/C.png'></img>
                            <img src='/react-64.png'></img>
                            <img src='/unity-64.png'></img>
                            <img src='/cocos.png'></img>
                        </div>
                    </div>
                    <h3>{t('Skills')}</h3>
                    <div className={styles.elements}>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>{t('English')}</text>
                            <text className={styles.eleRight}>80%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>{t('Coding')}(TS/C#)</text>
                            <text className={styles.eleRight}>80%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>Front-End Tech(React/Vercel/)</text>
                            <text className={styles.eleRight}>78%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "78%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>{t('Game Engine')}(COCOS/Unity)</text>
                            <text className={styles.eleRight}>75%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>{t('Computer Vision')}(ML/DL) </text>
                            <text className={styles.eleRight}>20%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "20%" }}></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={(count <= 1 ? contentAnim4[count] : `${styles.educationEnd}`)}>
                    <div className={styles.headArea}>
                        <div> <img src='/work.png'></img></div>
                        <div className={styles.iconArea}>
                            <img src='/bytedance.png'></img>
                        </div>
                    </div>
                    <h3> {t('Work Experience')}</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2021</span>
                        <text> {t('ByteDance Front-end development Enginner')} </text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2020</span>
                        <text>  {t('ByteDance Front-end development Intern')} </text>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.contactDown} id='contact'>
            <div className={styles.introText}><p>{t('Feel free to contact me')}!</p></div>
            <div className={styles.contactArea}>
                <a href='https://twitter.com/yji21567477' className={styles.contactElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1DA1F2" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg>
                    <text className={styles.contactText}>@yji21567477</text>
                </a>
                <a href='https://github.com/yijiudd' className={styles.contactElement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /> </svg>
                    <text className={styles.contactText}>github.com/yijiudd</text></a>
                <a href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=yijiubd@gmail.com&tf=1" className={styles.contactElement}>
                    <img width="32" alt="Gmail icon (2020)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/32px-Gmail_icon_%282020%29.svg.png"></img>
                    <text className={styles.contactText}>yijiubd@gmail.com</text>
                </a>
            </div>
        </div>
    </div >
}
export default Contact