import React, { FC } from 'react'

import styles from './index.module.scss';

interface BannerProps {
  title?: string,
  subtitle?: string
}

const Banner: FC<BannerProps> = ({ children, title, subtitle }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.container} />
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
    </div>
  )
}

export default Banner
