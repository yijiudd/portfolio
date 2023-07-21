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
                <div className={styles.education}>
                    <img src='/award.png'></img>
                    <h3>Awards</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2017-2020</span>
                        <text> BUPT School-Level third-class Scholarship (top 30%) </text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2020</span>
                        <text> China College Student Internet+ Competition Beijing third Price</text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2019</span>
                        <text> Beijing Electronic Design Competition Second Price</text>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.education}>
                    <img src='/tool.png'></img>
                    <h3>Skills</h3>
                    <div className={styles.elements}>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>English(TOEIC/TOEFL)</text>
                            <text className={styles.eleRight}>80%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>Coding(TS/C#)</text>
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
                            <text className={styles.eleLeft}>Game Engine(COCOS/Unity)</text>
                            <text className={styles.eleRight}>75%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className={styles.element}>
                            <text className={styles.eleLeft}>Computer Vision(ML/DL) </text>
                            <text className={styles.eleRight}>20%</text>
                            <div className={styles.progressBar}>
                                <div className={styles.progress} style={{ width: "20%" }}></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.education}>
                    <img src='/work.png'></img>
                    <h3>Work Experience</h3>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2021</span>
                        <text> ByteDance Front-end development Enginner </text>
                    </div>
                    <div className={styles.desc}>
                        <span className={styles.badge}>2020</span>
                        <text> ByteDance Front-end development Intern</text>
                    </div>
                </div>
            </div>
        </div>
    </div >
}
export default Contact