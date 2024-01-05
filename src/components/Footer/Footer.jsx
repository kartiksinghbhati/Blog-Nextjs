import React from 'react'
import styles from './Footer.module.css';
import Image from 'next/image';


const Footer = () => {
  const currentDate = new Date();
  return (
    <div className={styles.container}>
      <div>©{currentDate.getFullYear()} Blog-Nextjs. All rights reserved.</div>
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
