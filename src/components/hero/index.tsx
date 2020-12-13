import React, { FC } from 'react'

import styles from './index.module.scss';

interface IHeroProps {
  customStyles?: string
}

const Hero: FC<IHeroProps> = ({ children, customStyles }) => {
  return (
    <header className={customStyles ? `${styles.hero} ${customStyles}` : styles.hero}>
      {children}
    </header>
  )
}

export default Hero
