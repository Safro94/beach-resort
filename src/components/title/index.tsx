import React, { FC } from 'react'

import styles from './index.module.scss';

interface TitleProps {
  title: string
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.separator} />
    </div>
  )
}

export default Title
