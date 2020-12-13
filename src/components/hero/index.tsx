import React, { FC } from 'react'

import styles from './index.module.scss';

interface HeroProps {
  customStyles?: string
}

const Hero: FC<HeroProps> = ({ children, customStyles = styles.hero }) => {
  return (
    <header className={customStyles}>
      {children}
    </header>
  )
}

export default Hero
