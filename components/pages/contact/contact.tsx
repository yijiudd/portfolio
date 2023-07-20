import styles from './contact.module.css'
const Contact = () => {
    return <div className={styles.contact} id='contact'>
        <div className={styles.introText}><p>Want to know more about me?</p></div>
        <h2> My Education and Work Experience</h2>
        <div className={styles.contentArea}>
            <div className={styles.left}>
                <div className={styles.education}>
                    <img src='/education.png'></img>
                    <h3>Education</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2023</span>
                        <text> Waseda University </text>
                        <span className={styles.badge}>Master</span>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2017</span>
                        <text> Beijing University of Posts and Telecommunications </text>
                        <span className={styles.badge}>Bachelor</span>
                    </div>
                </div>
            </div>
            <div className={styles.right}></div>
        </div>
    </div>
}
export default Contact