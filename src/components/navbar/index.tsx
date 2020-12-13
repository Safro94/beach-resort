import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAlignRight } from 'react-icons/fa'

import { HOME, ROOMS } from '../../utils/routes';

import styles from './index.module.scss'
import logo from '../../assets/images/logo.svg'

const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleToogle = (): void => {
    setIsOpen(prevState => !prevState);
  }

  return (
    <nav className={styles.container}>
      <div className={styles.center}>
        <div className={styles.header}>
          <Link to={HOME}>
            <img src={logo} alt='Resort' />
          </Link>
          <button type='button' onClick={handleToogle} className={styles.button}>
            <FaAlignRight className={styles.icon} />
          </button>
        </div>

        <ul className={isOpen ? `${styles.links} ${styles.showNav}` : styles.links}>
          <li><Link to={HOME}>Home </Link></li>
          <li><Link to={ROOMS}>Rooms </Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
