import React from 'react'
import styles from './Footer.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Blog-Nextjs. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt="FacebookIcon" />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt="InstagramIcon" />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt="TwitterIcon" />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt="YoutubeIcon" />
      </div>
    </div>
  )
}

export default Footer
