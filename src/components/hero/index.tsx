import React, { FC } from 'react'

import styles from './index.module.scss';

interface HeroProps {
  customStyles?: string
}

const Hero: FC<HeroProps> = ({ children, customStyles }) => {
  return (
    <header className={customStyles ? `${styles.hero} ${customStyles}` : styles.hero}>
      {children}
    </header>
  )
}

export default Hero
