"use client"
import React, { useEffect, useLayoutEffect } from 'react'
import styles from './heroPage.module.css'

const HeroPage = () => {
    const [text, setText] = React.useState('')
    useLayoutEffect(() => {
        writeLoop()

    }, [])
    const phrases = ["Front-end Engineer", "H5 Game Developer", "Graduate Student"]
    let sleepTime = 150;
    let curPhraseIndex = 0;
    const writeLoop = async () => {
        while (true) {
            let curWord = phrases[curPhraseIndex]
            for (let i = 0; i < curWord.length; i++) {
                setText(curWord.substring(0, i + 1))
                await sleep(sleepTime)
            }
            await sleep(sleepTime * 5)
            for (let i = curWord.length - 1; i >= 0; i--) {
                setText(curWord.substring(0, i))
                await sleep(sleepTime)
            }
            if (curPhraseIndex == phrases.length - 1) {
                curPhraseIndex = 0
            } else {
                curPhraseIndex++
            }
        }
    }

    return <div className={styles.home} id='home'>

        <div><h1 className={styles.text1}>Hello!</h1></div>
        <div><h2 className={styles.text2}>My name is Yi Jiu</h2></div>
        <div>
            <span className={`${styles.text} ${styles.firstText}`}>I am a</span>
            <span className={`${styles.text} ${styles.secText}`}>{text}</span>
            <span className={`${styles.text} ${styles.cursor}`}>|</span>
        </div>
    </div>
}
export default HeroPage

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}