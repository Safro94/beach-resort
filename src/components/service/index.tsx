import React, { FC } from 'react'

import { IService } from '../../containers/services';

import styles from './index.module.scss';

interface IServiceProps {
  service: IService
}

const Service: FC<IServiceProps> = ({ service: { icon, title, info } }) => {
  return (
    <article>
      <span className={styles.icon}>{icon}</span>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.info}>{info}</p>
    </article>
  )
}

export default Service
