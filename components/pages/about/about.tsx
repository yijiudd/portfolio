import Image from 'next/image'
import styles from '../about/about.module.css'
const About = () => {
    return <div className={styles.about} id='about'>
        <div className={styles.contentArea} >
            <div className={styles.introText}><p>Let me introduce myself:</p></div>
            <h3 className={styles.helloText} >Hi! I am Yi Jiu</h3>
            <p className={styles.intro}> I worked at ByteDance as a Front-end Engineer developing H5 games before,but now I am a CS graducate student in Waseda University. I am doing research on computer vision.I dream about working in game industry in Japan one day. </p>
            <div className={styles.Area}>
                <div className={styles.name}>
                    <text>Name:</text>
                    <text>Yi Jiu</text>
                </div>
                <div className={styles.name}>
                    <text>Personality:</text>
                    <text>INFP</text>
                </div>
                <div className={styles.name}>
                    <text>BrithDay:</text>
                    <text>1999/9/19</text>
                </div>
                <div className={styles.name}>
                    <text>Hobbies:</text>
                    <text>BasketBall、Movie、Anime VideoGames</text>
                </div>
            </div>
        </div>
        <div className={styles.imageArea}>
            <Image src='/person.jpeg' alt='Personal Picture' width={400} height={844}></Image>
        </div>
    </div>
}
export default About