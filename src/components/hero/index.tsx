import React, { FC } from 'react'

import styles from './index.module.scss';

interface IHeroProps {
  customStyles?: string,
  style?: React.CSSProperties
}

const Hero: FC<IHeroProps> = ({ children, customStyles, ...props }) => {
  return (
    <header className={customStyles ? `${styles.hero} ${customStyles}` : styles.hero} {...props}>
      {children}
    </header>
  )
}

export default Hero
