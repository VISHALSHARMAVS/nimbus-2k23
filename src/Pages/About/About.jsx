import React from 'react'
import Navbar from '../../Components/Navbar'
import styles from './About.module.css'
import config from '../../config'
import bg1 from '../About/Images/Rectangle 8.png'
import bg2 from '../About/Images/Rectangle 9.png'


export default function About() {
    return (
        <div className={styles.aboutpage}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.about}>
                    <div id={styles.heading}>
                        <h1>About Us</h1>
                        <hr id={styles.line} />
                    </div>
                    <div className={styles.aboutDetails}>
                        <p>
                            {config.about}
                         </p>
                        
                    </div>
                </div>
                <div className={styles.containerImg}>
                    <div className={styles.imgDiv}>
                        <img id={styles.img2} className={styles.img} src={bg1} alt="" />
                    </div>
                    <div className={styles.imgDiv}>
                        <img id={styles.img1} className={styles.img} src={bg2} alt="" />
                    </div>
                    <div className={styles.button}>
                        <a className={styles.prev}>❮</a>
                        <a className={styles.next}>❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}